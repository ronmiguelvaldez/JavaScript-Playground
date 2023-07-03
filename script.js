// Input Form Name
document.getElementById('myButton').onclick = function() {
    const text = document.getElementById('myText').value;
    if (text == 'Ron Miguel'){
        document.getElementById('name').innerHTML = 'Hello Boss Ron Miguel';
    }else if (text === ''){
        document.getElementById('name').innerHTML = '';
    }else {
        document.getElementById('name').innerHTML = `Hello: ${text}`
    }
}

// Input Age
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

// Computation of Hypotenues
document.getElementById('submitButton').onclick = () => {
    a = document.getElementById('aTextBox').value;
    a = Number(a);

    b = document.getElementById('bTextBox').value;
    b = Number(b);

    c = Math.floor(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)));

    document.getElementById('cLabel').innerHTML = 'Side C:' + c;
}

// Decrease, Reset and Increase Counter
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


//Qoute Generator
let x;
let y;
let z;
document.getElementById('rngButton').onclick = () => {

     x = Math.floor(Math.random() * 10) + 1;

     if(x == 1 ){
        document.getElementById('xLabel').innerHTML ='We cannot solve problems with the kind of thinking we employed when we came up with them.<br> -Albert Einstein';
     }else if(x == 2){
        document.getElementById('xLabel').innerHTML ='Learn as if you will live forever, live like you will die tomorrow.<br> -Mahatma Gandhi';
     }else if(x == 3) {
        document.getElementById('xLabel').innerHTML ='Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.<br> -Mark Twain ';
     }else if(x == 4) {
        document.getElementById('xLabel').innerHTML ='When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.<br> - Eleanor Roosevelt'; 
     }else if (x == 5) {
        document.getElementById('xLabel').innerHTML ='When you change your thoughts, remember to also change your world.<br> - Norman Vincent Peale';
     }else if(x == 6) {
        document.getElementById('xLabel').innerHTML ='It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest.<br> - Walter Anderson';
     }else if (x == 7) {
        document.getElementById('xLabel').innerHTML ='Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.<br> -Diane Mclaren';
     }else if (x == 8) {
        document.getElementById('xLabel').innerHTML ='Success is not final; failure is not fatal: It is the courage to continue that counts. <br> -Winston S. Churchill';
     }else if(x == 9) {
        document.getElementById('xLabel').innerHTML ='Don’t let yesterday take up too much of today.<br> -Will Rogers';
     }else {
        document.getElementById('xLabel').innerHTML ='Education is the most powerful weapon which you can use to change the world.<br> -Nelson Mandela';
     }
}

document.getElementById('about') = document.open('about.html')