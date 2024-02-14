export const getStorage = (id) => {
  if (localStorage.getItem(`tour-${id}`)) {
    // return localStorage.getItem('tour');
    return JSON.parse(localStorage.getItem(`tour-${id}`));
  } else {
    return [];
  }
};

export const setStorage = (tourId, data) => {
  // console.log('setStorage data: ', data);
  const storage = getStorage(tourId);
  // console.log('storage: ', storage);

  // не даст выбрать человеку с одним билетом 2 места
  const filterBooking = storage.filter(item => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].ticket === item.ticket) {
        return false;
      };
    };

    return item;
  });

  const newBooking = [...filterBooking, ...data];

  localStorage.setItem(`tour-${tourId}`, JSON.stringify(newBooking));
};