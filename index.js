function superbowlWin(record) {
    function isSuperbowlWin(game) {
      return game.result === "W"; // Corrected to uppercase "W"
    }
  
    const winRecord = record.find(isSuperbowlWin);
    return winRecord ? winRecord.year : undefined;
  }
  
  const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
  ];
  
  console.log(superbowlWin(record));