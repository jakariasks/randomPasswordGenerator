const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "!@#%^$+?&*/";

// selectors
const passBox = document.querySelector("#password");
const totalChar = document.querySelector("#passLength");
const upperInput = document.querySelector("#upperCase");
const lowerInput = document.querySelector("#lowerCase");
const numberInput = document.querySelector("#numbers");
const symbolInput = document.querySelector("#symbols");
const btn = document.querySelector("#btn");

const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)];
};

const generatePassword = () => {
    let password = "";
    let charPool = "";

    if (upperInput.checked) {
        charPool += upperSet;
        password += getRandomData(upperSet);
    }

    if (lowerInput.checked) {
        charPool += lowerSet;
        password += getRandomData(lowerSet);
    }

    if (numberInput.checked) {
        charPool += numberSet;
        password += getRandomData(numberSet);
    }

    if (symbolInput.checked) {
        charPool += symbolSet;
        password += getRandomData(symbolSet);
    }

    // Fill the rest of the password length
    for (let i = password.length; i < totalChar.value; i++) {
        password += getRandomData(charPool);
    }

    // Shuffle the password to ensure random distribution
    password = shuffleString(password);

    // Update the password box with the generated password
    passBox.value = password;
    navigator.clipboard.writeText(password)
    

};

const shuffleString = (str) => {
    let arr = str.split('');
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
};

btn.addEventListener("click", generatePassword);
