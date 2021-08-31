const addNavbarLink = () =>{
    let newNavNode = document.createElement("a")
    newNavNode.classList.add("p-2")
    newNavNode.classList.add("text-muted")
    newNavNode.setAttribute("href", "#")
    newNavNode.innerHTML = "EXTRA!"

    document.querySelector("nav").appendChild
}



document.getElementById("color-button").addEventListener("click", function() {
    document.querySelector("div.blog-main > h3").style.color = "green";
  });