alert(new Date());
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
document.getElementById('rngButton').onclick = () => {

     x = Math.floor(Math.random() * 10) + 1;

     if(x == 1 ){
        document.getElementById('qoutelabel').innerHTML ='We cannot solve problems with the kind of thinking we employed when we came up with them.<br> -Albert Einstein';
     }else if(x == 2){
        document.getElementById('qoutelabel').innerHTML ='Learn as if you will live forever, live like you will die tomorrow.<br> -Mahatma Gandhi';
     }else if(x == 3) {
        document.getElementById('qoutelabel').innerHTML ='Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.<br> -Mark Twain ';
     }else if(x == 4) {
        document.getElementById('qoutelabel').innerHTML ='When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.<br> - Eleanor Roosevelt'; 
     }else if (x == 5) {
        document.getElementById('qoutelabel').innerHTML ='When you change your thoughts, remember to also change your world.<br> - Norman Vincent Peale';
     }else if(x == 6) {
        document.getElementById('qoutelabel').innerHTML ='It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest.<br> - Walter Anderson';
     }else if (x == 7) {
        document.getElementById('qoutelabel').innerHTML ='Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.<br> -Diane Mclaren';
     }else if (x == 8) {
        document.getElementById('qoutelabel').innerHTML ='Success is not final; failure is not fatal: It is the courage to continue that counts. <br> -Winston S. Churchill';
     }else if(x == 9) {
        document.getElementById('qoutelabel').innerHTML ='Don’t let yesterday take up too much of today.<br> -Will Rogers';
     }else {
        document.getElementById('qoutelabel').innerHTML ='Education is the most powerful weapon which you can use to change the world.<br> -Nelson Mandela';
     }
}

// Temperature Calculation 
document.getElementById('tempbtn').onclick = () => {
    let celcius = document.getElementById('tempcel').value;
    let fahrenheit = (celcius * 9 / 5) + 32; 
    let kelvin = Math.floor(celcius + 273.15)
    document.getElementById('tempfar').innerHTML = fahrenheit;
    document.getElementById('tempkelvin').innerHTML = kelvin;
}

// Window Prompt using Do-While Loop
let userName = '';
do {
    userName = window.prompt('Enter your name:')
}while(userName == '' || userName == null);

console.log('Hello', userName)
document.getElementById('welcome').innerHTML = `Welcome to my Website ${userName}`

// For Loop Generator
document.getElementById('openprompt').onclick = () => {
    let symbol = window.prompt('Enter a symbol to use')
    let row = window.prompt('Enter a number of rows');
    let column = window.prompt('Enter a number of columns');

    for(let i = 1; i <= row; i+=1){
        for(let j = 1; j <= column; j+= 1){
            document.getElementById('forlooprowcol').innerHTML += symbol;
        }
        document.getElementById('forlooprowcol').innerHTML += "<br>"
    }
}

// Order System 
document.getElementById('totalorder').onclick = () => {
    let item = "Cinnamon";
    let price = "100";
    let quantity = document.getElementById('quantity').value;
    let total = null;

    total = quantity * price;
    document.getElementById('purchase').innerHTML = `You have ordered ${quantity} x ${item}/s`;
    document.getElementById('total').innerHTML = `Your total amount is: ₱${total}`
}
// Maximum Number 
document.getElementById('maxbutton').onclick = () => {
    let xmax = document.getElementById('xmax').value;
    let ymax = document.getElementById('ymax').value;
    let zmax = document.getElementById('zmax').value;
    let totalMax = Math.max(xmax, ymax, zmax);

    document.getElementById('maximum-number').innerHTML = totalMax;
}

// Minimum Number 
document.getElementById('minbutton').onclick = () => {
    let xmin = document.getElementById('xmin').value;
    let ymin = document.getElementById('ymin').value;
    let zmin = document.getElementById('zmin').value;
    let totalMin = Math.min(xmin, ymin, zmin);
    
    document.getElementById('minimum-number').innerHTML = totalMin;
}
// Payroll Computation with Hour 
document.getElementById('otcompute').onclick = () => {
    let hour = document.getElementById('hour').value;
    let rate = 15;
    let weeklypay = null;
    let hours = Number(hour);
    
    if (hours <= 0){
        weeklypay = 0;
    }else if (hours <= 40) {
        weeklypay = hour * rate;
    }else {
        weeklypay = (rate * 40) +  ((hour - 40) * (rate * 1.5))
    }
    document.getElementById('otpay').innerHTML = `Your weekly pay is: ${weeklypay}`
}
// Movie Price Check 
document.getElementById('moviebutton').onclick = () => {
    let kid = document.getElementById('kid').checked;
    let senior = document.getElementById('senior').checked;
    let regular = document.getElementById('regular').checked;

    if (!kid && !senior && !regular ){
        document.getElementById('movieprice').innerHTML = "Checkbox is Required*";
    }else if (kid && !senior && !regular){
        document.getElementById('movieprice').innerHTML = "The movie price is $12";
    }else if (!kid && senior && !regular){
        document.getElementById('movieprice').innerHTML = "The movie price is $10";
    }else if(!kid && !senior && regular){
        document.getElementById('movieprice').innerHTML = "The movie price is $15";
    }else {
        document.getElementById('movieprice').innerHTML = "One checked item only";
    }
}
// Hiding a Div 
/*document.getElementById('hidebutton').onclick = () => {
    let hide = document.getElementById('hidediv');
    if (hide.style.display === "none"){
        hide.style.display = "block";
    }else {
        hide.style.display = "none";
    }
}*/