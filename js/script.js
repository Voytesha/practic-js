// 1. make var
//2. перебрать работников
//3. сгенерить зарплату

// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 4;
// let totalSalary = 0;

// for (let i = 1; i <= 4; i += 1) {
//     const salary = Math.round(
//         Math.random() * (maxSalary - minSalary) + minSalary,
//     );
//     console.log(`Salary of employee number ${i} - ${salary}`);

//     totalSalary += salary;
// }
 
// console.log('totalSalary: ', totalSalary);

// const min = 6;
// const max = 30;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
// //    console.log(i);

//     if (i % 2 !== 0) {
//         // console.log('not even number: ', i);
//         continue;
//     }
//     console.log('even number: ', i);

//         total += i;
// }
// console.log(total);

// let balance = 10000;
// const payment = 2000;

// console.log(`Total amount of order ${payment}`);
 
// if (balance >= payment) {
//     console.log('ok');

//     balance -= payment;

//     console.log(`on your balance now ${balance} credits`);
// } else {
//     console.log('You have not enouf balance');
// }

// console.log('Transaction is end');



// const fnA = function (message, callback) {
//     console.log(message);
//     console.log(callback);
//     callback(100);
// };

// const fnB = function (number) {
//     console.log(' this is log when call fnB', number);
// };

// fnA('gfgfgfg', fnB);


// const doMath = function (a, b, callback) {
//     const result = callback(a, b);

//     console.log(result);
// }
// const add = function (x, y) {
//     return x + y;
// };

// const sub = function (x, y) {
//     return x - y;
// };

// doMath(2, 3, add);
// doMath(12, 3, sub);



// 25!!! const getFriends = (users) => {
//    const friendArray = users.flatMap(item => item.friends);
//    const uniqueFriend = friendArray.filter((item, index, array) => array.indexOf(item) === index);
//   return uniqueFriend;
// };

// const fnA = function (parametr) {
//     const innerVariable = 'Значение внутренней переменной fnA';

//     const innerFunction = function () {
//         console.log(parametr);
//         console.log(innerVariable);
//         console.log('Это вызов innerFunction');
//     };
//     return innerFunction;
// };

// const fnB = fnA(555);
// console.log(fnB);

// const makeDish = function (sheffName, dish) {
//     console.log(`${sheffName} prepare ${dish}`);
// };

// makeDish('Mango', 'cake');
// makeDish('Mango', 'eggs');
// makeDish('Mango', 'tea');

// makeDish('Poly', 'meat');
// makeDish('Poly', 'soup');
// makeDish('Poly', 'coffe');

// const makeSheff = function (name) {
//     const makeDish = function (dish) {
//         console.log(`${name} prepare ${dish}`);
//     };
//     return makeDish;
// };

// const mango = makeSheff('Mango');
// // console.log(mango);

// mango('meat');
// mango('cake');

// return [...users]
//     .filter(item => item.gender === gender)
//     .reduce((acc, currentElem) => (acc += currentElem.balance), 0);

//  class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   blackListedEmails = [];

//   blacklist(email) {
// this.blacklistedEmails.push(email);
//   }
    
//   isBlacklisted(email) {
//       if (this.blacklistedEmails.includes(email)) {
//         return true}
//       else return false
//     }
    
//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true

//!=====6th module================================
// const list = document.getElementById("list");

// if (list) {
//  console.log(list.children.length);
// } else {
//     console.log("this element doesn't exist");
// }

//! ==============================================

//1. Створити список технологій, що вивчаються на курсі
// Показати як це робиться через **мап** та **редюс**
//const container = document.getElementById("container");

//const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];

//1* створити контейнер для списку - тег ul
//2* Створити цикл для перебору масиву
//3* створити тег li
//4* записати текст з масиву у тег li
//5* помістити li всередину списку ul
//6* помістити список ul на сторінку

//const list = document.createElement("ul");

// for(const technology of technologies) {
//     const li = document.createElement("li");
//     li.textContent = technology;
//     list.append(li);
// }

// container.append(list);


//*map
//const listContent = technologies.map(technology => `<li>${technology}</li>`).join('');

//list.insertAdjacentHTML('beforeend', listContent);

//container.append(list);

//*reduce

// const listContent = technologies.reduce((acc, technology) => (acc
// += `<li>${technology}</li>`), "");


// list.insertAdjacentHTML('beforeend', listContent);

// container.append(list);

//*reduce 2

//const listContent = technologies.reduce((acc, technology) => (acc
   // += `<li>${technology}</li>`), "");
 
//const list = `<ul>${listContent}</ul>`;

//container.insertAdjacentHTML('beforeend', list);

//! 2 task ==============================================//

// Створити кілька кнопок на основі масива з обєктами використовуючи createElement

const container = document.getElementById("container");
const colors = [
    {
        label: "red",
        color: "#FF0000",
    },
    {
        label: "green",
        color: "#00FF00",
    },
    {
        label: "blue",
        color: "#0000FF",
    },
    {
        label: "yellow",
        color: "#FFFF00",
    },
];

/*
    1. Перебор масиву кольорів за допомогою циклу
    2. Створити кнопку
    3. задамо колір фону кнопки
    4. задамо текст кнопки
    5. Додаємо кнопку в документ

*/
colors.forEach(({ label, color }) => {
    const buttonEl = document.createElement("button");
    buttonEl.style.backgroundColor = color;
    buttonEl.classList.add("indents");
    //buttonEl.style.margin = "5px";
    buttonEl.textContent = label;
    container.appendChild(buttonEl);
});