// var sum = (a, b) => a + b;
// console.log(sum("A soma é: ", 5,15))


// var sum = (a, b)=> a + b;
// console.log(sum("A soma é: ", 10 + 25))


// var createObj = () =>({teste:123})
// console.log(createObj())

// function car () {
//     this.foo = 'toyota'
// }

// console.log(new car())

// /*Função*/

// function multiple(a, b){
//     return a * b;
// }

// console.log(multiple(5, 5))

// /* O número "0" é um valor falso no javascript*/

// function randomNumber(){
//     return Math.random ()*1
// }

// console.log(randomNumber())
//  /* Método sum com uma função nomeada */
// var obj = {
//     sum (a, b){ 
//         return a + b
//     }
// }

// console.log(obj)


// function sum(a, b){
//     return a + b
// }

// console.log(sum(5,5))

/*Rest Operator*/

const sum  = (a, b,...rest) =>{
    console.log(a. b, rest)
}

console.log(sum( 5, 5, 5, 2, 3));