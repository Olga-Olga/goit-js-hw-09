// const promise = fetch('https://jsonplacedfdholder.typicode.com/comments')






createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });



function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

/*const promise = fetch('https://jsonplacedfdholder.typicode.com/comments')
  .then(response => response.json())
  .catch((error) => {
    return [];
  })
  .then(setSubEmail)
  .then(setComments);
// .then(console.log)
console.log(promise);

/!* goit@gmail.com -> subEmail: gmail.com *!/

function setSubEmail(data) {
  return data.map(el => ({
    ...el,
    // const indexOfDog = el.email.indexOf('@');
    subEmail: el.email.split('@')[1]
  }));
}
console.log(setSubEmail)
/!**
 *!! якщо коментів немає, то рендеримо "SRY"
 * @param comments
 * @return {*}
 *!/
function setComments(comments) {
  console.log(comments);
  const container = document.querySelector('.container');

  container.insertAdjacentHTML('beforeend', comments.length?  comments.map(({subEmail, email, body}) => `
      <div class="comment">
        <p>${subEmail}</p>
        <p>${email}</p>
        <p>${body}</p>
      </div>
  `).join('') : "<p>SRY</p>");
}*/


const newPromise = new Promise((res, rej) => {
  // res(['комплюктор']);
  rej(1)
});

newPromise
.catch(number => {
  throw 'message'
  console.log(number + 1)
})
.then(number => console.log(number))
.then(console.log)
.catch(number => console.log(`error ${number}`))

// console.log(newPromise);

// /*newPromise
//   .then(() => {
//     throw 2;
//   })
//   .catch(() => {
//     throw 5;
//   })
//   .catch(() => {
//     throw  4;
//   })
//   .finally((d) => {
//     console.log(d, 'd');
//     return 48;
//   })
//   // .then(() => {
//   //   return 7;
//   // })
//   .catch((d) => {
//     throw d;
//   })
//   .then(console.log)
//   .catch(console.warn);*/

// const promise = fetch('https://jsonplaceholder.typicode.com/comments');

// const newPromise2 = new Promise((res, rej) => {
//   res([1, 2, 3]);
// });
// console.log(promise);

// console.log(newPromise2);

// newPromise2
//   .then(data => {
//     console.log(data);
//     data.push(556);

//     throw ['g', 'f'];
//     return data;
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//     console.log('ERROR');
//     return err;
//   })
//   .catch(err => {
//     console.log('ERROR');
//   })
//   .then(console.log)

//   .then();



