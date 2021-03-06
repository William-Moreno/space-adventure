'use strict';


// global variables

var planetOne = document.getElementById('world-one');
var planetTwo = document.getElementById('world-two');
var planetThree = document.getElementById('world-three');
var planetFour = document.getElementById('world-four');
var planetFive = document.getElementById('world-five');
var planetSix = document.getElementById('world-six');
var planetSeven = document.getElementById('world-seven');
var planetEight = document.getElementById('world-eight');
var planetNine = document.getElementById('world-nine');
var planetTen = document.getElementById('world-ten');
var plotCourse = document.getElementById('player-ship');
var planetGoal = document.getElementById('finish-space');
var displayEvent = document.getElementById('display-event');
var cardTitleHolder = document.getElementById('event-title');
var cardTextHolder = document.getElementById('event-text');
var imageContainer = document.getElementById('image-holder');
var cardImage = document.getElementById('event-image');
var btnContainer = document.getElementById('button-container');
var allPlanets = [planetOne, planetTwo, planetThree, planetFour, planetFive, planetSix, planetSeven, planetEight, planetNine, planetTen];
var navPoints = ['nav-one', 'nav-two', 'nav-three', 'nav-four', 'nav-five', 'nav-six', 'nav-seven', 'nav-eight', 'nav-nine', 'nav-ten', 'nav-start'];
var functionArray = [planetOneZoom, planetTwoZoom, planetThreeZoom, planetFourZoom, planetFiveZoom, planetSixZoom, planetSevenZoom, planetEightZoom, planetNineZoom, planetTenZoom];
var planetFuelCounter = 0;
var navIndex = 10;
var successText;
var failureText;
var currentEvent;
var userName;

// game start

function startGame(){
    tabulatePoints();
    removeNavPoints();
    plotCourse.classList.add('nav-start');
    planetOne.addEventListener('click', planetOneZoom);
    planetTwo.addEventListener('click', planetTwoZoom);
    planetOne.classList.add('easy-choice');
    planetTwo.classList.add('easy-choice');
    blankCard();
}

// arrive planet 1

function planetOneZoom() {
    removeHalos();
    removeNavPoints();
    navIndex = 0;
    plotCourse.classList.add('nav-one');

    if (planetOne.classList.contains('one')) {
        planetOne.classList.remove('one');
        cardImage.classList.remove('vanish');
        fuelDecrement(1);
        totalStatCheckLand();
        tabulatePoints();

        if(userLost == true){
            planetOne.classList.add('one');
            loseGame();
        }

        removeChart();
        generateChart();
        planetFuelCounter = 1;
        removePlanetListeners();

        if(userLost == false){
            loadEvent();
        }

        displayEvent.classList.add('zoom');

    } else {
        planetOne.classList.add('one');
        displayEvent.classList.remove('zoom');
        blankCard();
        planetTwo.classList.add('easy-choice');
        planetThree.classList.add('med-choice');
        planetFour.classList.add('med-choice');
        planetFive.classList.add('med-choice');
        planetTwo.addEventListener('click', planetTwoZoom);
        planetThree.addEventListener('click', planetThreeZoom);
        planetFour.addEventListener('click', planetFourZoom);
        planetFive.addEventListener('click', planetFiveZoom);
    }
}

// arrive planet 2

function planetTwoZoom() {
    removeHalos();
    removeNavPoints();
    navIndex = 1;
    plotCourse.classList.add('nav-two');

    if (planetTwo.classList.contains('two')) {
        planetTwo.classList.remove('two');
        cardImage.classList.remove('vanish');
        fuelDecrement(1);
        tabulatePoints();
        totalStatCheckLand();

        if(userLost == true){
            planetTwo.classList.add('two');
            loseGame();
        }

        removeChart();
        generateChart();
        planetFuelCounter = 2;
        removePlanetListeners();

        if(userLost == false){
            loadEvent();
        }

        displayEvent.classList.add('zoom');

    } else {
        planetTwo.classList.add('two');
        displayEvent.classList.remove('zoom');
        blankCard();
        planetFive.classList.add('easy-choice');
        planetSix.classList.add('med-choice');
        planetFive.addEventListener('click', planetFiveZoom);
        planetSix.addEventListener('click', planetSixZoom);
    }
}

// arrive planet 3

