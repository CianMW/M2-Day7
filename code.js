const addNavbarLink = () =>{
    let newNavNode = document.createElement("a")
    newNavNode.classList.add("p-2")
    newNavNode.classList.add("text-muted")
    newNavNode.setAttribute("href", "#")
    newNavNode.innerHTML = "EXTRA!"

    document.querySelector("nav").appendChild
}



document.querySelector("div.blog-main > h3").addEventListener("click", function() {
    document.querySelector("div.blog-main > h3").style.color = "green";
  });

const jumbotron =  document.querySelector("div .jumbotron")
  jumbotron.addEventListener("click", e => {
jumbotron.classList.remove("bg-dark") 
   document.querySelector("div.jumbotron").style.backgroundColor="green"
    
  })