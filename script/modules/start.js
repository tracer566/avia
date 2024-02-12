import createElement from "./createElement.js";

// главный заголовок
const createTitle = (title) => {
  const h1 = createElement('h1', {
    className: 'title',
    textContent: title,
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

// создание первой формы
const createFirstForm = (data) => {
  const form = createElement('form', {
    className: 'field',
  });

  const labelTour = createElement('label', {
    className: 'field__label',
    htmlFor: 'tour',
    textContent: 'Выбрать тур из списка',
  });

  const label = createElement('label', {
    className: 'field__label',
    innerHTML: 'Укажите количество человек <span class="label-span">(максимум: 6)</span>',
  });

  const select = createElement('select', {
    className: 'field__select',
    id: 'tour',
    name: 'tour',
  });

  const options = data.map((elem) => {
    return createElement('option', {
      value: elem.id,
      textContent: elem.tour,
    });
  });

  select.append(...options);

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
    textContent: 'Подтвердить',
  });

  form.append(labelTour, select, label, input, button);

  return form;
};

const start = (app, title, data) => {
  const h1 = createTitle(title);
  const main = createMain();
  const firstForm = createFirstForm(data);

  main.append(firstForm);
  app.append(h1, main);

  return {
    main,
    firstForm,
    h1
  };

};


export default start;

