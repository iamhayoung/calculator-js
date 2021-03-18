const display = document.querySelector('#js-display');
const buttons = Array.from(document.querySelectorAll('button'));

let memory = ""; // 값 담는곳
let checkOperator = true;

// 연산자 누르면 연산자를 memory에 담음
const appendOperator = (operator) => {
  // checkOperator가 true일때는 연산자 입력안되게함
  if (checkOperator) {
    return;
  }
  console.log(`appendOperator: ${memory}`)
  memory += operator;
  checkOperator = true;
  //곱하기 할때는 =버튼 안눌러도 결과가 떠야함
}

// 숫자 누르면 숫자를 memory에 담음
const appendNumber = (num) => {
  // 숫자입력할때는 checkOperator를 false로 해서 연산자 입력가능하게 함
  checkOperator = false;
  memory += num;
  console.log(`appendNumber: ${memory}`)
}

// memory에 담긴 결과값을 출력
const outputResult = () => {
  display.value = memory;
  console.log(`outputResult: ${memory}`)
}

// 계산하는거
const compute = () => {
  memory = (new Function('return ' + memory))();
  console.log(`compute: ${memory}`)
}

// memory를 빈칸으로 만들어주면서 클리어하는거
const clearDisplay = () => {
  display.value = "0";
  memory = "";
  checkOperator = true;
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
        appendOperator(operator);
        break;
      case 'equals':
        compute();
        outputResult()
        break;
      default:
        let num = parseInt(event.target.innerText);
        appendNumber(num);
        outputResult();
    }
  })
})