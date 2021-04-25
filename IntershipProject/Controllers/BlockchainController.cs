using Microsoft.AspNetCore.Mvc;
using IntershipProject.Domain;


namespace IntershipProject.Controllers
{
    public class BlockchainController : Controller
    {
        private readonly AppDbContext _dbContext;

        public BlockchainController(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}
