
import {
    createStandingsTable,
    dropdownyearList
} from "./standingsdomfunctions.js"
import {
    getStandings
} from "./datafunctions.js"
const initApp = () => {
    
    dropdownyearList();
    let selectedYear = new Date().getFullYear();
    //console.log(selectedYear)
   const yearButton = document.getElementById("year-dropdown2");
    yearButton.addEventListener("change", async function() {
        const selectedOption = this.value;
        selectedYear = selectedOption;
        standings(selectedYear)
        
      });
      
    standings(selectedYear);
    //console.log(getStandings())

}
document.addEventListener("DOMContentLoaded", initApp);



const standings = async (year) => {

    const arrays = await getStandings(year);
    //console.log(arrays)
    createStandingsTable(arrays, year);
}