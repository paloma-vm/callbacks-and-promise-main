
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function onsuccess(pos) {
  const { latitude, longitude, accuracy } = pos.coords;
  console.log('Your current position is:');
  console.log(`Latitude : ${latitude}`);
  console.log(`Longitude: ${longitude}`);
  console.log(`More or less ${accuracy} meters.`);
} 

function onerror(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(onsuccess, onerror, options);
// navigator.geolocation( successCallback, errorCallback, options )

// navigator.geolocation((pos) => {
//   // 


// }, (err) => {
//   // 
// }, {})


// Challenge: Make this work: 

function getGeolocation(options) {
  return new Promise( (resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  } )
}

export default getGeolocation;
// Like this: 

getGeolocation(options)
  .then(pos => {console.log('*************', pos) })
  .catch(err => { })

const body = document.querySelector('body')
body.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log(e.target)
  const zip = document.querySelector('#zip')
  console.log(zip.value)
  console.log(e)
})



