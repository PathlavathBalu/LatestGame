const constants = {
    initialBalance : 5000,
    balance : 5000,
    initialBalance :5000,
    totalBet : 0,
    activeBox :0,
    activeTile :0,
    chipImgs : {
        chip1000: "images/1000.png",
        chip500: "images/500.png",
        chip100: "images/100.png",
        chip50: "images/50.png",
        chip25: "images/25.png",
        chip10: "images/10.png"
      },
    boxIds :{
        "1": "card1",
        "2": "card2",
        "3": "card3",
        "4": "card4",
        "5": "card5",
        "6": "card6"
      },
      activeBoxes : {
        card1: "bal1",
        card2: "bal2",
        card3: "bal3",
        card4: "bal4",
        card5: "bal5",
        card6: "bal6"
      },
      chipCounters :{
        chip1000: "chip1000cntr",
        chip500: "chip500cntr",
        chip100: "chip100cntr",
        chip50: "chip25cntr",
        chip25: "chip50cntr",
        chip10: "chip10cntr"
      },
      chipValues : {
        chip1000: 1000,
        chip500: 500,
        chip100: 100,
        chip50: 50,
        chip25: 25,
        chip10: 10
      },
      cntrClasses :{
        chip1000: "leftTopCntr",
        chip500: "leftMiddleCntr",
        chip100: "leftBottomCntr",
        chip50: "rightTopCntr",
        chip25: "rightMiddleCntr",
        chip10: "rightBottomCntr"
      },
      
      chipClasses : {
        chip1000: "leftTopChip",
        chip500: "leftMiddleChip",
        chip100: "leftBottomChip",
        chip50: "rightTopChip",
        chip25: "rightMiddleChip",
        chip10: "rightBottomChip"
      },
    boxes : [{}, {}, {}, {}, {}, {}],
    
      chipCntrValues : {
        chip1000cntr: 1000,
        chip500cntr: 500,
        chip100cntr: 100,
        chip50cntr: 50,
        chip25cntr: 25,
        chip10cntr: 10
      }

};
var activeTile = constants.activeTile;
var activeBox  = constants.activeBox;


function getElementDetails(elementId) {
  if (elementId != undefined) {
    let tileNo = elementId.substr(0, 5);
    let chipValue = Number(elementId.substr(9));
    let chipCntr = elementId + "cntr";
    let cardIndex = tileNo.substr(4,1)-1;

    console.log(' chipCntr  : ' + chipCntr);

    let cntrValue = document.getElementById(chipCntr).innerHTML;

    return {
      tileNo: tileNo,
      chipValue: chipValue,
      chipCntr: chipCntr,
      cntrValue: cntrValue,
      cardIndex : cardIndex

    };
  }
}



function clickTile(tileNo) {
  let box = document.getElementById(constants.boxIds[tileNo]);
  
  if (activeBox !=0){
    let previousBox = document.getElementById(activeBox);
    previousBox.style.background='';
  }

  box.style.background = "red";
  activeBox = constants.boxIds[tileNo];
  activeTile = tileNo;

};

function createChipCounterElement(chipId){

    let cntrClass = constants.cntrClasses[chipId];
    let newCntr = document.createElement("div");
    newCntr.setAttribute("class", cntrClass +" " + 'removable');


    let elementId = activeBox + chipId + "cntr"
    newCntr.setAttribute("id", elementId);
    
    let parentElement = document.getElementById(activeBox);
    parentElement.appendChild(newCntr);
    

};

function createChipElement(chipId){



    let chipClass = constants.chipClasses[chipId];

    console.log('chipId ' + chipId);
    console.log('chipClass ' + chipClass);


    var newElement = document.createElement("img");
    newElement.setAttribute("src", constants.chipImgs[chipId]);
    newElement.setAttribute("class", chipClass +" " + 'removable');

    let elementId = activeBox+chipId;
    newElement.setAttribute("id", elementId);

    let parentElement = document.getElementById(activeBox);
    parentElement.appendChild(newElement);

    

    newElement.onclick = (function() {
      newElement.addEventListener("click", function() {
     
        console.log("removing the chip");
        removeChip(elementId);
       
      });
    })();
};


