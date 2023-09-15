import {
    createChampionsTable,
    dropdownyearList2,
    presentWinner
} from "./championsdomfunctions.js"
import {
    getStandings
} from "./datafunctions.js"

const initApp = () => {
   
    let selectedYear = new Date().getFullYear();
    //console.log(selectedYear)
      dropdownyearList2();
   const yearButton2 = document.getElementById("year-dropdown3");
    yearButton2.addEventListener("change", async function() {
        const selectedOption = this.value;
        selectedYear = selectedOption;
        
        champions(selectedYear)
      });
    
    champions(selectedYear);
    //console.log(getStandings())

}
document.addEventListener("DOMContentLoaded", initApp);

const champions = async (year) => {
    const arrays = await getStandings(year);
    console.log(arrays)
    presentWinner(arrays, year)
    //createChampionsTable(arrays, year);
}