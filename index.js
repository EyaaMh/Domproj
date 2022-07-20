function show(){
    if(document.getElementById("dropdown").style.display=="block")
    document.getElementById("dropdown").style.display="none"
    else  document.getElementById("dropdown").style.display="block"
    // #dropdown
}
function add()
{
     
    document.querySelectorAll(".add").forEach(item=>{
       item.addEventListener('click',event=>{
        itemcopy= item.parentNode.cloneNode(true)
        itemcopy.setAttribute("class","added")
       btn= document.createElement("button")
       btn.innerText="remove item"
        itemcopy.append(btn)

        document.getElementById("dropdown").append(itemcopy)
       })
    })

}
add()