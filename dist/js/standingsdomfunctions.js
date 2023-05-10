export const dropdownyearList = () => {
    const currentYear = new Date().getFullYear();
    const dropdown = document.getElementById("year-dropdown2");

  for (let year = 1950; year <= currentYear; year++) {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    dropdown.appendChild(option);
  }
}

export const createStandingsTable = (array, year) => {
    const seasonTitle = document.querySelector(".standings_title");
    seasonTitle.textContent = "Standings " + year + " Season"

    const gridSection = document.querySelector(".grid_standings");
    while (gridSection.firstChild) {
        gridSection.removeChild(gridSection.firstChild);
        //console.log("yeah its repetting...")
      }

    const positions = array[0];
    const driversName = array[1];
    const teams = array[2];
    const points = array[3];
    const wins = array[4];
    const driversNum = array[5];

    const div1 = document.createElement("div");
    div1.classList.add("position")
    div1.textContent = "Positions:";
    gridSection.appendChild(div1);

    const div2 = document.createElement("div");
    div2.classList.add("drivername")
    div2.textContent = "Drivers:";
    gridSection.appendChild(div2);

    const div3 = document.createElement("div");
    div3.classList.add("constructor")
    div3.textContent = "Constructor:";
    gridSection.appendChild(div3);

    const div4 = document.createElement("div");
    div4.classList.add("points")
    div4.textContent = "Points:";
    gridSection.appendChild(div4);

    const div5 = document.createElement("div");
    div5.classList.add("wins")
    div5.textContent = "Wins:";
    gridSection.appendChild(div5);

    for (let i = 0; i < driversNum; i++) {
        const div1 = document.createElement("div");
        div1.classList.add("position")
        div1.textContent = positions[i];
        gridSection.appendChild(div1);

        const div2 = document.createElement("div");
        div2.classList.add("drivername")
        div2.textContent = driversName[i];
        gridSection.appendChild(div2);

        const div3 = document.createElement("div");
        div3.classList.add("constructor")
        div3.textContent = teams[i];
        gridSection.appendChild(div3);

        const div4 = document.createElement("div");
        div4.classList.add("points")
        div4.textContent = points[i];
        gridSection.appendChild(div4);

        const div5 = document.createElement("div");
        div5.classList.add("wins")
        div5.textContent = wins[i];
        gridSection.appendChild(div5);
      }
}