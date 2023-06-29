document.getElementById('myButton').onclick = function() {
    const text = document.getElementById('myText').value;
    if (text == 'Ron Miguel'){
        document.getElementById('name').innerHTML = 'Hello Boss Ron Miguel';
    }else if (text === ''){
        document.getElementById('name').innerHTML = '';
    }else {
        document.getElementById('name').innerHTML = `Hello: ${text}`
    }
};
document.getElementById('myButtonAge').onclick = () => {
    let age = document.getElementById('myAge').value;
    age = Number(age);
    if (age > 18){
        document.getElementById('age').innerHTML = "You're an adult"
    }else if(age < 18) {
        document.getElementById('age').innerHTML = "You're still young"
    }else {
        document.getElementById('age').innerHTML = " You're 18 years old"
    }
}


document.getElementById('count').onclick = () => {
    let counter = 0;
    
}


/*let a;
let b;
let c;

a = window.prompt('Enter side A');
a = Number(a);

b = window.prompt('Enter side B');
b = Number(b);

c = Math.floor(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)));

console.log('Side C:', c);*/

document.getElementById('submitButton').onclick = () => {
    a = document.getElementById('aTextBox').value;
    a = Number(a);

    b = document.getElementById('bTextBox').value;
    b = Number(b);

    c = Math.floor(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)));

    document.getElementById('cLabel').innerHTML = 'Side C:' + c;
}


let count = 0;

document.getElementById('increaseBtn').onclick = () => {
    count += 1;
    document.getElementById('count').innerHTML = count;
}

document.getElementById('resetBtn').onclick = () => {
    count = 0;
    document.getElementById('count').innerHTML = count;
}

document.getElementById('decreaseBtn').onclick = () => {
    count -= 1;
    document.getElementById('count').innerHTML = count;
}