const applyBtn = document.getElementById('apply');
const outputEl = document.getElementById('output');
const outputBin = document.getElementById('output-bin');
const displayOne = document.getElementById('display-one');
const displayTwo = document.getElementById('display-two');
let inputOne = document.getElementById('input-one');
let inputTwo = document.getElementById('input-two');
const bitOps = {
  and: (a, b) => a & b,
  or: (a, b) => a | b,
  not: (a) => ~a,
  xor: (a, b) => a ^ b,
  leftShift: (a, b) => a << b,
  rightShift: (a, b) => a >> b,
  rightShiftZero: (a, b) => a >>> b,
};

applyBtn.addEventListener('click', () => {
  const valueOne = inputOne.value;
  const valueTwo = inputTwo.value;
  const op = document.getElementById('selector').value;
  if (valueOne && valueTwo) {
    const output = bitOps[op](valueOne, valueTwo);
    outputEl.textContent = output;
    outputBin.textContent = (output >>> 0).toString(2);
  }
});

const handleInput = ({ target: { value, id } }) => {
  const bin = (value >>> 0).toString(2);
  const hex = Number(value).toString(16);

  if (id === 'input-one') {
    displayOne.childNodes[0].textContent = bin;
    displayOne.childNodes[1].textContent = hex;
  } else if (id === 'input-two') {
    displayTwo.childNodes[0].textContent = bin;
    displayTwo.childNodes[1].textContent = hex;
  }
};

[inputOne, inputTwo].forEach((i) =>
  i.addEventListener('change', (e) => handleInput(e))
);
