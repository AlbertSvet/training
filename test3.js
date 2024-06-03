// вылавливание ошибок 
// try{
//     //сюда помещается скрипт с потенциальной возможностью ошибки 
// }catch(e){
//     // вывод ошибки 
// }
// данный метод позволяет поймать ошибку и не блокировать выполнение скрипта 
// Массивы [1, 2 , 3]
const mas = [1,2,3,4,5];
// метод forEach - не изменяет исходный массив, он делает какие то действия и возвращает результат. Также он не создает новый массив. 

mas.forEach(item =>{
  let b = item * 2; 
//   console.log(b);
  
})

// Метод map создает новый массив. нужно вернуть результат
const newMas = mas.map(el =>{
    let c = el * 10;
    return c
})
// console.log(mas)
// console.log(newMas)

// Деструктуризация объектов. Создание переменых на основе свойст значений объекта. Простыми словами копирование значений из объекта в переменные
const newObj = {
    mname: 'Федор',
    age: 20,
    text: true
}
const{mname, age} = newObj;
console.log(mname, age);
// Так же можно деструктурировать массивы но для этого используем []

const newMass = ['яблоко', 1 , 4 , 'банан'];
const [fruct, num] = newMass;
console.log(fruct, num);
//деструктуризация в функциях 
const myNewObj = {
  myName: 'Альберт',
  age: 20,
  text: true
}
const newFun = ({myName, age}) =>{ // дестр. объекта в параметрах функции. Объект передается в аргумент функции при вызове. 
    return `Меня зовут ${myName} мне ${age} лет`
}
// console.log(newFun(myNewObj));
const copFun = (copObj) =>{
  const{myName, age} = copObj;// дестр. объекта в теле функции. Объект передается в аргумент функции при вызове.
  return `Меня зовут ${myName} мне ${age} лет`
}
// console.log(copFun(myNewObj))
// Условия if else

const nub = 2;

function plus (a) {
  if(a >= nub) {
   return 2 * 5;
  }else{
    return  2 * 10;
  }
 
}
console.log(plus(1))

