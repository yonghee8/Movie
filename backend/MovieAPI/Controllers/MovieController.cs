using Microsoft.AspNetCore.Mvc;
using MovieAPI.Data;

namespace MovieAPI.Controllers
{
    [ApiController]
    [Route("[Controller]")]
    public class MovieController : Controller
    {
        private MovieDbContext context;
        public MovieController(MovieDbContext temp) {
            context = temp; 
        }
      

        public IEnumerable<Movie> Get()
        {
            var editedMovies = context.Movies
                .Where(m => m.Edited == "Yes")
                .OrderBy(m => m.Title)
                .ToArray();

            return editedMovies;
        }


    }
}
