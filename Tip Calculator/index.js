const bill = document.getElementById("bill-amount");
const tip = document.getElementById("tip-percent");
const calcBtn = document.getElementById("calc-btn");
const result = document.getElementById("result");

calcBtn.addEventListener("click", () => {
  const billValue = parseInt(bill.value);
  const tipValue = parseInt(tip.value);
  if (!billValue || !tipValue) {
    window.alert("Please insert a value!");
  } else {
    const tipAmount = billValue + Math.floor((billValue * tipValue) / 100);

    result.innerHTML = `Total: <span id="output">$${tipAmount}</span>`;
  }
});
