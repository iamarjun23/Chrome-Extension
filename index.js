let Myleads=[]
const inputEl=document.getElementById("textarea")
const inputbtn=document.getElementById("Savebutton")
const unlist=document.getElementById("ulist")
const deletebtn = document.getElementById("Deletebutton")
const Savetab=document.getElementById("Save-tab")
const leadsfromlocalstorage=JSON.parse(localStorage.getItem("Myleads"))


if(leadsfromlocalstorage){
    Myleads=leadsfromlocalstorage
    Render(Myleads)
}

inputbtn.addEventListener("click",function(){
    Myleads.push(inputEl.value )
    inputEl.value=""
    localStorage.setItem("Myleads",JSON.stringify(Myleads))
    
    Render(Myleads)
    
    
})
deletebtn.addEventListener("dblclick",function(){
    localStorage.clear()
    Myleads=[]
    Render(Myleads)
    // location.reload()
})
Savetab.addEventListener("click",function(){
    chrome.tabs.query({active: true, currentWindow: true},function(tabs){
        Myleads.push(tabs[0].url)
        localStorage.setItem("Myleads",JSON.stringify(Myleads))
        Render(Myleads)
    })
   
})
function Render(leads) {
    let listitems = ""
for(let i=0;i<leads.length;i++){
    listitems +=`
    <a  target='_blank' href= ${leads[i]}>
    <li> ${leads[i]} 
    </li>
    </a>
    `
// listitems +="<a  target='_blank' href=" + Myleads[i] +">"+"<li>" + Myleads[i] +"</li>"+"</a>"
//     const x = document.createElement("li")
//     x.textContent=Myleads[i]
//     unlist.append(x)
 }
unlist.innerHTML = listitems

}
