import createElement from "./createElement.js";

// создает ряды с сиденьями самолета
const createBlockSeat = (n, count) => {
  // буквы колонок
  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

  const fuselage = createElement('ol', {
    className: 'fuselage',
  });

  for (let i = n; i < count + n; i++) {
    // создаю ряды
    const wrapperRowLi = createElement('li');
    //создаю списки для колонок
    const seatRowOl = createElement('ol', {
      className: 'seats',
    });

    // создаю колонки и кресла
    const columns = letters.map(letter => {
      const columnLi = createElement('li', {
        className: 'seat',
      });

      const wrapperSeat = createElement('label');
      const seat = createElement('input', {
        name: 'seat',
        type: 'checkbox',
        value: `${i + letter}`,
      });

      wrapperSeat.append(seat);
      columnLi.append(wrapperSeat);
      return columnLi;
    });


    // вставляю колонки в обертку ol 
    seatRowOl.append(...columns);


    // вставляю списки для колонок в ряды
    wrapperRowLi.append(seatRowOl);

    fuselage.append(wrapperRowLi);

  };

  return fuselage;

};

// создает ряд с выходом
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

  let n = 1;
  // корпус
  const elements = scheme.map((type) => {
    if (type === 'exit') {
      return createExit();
    };

    if (typeof type === 'number') {
      const blockSeats = createBlockSeat(n, type);
      n = n + type;
      return blockSeats;
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