function planetThreeZoom() {
    removeHalos();
    removeNavPoints();
    navIndex = 2;
    plotCourse.classList.add('nav-three');

    if (planetThree.classList.contains('three')) {
        planetThree.classList.remove('three');
        cardImage.classList.remove('vanish');
        fuelDecrement(2);
        tabulatePoints();
        totalStatCheckLand();

        if(userLost == true){
            planetThree.classList.add('three');
            loseGame();
        }

        removeChart();
        generateChart();
        planetFuelCounter = 3;
        removePlanetListeners();

        if(userLost == false){
            loadEvent();
        }

        displayEvent.classList.add('zoom');

    } else {
        planetThree.classList.add('three');
        displayEvent.classList.remove('zoom');
        blankCard();
        planetFour.classList.add('easy-choice');
        planetFour.addEventListener('click', planetFourZoom);
    }
}

// arrive planet 4

function planetFourZoom() {
    removeHalos();
    removeNavPoints();
    navIndex = 3;
    plotCourse.classList.add('nav-four');

    if (planetFour.classList.contains('four')) {
        planetFour.classList.remove('four');
        cardImage.classList.remove('vanish');

        if(planetFuelCounter === 1){
            fuelDecrement(2);

        }else{
            fuelDecrement(1);
        }

        tabulatePoints();
        totalStatCheckLand();

        if(userLost == true){
            planetFour.classList.add('four');
            loseGame();
        }

        removeChart();
        generateChart();
        planetFuelCounter = 4;
        removePlanetListeners();

        if(userLost == false){
            loadEvent();
        }

        displayEvent.classList.add('zoom');

    } else {
        planetFour.classList.add('four');
        displayEvent.classList.remove('zoom');
        blankCard();
        planetFive.classList.add('med-choice');
        planetSeven.classList.add('easy-choice');
        planetEight.classList.add('hard-choice');
        planetFive.addEventListener('click', planetFiveZoom);
        planetSeven.addEventListener('click', planetSevenZoom);
        planetEight.addEventListener('click', planetEightZoom);
    }
}

// arrive planet 5

function planetFiveZoom() {
    removeHalos();
    removeNavPoints();
    navIndex = 4;
    plotCourse.classList.add('nav-five');

    if (planetFive.classList.contains('five')) {
        planetFive.classList.remove('five');
        cardImage.classList.remove('vanish');

        if(planetFuelCounter === 2){
            fuelDecrement(1);

        }else{
            fuelDecrement(2);
        }

        tabulatePoints();
        totalStatCheckLand();

        if(userLost == true){
            planetFive.classList.add('five');
            loseGame();
        }
        
        removeChart();
        generateChart();
        planetFuelCounter = 5;
        removePlanetListeners();

        if(userLost == false){
            loadEvent();
        }

        displayEvent.classList.add('zoom');

    } else {
        planetFive.classList.add('five');
        displayEvent.classList.remove('zoom');
        blankCard();
        planetSix.classList.add('med-choice');
        planetSeven.classList.add('easy-choice');
        planetSix.addEventListener('click', planetSixZoom);
        planetSeven.addEventListener('click', planetSevenZoom);
    }
}

// arrive planet 6

function planetSixZoom() {
    removeHalos();
    removeNavPoints();
    navIndex = 5;
    plotCourse.classList.add('nav-six');

    if (planetSix.classList.contains('six')) {
        planetSix.classList.remove('six');
        cardImage.classList.remove('vanish');

        if(planetFuelCounter === 7){
            fuelDecrement(1);

        }else{
            fuelDecrement(2);
        }

        tabulatePoints();
        totalStatCheckLand();

        if(userLost == true){
            planetSix.classList.add('six');
            loseGame();
        }
        removeChart();
        generateChart();
        planetFuelCounter = 6;
        removePlanetListeners();

        if(userLost == false){
            loadEvent();
        }

        displayEvent.classList.add('zoom');

    } else {
        planetSix.classList.add('six');
        displayEvent.classList.remove('zoom');
        blankCard();
        planetNine.classList.add('hard-choice');
        planetTen.classList.add('easy-choice');
        planetNine.addEventListener('click', planetNineZoom);
        planetTen.addEventListener('click', planetTenZoom);
    }
}

// arrive planet 7

