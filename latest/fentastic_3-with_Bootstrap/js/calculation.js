
var imageStack;
var balance=5000;
var bal=balance;
var count1000=count500= count100= count50= count25= count10=0;
var stack1=stack2=stack3=stack4=stack5=stack6=0;


function balanceadd(value){
  if(balance==0 && balance<value){
  alert('low balance!');
  p=0;
   console.log(p);

}
  else if(balance>=value && p===0){
    balance=balance-value;
    document.getElementById("balUpdate").innerHTML=balance;
  
  if (imageStack==="card1"){
    stack1+=value;
    document.getElementById("bal1").innerHTML=stack1;
  }
  if (imageStack==="card2"){
    stack2+=value;
    document.getElementById("bal2").innerHTML=stack2;
  }
  if (imageStack==="card3"){
    stack3+=value;   
    document.getElementById("bal3").innerHTML=stack3;
  }
  if (imageStack==="card4"){
    stack4+=value;
    document.getElementById("bal4").innerHTML=stack4;
  }
  if (imageStack==="card5"){
    stack5+=value;
    document.getElementById("bal5").innerHTML=stack5;
  }
  if (imageStack==="card6"){
    stack6+=value;   
    document.getElementById("bal6").innerHTML=stack6;
  }
    console.log(p);
}
}

function balanceclear(value){
    if(balance!=bal && p==1){
    balance=balance+(count1000*1000)+(count500*500)+(count100*100)+(count50*50)+(count25*25)+(count10*10);
    document.getElementById("balUpdate").innerHTML=bal;

    document.getElementById("bal1").innerHTML=0;
    document.getElementById("bal2").innerHTML=0;
    document.getElementById("bal3").innerHTML=0;
    document.getElementById("bal4").innerHTML=0;
    document.getElementById("bal5").innerHTML=0;
    document.getElementById("bal6").innerHTML=0;
    
    stack1 = stack2 = stack3 = stack4 = stack5 = stack6 =0;
   //this is to reset the values of the counters...
   //this prevents the increase in balance after using clear...
   count1000 = count500 = count100 = count50 = count25 = count10 = 0;
    //imageStack="";
    p=0;
    console.log(p);
 }
}

function oneThousand() {

  var newImg = document.createElement('img');
  newImg.setAttribute('src', 'images/1000.png');
  var showHere = document.getElementById(imageStack);
  newImg.setAttribute('class', "dyn_class");
  newImg.setAttribute('id', "dyn_class");
  
  showHere.appendChild(newImg);

//   function myFunction() {
//   var element = document.getElementById("card1");
//   element.classList.remove("dyn_class");
// }
// var newImg = document.createElement('img');
//   newImg.setAttribute('src', 'images/1000.png');
//  newImg.setAttribute('id', "dyn_class");
newImg.onclick = function () {
    newImg.parentElement.removeChild(newImg);
};

var table = document.getElementById('card1');
table.appendChild(newImg);

// var newImg = document.createElement('img');
//   newImg.setAttribute('src', 'images/1000.png');
//    var showHere = document.getElementById('y');
//    newImg.setAttribute('class', "dyn_class");
// showHere.appendChild(newImg);
// oneThousand();
// newImg.onclick = function() {
//     newImg.parentNode.removeChild(y);

//      }
     count1000=count1000+1;
p=0;
balanceadd(1000,p);

  

}

function fiveHundred() {
  var newImg = document.createElement('img');
  newImg.setAttribute('src', 'images/500.png');
  newImg.style.left = "2rem";
  var showHere = document.getElementById(imageStack);
  newImg.setAttribute('class', "dyn_class");
  showHere.appendChild(newImg);

  count500=count500+1;
  p=0;
  balanceadd(500,p);
}

function hundred() {
  var newImg = document.createElement('img');
  newImg.setAttribute('src', 'images/100.png');
  newImg.style.left = "4rem";
  var showHere = document.getElementById(imageStack);
  newImg.setAttribute('class', "dyn_class");
  showHere.appendChild(newImg);

  
  count100=count100+1;

  p=0;
  balanceadd(100,p);
}
function fifty() {
  var newImg = document.createElement('img');
  newImg.setAttribute('src', 'images/50.png');
  newImg.style.left = "6rem";
  var showHere = document.getElementById(imageStack);
  newImg.setAttribute('class', "dyn_class");
  showHere.appendChild(newImg);

  
  count50=count50+1;
  p=0;
  balanceadd(50,p);
}

function twentyFive() {
  var newImg = document.createElement('img');
  newImg.setAttribute('src', 'images/25.png');
  newImg.style.left = "8rem";
  var showHere = document.getElementById(imageStack);
  newImg.setAttribute('class', "dyn_class");
  showHere.appendChild(newImg);

  
  count25=count25+1;
  p=0;
  balanceadd(25,p);
}
function ten() {
  var newImg = document.createElement('img');
  newImg.setAttribute('src', 'images/10.png');
  newImg.style.left = "0";
  newImg.style.top = "2rem";
  var showHere = document.getElementById(imageStack);
  newImg.setAttribute('class', "dyn_class");
  showHere.appendChild(newImg);


  count10=count10+1;
  p=0;
  balanceadd(10,p);
}


var x = document.getElementsByClassName("card-body"); 
function one() {

  x[3].style.background = "red";
  if (x[3].style.backgroundColor==="red") {
   imageStack="card1";

 }
}

function two() {
  x[2].style.background = "red";
  imageStack="card2";
}

function three() {
  x[1].style.background = "red";

  imageStack="card3";

}
function four() {

  x[11].style.background = "red";

  imageStack="card4";
}
function five() {

  x[10].style.background = "red";

  imageStack="card5";
}
function six() {

  x[9].style.background = "red";
  imageStack="card6";
}




var newBal = document.createElement('text');
newBal.innerHTML = balance;
var showHere = document.getElementById('balUpdate');
showHere.appendChild(newBal);



var lastmatches = document.createElement('text');
lastmatches.innerHTML = "here last 5 matches details: ";
var showHere = document.getElementById('prev');
showHere.appendChild(lastmatches);


function clearIt() {
  if(bal==balance){
    alert("cannot clear");
  }

  else{
   document.getElementById('card1').value = "";
   var elements = document.getElementsByClassName("card-body");
   for (var i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor="";
  }
  var element2 = document.getElementsByClassName("dyn_class");
  while (element2.length > 0) {
    element2[0].parentNode.removeChild(element2[0]);
    imageStack="";  
  }
  }   
  p=1;
  console.log(p);
  balanceclear(p);    
  imageStack="";
}

