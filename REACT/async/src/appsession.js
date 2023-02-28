// //setTimeout(() => console.log(2), 0);

// function step1(num, fn) {
//     setTimeout(() => {
//         fn(num + 1);
//         console.log(1)
//     }, 500);
// }

// function step2(num, fn) {
//     setTimeout(() => {
//         fn(num + 2);
//         console.log(2)
//     }, 500);
// }

// function step3(num, fn) {
//     setTimeout(() => {
//         fn(num + 3);
//         console.log(3)
//     }, 500);
// }

// step1();
// step2();
// //1 and 2 are returned at the same time, after 500ms

// step1(1, (a) => {
//     step2(a, (b) => {
//         step3(b, console.log)
//     });
// });


// //async returns a Promise
// //we can also create a Promise manually and it is a async function then
// async function myAsyncFunction() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (num < 10) {
//                 reject('reject');
//                 return;
//             }
//             resolve(num + 3);

//         }, 500);
//     });
// }

// //const result = myAsyncFunction(1);
// //console.log(typeof result);
// //returns a Promise(pending)

// setTimeout(() => console.log(result), 2000);
// //Promise(fullfilled) -> resolved

// result.then((result) => console.log(result))
// result.catch((error) => console.error(error))


// // const result = myAsyncFunction(1)
// //     .then(result => asyncStep2(result))
// //     .then(result => console.log(result))
// //     .catch(error => console.error(error))


// async function smthAsync() {
//     return 24;
// }

// (async function () {
//     try{
//         let result = await asyncStep1(1);
//         result = await asyncStep2(result);
//         console.log(result);
//     } catch (error) {console.log(error)}
// })();
// //await doesnt work in a normal function, needs to be async (timeout also async)

// window.fetch()
// fetch('.json')
// .then(res => res.json())
// .then(obj => console.log(obj))



// smthAsync().then(result => console.log(result))

// console.log(smthAsync())


// function divide(a, b) {
//     if(b === 0) {
//         throw Error('dividing by 0 not allowed');
//     }
//     return a / b;
// }

// //resolve when all async run through? 
// Promise.all([asyncStep2(1), asyncStep1(1)]).then().catch()

// Promise.any([asyncStep2(1), asyncStep1(1)])