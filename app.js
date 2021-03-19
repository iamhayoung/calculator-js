const display = document.querySelector('#js-display');
const buttons = Array.from(document.querySelectorAll('button'));

let firstNumber = "";
let secondNumber = "";
let firstClick; // 플래그
let secondClick; // 플래그
let resultValue;
let saveOperator;

const handleCompute = () => {
  console.log(saveOperator)
  switch (saveOperator) {
    case '+':
      // 더하기 할떄 처리
      resultValue = firstNumber + secondNumber;
      console.log('+')
      console.log(`firstNumber ${firstNumber}`)
      console.log(`secondNumber ${secondNumber}`)
      console.log(`resultValue ${resultValue}`)
      return resultValue;
    case '-':
      // 빼기 할때 처리
      resultValue = firstNumber - secondNumber;
      console.log('-')
      console.log(`firstNumber ${firstNumber}`)
      console.log(`secondNumber ${secondNumber}`)
      console.log(`resultValue ${resultValue}`)
      return resultValue;
    case '*':
      // 곱하기 할때 처리
      resultValue = firstNumber * secondNumber;
      console.log('*')
      console.log(`firstNumber ${firstNumber}`)
      console.log(`secondNumber ${secondNumber}`)
      console.log(`resultValue ${resultValue}`)
      return resultValue;
    case '/':
      // 나누기할떄 처리
      resultValue = firstNumber / secondNumber;
      console.log('/')
      console.log(`firstNumber ${firstNumber}`)
      console.log(`secondNumber ${secondNumber}`)
      console.log(`resultValue ${resultValue}`)
      return resultValue;
    default:
      break;
  }
}

// = 눌렀을때 계산결과값 출력하는 함수 실행
const handleEquals = () => {
  console.log(`equals눌렀을때 firstClick의 플래그는 ${firstClick}`)
  console.log(`equals눌렀을때 secondClick의 플래그는 ${secondClick}`)
  if (firstClick && secondClick) {
    console.log('실행!')
    outputDisplay();
  }
  firstNumber = "";
  secondNumber = "";
  // firstClick = false;
  // secondClick = false;
}

const outputDisplay = () => {
  let result = handleCompute();
  console.log(`계싼결과 출력값 ${result}`)
  display.value = result;
  firstNumber = result;
  secondClick = false; // secondClick을 false로 바꿔줘서 outputDisplay가 실행안되게함
  secondNumber = "";
}

const handleOperator = (operator) => {
  saveOperator = operator;
  if (!firstClick) {
    firstClick = true; // operator를 눌러주면 firstClick이 트루로 바뀌면서 printNum의 else가 실행됨
  }
  if (firstClick && secondClick) {
    // printNum에서 secondNumber가 입력되면 secondClick이 트루가 됨과 동시에 실행됨
    console.log('compute실행!')
    outputDisplay();
  }
}

const printNum = (num) => {
  // firstClick의 기본값은 null이기때문에 false. 즉 첫실행은 참에 해당됨
  if (!firstClick) {
    // firstNumber는 firstClick이 false일때 실행됨
    console.log('firstclick')
    firstNumber = firstNumber + num;
    console.log(`firstnumber ${firstNumber}`)
    display.value = firstNumber;
  } else {
    // secondNumber는 firstClick이 true일때 실행됨
    console.log('secondclick')
    secondNumber = secondNumber + num;
    console.log(`secondnumber ${secondNumber}`)
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
        handleEquals();
        break;
      default:
        let num = parseInt(event.target.innerText, 10);
        printNum(num);
    }
  })
})