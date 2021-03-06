'use strict'
// video speed change on hover

// get video by id
var vid = document.getElementById('myVideo');

// new video speed on mouse over
function newVideoSpeed(){
  vid.playbackRate = 10;
}

// original video speed on mouse off
function orginalVideoSpeed(){
  vid.playbackRate = 1;
}

// create leader board
function makeLeaderBoard(){
 
  // call table
  var leaderboardParent = document.getElementById('leaderboard-list');
  // clear table
  leaderboardParent.innerHTML = ""; 
  // make row
  var trElement = document.createElement('tr');
  leaderboardParent.appendChild(trElement);

  //make a table header
  var thElement = document.createElement('th');
  thElement.textContent = 'Name';
  trElement.appendChild(thElement);

  //make a td
  var thElement = document.createElement('th')
  thElement.textContent = 'Score';
  //append it to table row
  trElement.appendChild(thElement);

  
  var trElement = document.createElement('tr');
  leaderboardParent.appendChild(trElement);
  
  
  for(var i=0; i<leaderBoard.length;i++){
    //make a table row
    var trElement = document.createElement('tr');
    leaderboardParent.appendChild(trElement);
    var tdElement = document.createElement('td');
    tdElement.textContent = `Captain ${leaderBoard[i].name}`;
    trElement.appendChild(tdElement);
    var tdTwoElement = document.createElement('td');
    tdTwoElement.textContent = leaderBoard[i].points;
    trElement.appendChild(tdTwoElement);
  }


}





var modal1 = document.getElementById("myModalOne");

// Get the label that opens the modal
var btn1 = document.getElementById("myBtnOne");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on the label, open the modal
btn1.onclick = function() {
  modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal1.style.display = "none";
}

// When the user clicks anywhere outside of mogal content close it up

window.addEventListener("click", function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
});

// ---------------------- second modal leaderboard ------------------------ 

var modal2 = document.getElementById("myModalTwo");

// Get the label that opens the modal
var btn2 = document.getElementById("myBtnTwo");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeA")[0];


// When the user clicks on the label, open the modal
btn2.onclick = function() {

  modal2.style.display = "block";
  returnLeaderBoardLs();
  makeLeaderBoard();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of mogal content close it up 

window.addEventListener("click", function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
});

// ---------------------- Third modal About the Creators ------------------------ 

var modal3 = document.getElementById("myModalThree");

// Get the label that opens the modal
var btn3 = document.getElementById("myBtnThree");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeB")[0];


// When the user clicks on the label, open the modal
btn3.onclick = function() {
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of mogal content close it up 

window.addEventListener("click", function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
});





