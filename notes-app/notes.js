const fs = require("fs")
const chalk = require("chalk")

const getNotes = ()=>{ "Your notes..."}

const addNote = (title, body)=>{
    const notes = loadNotes()
    const duplicate = notes.find((note)=>note.title === title)

    if(!duplicate){ // or undefined
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen("Added new note"))
    }else{
        console.log(chalk.bgRed.bold("This note already exists"))
    }
}

const removeNote = (title)=>{
    const notes = loadNotes()
    const toKeep = notes.filter((note)=>note.title !== title)
    if(notes.length !== toKeep.length){
        console.log(chalk.bgGreen("Note removed!"))
        saveNotes(toKeep)
    }else{
        console.log(chalk.bgRed.bold("No note found with title:",title))
    }
}

const saveNotes = (notes)=>{
    const json = JSON.stringify(notes)
    fs.writeFileSync("notes.json",json)
}

const loadNotes = ()=>{
    try{
        const buffer = fs.readFileSync("notes.json")
        const notes = JSON.parse(buffer.toString())
        return notes
    }catch(e){
        return []
    }
}

const listNotes = ()=>{
    console.log(chalk.bold.yellow("Your notes:"))
    const notes = loadNotes()
    notes.forEach(note => console.log("Note: "+chalk.grey(note.title)));
}

const readNote = (title)=>{
    const notes = loadNotes()
    const noteToRead = notes.find((note)=>note.title===title)

    if(noteToRead){
        console.log(chalk.yellow.bold(noteToRead.title))
        console.log(chalk.grey(noteToRead.body))    
    }else{
        console.log(chalk.bgRed("Note not found"))
    }
}

module.exports = {
    getNotes,
    addNote,
    removeNote,
    listNotes,
    readNote
}