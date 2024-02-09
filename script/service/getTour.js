// api - https://mockapi.io/
const URL_API = 'https://61f4662310f0f7001768c90f.mockapi.io/api/airplane';

const getData = () => fetch(URL_API)
  .then(response => {
    // console.log('response: ', response);
    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error(response.status)
    }

  }).then(data => {
    // console.log('data: ', data);
    return data;
  })
  .catch((error) => { console.error(error); })

// console.log(getData());


export default getData;