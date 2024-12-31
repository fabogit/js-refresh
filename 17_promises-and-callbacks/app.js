const button = document.querySelector('button');
const output = document.querySelector('p');

// Promises
somePromiseCreatingCode()
  .then(firstResult => {
    return 'done with first promise';
  })
  .catch(err => {
    // would handle any errors thrown before
    // implicitly returns a new promise - just like then()
  })
  .finally(() => {
    // the promise is settled now - finally() will NOT return a new promise!
    // you can do final cleanup work here
  });



const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },
      (error) => {
        reject(error);
      },
      opts
    );
  });
  return promise;
};

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duration);
  });
  return promise;
};

function trackUserHandler() {
  let positionData;

  getPosition()
    .then((posData) => {
      positionData = posData;
      return setTimer(2000);
    })
    .catch((err) => {
      console.log(err);
      return 'on we go...';
    })
    .then((data) => {
      console.log(data, positionData);
    });
  setTimer(1000).then(() => {
    console.log('Timer done!');
  });
  console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);
