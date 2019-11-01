// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {

    const mainHead = document.createElement('div');
    const date1 = document.createElement('span');
    const h1 = document.createElement('h1');
    const temperature = document.createElement('span');

    mainHead.classList.add('header');
    date1.classList.add('date');
    temperature.classList.add('temp');

    date1.textContent = 'MARCH 28, 2019';
    h1.textContent = 'Lambda Times';
    temperature.textContent = '98°';

    mainHead.appendChild(date1);
    mainHead.appendChild(h1);
    mainHead.appendChild(temperature);

    document.querySelector('.header-container').appendChild(mainHead);

    return mainHead;

}

Header();


