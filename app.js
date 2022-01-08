const chalk = import("chalk");
const yargs = require("yargs");

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
    console.log("The Title is '" + argv.title + "'");
    console.log("The Body is = " + argv.body);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "remove note from the list",
  handler: function () {
    console.log("Note was removed");
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
