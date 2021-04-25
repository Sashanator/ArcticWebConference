import Web3 from './web3.min';
import Logging from '../abis/Logging.json';

class Main extends React.Component {
  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
}

async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
}

async loadBlockchainData() {
    const web3 = window.web3;
    // Load account
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    const networkId = await web3.eth.net.getId();
    const networkData = Logging.networks[networkId];
    if (networkData) {
      const logging = new web3.eth.Contract(Logging.abi, networkData.address);
      this.setState({ logging });
      const logCount = await logging.methods.logCount().call();
      this.setState({ logCount });
      // Load logs
      for (var i = 1; i <= logCount; i++) {
        const log = await logging.methods.logs(i).call();
        console.log(log);
        this.setState({
          logs: [...this.state.logs, log]
        });
        console.log(this.state.logs);
      }
      this.setState({ loading: false });
    } else {
      window.alert('Logging contract not deployed to detected network.');
    }
}

constructor(props) {
    super(props);
    this.state = {
      account: '',
      logCount: 0,
      logs: [],
      loading: true
    };
}

    render() {
      return (
        <div id="content">
          <h2>Logs</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Username</th>
                <th scope="col">Timestamp</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody id="productList">
              { this.state.logs.map((log, key) => {
                  return(
                      <tr key={key}>
                          <th scope="row">{log.id.toString()}</th>
                          <td>{log.username}</td>
                          <td>{new Date(log.timestamp * 1000).toGMTString()}</td>
                      </tr>
                  )
              })}
            </tbody>
          </table>
        </div>
      );
    }
  }
  
  export default Main;   