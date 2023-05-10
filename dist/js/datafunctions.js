
export const getRounds = async (selectedYear) => {
    const urlvariable = selectedYear;
    const url = `https://ergast.com/api/f1/${urlvariable}.json`;
    try {
        const getRound = await fetch(url);
        const roundJson = await getRound.json();
        //console.log(roundJson);
        const numOfRounds = roundJson.MRData.RaceTable.Races.length;
        return numOfRounds;
    } catch (err) {
        console.error(err);
    }
}

export const getGPWinners = async (selectedYear, selectedRound) => {
    const selectYear = selectedYear;
    const selectRound = selectedRound;
    const url = `https://ergast.com/api/f1/${selectYear}/${selectRound}/results.json`;
    try {
        const getWinner = await fetch(url);
        const winnerJson = await getWinner.json();
        const Winnerinfo = winnerJson.MRData.RaceTable.Races[0].Results[0].Driver;
        const givenName = Winnerinfo.givenName;
        const lastName = Winnerinfo.familyName;
        const Winner = givenName + " " + lastName;
        //console.log(WinnerJson);
        return Winner;
    } catch (err) {
        console.error(err);
    }
}

export const getStandings = async (selectedYear) => {
    const selectYear = selectedYear;
    const url = `https://ergast.com/api/f1/${selectYear}/driverStandings.json`;
    /* const url = `https://ergast.com/api/f1/2021/driverStandings.json`; */
    try {
        const getStandings = await fetch(url);
        
        const standingsJson = await getStandings.json();
        console.log(standingsJson);
        const standings = standingsJson.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        const standingsLength = standings.length;
        //console.log(standingsLength)
        const positionArray = [];
        const pointsArray = [];
        const winsArray = [];
        const driversNameArray = [];
        const teamArray = [];
        for (let i = 0; i < standingsLength; i++) {
            const position = standings[i].position;
            positionArray[i] = position;
            const points = standings[i].points;
            pointsArray[i] = points;
            const wins = standings[i].wins;
            winsArray[i] = wins;
            const givenName = standings[i].Driver.givenName;
            const lastName = standings[i].Driver.familyName;
            const driverName = givenName + " " + lastName;
            driversNameArray[i] = driverName;
            const team = standings[i].Constructors[0].name;
            teamArray[i] = team;
            
        }
        
        //console.log(WinnerJson);
        return [positionArray, driversNameArray, teamArray, pointsArray, winsArray, standingsLength];
    } catch (err) {
        console.error(err);
    }
}