const rollButton = document.getElementById("roll");
const resetButton = document.getElementById("reset");
const result = document.getElementById("diceResult");
const diceImage = document.getElementById("diceImages");

let sum = 0;

const roll = () => {
  //Lấy số xúc sắc
  const diceNumbers = document.getElementById("dice-num").value;
  console.log(diceNumbers);
  for (let i = 0; i < diceNumbers; i++) {
    //Tung xúc sắc
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    sum += diceRoll;
    console.log(diceRoll);
    // Tạo một thẻ image mới rồi gắn vào diceImage
    const image = document.createElement("img");
    image.src = `\\Dice Roller\\image\\dice${diceRoll}.png`; //Xài cái gì đó để gán diceRoll vào để lấy hình
    diceImage.appendChild(image);
  }
  result.textContent = sum;
};
//Xóa những cục xúc sắc đã lắc và đặt lại kết quả gacha
const reset = () => {
  sum = 0;
  result.textContent = 0;
  diceImage.innerHTML = "";
};

rollButton.addEventListener("click", roll);
resetButton.addEventListener("click", reset);
