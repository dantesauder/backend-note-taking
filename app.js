const chalk = require('chalk')
const { demandOption } = require('yargs')

const yargs = require('yargs')

const notes = require('./notes.js')



    

   yargs.version('1.1.0') 

   

   yargs.command({

    command: 'add', 
    describe: 'Add a new note',
    builder: {

        body: {

            describe: 'Body text',
            demandOption: true,
            type: 'string'


        },



        title: {

            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }    

    },
    
    handler(argv) {

           notes.addNote(argv.title, argv.body)
    
        }

   })

  

   yargs.command({

        command: 'remove',
        describe: 'Remove a new note',
        builder: {

                title: {

                    describe: 'Note title',
                    demandOption: true,
                    type: 'string'


                }







        },
        handler(argv) {

           notes.removeNote(argv.title)
        }


   })

   yargs.command({

    command: 'list',
    describe: 'List the note',
   


    
    handler() {

        notes.listNotes()
       
    }


})



yargs.command({

    command: 'read',
    describe: 'Read a note',
    builder: {

        title: {
            describe: 'title of note',
            demandOption: true,
            type: 'string'


        }

    },
    handler(argv) {

        notes.readNote(argv.title)
    }


})

  yargs.parse()



   


  