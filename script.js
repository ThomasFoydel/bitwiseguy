const outputEl = document.getElementById('output');
const outputBin = document.getElementById('output-bin');
const outputHex = document.getElementById('output-hex');
const displayOne = document.getElementById('display-one');
const displayTwo = document.getElementById('display-two');
const selector = document.getElementById('selector');
const inputOne = document.getElementById('input-one');
const inputTwo = document.getElementById('input-two');

const bitOps = {
  and: (a, b) => a & b,
  or: (a, b) => a | b,
  not: (a) => ~a,
  xor: (a, b) => a ^ b,
  leftShift: (a, b) => a << b,
  rightShift: (a, b) => a >> b,
  rightShiftZero: (a, b) => a >>> b,
};

const calculate = () => {
  const valueOne = inputOne.value;
  const valueTwo = inputTwo.value;
  const op = document.getElementById('selector').value;
  if (valueOne && valueTwo) {
    const output = bitOps[op](valueOne, valueTwo);
    outputEl.textContent = output;
    outputBin.textContent = (output >>> 0).toString(2);
    outputHex.textContent = Number(output).toString(16);
  }
};

selector.addEventListener('change', calculate);

const handleInput = ({ target: { value, id } }) => {
  const bin = (value >>> 0).toString(2);
  const hex = Number(value).toString(16);
  console.dir(displayOne);
  if (id === 'input-one') {
    displayOne.children[0].textContent = bin;
    displayOne.children[1].textContent = hex;
  } else if (id === 'input-two') {
    displayTwo.children[0].textContent = bin;
    displayTwo.children[1].textContent = hex;
  }
  calculate();
};

[inputOne, inputTwo].forEach((i) =>
  i.addEventListener('change', (e) => handleInput(e))
);
