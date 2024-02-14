const changeTourBg = (tourData) => {
  console.log('tourData: ', tourData);
  let bg
  switch (+tourData.id) {
    case 1:
      bg = "url('img/bg/maldives.jpg')";
      break;
    case 2:
      bg = "url('img/bg/india.jpg')";
      break;
    case 3:
      bg = "url('img/bg/egypt.jpg')";
      break;
    case 4:
      bg = "url('img/bg/turkey.jpg')";
      break;
    case 5:
      bg = "url('img/bg/sochi.jpg')";
      break;
  }

  document.body.style.backgroundImage = bg;

}

export default changeTourBg;