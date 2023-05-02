const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

const date = new Date();
function calculateAge() {
    if(!birthdayEl.value){
        return alert('Please enter your birthday');
    }
    const age = getAge(birthdayEl.value);
    resultEl.textContent = `Your age is ${age} years old`;
}

function getAge(birthdayValue) {
    const birthdayDate = new Date(birthdayValue);
    const age = date.getFullYear() - birthdayDate.getFullYear();
    return age;
}

btnEl.addEventListener("click", calculateAge);