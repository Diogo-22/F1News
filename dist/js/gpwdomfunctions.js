export const dropdownyearList = () => {
    const currentYear = new Date().getFullYear();
    const dropdown = document.getElementById("year-dropdown");

  for (let year = 1950; year <= currentYear; year++) {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    dropdown.appendChild(option);
  }
}
export const dropdownroundList = (numOfRounds) => {
    const dropdown = document.getElementById("round-dropdown");
    while (dropdown.firstChild) {
      dropdown.removeChild(dropdown.firstChild);
      console.log("yeah its repetting...")
    }
    const option = document.createElement("option");
    option.textContent = "Round:";
    dropdown.appendChild(option);

  for (let round = 1; round <= numOfRounds; round++) {
    const option = document.createElement("option");
    option.value = round;
    option.textContent = round;
    dropdown.appendChild(option);
  }
}
export const presentWinner = (Results, Year) => {
  const div = document.querySelector(".winner");
  if (Results) {
    //console.log(winner)
    const winner = Results[0];
    const GpInfo = Results[1];

    const textMessage = winner + " has won the " + GpInfo + " that took place in " + Year + "!";
    div.textContent = textMessage;
    } else {
    
    div.textContent = "🏁Race is yet to take Place🏁";
     }
  div.classList.add("on");
    div.classList.remove("off");
}

/* export const selectedYear = (selectedYear) => {
  console.log(selectedYear)
}

export const selectedRound = (selectedRound) => {
  console.log(selectedRound)
} */