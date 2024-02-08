import airplane from "./airplane.js";

const readyPlane = (forms, main) => {
  const data = [];

  forms.forEach(form => {
    //form.elements - метод форм,показывает ее элементы
    // console.log('form.elements', form.elements);
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      for (const element of form.elements) {
        // element.setAttribute('disabled', 'true')
        element.disabled = 'true';
      }

      data.push({
        name: form.name.value,
        ticket: form.ticket.value
      });

      // перебрать массив и объект с данными из форм
      // data.forEach(elem => {
      //   // перебор объекта
      //   for (let key in data[elem]) {
      //     alert(data[elem][key])
      //   }
      // });

      if (forms.length === data.length) {
        forms.forEach(form => form.remove());
        airplane(main, data, forms.length);
      };

    });

  });

};

export default readyPlane;