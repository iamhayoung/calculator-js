const display = document.querySelector('#js-display');
const buttons = Array.from(document.querySelectorAll('button'));

let saveNumAndOperators = [];
let firstNumClick = true;

// 계산하는거
const compute = () => {
  console.log('계산하자아아아아')
}

const saveOperator = (operator) => {
  saveNumAndOperators.push = operator;
  console.log(saveNumAndOperators)
}

// 버튼 누르면 숫자를 디스플레이에 출력하는거
const printNum = (num) => {
  console.log(num)
  if (firstNumClick && num === 0) {
    return;
  } else {
    firstNumClick = false;
    console.log('3')
    display.innerText += num;
  }
}

// 클리어하는거
const clearDisplay = () => {
  display.innerText = "0";
  saveNumAndOperators = [];
}

buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    switch (button.dataset.type) {
      case 'c':
        clearDisplay();
        break;
      case 'operator':
        let operator = event.target.textContent;
        saveOperator(operator);
        break;
      case 'equals':
        compute();
        break;
      default:
        let num = parseInt(event.target.textContent);
        printNum(num);
    }
  })
})