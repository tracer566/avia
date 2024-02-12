// проверяет сколько мест можно забронировать
const checkSeat = (form, data, h1) => {
  console.log('checkSeat data5555: ', data);
  // console.log('checkSeat form5555: ', ...form);
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
    if (checked.length === data.length) {
      [...form].forEach((elemFrom) => {
        if (elemFrom.checked === false && elemFrom.name === 'seat') {
          elemFrom.disabled = true;
        };
      });
    };

    form.addEventListener('submit', e => {
      e.preventDefault();
      const formData = new FormData(form);
      // бронь
      const booking = [...formData].map(([, value]) => {
        return value;
      });

      for (let i = 0; i < data.length; i++) {
        data[i].seat = booking[i];
        if (i == data.length - 1) {
          form.remove();
          alert(`Спасибо! Хорошего полёта, ваши места ${[...booking]}`);
          h1.textContent = 'Счастливого пути!';
        };
      }
      console.log('checkSeat data5555 бронь: ', data);
    });
  });
};

export default checkSeat;