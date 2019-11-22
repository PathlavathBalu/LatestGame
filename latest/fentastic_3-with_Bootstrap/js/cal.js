var imageStack;
var initialBalance = 5000;
var balance = 5000;
var totalBet = 0;
var chipCount1000 = 0;
var chipCount500 = 0;
var chipCount100 = 0;
var chipCount50 = 0;
var chipCount25 = 0;
var chipCount10 = 0;

var box1Amount = 0;
var box2Amount = 0;
var box3Amount = 0;
var box4Amount = 0;
var box5Amount = 0;
var box6Amount = 0;

var activeBox = 0;

var click = 0;


const chipImgs = {
    chip1000: 'images/1000.png',
    chip500: 'images/500.png',
    chip100: 'images/100.png',
    chip50: 'images/50.png',
    chip25: 'images/25.png',
    chip10: 'images/10.png'
}

const boxIds = {
    "1": 'card1',
    "2": 'card2',
    "3": 'card3',
    "9": 'card4',
    "10": 'card5',
    "11": 'card6',


}

const activeBoxes = {
    'card1': 'bal1',
    'card2': 'bal2',
    'card3': 'bal3',
    'card4': 'bal4',
    'card5': 'bal5',
    'card6': 'bal6',


}

const chipIds = {

    chip1000: 'chipCount1000',
    chip500: 'chipCount500',
    chip100: 'chipCount100',
    chip50: 'chipCount50',
    chip25: 'chipCount25',
    chip10: 'chipCount10'
}

const chipValues = {

    chip1000: 1000,
    chip500: 500,
    chip100: 100,
    chip50: 50,
    chip25: 25,
    chip10: 10
}


const boxAmounts = {

    "card1": box1Amount,
    "card2": box2Amount,
    "card3": box3Amount,
    "card4": box4Amount,
    "card5": box5Amount,
    "card6": box6Amount,

}




function clickTile(tileNo) {

    var x = document.getElementsByClassName("card-body");

    x[tileNo].style.background = "red";
    activeBox = boxIds[tileNo];


    console.log(activeBox);


}

function clickChip(chipId) {


    if (checkBalance(chipValues[chipId])) {

        var newImg = document.createElement('img');
        newImg.setAttribute('src', chipImgs[chipId]);
        newImg.setAttribute('class', "dyn_class");
        newImg.setAttribute('id', activeBox + chipId);
        
        let addImage = document.getElementById(activeBox);


        console.log(addImage);

        addImage.appendChild(newImg);

        click += 1;
        document.getElementById("badge1").innerHTML = click;
        document.getElementById("badge2").innerHTML = click;
        document.getElementById("badge3").innerHTML = click;
        document.getElementById("badge4").innerHTML = click;
        document.getElementById("badge5").innerHTML = click;
        document.getElementById("badge6").innerHTML = click;
        

      //  console.log(click);

        var element = document.getElementById(activeBox + chipId);

        element.onclick = (function() {
            element.addEventListener('click', function() {
                newImg.parentElement.removeChild(newImg);


                clearTotalBalance();
            })
        })()







        let chipCount = chipIds[chipId];
        chipCount++;

        reduceBalance(chipValues[chipId]);
        increaseBoxAmount(chipValues[chipId]);
    } else {

        alert('You dont have enough balance to place this bet !');
    }

}


function reduceBalance(betAmount) {

    balance = balance - betAmount;

    document.getElementById("balUpdate").innerHTML = balance;



}


function increaseBoxAmount(betAmount, chipId) {



    // boxAmount = boxAmounts[activeBox];

    // console.log(boxAmount);

    boxAmounts[activeBox] = boxAmounts[activeBox] + betAmount;

    console.log(boxAmounts[activeBox]);





    document.getElementById(activeBoxes[activeBox]).innerHTML = boxAmounts[activeBox];

}

function checkBalance(valueOfChip) {

    if (balance < valueOfChip) {

        return false;
    } else {
        return true;
    }

}

function clearAll() {


    document.getElementById('card1').value = "";
    var elements = document.getElementsByClassName("card-body");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "";
    }


    document.getElementById('card2').value = "";
    var elements = document.getElementsByClassName("card-body");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "";
    }

    var element2 = document.getElementsByClassName("dyn_class");
    while (element2.length > 0) {
        element2[0].parentNode.removeChild(element2[0]);


    }

    activeBox = 0;
    clearTotalBalance();

}

function clearTotalBalance() {

    balance = initialBalance;
    document.getElementById("balUpdate").innerHTML = balance;

    document.getElementById("bal1").innerHTML = "";
    document.getElementById("bal2").innerHTML = "";
    document.getElementById("bal3").innerHTML = "";
    document.getElementById("bal4").innerHTML = "";
    document.getElementById("bal5").innerHTML = "";
    document.getElementById("bal6").innerHTML = "";
    document.getElementById("badge1").innerHTML = "";

}


document.getElementById("balUpdate").innerHTML = balance;