function planetSevenZoom() {
    removeHalos();
    removeNavPoints();
    navIndex = 6;
    plotCourse.classList.add('nav-seven');

    if (planetSeven.classList.contains('seven')) {
        planetSeven.classList.remove('seven');
        cardImage.classList.remove('vanish');
        fuelDecrement(1);
        tabulatePoints();
        totalStatCheckLand();

        if(userLost == true){
            planetSeven.classList.add('seven');
            loseGame();
        }

        removeChart();
        generateChart();
        planetFuelCounter = 7;
        removePlanetListeners();

        if(userLost == false){
            loadEvent();
        }

        displayEvent.classList.add('zoom');

    } else {
        planetSeven.classList.add('seven');
        displayEvent.classList.remove('zoom');
        blankCard();
        planetSix.classList.add('easy-choice');
        planetEight.classList.add('med-choice');
        planetNine.classList.add('hard-choice');
        planetSix.addEventListener('click', planetSixZoom);
        planetEight.addEventListener('click', planetEightZoom);
        planetNine.addEventListener('click', planetNineZoom);
    }
}

// arrive planet 8

function planetEightZoom() {
    removeHalos();
    removeNavPoints();
    navIndex = 7;
    plotCourse.classList.add('nav-eight');

    if (planetEight.classList.contains('eight')) {
        planetEight.classList.remove('eight');
        cardImage.classList.remove('vanish');

        if(planetFuelCounter === 7){
            fuelDecrement(2);

        }else{
            fuelDecrement(3);
        }

        tabulatePoints();
        totalStatCheckLand();

        if(userLost == true){
            planetEight.classList.add('eight');
            loseGame();
        }

        removeChart();
        generateChart();
        planetFuelCounter = 8;
        removePlanetListeners();

        if(userLost == false){
            loadEvent();
        }

        displayEvent.classList.add('zoom');

    } else {
        planetEight.classList.add('eight');
        displayEvent.classList.remove('zoom');
        blankCard();
        planetGoal.classList.add('final-choice');
        planetGoal.addEventListener('click', planetGoalZoom);
    }
}

// arrive planet 9

function planetNineZoom() {
    removeHalos();
    removeNavPoints();
    navIndex = 8;
    plotCourse.classList.add('nav-nine');

    if (planetNine.classList.contains('nine')) {
        planetNine.classList.remove('nine');
        cardImage.classList.remove('vanish');

        if(planetFuelCounter === 10){
            fuelDecrement(2);

        }else{
            fuelDecrement(3);
        }

        tabulatePoints();
        totalStatCheckLand();

        if(userLost == true){
            planetNine.classList.add('nine');
            loseGame();
        }

        removeChart();
        generateChart();
        planetFuelCounter = 9;
        removePlanetListeners();

        if(userLost == false){
            loadEvent();
        }

        displayEvent.classList.add('zoom');

    } else {
        planetNine.classList.add('nine');
        displayEvent.classList.remove('zoom');
        blankCard();
        planetGoal.classList.add('final-choice');
        planetGoal.addEventListener('click', planetGoalZoom);
    }
}

// arrive planet 10

function planetTenZoom() {
    removeHalos();
    removeNavPoints();
    navIndex = 9;
    plotCourse.classList.add('nav-ten');

    if (planetTen.classList.contains('ten')) {
        planetTen.classList.remove('ten');
        cardImage.classList.remove('vanish');
        fuelDecrement(1);
        totalStatCheckLand();

        if(userLost == true){
            planetTen.classList.add('ten');
            loseGame();
        }

        tabulatePoints();
        removeChart();
        generateChart();
        planetFuelCounter = 10;
        removePlanetListeners();

        if(userLost == false){
            loadEvent();
        }

        displayEvent.classList.add('zoom');

    } else {
        planetTen.classList.add('ten');
        displayEvent.classList.remove('zoom');
        blankCard();
        planetNine.classList.add('med-choice');
        planetNine.addEventListener('click', planetNineZoom);
    }
}

// arrive goal

