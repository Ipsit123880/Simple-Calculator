var result = document.getElementById('result');

function addChar(char) {
    result.value += char;
}

function clearDisplay() {
    result.value = '';
}

function calculate() {
    var expression = result.value;
    var answer = eval(expression);
    result.value = answer;
}
