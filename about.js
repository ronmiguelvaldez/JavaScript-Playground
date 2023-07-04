// Greetings for my web visitors
/*let pangalan = '';
do {
    pangalan = window.prompt('Enter Your Name: ')
}while(pangalan == '' || pangalan == null)
alert(`Hello, ${pangalan} this website is about me, my skills and my portfolio `); */

// Choose Payment Method
document.getElementById('cardbtn').onclick = () => {
    const visaBtn = document.getElementById('visaBtn');
    const mastercardBtn = document.getElementById('mastercardBtn');
    const paypalBtn = document.getElementById('paypalBtn');

    if (visaBtn.checked) {
        console.log('You are paying with visa');
        document.getElementById('cardnote').innerHTML = 'You are paying with Visa';
    }else if (mastercardBtn.checked) {
        console.log('You are paying with Master card');
        document.getElementById('cardnote').innerHTML = 'You are paying with Master Card';
    }else if(paypalBtn.checked) {
        console.log('You are paying with Paypal')
        document.getElementById('cardnote').innerHTML = 'You are paying with Paypal';
    }else {
        console.log('You must choose a payment type')
        document.getElementById('cardnote').innerHTML = '* You must choose a payment type *';
    }
}
// Your Grade Assessment
document.getElementById('generategrade').onclick = () => {
let grade = document.getElementById('gradetext').value;
switch(true){
    case grade >= 100:
        document.getElementById('grade').innerHTML = `* NaN *`;
    break;
    case grade >= 90:
        document.getElementById('grade').innerHTML = `(${grade}) You did great! `;
    break;
    case grade >= 80:
        document.getElementById('grade').innerHTML = `(${grade}) You did good! `;
    break;
    case grade >= 70:
        document.getElementById('grade').innerHTML = `(${grade}) You did okay! `;
    break;
    case grade >= 60:
        document.getElementById('grade').innerHTML = `(${grade}) You passed ... BARELY `;
    break;
    case grade < 60:
        document.getElementById('grade').innerHTML = `(${grade}) You FAILED! `;
    break;
    default:
        document.getElementById('grade').innerHTML = `(${grade}) is not a Number Grade. `;
    }   
}