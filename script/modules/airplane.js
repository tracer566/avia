import createElement from "./createElement.js";
import declOfNum from "./declOfNum.js";
import checkSeat from "./checkSeat.js";
import { getStorage } from "../service/storage.js";


// создает ряды с сиденьями самолета
const createBlockSeat = (n, count, boockingSeat, id) => {
  // буквы колонок
  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

  // обертка для мест в самолете
  const fuselage = createElement('ol', {
    className: 'fuselage',
  });

  // создаю места самолета
  for (let i = n; i < count + n; i++) {
    // создаю ряды
    const wrapperRowLi = createElement('li');
    //создаю списки для колонок
    const seatRowOl = createElement('ol', {
      className: 'seats',
    });

    // переменнная смены цвета кресел в зависимости от id тура
    let colorSeat = id == 1 || id == 3 || id == 5
      ? 'seat color'
      : 'seat';

    // создаю колонки и кресла
    const columnsSeats = letters.map(letter => {
      const columnLi = createElement('li', {
        className: colorSeat,
      });

      const wrapperSeat = createElement('label');

      const checkSeat = `${i + letter}`

      const seat = createElement('input', {
        name: 'seat',
        type: 'checkbox',
        value: checkSeat,
        disabled: boockingSeat.includes(checkSeat)
      });

      wrapperSeat.append(seat);
      columnLi.append(wrapperSeat);
      return columnLi;
    });

    // вставляю колонки c сиденьями в обертку ol 
    seatRowOl.append(...columnsSeats);
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
const createCockpit = (title, id) => {
  const cockpit = createElement('div', {
    className: 'cockpit',
  });

  const cockpitTitle = createElement('h1', {
    className: 'cockpit-title',
    innerHTML: title,
  });

  // переменнная смены цвета кнопки в зависимости от id тура
  let colorBtn = id == 1 || id == 3 || id == 5
    ? 'cockpit-confirm2'
    : 'cockpit-confirm';

  const cockpitConfirm = createElement('button', {
    className: colorBtn,
    type: 'submit',
    textContent: 'Подтвердить',
    name: 'send',
    disabled: true,
  });

  cockpit.append(cockpitTitle, cockpitConfirm);

  return cockpit;
};

// создаю самолет
const createAirplane = (title, tourData) => {
  const scheme = tourData.scheme;
  const id = tourData.id;
  // забронированные места
  const boockingSeat = getStorage(tourData.id).map(item => item.seat);

  // console.log('boockingSeat: ', boockingSeat);

  const choisesSeat = createElement('form', {
    className: 'choises-seat',
  });

  const plane = createElement('fieldset', {
    className: 'plane',
    name: 'plane'
  });

  // нос самолета
  const cockpit = createCockpit(title, id);

  let n = 1;
  // корпус
  const elements = scheme.map((type) => {
    if (type === 'exit') {
      return createExit();
    };

    if (typeof type === 'number') {
      const blockSeats = createBlockSeat(n, type, boockingSeat, id);
      n = n + type;
      return blockSeats;
    };

  });

  // вставляю нос в fieldset
  plane.append(cockpit, ...elements);
  // вставляю fieldset в форму
  choisesSeat.append(plane);
  return choisesSeat;

};

const airplane = (main, data, tourData, h1) => {
  /* 1 вариант склонения */
  // let title = 'Выберите места';
  // if (data.length == 1) {
  //   title = 'Выберите 1 место';
  // } else if (data.length > 1 && data.length < 5) {
  //   title = `Выберите ${data.length} места`;
  // } else {
  //   title = `Выберите ${data.length} мест`;
  // }

  /* 2-ой вариант склонения */
  let title = `Выберите ${declOfNum(data.length, ['место', 'места', 'мест'])}`

  // const scheme = ['exit', 11, 'exit', 1, 'exit', 17, 'exit'];

  console.log('tourData from airplane: ', tourData);

  // choisesForm === choisesSeat
  const choisesForm = createAirplane(title, tourData);

  // проверяет сколько мест можно забронировать
  checkSeat(choisesForm, data, h1, tourData.id);

  main.append(choisesForm);
};

export default airplane;