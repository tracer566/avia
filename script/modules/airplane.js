import createElement from "./createElement.js";

const createExit = () => {
  const fuselage = createElement('div', {
    className: 'exit fuselage',
  });

  return fuselage;
};

// создаю нос самолета
const createCockpit = (title) => {
  const cockpit = createElement('div', {
    className: 'cockpit',
  });

  const cockpitTitle = createElement('h1', {
    className: 'cockpit-title',
    textContent: title,
  });

  const cockpitConfirm = createElement('button', {
    className: 'cockpit-confirm',
    type: 'submit',
    textContent: 'Подтвердить'
  });

  cockpit.append(cockpitTitle, cockpitConfirm);

  return cockpit;
};

// создаю самолет
const createAirplane = (title, scheme) => {
  const choisesSeat = createElement('form', {
    className: 'choises-seat',
  });

  const plane = createElement('fieldset', {
    className: 'plane',
    name: 'plane'
  });

  // нос самолета
  const cockpit = createCockpit(title);

  // корпус
  const elements = scheme.map((type) => {
    if (type === 'exit') {
      return createExit();
    };


  });


  // вставляю нос в fieldset
  plane.append(cockpit, ...elements);
  // вставляю fielset в форму
  choisesSeat.append(plane);
  return choisesSeat;

};

const airplane = (main, data) => {
  const title = 'Выберите 1 место';
  const scheme = ['exit', 11, 'exit', 1, 'exit', 17, 'exit'];

  main.append(createAirplane(title, scheme))
};

export default airplane;