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

      // перебрать массив и объект
      data.forEach(elem => {
        // перебор объекта
        for (let key in data[elem]) {
          alert(data[elem][key])
        }
      });


    });

  });

};

export default readyPlane;