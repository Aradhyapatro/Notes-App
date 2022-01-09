const yargs = require("yargs");
const fs = require("fs");
const { addNote, removeNote, listNote, readNote } = require("./notes");

// Create add command
yargs.command({
  command: "add",
  describe: "adds a note",
  builder: {
    title: {
      describe: "Title to add",
      demandOption: true,
      type: String,
    },
    body: {
      describe: "The content of the note",
      demandOption: true,
      type: String,
    },
  },
  handler: function (argv) {
    let obj;
    try {
      obj = {
        Title: `${argv.title}`,
        Content: `${argv.body}`,
      };
    } finally {
      addNote(obj);
    }
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "remove note from the list",
  builder: {
    title: {
      describe: "Title to add",
      demandOption: true,
      type: String,
    },
  },
  handler: function (argv) {
    const title = argv.title;

    removeNote(title);
  },
});

// Create read command
yargs.command({
  command: "read",
  describe: "Read the notes",
  builder: {
    title: {
      describe: "Title of the Note",
      demandOption: true,
    },
  },
  handler: function (argv) {
    readNote(argv);
  },
});

// Create list command
yargs.command({
  command: "list",
  describe: "List of all notes",
  handler: function () {
    listNote();
  },
});

yargs.version("17.9.231");
yargs.parse();
