import createElement from "./createElement.js";

// главный заголовок
const createTitle = (title) => {
  const h1 = createElement('h1', {
    className: 'title',
    textContent: title
  });
  // h1.className = 'title';
  // h1.textContent = title;

  return h1;
};

// создание main
const createMain = () => {
  const main = createElement('main', {
    className: 'person-data',
  });
  // main.className = 'person-data';
  return main;
};

// создание перво формы
const createFirstForm = () => {
  const form = createElement('form', {
    className: 'field',
  });
  const label = createElement('label', {
    className: 'field__label',
    textContent: 'Укажите количество человек (макс: 6)',
  });

  const input = createElement('input', {
    className: 'field__input',
    id: 'count',
    name: 'count',
    type: 'number',
    placeholder: '1-6',
    min: '1',
    max: '6',
    required: 'true',
  });

  const button = createElement('button', {
    className: 'btn-confirm',
    type: 'submit',
    textContent: 'Подтвердить'
  });

  form.append(label, input, button)

  return form;
};

const start = (app, title) => {
  const h1 = createTitle(title);
  const main = createMain();
  const firstForm = createFirstForm();

  main.append(firstForm);
  app.append(h1, main);

  return {
    main,
    firstForm
  };

};

export default start;

