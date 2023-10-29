import Notiflix from 'notiflix';
const promiseGenerator = document.querySelector('.form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function handlePromise(position, delay) {
  createPromise(position, delay)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}

promiseGenerator.addEventListener('submit', event => {
  event.preventDefault();

  const delay = parseInt(promiseGenerator.elements.delay.value);
  const step = parseInt(promiseGenerator.elements.step.value);
  const amount = parseInt(promiseGenerator.elements.amount.value);

  if (delay < 0 || step < 0 || amount < 0) {
    Notiflix.Notify.warning('⚠️ The form should contain only positive values');
  } else {
    for (let position = 0; position < amount; position++) {
      const currentDelay = delay + position * step;
      handlePromise(position + 1, currentDelay);
    }
  }
});