const display = document.querySelector('#js-display');
const buttons = Array.from(document.querySelectorAll('button'));

// 값 담는곳
let memory = "";

// 계산하는거
const compute = () => {
  memory = (new Function('return ' + memory))();
}

// 연산자 누르면 연산자를 memory에 담음
const appendOperator = (operator) => {
  memory += operator;
}

// 숫자 누르면 숫자를 memory에 담음
const appendNumber = (num) => {
  memory += num;
}

// memory에 담긴 값을 출력
const updateDisplay = () => {
  display.value = memory;
}

// memory를 빈칸으로 만들어주면서 클리어하는거
const clearDisplay = () => {
  display.value = "0";
  memory = "";
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
        updateDisplay()
        break;
      default:
        let num = parseInt(event.target.innerText);
        appendNumber(num);
        updateDisplay();
    }
  })
})