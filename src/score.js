window.onload = function() {
    let scoreValue = getScoreValue();
    setScoreValue(scoreValue);
};

function getScoreValue() {
    var href = window.location.href;
    var url = new URL(href);
    let value = url.searchParams.get('value');
    return validateScore(value);
}

function validateScore(score) {
    if(score === null || score === undefined || score === '') {
        return 'Value not specified!';
    } else {
        return !isNaN(score) ? score : 'Value is not a number!';
    }
}

function setScoreValue(scoreValue) {
    let scoreContainer = getScoreContainer();
    scoreContainer.innerHTML = scoreValue;
}

function getScoreContainer() {
    return document.querySelector('#selected-score');
}