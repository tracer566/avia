import start from './modules/start.js';
import getFormsPerson from './modules/formsPerson.js';
import readyPlane from './modules/readyPlane.js';
import getData from './service/getTour.js';
import changeTourBg from './modules/changeBg.js'

// убрать
const test = () => {
  const inp = document.querySelector('#count');
  inp.addEventListener('change', (e) => {
    console.log('e change: ', e);
  });
};

const init = async (selectorApp, title) => {
  const app = document.querySelector(selectorApp);
  // получаю данные и отправляю их по нужным функциям
  const data = await getData();
  // console.log('data: ', data);

  // вернул стартом main и firstForm
  // start(app, title);
  const { main, firstForm, h1 } = start(app, title, data);

  test();//убрать

  firstForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(`Форма отправлена - значение: ${firstForm.count.value}`);

    const forms = getFormsPerson(firstForm.count.value);
    firstForm.remove();
    main.append(...forms);

    /* обращение к option через select
    console.log(firstForm.tour.value)-вернет число из value*/
    const tourData = data.find((tour) => tour.id === firstForm.tour.value);
    h1.textContent = `${tourData.tour}`;

    // смена фона под тур
    changeTourBg(tourData);


    // вызываю самолет
    readyPlane(forms, main, tourData, h1);

  });

};

init('.app', 'Выберите тур');

