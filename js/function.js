

function bla(number){
    const re = /[2-9]/g
    
    if(number.search(re) !== -1){
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

    alert(sum)

    document.getElementById('number').value = ''
}