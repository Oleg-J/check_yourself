const buttons = [];
const images = [
    'apple', 'banana', 'cherry', 'kiwi', 'lemon', 'orange', 'pineapple'
];
const BUTTONS_AMOUNT = 4;
const correctCounter = document.querySelector('#correct');
const wrongCounter = document.querySelector('#wrong');
const img = document.querySelector('img');
const path = './assets/fruits/';
const imgFormat = 'jpeg';
let correctAnswers = 0;
let wrongAnswers = 0;
let init = true;
let correctAnswer = '';

class Util {
    static randomInt(max) {
        return Math.floor(Math.random() * max);
    }

    static shuffle(array) {
        array.sort(() => Math.random() - 0.5);
      }
}

for (let i = 1; i <= 4; i++) {
    buttons.push(document.querySelector('#btn_' + i));
}

mainFlow();

function mainFlow() {
    Util.shuffle(images);
    img.src = path + images[0] + '.' + imgFormat;
    const buttonsValues = images.slice(0, BUTTONS_AMOUNT);
    Util.shuffle(buttonsValues);
    correctAnswer = images[0];

    console.log(buttonsValues, correctAnswer);
    buttonsValues.forEach(
        (value, index) => {buttons[index].textContent = value;}
    );

    if (!init) return;

    buttons.forEach((btn) => {
        console.log(1)
        btn.addEventListener('click', () => {
            console.log(btn.textContent, correctAnswer);
            if (btn.textContent === correctAnswer) {
                correctCounter.textContent = ++correctAnswers;
            } else {
                wrongCounter.textContent = ++wrongAnswers;
            }

            init = false;
            mainFlow();
        });
    });
}