// вспомогательная функция
const createElement = (tag, attr) => {
  const element = document.createElement(tag);
  // соединяет элемент и свойства объекта
  Object.assign(element, attr);
  // console.dir(element);

  return element;
};

export default createElement;