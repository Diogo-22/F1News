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
        const GPwinner = await GetGPWinner(SelectedYear, SelectedRound);
        console.log(GPwinner)
        presentWinner(GPwinner);
      });
    
    
}
document.addEventListener("DOMContentLoaded", initApp);


const GetGPWinner = async (SelectedYear, SelectedRound) => {
    const Winner = await getGPWinners(SelectedYear, SelectedRound);
    
    return Winner;
}
