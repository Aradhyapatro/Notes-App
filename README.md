# Notes-App

Basic Node.js Project

Steps to be followed to set-up the Environment:


- Open it in Vscode or any other code editor
- open up the terminal
- npm install

## Add note
```
node app.js add --title="{title will go here without the curly brackets}" --body="{Content will go here without the curly bracket}"
```
  after this in the Detail.json file the note will be added

## Remove note
```
node app.js remove --title="{title will go here without the curly bracket}"
```
  after this the note will be removed from the Detail.json file

## List note
```
node app.js list
```
  Will list out the Title of all the notes in the terminal

## Read Note
```
node app.js read --title="Title will go here without the curly bracket"
```
  will read that particular note from the Detail.json file
