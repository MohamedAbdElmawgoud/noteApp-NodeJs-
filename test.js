// const fileSystem = require('fs')
// const add = require('./utilits.js')
//fileSystem.writeFileSync('note.txt', 'hello in my first app')
//  sum = add(5 , 2)
//  fileSystem.appendFileSync('note.txt', 'hello in my first app')

// note = getNote('first note')
//  //console.log('note is ', note)
 
//  //console.log(validator.isEmail('az.019098@gmail.com'))
//  testChalk = chalkColor.bold.green.inverse('success !!')
//  console.log(testChalk)
//  //const command = process.argv[2]
//  console.log(process.argv)
//console.log('welcome to node js')


 const notes = require('./note.js')
 const yargs = require('yargs')
 validator = require('validator')
 chalkColor = require('chalk')


// create note 
 yargs.command({
     command : 'add' ,
     describe : 'add a new note',
    
     builder :{
         title : {
             describe : 'Note Title',
             demandOption : true,
             type : 'string'
         },
         body : {
            describe : 'Note body',
            demandOption : true,
            type : 'string'
        }
     },
     handler : function(note){
        notes.addNote(note.title, note.body)
        
    },
 })

 yargs.command({
    command : 'remove' ,
    describe : 'remove a note',
    builder :{
        title : {
            describe : 'Note Title',
            demandOption : true,
            type : 'string'
        }
    },
    handler : function(note){
        notes.removeNote(note.title)
      //  console.log(chalkColor.red.inverse('Removing a note'))
    }
})

yargs.command({
    command : 'list' ,
    describe : 'list all notes',
    handler : function(){
        notes.listNote()
      //  console.log(chalkColor.yellow.inverse('List all old notes'))
    }
})

yargs.command({
   command : 'read' ,
   describe : 'read a note',
   builder :{
    title : {
        describe : 'Note Title',
        demandOption : true,
        type : 'string'
    }
},
   handler : function(note){
       notes.readNote(note.title)
     //  console.log(chalkColor.blue.inverse('Reading a new note'))
   }
})
 yargs.parse()