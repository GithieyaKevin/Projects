
// ADDING THE LIST ITEM

let button = document.querySelector("#add") ;

button.addEventListener("click", ()=>{
  let userInput = document.querySelector("#item").value ;

  let list = []

  list.push(userInput)

  let liElement =  document.createElement("li")

  liElement.innerText = userInput ;

  document.querySelector("#orderedList").appendChild(liElement) ;

  document.querySelector("#item").value = "" ;
  })
