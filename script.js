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
console.log(isPalindrome('A mala nada na lama'))

function arrayMaxMin(arr){
    /* Seu código aqui */
}
