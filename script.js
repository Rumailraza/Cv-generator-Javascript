function addnewefield(){
    let newnode=document.createElement('textarea');
    newnode.classList.add('form-control');
    newnode.classList.add('wefield');
    newnode.classList.add("mt-2");
    newnode.classList.add("row",3);
    newnode.setAttribute("row",3);
    newnode.setAttribute("placeholder","Enter here");

    let weob =document.getElementById('we');
    let wevbtn =document.getElementById("wevbtn");

    weob.insertBefore(newnode,wevbtn)
}

function addnewefield2(){
    let newnode=document.createElement('textarea');
    newnode.classList.add('form-control');
    newnode.classList.add('aqfield');
    newnode.classList.add("mt-2");
    newnode.classList.add("row",3);
    newnode.setAttribute("row",3);
    newnode.setAttribute("placeholder","Enter here");

    let aqob =document.getElementById('aq');
    let aqbtn =document.getElementById("aqbtn");

    aqob.insertBefore(newnode,aqbtn)
}

function Generatecv(){
let nameField = document.getElementById("nameField").value;
let nameT1 = document.getElementById("nameT1");
nameT1.innerHTML = nameField;
document.getElementById("NameT2").innerHTML=nameField;
document.getElementById("ContactT").innerHTML=document.getElementById("ContactField").value;
document.getElementById("AddressT").innerHTML=document.getElementById("AddressField").value;
document.getElementById("whatsappT").innerHTML=document.getElementById("GitupField").value;
document.getElementById("FacebookT").innerHTML=document.getElementById("FacebookField").value;
document.getElementById("InstagarmT").innerHTML=document.getElementById("InstagramField").value;



document.getElementById("obT").innerHTML=document.getElementById("Objectivefield").value;


let wes = document.getElementsByClassName("wefield")

let str="";

for(let e of wes){
 str = str +`<li> ${e.value} </li>`;
document.getElementById("WET").innerHTML=str;
}

let aeq = document.getElementsByClassName("aqfield")

let str1="";

for(let e of aeq){
  str1 +=`<li> ${e.value} </li>`;
document.getElementById("AQ").innerHTML=str1;
}


document.getElementById("mainform").style.display="none";
document.getElementById("cv-templete").style.display="block";
document.getElementsByClassName("btn").style.display="none";
}

function PRINTCV(){
    window.print();
}