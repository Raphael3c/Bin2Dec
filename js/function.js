

function convert(number){
    const re = /[2-9]/g
    const re1 = /[a-z]/g
    const re2 = /[A-Z]/g
    
    if(number.search(re) !== -1 || 
        number.search(re1) !== -1 || 
        number.search(re2) !== -1 ||
        number == ''){

        alert("Número inválido")
        document.getElementById('number').value = ''
        return
        
    }

    let pow = number.length - 1;
    let sum = 0;

    for(let i = 0; i < number.length ; i++){
        if(number[i] == 1){
            sum = sum + Math.pow(2, pow)
        }
        pow--;
    }

    document.getElementById('number-converted').value = sum

}