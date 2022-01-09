const fs = require("fs");

const getNotes = (argv) => {
  let data = fs.readFileSync("Detail.json", "utf-8");
  data = JSON.parse(data);
  const info = data.filter((item) => {
    return item.Title === argv.title;
  });

  console.log("-> " + info[0].Title + ":");
  console.log("   " + info[0].Content);
};

const addNotes = (obj) => {
  let adding, data;

  try {
    data = fs.readFileSync("Detail.json", "utf-8");
    adding = data.length == 0 ? false : true;
  } finally {
    data = JSON.parse(data);
    data.push(obj);
    data = JSON.stringify(data);
    fs.writeFileSync("Detail.json", data);
    console.log("Note has been added to Notes");
  }
};

const removeNotes = (title) => {
  let data = fs.readFileSync("Detail.json", "utf-8");
  data = JSON.parse(data);

  data = data.filter((ele) => {
    if (ele.Title !== title) {
      return ele;
    }
  });

  let writeData = JSON.stringify(data);
  fs.writeFileSync("Detail.json", writeData);
};

const listNotes = () => {
  let data = fs.readFileSync("Detail.json", "utf-8");
  data = JSON.parse(data);
  console.log("Your Notes");
  data.map((info, index) => {
    console.log(index + 1 + "." + info.Title);
  });
};

module.exports.addNote = addNotes;
module.exports.readNote = getNotes;
module.exports.removeNote = removeNotes;
module.exports.listNote = listNotes;
