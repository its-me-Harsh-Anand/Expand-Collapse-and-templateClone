document.body.addEventListener("click", e=>{
        if(!e.target.matches(".expand-button")) return
        const grandParent = e.target.closest(".card")
        const parent = grandParent.querySelector(".card-body")
        parent.classList.toggle("show")
        e.target.innerText = e.target.innerText === "Expand"? "Collapse" : "Expand"
        // if(e.target.innerText !== "Expand"){
        //     parent.classList.remove("show")
        //     e.target.innerText="Expand"
            
        // }else{
        //     parent.classList.add("show")
        //     e.target.innerText="Collapse"
        // }

     })

const template = document.querySelector("template")
const templateClone = template.content.cloneNode(true)
document.body.appendChild(templateClone)
