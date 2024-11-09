const output = document.getElementById("output");
const convertBtn = document.getElementById("convert-btn");
//Lấy giá trị của hai nút radio
const celFar = document.getElementById("cel-to-far");
const farCel = document.getElementById("far-to-cel");

function convert() {
  const input = parseInt(document.getElementById("input-number").value);
  console.log(input);
  if (celFar.checked) {
    let res = (input * 9) / 5 + 32;
    output.innerText = res.toFixed(1);
  } else if (farCel.checked) {
    let res = (input - 32) * (5 / 9);
    output.innerText = res.toFixed(1);
  } else {
    output.innerText = "Please select an option";
  }
}

convertBtn.addEventListener("click", convert);
