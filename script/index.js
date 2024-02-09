import start from './modules/start.js';
import getFormsPerson from './modules/formsPerson.js';
import readyPlane from './modules/readyPlane.js';
import getData from './service/getTour.js'

const init = async (selectorApp, title) => {
  const app = document.querySelector(selectorApp);
  // получаю данные и отправляю их по нужным функциям
  const data = await getData();
  console.log('data: ', data);

  // вернул стартом main и firstForm
  // start(app, title);
  const { main, firstForm } = start(app, title, data);

  firstForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(`Форма отправлена - значение: ${firstForm.count.value}`);

    const forms = getFormsPerson(firstForm.count.value);
    firstForm.remove();
    main.append(...forms);

    // вызываю самолет
    readyPlane(forms, main);
  });


};

init('.app', 'Выберите тур');

