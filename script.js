function isPalindrome(str){
    let frase = str.toUpperCase().replaceAll(" ","");
    let fraseContraria = "";
    for(let i = 0; i < str.length; i++){
        fraseContraria = (fraseContraria + str[str.length - 1-i]).toUpperCase().replaceAll(" ","");
    }
    if (frase == fraseContraria) {
        return true
    }
    return false
}
// console.log(isPalindrome('A mala nada na lama'))

function arrayMaxMin(arr){
    let max = arr[0];
    let min = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }else if(arr[i] < min){
            min = arr[i]
        }
    }
    let newarray = [min,max]
    return newarray
}
// let teste = [65,2,3,4,6,6,3,2,1214,43]
// console.log(arrayMaxMin(teste))
