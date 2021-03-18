const display = document.querySelector('#js-display');
const buttons = Array.from(document.querySelectorAll('button'));

let firstNumber = "";
let secondNumber = "";
let firstClick; // 플래그
let secondClick; // 플래그
let resultValue;

const handleCompute = (operator) => {
  console.log(operator)
  switch (operator) {
    case '+':
      // 더하기 할떄 처리
      resultValue = firstNumber + secondNumber;
      console.log('+')
      console.log(`+ ${resultValue}`)
      outputDisplay(resultValue)
      break;
    case '-':
      // 빼기 할때 처리
      resultValue = firstNumber - secondNumber;
      console.log('-')
      console.log(`- ${resultValue}`)
      outputDisplay(resultValue)
      break;
    case '*':
      // 곱하기 할때 처리
      resultValue = firstNumber * secondNumber;
      console.log('*')
      console.log(`* ${resultValue}`)
      outputDisplay(resultValue)
      break;
    case '/':
      // 나누기할떄 처리
      resultValue = firstNumber / secondNumber;
      console.log('/')
      console.log(`/ ${resultValue}`)
      outputDisplay(resultValue)
      break;
    default:
      break;
  }
}

const outputDisplay = (resultValue) => {
  display.value = resultValue;
}

const handleOperator = (operator) => {
  if (!firstClick) {
    firstClick = true; // operator를 눌러주면 firstClick이 트루로 바뀌면서 printNum의 else가 실행됨
  }
  if (firstClick && secondClick) {
    // printNum에서 secondNumber가 입력되면 트루가 됨과 동시에 실행됨
    console.log('compute실행!')
    handleCompute(operator);
  }
}

const printNum = (num) => {
  // firstClick의 기본값은 null이기때문에 false. 즉 첫실행은 참에 해당됨
  if (!firstClick) {
    console.log('firstclick')
    firstNumber = firstNumber + num;
    display.value = firstNumber;
  } else {
    console.log('secondclick')
    secondNumber = secondNumber + num;
    display.value = secondNumber;
    secondClick = true;
  }
}

const clearDisplay = () => {
  firstNumber = "";
  secondNumber = "";
  firstClick = false;
  secondClick = false;
  display.value = 0;
}

buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    switch (button.dataset.type) {
      case 'c':
        clearDisplay();
        break;
      case 'operator':
        let operator = event.target.innerText;
        handleOperator(operator);
        break;
      case 'equals':
        handleCompute();
        break;
      default:
        let num = parseInt(event.target.innerText, 10);
        printNum(num);
    }
  })
})