// const reponse = document.querySelectorAll('.reponse');
let question = document.querySelectorAll('.box1');
question.forEach((event) => {
    event.addEventListener("click", () =>{

if(event.classList.contains("active")){
event.classList.remove("active");
}else {
    event.classList.add("active");
}
    });
});
    
