import start from './modules/start.js';
import getFormsPerson from './modules/formsPerson.js';

const init = (selectorApp, title) => {
  const app = document.querySelector(selectorApp);

  // вернул стартом main и firstForm
  const { main, firstForm } = start(app, title);

  firstForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(`Форма отправлена - значение: ${firstForm.count.value}`);

    const forms = getFormsPerson(firstForm.count.value);
    firstForm.remove();
    main.append(...forms)
  });


};

init('.app', 'Выберите тур');

