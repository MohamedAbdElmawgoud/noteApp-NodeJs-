const fs = require('fs')
chalk = require('chalk')

const getNotes = function () {
    return 'Your notes...'
}

const addNote = function (title, body) {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter(function (note) {
    //     return note.title === title
    // }) duplicateNotes.length === 0
    const duplicateNotes = notes.find((note)=> note.title = title) 

    if (!duplicateNotes) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}
const removeNote = function(TitleNote){
    
    const notes = loadNotes()
    const notesToKeep = notes.filter(function(note) {
        return note.title !== TitleNote
    })
saveNotes(notesToKeep)

}
const listNote = function (){
    const notes = loadNotes()
    notes.forEach( (element) => {
        console.log(chalk.blue.inverse(element.title))
    }, this);
}
const readNote = function(title){
    const notes = loadNotes()
    const note= notes.find((note)=> note.title === title) 
        if(note){
            console.log(note)
            console.log(chalk.blue.inverse("your Notes"))
            console.log('title :' , note.title , 'body :' , note.body)
        }
        else {
            console.log(chalk.red.inverse('note not found'))
        }
       
}

module.exports = { 
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}