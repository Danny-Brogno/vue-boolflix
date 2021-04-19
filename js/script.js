
function numberGenerator(min, max) {

  let localMin = min;
  let localMax = max - min + 1;
  return Math.floor(Math.random() * (localMax - localMin)) + localMin;
} // END OF FUNCTION numberGenerator

// -----------------------------------------------------------------------------

function vueInit() {

  new Vue({
    el: "#vueDanny",
    data: {
      "movieListInput": "",
      movies: []
    },
    methods: {

      apiFun: function() {
        axios.get('https://api.themoviedb.org/3/search/movie', {
          params: {
            "api_key": "5417e301ed04120dd8453bb02047022f",
            "query": this.movieListInput
          }
        })
      }
      .then(data => {
        const film = data.data.results;
        console.log(film);
      })
      .catch(() => console.log("I AM ERRROR"));

    } // END METHODS

  }) // END NEW VUE

} // END FUNCTION vueInit


// -----------------------------------------------------------------------------
function init() {

  vueInit();

} // END FUNCTION INIT

document.addEventListener('DOMContentLoaded', init);