function clickChip(chipId) {

    console.log('active tile is '  +activeTile);

  if (activeTile === 0) {
    alert("Please select the number you want to bet on");
  } else {
    if (checkBalance(constants.chipValues[chipId])) {
                     
      let boxObj = constants.boxes[activeTile - 1];

      console.log('box object is ' + boxObj);

      console.log('boxObj.totalAmount ' +boxObj.totalAmount);

      if (boxObj.totalAmount != undefined && boxObj.totalAmount !=0) {

        console.log('inside if');

        let chipcntr = boxObj[constants.chipCounters[chipId]];

        console.log('chipcntr   is ' + chipcntr);

        if (chipcntr === 0) {
          createChipElement(chipId);
          createChipCounterElement(chipId);
        }

        chipcntr++;
        boxObj[constants.chipCounters[chipId]] = chipcntr;

        let totalAmt = boxObj.totalAmount;

        boxObj.totalAmount = totalAmt + constants.chipValues[chipId];

        constants.boxes.splice(activeTile - 1, 1, boxObj);

        document.getElementById(
          activeBox + chipId + "cntr"
        ).innerHTML = chipcntr;

       
      } else {
        console.log("inside else");





        let boxValues = {
          id: "",
          chip1000cntr: 0,
          chip500cntr: 0,
          chip100cntr: 0,
          chip50cntr: 0,
          chip25cntr: 0,
          chip10cntr: 0,
          totalAmount: 0,
          isActive: "N"
        };

        boxValues.isActive = "Y";
        boxValues[constants.chipCounters[chipId]] = 1;
        boxValues.totalAmount = constants.chipValues[chipId];
        boxValues.id = constants.boxIds[activeTile];

        console.log(boxValues);
        constants.boxes.splice(activeTile - 1, 1, boxValues);
        //console.log(boxes);

        createChipElement(chipId);
        createChipCounterElement(chipId);
        document.getElementById(activeBox + chipId + "cntr").innerHTML = 1;
      }
      reduceBalance(constants.chipValues[chipId]);
      increaseBoxAmount(
        getElementDetails(activeBox + chipId).chipValue,
        getElementDetails(activeBox + chipId).tileNo
      );
    } else {
      alert("You dont have enough balance to place this bet !");
    }
  }
}

function updateBox(element){


    let cardIndex = Number(element.cardIndex);

    console.log('card index ' + cardIndex);
    console.log('element.chipcntr ' + element.chipcntr);


    let boxValues = constants.boxes[cardIndex];


     console.log('boxValues[element.chipcntr] = ' + boxValues[element.chipcntr]);
     // boxValues.isActive = "Y";
      boxValues[element.chipcntr]= boxValues[element.chipcntr]-1;

      console.log('element ' + element);
      
      console.log('boxValues.totalAmount ' +boxValues.totalAmount);
      console.log('element.chipValue ' +element.chipValue);
      
      boxValues.totalAmount = boxValues.totalAmount-element.chipValue;


      boxValues.id = cardIndex+1;

      console.log(boxValues);
      constants.boxes.splice(activeTile - 1, 1, boxValues);

}

function removeChip(chip) {

    console.log('chip  ' + chip);
    
    
  let element = getElementDetails(chip);
  

  updateBox(element);

      

  if (element != undefined) {
    if (element.cntrValue > 1) {
      document.getElementById(element.chipCntr).innerHTML =
        element.cntrValue - 1;
    } else {
      removeElement(chip);
      removeElement(element.chipCntr);
    }
    increaseBalance(element.chipValue);
    reduceBoxAmount(element.chipValue, element.tileNo);

  }
  
  



}

function removeElement(elementId) {
  // Removes an element from the document
  var element = document.getElementById(elementId);
  element.parentNode.removeChild(element);
}

function reduceBalance(betAmount) {
    
    constants.balance = constants.balance - betAmount;
  document.getElementById("balUpdate").innerHTML = constants.balance;
}

function increaseBalance(betAmount) {
    constants.balance = constants.balance + betAmount;
    document.getElementById("balUpdate").innerHTML = constants.balance;
  }


function reduceBoxAmount(betAmount, tileNo) {
    // boxAmount = boxAmounts[activeBox];
  
    // console.log(boxAmount);
    let amt = document.getElementById(constants.activeBoxes[tileNo]).innerHTML;
    document.getElementById(constants.activeBoxes[tileNo]).innerHTML = Number(amt) - betAmount;
  }

  function increaseBoxAmount(betAmount, tileNo) {
    let amt = document.getElementById(constants.activeBoxes[tileNo]).innerHTML;
    document.getElementById(constants.activeBoxes[tileNo]).innerHTML = Number(amt) + betAmount;
  }


function checkBalance(valueOfChip) {
 

  if (constants.balance < valueOfChip) {
    return false;
  } else {
    return true;
  }
}



function clearAll(){
    
    for(i=0;i<constants.boxes.length;i++){

        let betAmt = constants.boxes[i].totalAmount;
        if (betAmt>0){
            increaseBalance(betAmt);
        } 
    }
    
    

    let cards = Object.values(constants.boxIds);
    console.log(cards);
    for(i=0;i<cards.length;i++){
        let element = document.getElementById(cards[i]);
        let childElements =  element.getElementsByClassName('removable');


       let length = childElements.length; 
       for(j=0;j<length; j++){
           let childElement = childElements[0];
           childElement.parentNode.removeChild(childElement);
      }

    }

    constants.boxes = [{},{},{},{},{},{}];
    clearTotalBalance();
    constants.activeBox=0;
    constants.activeTile=0;

  
}


function clearTotalBalance() {
  //constants.balance = constants.initialBalance;
  document.getElementById("balUpdate").innerHTML = constants.balance;

  document.getElementById("bal1").innerHTML = "";
  document.getElementById("bal2").innerHTML = "";
  document.getElementById("bal3").innerHTML = "";
  document.getElementById("bal4").innerHTML = "";
  document.getElementById("bal5").innerHTML = "";
  document.getElementById("bal6").innerHTML = "";
  //document.getElementById("badge").innerHTML = "";
}

//document.getElementById("balUpdate").innerHTML = constants.balance;
