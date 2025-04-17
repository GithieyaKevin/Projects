
let hello = document.getElementById("hello")
let how = document.getElementById("how")
let happy = document.getElementById("happy")
let play = document.getElementById("happy")

hello.addEventListener("click", ()=>{
  let audio = new Audio("./Sounds/hello.mp3")
  audio.play()
})

how.addEventListener("click", ()=>{
  let audio = new Audio("./Sounds/how.mp3")
  audio.play()
})

happy.addEventListener("click", ()=>{
  let audio = new Audio("./Sounds/happy.mp3")
  audio.play()
})

happy.addEventListener("click", ()=>{
  let video = new Video("./Sounds/The Starlites-Mama Dee (G0.G.).mp4")
  video.play()
})
