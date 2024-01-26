const next=document.querySelector('.next');
const image=document.querySelector('.image');

function display(){
    fetch("https://picsum.photos/200/300").then((data)=>{
        image.setAttribute('src',data.url);
    }).catch((error)=>console.log("error"));
    
}


next.addEventListener('click',(e)=>{
    display();
    console.log("clicked")
})