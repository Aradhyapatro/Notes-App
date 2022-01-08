const chalk = import("chalk");
const yargs = require("yargs");
const fs = require("fs");
const { boolean } = require("yargs");
const { addNote, removeNote } = require("./notes");

// Create addcommand
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
  handler: function () {
    console.log("The Notes were Read");
  },
});

// Create list command
yargs.command({
  command: "list",
  describe: "List of all notes",
  handler: function () {
    console.log("Listing out all notes");
  },
});

yargs.version("17.9.231");
yargs.parse();
