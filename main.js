let notelist = document.querySelector('.notelist');
// localstorage 
let notes = []

function removeElementToScreen(){


    if(localStorage.getItem('notes')){
        notes = JSON.parse(localStorage.getItem('notes'))
        notes.forEach(Note=>{
            renderNoteTodoList(Note , Note.uniqueId )
        })
    }
}//

document.querySelector('.alldeletebutton').addEventListener('click' , ()=>{
    document.querySelectorAll('.note').forEach(note=>{
        note.remove()
    })

    alert('All Note Delete')
    localStorage.clear()
})



document.querySelector('#createbutton').addEventListener('click' , ()=>{
    
    let uniqueId = 'note' + Math.floor(Math.random() * 1000);
   let Note ={
    title :  document.querySelector('#inputenterone').value,
    content : document.querySelector('#inputentertwo').value
   }
   addNotetolocalStorag(Note , uniqueId)
   renderNoteTodoList(Note , uniqueId)

})
function renderNoteTodoList(Note , uniqueId){


    let NoteMainDiv = document.createElement('div')
    NoteMainDiv.classList.add('note' , uniqueId)
    let noteTitle = document.createElement('h3');
    let noteContent = document.createElement('p');
    let noteDaleteButton = document.createElement('button');

    noteDaleteButton.addEventListener('click' , ()=>{
        removeElementFormUnique(uniqueId)
    })

    
    NoteMainDiv.appendChild(noteTitle);
    NoteMainDiv.appendChild(noteContent);
    NoteMainDiv.appendChild(noteDaleteButton);

    notelist.append(NoteMainDiv);

    noteTitle.innerText = Note.title;
    noteContent.innerText = Note.content;
    noteDaleteButton.innerText = 'Delete Note'

    document.querySelector('#inputenterone').value = ''
    document.querySelector('#inputentertwo').value = ''

    // alert(Note.title + ' New Note')

//    addNotetolocalStorag(Note , uniqueId)


}


function addNotetolocalStorag(Note, uniqueId){
    Note = {...Note, uniqueId}

    notes.push(Note)

    localStorage.setItem('notes' , JSON.stringify(notes))
}

   removeElementToScreen()

 function removeElementFormUnique(id){
    console.log(id)
    document.querySelector('.' + id).remove()

    notes = JSON.parse(localStorage.getItem('notes'))

    let index = notes.findIndex(Note=>Note.uniqueId==id)

    notes.splice(index ,1)

    localStorage.setItem('notes' , JSON.stringify(notes))

 }

//  localStorage.clear()