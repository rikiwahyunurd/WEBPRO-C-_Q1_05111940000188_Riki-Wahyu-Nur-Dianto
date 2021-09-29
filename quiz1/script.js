const txts=document.querySelector(".animate-text").children,
txtsLen=txts.length;
let index=0;
const textInTimer=3000,
 textOutTimer=2800;

function animateText() {
for(let i=0; i<txtsLen; i++){
txts[i].classList.remove("text-in","text-out");  
}
txts[index].classList.add("text-in");

setTimeout(function(){
 txts[index].classList.add("text-out");              
},textOutTimer)

setTimeout(function(){

if(index == txtsLen-1){
   index=0;
 }
else{
    index++;
  }
 animateText();
},textInTimer); 
}

window.onload=animateText;


const links = document.querySelectorAll(".page-header ul a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}