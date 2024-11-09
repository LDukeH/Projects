const genBtn = document.getElementById("create");
const haveLowercase = document.getElementById("lowercase");
const haveUppercase = document.getElementById("uppercase");
const haveNumbers = document.getElementById("numbers");
const haveSymbols = document.getElementById("symbols");
const result = document.getElementById("result");

const generatePassword = () => {
  let allowedChars = "";
  let res = "";
  const passLength = document.getElementById("length").value;

  // Nếu lowercase checked thì nhận thêm string dưới đây, tương tự với các checkbox khác
  allowedChars += haveLowercase.checked ? "qwertyuiopasdfghjklzxcvbnm" : "";
  allowedChars += haveUppercase.checked ? "QWERTYUIOPASDFGHJKLZXCVBNM" : "";
  allowedChars += haveNumbers.checked ? "1234567890" : "";
  allowedChars += haveSymbols.checked ? "!@#$%^&*" : "";

  if (allowedChars.length === 0) {
    result.textContent = "Please select atleast 1 option";
    return;
  }

  for (let i = 0; i < passLength; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    res += allowedChars[randomIndex];
  }
  result.textContent = res;
};

genBtn.addEventListener("click", generatePassword);
