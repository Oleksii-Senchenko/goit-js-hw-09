const formEl = document.querySelector('.form')
formEl.addEventListener('submit', onSubmitForm)

function onSubmitForm(e) {
  e.preventDefault()

  let delay = Number(e.target.elements.delay.value)
  const step = Number(e.target.elements.step.value)
  const amount = e.target.elements.amount.value

  for (let i = 1; i <= amount; i += 1) {

    createPromise(i, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
      delay += step
      
    }


}


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((res, rej) => {
    setTimeout(() => {
      if (shouldResolve) {
        res({ position, delay })
      } else {
        rej({ position, delay })
      }
    }, delay)

  })
}