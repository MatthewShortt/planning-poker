window.onload = function() {
    let scoreValue = getScoreValue();
    setScoreValue(scoreValue);
};

function getScoreValue() {
    var href = window.location.href;
    var url = new URL (href);
    let value = url.searchParams.get('value');
    return value !== null ? value : 'Value not specified!';
}

function setScoreValue(scoreValue) {
    let scoreContainer = getScoreContainer();
    scoreContainer.innerHTML = scoreValue;
}

function getScoreContainer() {
    return document.querySelector('#selected-score');
}