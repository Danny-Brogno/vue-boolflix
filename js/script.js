
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
      
    },
    mounted() {
      axios.get('')
      .then(data => {

      })
      .catch(() => console.log("I AM ERRROR"));

    } // END MOUNTED

  }) // END NEW VUE

} // END FUNCTION vueInit


// -----------------------------------------------------------------------------

// Attraverso una chiamata ajax all'API di boolean
// https://flynn.boolean.careers/exercises/api/array/music
// avremo a disposizione una decina di dischi musicali.
// Utilizzando vue, stampiamo a schermo una card per ogni album.
// BONUS: Creare una select con tutti i generi dei dischi. In base a cosa scegliamo nella select, vedremo i corrispondenti cd.
// BONUS 2: Ordinare i dischi per anno di uscita.


// -----------------------------------------------------------------------------
function init() {

  vueInit();
} // END FUNCTION INIT

document.addEventListener('DOMContentLoaded', init);
