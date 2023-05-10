
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