function planetGoalZoom() {
    removeNavPoints();
    plotCourse.classList.add('nav-goal');
    cardImage.classList.remove('vanish');
    fuelDecrement(1);
    totalStatCheckLand();
    tabulatePoints();

    if(userLost == true){
        loseGame();
    }

    removeChart();
    generateChart();
    planetFuelCounter = 11;
    var congrats = document.createElement('h3');
    congrats.textContent = 'Congratulations!! You Made It!';
    var winMsg = document.createElement('p');
    winMsg.textContent = `Well done Captain ${userName}!! You have escaped the 'Lost Sector' with at least a portion of your crew, enough fuel to return home, and any extra points you may have come across.`;
    cardTitleHolder.appendChild(congrats);
    cardTextHolder.appendChild(winMsg);
    cardImage.src = 'img/fireworks-hwd.jpg';
    displayEvent.classList.add('winner');
    displayEvent.classList.add('zoom2');
    newGame();
    tabulatePoints();
    returnLeaderBoardLs();
    new HighScore(userName,totalPoints);
    leaderBoardStoreLs();
    document.getElementById('start-new-game').addEventListener('click', refreshNewGame);
    document.getElementById('new-captain').addEventListener('click', refreshNewGame);
}

// zooms out from the current planet and prepares the board for the next move

function planetZoomOut(){
    var cardDisplay = document.getElementById('event-card');
    cardDisplay.classList.remove('success');
    cardDisplay.classList.remove('failure');
    functionArray[navIndex]();
}

// functions to move ship and to remove halos and event listeners

function removeHalos(){
    for(var i = 0 ; i < allPlanets.length ; i++){
        allPlanets[i].classList.remove('easy-choice');
        allPlanets[i].classList.remove('med-choice');
        allPlanets[i].classList.remove('hard-choice');
    }
}

function removeNavPoints(){
    for(var i = 0 ; i < navPoints.length ; i++){
        plotCourse.classList.remove(navPoints[i]);
    }
}

function removePlanetListeners(){
    for(var i = 0 ; i < allPlanets.length ; i++){
        allPlanets[i].removeEventListener('click', functionArray[i]);
    }
}

// render random event card from array

function loadEvent(){
    currentEvent = eventCardSelector();
    successText = currentEvent.gainText;
    failureText = currentEvent.lossText;
    var eventTitle = document.createElement('h3');
    eventTitle.textContent = currentEvent.name;
    cardImage.src = currentEvent.img;
    var eventText = document.createElement('p');
    eventText.textContent = currentEvent.textSummary;
    cardTitleHolder.appendChild(eventTitle);
    cardTextHolder.appendChild(eventText);
    createButtons();
}

// creates buttons on event cards

function createButtons(){

    if(currentEvent.type === 'no-action'){
        var confirm = document.createElement('button');
        confirm.id = 'confirm';
        confirm.textContent = 'Proceed';
        btnContainer.appendChild(confirm);

    } else {
        var acceptRisk = document.createElement('button');
        acceptRisk.id = 'accept';
        acceptRisk.textContent = 'Risk it!';
        var rejectRisk = document.createElement('button');
        rejectRisk.id = 'reject';
        rejectRisk.textContent = 'No Way!';
        btnContainer.appendChild(acceptRisk);
        btnContainer.appendChild(rejectRisk);
    }

    btnContainer.addEventListener('click', choiceClick);
}

// renders success card and event message

function successCard(){
    blankCard();
    cardImage.classList.remove('vanish');
    var cardDisplay = document.getElementById('event-card');
    cardDisplay.classList.add('success');
    var successTitle = document.createElement('h3');
    successTitle.textContent = 'SUCCESS!!!';
    cardImage.src = 'img/success-griffin.jpg';
    var successMsg = document.createElement('p');
    successMsg.textContent = currentEvent.gainText;
    cardTitleHolder.appendChild(successTitle);
    cardTextHolder.appendChild(successMsg);
    acknowledgeButton();
}

// renders failure card and event message

function failureCard(){
    blankCard();
    cardImage.classList.remove('vanish');
    var cardDisplay = document.getElementById('event-card');
    cardDisplay.classList.add('failure');
    var failureTitle = document.createElement('h3');
    failureTitle.textContent = 'FAILURE!!!';
    cardImage.src = 'img/failure-radford.jpg';
    var failureMsg = document.createElement('p');
    failureMsg.textContent = currentEvent.lossText;
    cardTitleHolder.appendChild(failureTitle);
    cardTextHolder.appendChild(failureMsg);
    acknowledgeButton();
}

// button to close success or failure card after reading result

function acknowledgeButton(){
    var confirm = document.createElement('button');
    confirm.id = 'confirm';
    confirm.textContent = 'Proceed';
    btnContainer.appendChild(confirm);
    btnContainer.addEventListener('click', acceptResults);
}

