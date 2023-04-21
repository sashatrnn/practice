// 
const body = document.head;
console.dir(body);
const title = document.getElementById ('title');
const list = document.querySelector('.list');
const date = document.querySelector ('[data-topic]');
const dateOne = document.querySelector('[data-topic]');
console.log(dateOne);
const dateLast = document.querySelector('.list').lastElementChild;
console.log(dateLast);
const titleNext= title.nextElementSibling;
console.log(titleNext);
const allTitle = titleNext.querySelectorAll('h3');
allTitle.forEach(title => {console.log(title.textContent); title.style.color = "red"});
const navigationItem = titleNext.querySelector("[data-topic = 'navigation']");
navigationItem.style.backgroundColor = 'yellow';
const paragraph = navigationItem.querySelector('p');
paragraph.textContent = 'Я змінив тут текст!';
const currentTopic = 'manipulation';
const elem = document.querySelector(`[data-topic = ${currentTopic}]`);
console.log(elem);
elem.style.backgroundColor = 'blue';
// elem.removeAttribute('style')
elem.hidden = true;

const classEl = document.querySelector('h3.completed');
console.log(classEl);
classEl.parentNode.remove();
// classEl.closest('li');
const titleHeading = document.querySelector('#title');
const text = document.createElement('p');
text.textContent = "Обєктна модель документа(Document Object Model)";
titleHeading.after(text);
const ulElem = document.querySelector('.list');
const liElem = document.createElement('li');
const titleElem = document.createElement('h3');
const textElem = document.createElement('p');
titleElem.textContent = 'Властивість innerHTML';
textElem.textContent = 'Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу';
liElem.append(titleElem);
liElem.append(textElem);
ulElem.append(liElem);
const markup = `<li data-topic="prop">
<h3>Властивість innerHTML</h3>
<p>
Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу.
</p>
</li>`;
ulElem.insertAdjacentHTML('beforeend', markup);
ulElem.innerHTML = '';


// TASK 4

const textNew = 'Обєктна модель документа (Document Object Model) - незалежний від мови інтерфейс для роботи з HTML-документом. Містить набір властивостей і методів, що дозволяють шукати, створювати і видаляти елементи, реагувати на дії користувача і багато іншого. Тобто зєднує сторінку з мовою програмування.';

const textEl = document.createElement('p');
textEl.textContent = textNew;

document.body.prepend(textEl);

const wordsArr = textNew.split(' ');
console.log(wordsArr);

const textTrans = wordsArr.map( word => { 
    if (word.length > 8) {
        return `<span style="color:red">${word}</span>`;
    }
    return word;
});

console.log(textTrans);
textEl.innerHTML = textTrans.join(' ');

//TASK 2

function elementsOfIngridients (fruits){
   const newFruits = fruits.map(fruit => {
        const liFruits = document.createElement('li');
        liFruits.textContent = fruit;
        return liFruits;
    });
    return newFruits;
}


const appendFruitList = ["apple🍎", "banana🍌"];
const prependFruitList = ["grapes🍇", "orange🍊"];
const beforeFruitList = ["strawberry🍓", "cherry🍒"];
const afterFruitList = ["peach🍑", "kiwi🥝"];

const ulFruits = document.createElement('ul');
document.body.prepend(ulFruits);
ulFruits.append(...elementsOfIngridients(appendFruitList));
ulFruits.prepend(...elementsOfIngridients(prependFruitList));
ulFruits.before(...elementsOfIngridients(afterFruitList));
ulFruits.after(...elementsOfIngridients(beforeFruitList));
// ulFruits.append(...elementsOfIngridients(appendFruitList));

elementsOfIngridients(appendFruitList);
elementsOfIngridients(prependFruitList);
elementsOfIngridients(afterFruitList);
elementsOfIngridients(beforeFruitList);

// TASK 7

const films = [
    {
      title: "Tetris",
      imgUrl: "https://static.hdrezka.ac/i/2023/3/20/f509264b419fdmu53x38j.jpg",
      id: "film_1",
    },
    {
      title: "Avatar: The Way of Water",
      imgUrl: "https://static.hdrezka.ac/i/2022/12/22/tc5e6b8212683gn66r84s.jpg",
      id: "film_2",
    },
    {
      title: "Operation Fortune: Ruse de guerre",
      imgUrl: "https://static.hdrezka.ac/i/2022/2/11/s0d53f6cf0ae0tq29m85l.jpg",
      id: "film_3",
    },
    {
      title: "Babylon",
      imgUrl: "https://static.hdrezka.ac/i/2022/12/25/z330b47a82209ww99w55a.jpg",
      id: "film_4",
    },
    {
      title: "The Whale",
      imgUrl: "https://static.hdrezka.ac/i/2023/2/24/h23d8c65d734akd89q94c.jpg",
      id: "film_5",
    },
  ];
  
  // Приклад елементу списку
  // <li data-id="${id}">
  //      <img src="${imgUrl}" alt="${title}" />
  //      <p>${title}</p>
  // </li>
  
  const watchedFilms = ["film_2", "film_4", "film_5"];
  
  function createMarkup(films) {
    const filmsArr = films.map(({films, id, imgUrl}) => {
        return `<li data-id="${id}">
       <img src="${imgUrl}" alt="${title}" />
       <p>${title}</p>
       </li>`
    } )
    return filmsArr;
  }

  console.log(createMarkup(films));

  const ulFilms = document.createElement('ul');

ulFilms.insertAdjacentHTML('afterbegin',createMarkup(films));

document.body.prepend(ulFilms);

