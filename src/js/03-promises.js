import Notiflix from 'notiflix';

document.querySelector('.form').addEventListener('submit', function (e) {
    e.preventDefault();

    const delay = parseInt(document.querySelector('input[name="delay"]').value);
    const step = parseInt(document.querySelector('input[name="step"]').value);
    const amount = parseInt(document.querySelector('input[name="amount"]').value);

    if (isNaN(delay) || isNaN(step) || isNaN(amount) || delay < 0 || step <= 0 || amount <= 0) {
        // Input validation
        Notiflix.Notify.Failure('Please enter valid values');
        return;
    }

    for (let i = 1; i <= amount; i++) {
        const position = i;
        const currentDelay = delay + (i - 1) * step;

        createPromise(position, currentDelay)
            .then(({ position, delay }) => {
                Notiflix.Notify.Success(`✅ Fulfilled promise ${position} in ${delay}ms`);
            })
            .catch(({ position, delay }) => {
                Notiflix.Notify.Failure(`❌ Rejected promise ${position} in ${delay}ms`);
            });
    }
});

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

