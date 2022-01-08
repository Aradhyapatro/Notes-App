const fs = require("fs");

const getNotes = () => {
  const returnData = fs.readFileSync("data.txt", "utf-8");
  return returnData;
};

const addNotes = (obj) => {
  let adding, data;

  try {
    data = fs.readFileSync("Detail.json", "utf-8");
    adding = data.length == 0 ? false : true;
  } finally {
    obj = JSON.stringify(obj);
    data = data.substring(0, data.length - 1);
    if (adding == false) {
      fs.writeFileSync("Detail.json", "[" + obj + "]");
    } else {
      fs.writeFileSync("Detail.json", data + "," + obj + "]");
    }
  }
};

const removeNotes = (title) => {
  let data = fs.readFileSync("Detail.json", "utf-8");
  data = JSON.parse(data);

  for (let i = 0; i < data.length; i++) {
    if (data[i].Title === title) {
      data.splice(i, 1);
    }
  }

  let writeData = JSON.stringify(data);
  fs.writeFileSync("Detail.json", writeData);
};

module.exports.addNote = addNotes;
module.exports.readNote = getNotes;
module.exports.removeNote = removeNotes;
