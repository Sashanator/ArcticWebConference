import Web3 from './web3.min';
import Logging from '../abis/Logging.json';

class App extends React.Component {

    async componentWillMount() {
        await this.loadWeb3();
        await this.loadBlockchainData();
    }

    async componentDidMount() {
        const url = "https://localhost:44391/api";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ info: data });

        console.log(this.state.info);
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
    
        this.createLog = this.createLog.bind(this);
    }
    
    createLog(username, timestamp) {
        this.setState({ loading: true });
        this.state.logging.methods.createLog(username, timestamp).send({ from: this.state.account })
        .once('receipt', (receipt) => {
          this.setState({ loading: false });
        })
    }
    
    render() {
        return (
          <div>
            <button class="btn btn-dark" onClick={(event) => {
              this.createLog(this.state.info[0].username, this.state.info[0].timestamp)
            }}>
              Enter with my MetaMask wallet
            </button>
          </div>
        );
    }
}

export default App;