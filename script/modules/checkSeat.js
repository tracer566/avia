import { setStorage, getStorage } from "../service/storage.js";

// проверяет сколько мест можно забронировать
const checkSeat = (form, data, h1, tourId) => {
  console.log('checkSeat data5555: ', data);
  // console.log('checkSeat form5555: ', ...form);
  //form это самолет
  form.addEventListener('change', (e) => {
    console.log('change', e);
    // соберет все поля с value
    const formData = new FormData(form);
    // ...formData это массив,но с map перебирать нельзя
    //([, value]) это деструктуризация массива ['seat','2b']
    // в checked собирается массив кликнутых кресел
    const checked = [...formData].map(([, value]) => {
      return value
    });
    // проверяет что по креслу кликнули,и разблокирует кнопку
    form.send.disabled = checked.length !== data.length;

    const bookingSeat = getStorage(tourId).map(item => item.seat);
    // заблокирует остальные места,когда пассажиры займут свои
    if (checked.length === data.length) {
      [...form].forEach((elemFrom) => {
        if (elemFrom.checked === false && elemFrom.name === 'seat') {
          elemFrom.disabled = true;
        };
      });
    } else {
      [...form].forEach((elemFrom) => {
        if (!bookingSeat.includes(elemFrom.value) && elemFrom.name === 'seat') {
          elemFrom.disabled = false;
        };
      });
    }

    // отправка формы после выбора мест
    form.addEventListener('submit', e => {
      e.preventDefault();
      const formData = new FormData(form);
      // бронь - создаст массив с номерами мест
      const booking = [...formData].map(([, value]) => {
        return value;
      });

      for (let i = 0; i < data.length; i++) {
        data[i].seat = booking[i];
        // if (i == data.length - 1) {
        //   form.remove();
        //   alert(`Спасибо! Хорошего полёта, ваши места ${[...booking]}`);
        //   h1.textContent = 'Счастливого пути!';
        // };
      }
      // console.log('checkSeat data5555 бронь: ', data);

      // отправляю данные в localstorage
      setStorage(tourId, data);

      form.remove();
      document.body.innerHTML = `
      <h1 class="title">Спасибо за бронь на моем сервисе.Хорошего полета!</h1>
      <h2 class="title">${booking.length === 1
          ? `Ваше место: ${booking}`
          : `Ваши места: ${booking}`}</h2>
      `
    });
  });
};

export default checkSeat;