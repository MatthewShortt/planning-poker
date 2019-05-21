window.onload = function() {
  let planningPokerButton = getPlanningPokerButtons();
  console.log('Planning Poker Buttons: ', planningPokerButton);
};

function getPlanningPokerButtons() {
    return document.querySelectorAll('.planning-poker-button');
}

