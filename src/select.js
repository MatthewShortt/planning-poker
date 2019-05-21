let planningPokerButtons = getPlanningPokerButtons();
addEventListeners(planningPokerButtons);

function getPlanningPokerButtons() {
    return document.querySelectorAll('.planning-poker-button');
}

function addEventListeners(nodeList) {
    nodeList.forEach(node => {
        node.addEventListener('click', function(event) {
            var target = event.target || event.srcElement;
            window.location = "score.html?value="+target.value;
        });
    });
}