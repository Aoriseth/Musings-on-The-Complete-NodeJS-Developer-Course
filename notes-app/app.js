const chalk = require("chalk")
const yargs = require("yargs")

const notes = require("./notes")

yargs.version("0.0.1")

yargs.command({
    command:"add",
    describe:"Add a new note",
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:"string"
        },
        body:{
            describe:"Note body",
            demandOption:true,
            type:"string"
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})
yargs.command({
    command:"remove",
    describe:"Remove a note",
    builder:{
        title:{
            describe:"Note title to delete",
            demandOption:true,
            type:"string"
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})
yargs.command({
    command:"list",
    describe:"list all notes",
    handler(){
        notes.listNotes()
    }
})
yargs.command({
    command:"read",
    describe:"Read a note",
    builder:{
        title:{
            describe:"Note title to find",
            demandOption:true,
            type:"string"
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()
