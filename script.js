let chip="yellowchip";
let chipv="20p";
let chipdecval=0.2;
let chipvalue=[["yellow",1],["red",5],["green",25],["black",100]];
let bets = [];
let bet=[];
// let a = [5, 6];
// mat.push(a);
// Gives mat=[[1,2], [3,4],[5,6]]
setSingleNos()
// sets div for each single number position
function setSingleNos(){
const setsingle=document.querySelector(".topContainer");
    for (let i=0;i<37;i++){
        const element = document.createElement("div");
        element.classList.add("single","no"+(i));
        element.dataset.location=(i);
        element.dataset.odds=35;
        setsingle.appendChild(element);
    }
}

const doOnClick = (e) => {
    console.log (e,e.target)
     createElement(e.target,"div",chipv,"s3",chip,"Single");
     bet.push(e.target.dataset.location,chipv,e.target.dataset.odds);
     console.log(bet)
     bets.push(bet);
     console.log(bets)
    //  console.log("Bet",bets[1][0])
     console.log(bets[0][0].split(",").includes("3"))
     bet=[];
     calcwinnings(bets,"3");
}

const settwelve = (e) => {
    console.log (e.target)
     createElement(e.target,"div",chipv,"s3",chip,"twelve");
     bet.push(e.target.dataset.location,chipv,e.target.dataset.odds);
     console.log(bet)
     bets.push(bet);
     console.log(bets)
    //  console.log("Bet",bets[1][0])
     console.log(bets[0][0].split(",").includes("3"))
     bet=[];
     calcwinnings(bets,"3");
}

const Yellowchip = document.querySelector(".y");
Yellowchip.addEventListener("click",function(){
    chip="yellowchip";
    chipv="20p";
    chipdecval=0.2;
    clearEleClass(".chip","chipselected");
    Yellowchip.classList.add("chipselected");
})
const Redchip = document.querySelector(".r");
Redchip.addEventListener("click",function(){
    chip="redchip";
    chipv="50p";
    chipdecval=0.5;
    clearEleClass(".chip","chipselected")  
    Redchip.classList.add("chipselected");
})
const Greenchip = document.querySelector(".g");
Greenchip.addEventListener("click",function(){
    chip="greenchip";
    chipv="£1";
    chipdecval=1;
    clearEleClass(".chip","chipselected")
    Greenchip.classList.add("chipselected");
})
const Blackchip = document.querySelector(".b");
Blackchip.addEventListener("click",function(){
    chip="blackchip";
    chipv="£5";
    chipdecval=5;
    clearEleClass(".chip","chipselected") ;      
    Blackchip.classList.add("chipselected");
})
const Bluechip = document.querySelector(".bl");
Bluechip.addEventListener("click",function(){
    chip="bluechip";
    chipv="£10";
    chipdecval=10;
    clearEleClass(".chip","chipselected");
    Bluechip.classList.add("chipselected");
})
document.querySelectorAll('.single').forEach((el) => {
  console.log(el)
    el.addEventListener('click', doOnClick);
});

document.querySelectorAll('.twelvetop').forEach((el) => {
    console.log(el)
    el.addEventListener('click', settwelve);
});


function removeElements(elementID){
    console.log("Removing Element")
    const ele=document.querySelectorAll(elementID).forEach((el) => {
        console.log(el)
        el.remove();
    });
}

function clearEleClass(element,classtoremove){
    const ele=document.querySelectorAll(element);
    ele.forEach((el) => {
        el.classList.remove(classtoremove);
    });
}
const removeallbets = document.querySelector(".clearbets");
removeallbets.addEventListener("click",function(){
    console.log("Removing Bets")
    const articles = document.querySelectorAll(".s3");
    articles.forEach((el) => {
        el.remove();
    });
    
});


function createElement(parent,elementType,html,elementClass1,x,elementID){
    console.log(parent,elementType,html,elementClass1,x,elementID)
    const ele=document.createElement(elementType);
    ele.innerHTML=html; 
    ele.classList.add(elementClass1); 
    ele.classList.add(x);
    ele.id=elementID;   
    return parent.appendChild(ele);       
}
function removeElement(elementID){
    console.log("Removing Element")
    const ele=document.getElementById(elementID);
    if(ele){
        ele.remove();
    }
}

function calcwinnings(bet,winningnumber){
    let winnings=0
    console.log("Bet",bet,bet.length);
    for(x=0;x<bet.length;x++){
        console.log(bet[x]);
        console.log(bet[x][0].split(","));
        console.log(bet[x][0].split(",").includes(winningnumber));
        console.log(winningnumber);
        console.log(bet[x][2]);
        if(bet[x][0].split(",").includes(winningnumber)){
            console.log("Bet Won");
             winnings=winnings+ +bet[x][2]*chipdecval;
            console.log(winnings);
        };
    } 
}
    
   
   
