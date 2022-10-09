function display(input){
    
    document.getElementById('result').value += input;
    console.log(input);
    return input;
}
function solve(){
    let x = document.getElementById('result').value;
    let y = eval(x);
    document.getElementById('result').value = y;
    return y;
}
function solveIt(){
 
    let x = display(input);
    console.log(x);

    let y = document.getElementById('single').value;
    console.log(y);

    let z = document.getElementById('single').value;
    console.log(z);

    let solution = 0;

    if(y === '+'){
        solution =  x + z;
    }else if(y === '-'){
        solution = x - z;
    }else if(y === '*'){
        solution = x * z;
    }else if(y ==='/'){
        solution = x / z;
    }

    return x;
}

function clearAll(){

    document.getElementById('result').value ='';

}
function check(input){
    if(input === '+'){

    }
}