import {
    dropdownyearList,
    dropdownroundList,
    presentWinner
    /* selectedYear,
    selectedRound */
} from "./gpwdomfunctions.js";
import {
    getRounds,
    getGPWinners
} from "./datafunctions.js"

const initApp = () => {
    let SelectedYear;
    let SelectedRound;

   dropdownyearList();
   const yearButton = document.getElementById("year-dropdown");
    yearButton.addEventListener("change", async function() {
        const selectedOption = this.value;
        //selectedYear(selectedOption);
        const numOfRounds = await getRounds(selectedOption);
        dropdownroundList(numOfRounds);
        SelectedYear = selectedOption;
        const div = document.querySelector(".winner");
        div.classList.add("off");
        div.classList.remove("on");
      });

   const roundButton = document.getElementById("round-dropdown");
    roundButton.addEventListener("change", async function() {
        const selectedOption = this.value;
        //console.log(selectedOption);
        SelectedRound = selectedOption;
        
        const results = await getGPWinners(SelectedYear, SelectedRound);
        console.log(results)
        presentWinner(results, SelectedYear);
      });
    
    
}
document.addEventListener("DOMContentLoaded", initApp);


const GetGPWinner = async (SelectedYear, SelectedRound) => {
    const Result = await getGPWinners(SelectedYear, SelectedRound);
    const Winner = Result[0];
    const GpInfo = Result[1];
    return Winner, GpInfo;
}
