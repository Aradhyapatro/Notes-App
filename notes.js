const fs = require("fs");

const getNotes = () => {
  const returnData = fs.readFileSync("data.txt", "utf-8");
  return returnData;
};

module.exports = getNotes;
