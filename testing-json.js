const fs = require("fs");

// const arpit = {
//   author: "Arpit Bakshi",
//   Book: "The Exile of Mukunda",
// };

// const jsonFile = JSON.stringify(arpit);
// console.log(jsonFile);

// const recommend = JSON.parse(jsonFile);
// console.log(recommend);

// fs.writeFileSync("Detail.json", jsonFile);

// let readData = fs.readFileSync("Detail.json", "utf-8");
// readData = JSON.parse(readData);

// console.log(readData.Book);

let data = fs.readFileSync("Detail.json", "utf-8");
data = JSON.parse(data);
data.name = "Aradhya";
data.age = 20;

data = JSON.stringify(data);

fs.writeFileSync("Detail.json", data);
