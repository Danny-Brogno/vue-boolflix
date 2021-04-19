
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
      "filmList": []
    },
    methods: {

      apiFun: function() {
        axios.get('https://api.themoviedb.org/3/search/movie',{
          params: {
            "api_key": "5417e301ed04120dd8453bb02047022f",
            "query": this.movieListInput
          }
        })
        .then(data => {
          this.filmList = data.data.results;
          console.log(this.filmList);
        })
        .catch(() => console.log("I AM ERRROR"));

      } // END apiFun

    } // END METHODS

  }) // END NEW VUE

} // END FUNCTION vueInit


// -----------------------------------------------------------------------------
function init() {

  vueInit();

} // END FUNCTION INIT

document.addEventListener('DOMContentLoaded', init);
