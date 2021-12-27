// function verifcarPalindromo(string){
//     if(!string) return;
//     return string.split("").reverse().join("")===string
// }

// console.log(verifcarPalindromo('gato'))

function substituirPares(arr){
    for(let i=0; i< arr.length;i++){
        if(arr[i]===0){
            console.log("Você já é zero")
        }else if(arr[i]%2===0){
            arr[i]=0
        }
    }

}

const arr