function acceptResults(e){
    var buttonId = e.target;

    if(buttonId.id === 'confirm'){
        btnContainer.removeEventListener('click', acceptResults);
        planetZoomOut();
    }
}       

// clear out the event card

function blankCard() {
    cardTitleHolder.innerHTML = '';
    cardImage.classList.add('vanish');
    cardImage.src = '';
    cardTextHolder.innerHTML = '';
    btnContainer.innerHTML = '';
}


// function to determine which event button was clicked and call the appropriate function

function choiceClick(e){
    var buttonId = e.target;

    if(buttonId.id === 'confirm'){
        btnContainer.removeEventListener('click', choiceClick);
        eventCardAction(currentEvent);
        planetZoomOut();

    } else if(buttonId.id === 'accept'){
        btnContainer.removeEventListener('click', choiceClick);
        eventCardAction(currentEvent);
        var eventResult = currentEvent.success;

        if(eventResult === true){
            successCard();

        } else {
            failureCard();

        }

    } else if(buttonId.id === 'reject'){
        btnContainer.removeEventListener('click', choiceClick);
        planetZoomOut();

    }

    tabulatePoints();
    totalStatCheckLeave();

    if(userLost == true){
        planetZoomOut();
        loseGame();
        returnLeaderBoardLs();
        new HighScore(userName,totalPoints);
        leaderBoardStoreLs();
    }

    removeChart();
    generateChart();
}

// functions to start a new game

function newGame(){
    var startNewGame = document.createElement('button');
    startNewGame.id = 'start-new-game';
    startNewGame.textContent = 'Play Again?';
    var newCaptain = document.createElement('button');
    newCaptain.id = 'new-captain';
    newCaptain.textContent = 'New Captain';
    btnContainer.appendChild(startNewGame);
    btnContainer.appendChild(newCaptain);
}

function refreshNewGame(e){
    var buttonClicked = e.target;
    btnContainer.removeEventListener('click', refreshNewGame);
    displayEvent.classList.remove('loser', 'winner', 'zoom2', 'zoom');

    if(buttonClicked.id === 'start-new-game'){
        plotCourse.classList.remove('nav-goal');
        plotCourse.classList.add('nav-start');
        planetGoal.classList.remove('final-choice');
        navIndex = 10;

        if(gameDifficulty === 'easy'){
            totalCrew = 5;
            totalFuel = 10;
        }

        if(gameDifficulty === 'medium'){
            totalCrew = 3;
            totalFuel = 7;
        }

        if(gameDifficulty === 'hard'){
            totalCrew = 2;
            totalFuel = 5;
        }

        totalPoints = 0;
        inGamePoints = 0
        resourcePoints = 0
        planetFuelCounter = 0;
        userLost = false;
        removeChart();
        generateChart();
        startGame();

    } else if(buttonClicked.id === 'new-captain'){
        window.location.reload();  
    }
}

function loseGame(){
    blankCard();
    cardImage.classList.remove('vanish');
    var gameOver = document.createElement('h3');
    var lossMsg = document.createElement('p');
    lossMsg.textContent = `I'm sorry Captain ${userName}. You have failed to escape the 'Lost Sector'...`;
    gameOver.textContent = 'Game Over!!!';
    cardTitleHolder.appendChild(gameOver);
    cardTextHolder.appendChild(lossMsg);
    cardImage.src = 'img/failure-radford.jpg';
    displayEvent.classList.add('loser');
    displayEvent.classList.add('zoom2');
    newGame();
    btnContainer.addEventListener('click', refreshNewGame);
}

// functions to get the user's name from the form and then hide it

function gameKickoff(e){
    e.preventDefault();
    userName = e.target.captname.value;
    var captainName = document.getElementById('player-title');
    captainName.textContent = `Captain ${userName}`;
    formElement.reset();
    formElement.removeEventListener('submit', gameKickoff);
    formRemoval();
    startGame();
}

function formRemoval(){
    var formClear = document.getElementById('form');
    formClear.classList.add('vanish');

}

generateChart();

var formElement = document.getElementById('new-player-form');
radioEasy.addEventListener('click', difficultyLevel)
radioMedium.addEventListener('click', difficultyLevel)
radioHard.addEventListener('click', difficultyLevel)
formElement.addEventListener('submit', gameKickoff);
