const generateBtn = document.querySelector("#generateBtn");
const passwordText = document.querySelector("#passwordText");

const defaultPassword = "Navoday@16_10_2002";
passwordText.textContent = defaultPassword;

const lengthSlider = document.querySelector("#lengthSlider");
const lengthDisplay = document.querySelector("#lengthDisplay");
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const numbers = document.querySelector("#numbers");
const symbols = document.querySelector("#symbols");
const copyBtn = document.querySelector("#copyBtn");
const copiedMessage = document.querySelector("#copiedMessage");

lengthDisplay.textContent = lengthSlider.value;

lengthSlider.addEventListener("input", function () {
  lengthDisplay.textContent = this.value;
});

const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numbersChars = "0123456789";
const symbolsChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

function syncCheckboxesWithPassword(password) {
  uppercase.checked = /[A-Z]/.test(password);
  lowercase.checked = /[a-z]/.test(password);
  numbers.checked = /[0-9]/.test(password);
  symbols.checked = /[^A-Za-z0-9]/.test(password);
}

syncCheckboxesWithPassword(defaultPassword);

function generatePassword() {
  let chars = "";
  let password = "";

  if (uppercase.checked) chars += uppercaseChars;
  if (lowercase.checked) chars += lowercaseChars;
  if (numbers.checked) chars += numbersChars;
  if (symbols.checked) chars += symbolsChars;

  if (chars === "") {
    alert("Please select at least one character type!");
    return;
  }

  const length = parseInt(lengthSlider.value, 10);

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  passwordText.textContent = password;
}

copyBtn.addEventListener("click", () => {
  const password = passwordText.textContent;
  if (!password) return;

  navigator.clipboard.writeText(password).then(() => {
    copiedMessage.classList.add("show");
    setTimeout(() => {
      copiedMessage.classList.remove("show");
    }, 1500);
  });
});

generateBtn.addEventListener("click", generatePassword);
