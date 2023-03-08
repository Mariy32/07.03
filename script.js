// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.

// document.addEventListener("DOMContentLoaded", () => {
//     console.log("все теги прогрузились")});

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.

// window.onload = () => { console.log('страница загрузилась')};

// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.

// document.querySelector('body').addEventListener('click', function (e) {
//     if (e.target.className =="super_element") {
//         console.log(`"super_element" присутствует в элементе "body"`);    
//         }
//         console.log(e.target);
//     });

// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."

// const a = document.querySelector(`textarea`)
// a.addEventListener(`mouseover`, function () {
//     console.log("Вы навели на textarea.")
// } )

// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.


// document.querySelector(`ul`).addEventListener("click", function(event) {
//     if (event.target.nodeName == "BUTTON")
//       console.log( event.target.textContent);
// })


// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.




// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li

// const l = document.querySelectorAll(`li`);
// console.log(l)     
// addEventListener('click', function () {
// for (let i = 0; i <= l.length; i++) { if (i % 2 == 0) { l[i].style.color = `red`}
// else{
// l[i].style.background = `none`;
// }}})