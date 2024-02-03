import createElement from "./createElement.js";

const createFormPerson = (i) => {
  const form = createElement('form', {
    className: 'person',
  });

  const title = createElement('h2', {
    className: 'person__title',
    textContent: `Пассажир #${i}`,
  });

  const fieldName = createElement('div', {
    className: 'field',
  });

  form.append(title, fieldName)


  return form;
};

/*
<h2 class="person__title">Пассажир #1</h2>

<div class="field">
<label class="field__label">ФИО</label>
<input class="field__input" id="name0" name="name" type="text" placeholder="Введите ваше ФИО" required="">
</div>

<div class="field">
<label class="field__label">Номер билета (10 цифр)</label>
<input class="field__input" id="ticket0" name="ticket" type="text" placeholder="Номер билета" required="" minlength="10" maxlength="10">
</div>

<button class="btn-confirm" type="submit">Подтвердить</button>
*/

const getFormsPerson = (count) => {
  const forms = [];

  for (let i = 0; i < count; i++) {
    forms.push(createFormPerson(i))
  }

  return forms;
};

export default getFormsPerson;