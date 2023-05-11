  // task 1
// Напишите функцию которая принимает строку и заменяет все буквы “o” на  “a”
// “головоломка” --> "галаваламка"
// "мОлоток" --> "малатак"

// const replaceO = (word) =>{
//     return word.toLowerCase( ).replaceAll('о', 'а')
// }
// replaceO('мОлоток');

// task 2
// Напишите функцию которая принимает строку "           
// hello world.        " и удаляет отступы по краям

// const deleteAbsences = (str) => {
// return str.trim()
// }
// console.log(deleteAbsences("            hello world.        "));

// task 4 Вам дан массив: ['Аскар', 'Баяман', 'Калмамат']. Создайте функцию, изменяющую 
// букву а в каждом имени на я и выведите в консоль.

// const replaceA = (arr) => {
//   return arr.join().toLowerCase().replaceAll('а','я');
// }
// replaceA(['Аскар', 'Баяман', 'Калмамат'])

// task 5 Напишите функцию, которая принимает строку и возвращает строку в алфавитном порядке.
// Пример:
// "qwertyu" --> "eqrtuwy"
// "dollar" --> "adllor"
// "banana" --> "aaabnn"

// const getStr = (str) => {
//    return str.split('').sort().join();
// }
// getStr("qwertyu")


// task 6 Напишите функцию, которая разбивает строку и преобразует ее в массив слов.
// Пример:
// "Robin Singh" ==> ["Robin", "Singh"]
// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

// const getArr = (arr) => {
//   return arr.split(" ");
// }
// getArr("Robin Singh")

// task 7 Создайте функцию, которая принимает 2 целых числа в виде строк 
// входных данных и выводит сумму (также в виде строкии в качестве):
// Пример входных данных и то что должно выводится:
// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"

// const getSum = (str, str2) => {
//     let num1 = Number(str)
//     num2 = Number(str2)
//     sum = num1 + num2 
//     return sum = String(sum)
// }
// console.log(getSum("-5", "3"));

// task 8 Создайте функцию, которая принимает 2 целых числа в качестве входных данных и сравнивает их,
// если чилса равны, то выведите "равны", а иначе "не равны" 

// const getResult = (num, num2) => {
//       if (num === num2){
//         return "равны"
//       } else{
//         return "не равны"
//       } 
      
// }
// console.log(getResult(15, 7));


// task 9 Создайте функцию, которая принимает число. Составьте условие, по которому будет выводиться в консоль "Четное число", "Нечетное число". 

// const getOdd = (num) => {
//   if (num % 2 === 0){
//    return "Четное число"
//  } else{
//    return "Нечетное число"
//  }
// }
// console.log(getOdd(8));

