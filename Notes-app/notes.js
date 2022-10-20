let notes_holder =document.querySelector('.notes-holder')
shownotes();

let title = document.querySelector('.title-text')
let note = document.querySelector('.note')
let submit_button=document.querySelector('.subm')
submit_button.addEventListener('click',(e)=>{
    e.preventDefault()
    if(title.value===''||note.value===''){
        alert('fill all the particulars')
        return
    }
    console.log(title.value)
    console.log(note.value)
    let notes = localStorage.getItem("notes")
    if(notes===null){
          allnotes =[]
    }
    else{
         allnotes = JSON.parse(localStorage.getItem("notes"))
    }
    console.log(allnotes)
    let addnote = {"title":title.value,"detail":note.value}
    allnotes.push(addnote)
    localStorage.setItem("notes",JSON.stringify(allnotes))
    shownotes();
})
function shownotes(){
    let allnotes = JSON.parse(localStorage.getItem("notes"))
    if(allnotes===null || allnotes.length<=0){
        notes_holder.textContent="no notes here add a note"
    }

   else {

    notes_holder.innerHTML=''
    allnotes.forEach((l,i) => {
        let div = document.createElement('div')

        //add tilte
        let title_element = document.createElement('h2')
       title_element.textContent=l.title
       //add details
        let details = document.createElement('p')
details.textContent=l.detail
        //add delete button
        let delete_button =document.createElement('button')
        delete_button.textContent="delete note"
        delete_button.className="delete"

        //Edit note button
        let Edit_note_button = document.createElement('button')
        Edit_note_button.textContent="edit note"
        Edit_note_button.className="edit"

        //add delete and edit button on same line

let edit_and_delete_div = document.createElement('div')
edit_and_delete_div.append(delete_button)
edit_and_delete_div.append(Edit_note_button)
edit_and_delete_div.className="edit-div"

//append the note title and details to the div
div.className="single-note"
        div.append(title_element)
        div.append(details)
        div.append(edit_and_delete_div)
        delete_button.addEventListener('click',()=>{
            deletenote(i);
        })
Edit_note_button.addEventListener('click',()=>{
submit_button.style.display='none'
title.value=l.title
note.value=l.detail
let allbuttons = document.querySelectorAll('button')
allbuttons.forEach(l=>{
    if(!l.classList.contains("edit-outer")){
        l.disabled=true
    }
})

let edit_outer_button=document.querySelector('.edit-outer')

edit_outer_button.style.display="block"
edit_outer_button.addEventListener('click',(e)=>{
   e.preventDefault()

   submit_button.style.display="block"
   edit_outer_button.style.display="none"
   let allbuttons = document.querySelectorAll('button')
   allbuttons.forEach(l=>{
           l.disabled=false
      
   }) 
   Editnote(i)
shownotes();

})

        })
        notes_holder.append(div)
        
    });
}

}
function Editnote(i){
    let allnotes=JSON.parse(localStorage.getItem("notes"))
    let edited_notes = allnotes.map((l,idx)=>{
        if(i===idx){
            return {
                ...l,
                "title":title.value,
                "detail":note.value
            }
        }
        return l
        
    })
title.value=''
note.value=''
    localStorage.setItem("notes",JSON.stringify(edited_notes))
}
function deletenote(i){
    let allnotes = JSON.parse(localStorage.getItem("notes"))
    let newnotes = allnotes.filter((l,idx)=>i!==idx)
    localStorage.setItem("notes",JSON.stringify(newnotes))
    shownotes();
}