
function getTheRandomPin(){
    const randomPin = Math.round(Math.random() * 10000);
    return randomPin;
}


function getPin(){
    const pin = getTheRandomPin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}



document.getElementById('btn-pin-generate').addEventListener('click', function(){
    const pin = getPin();
    
    const inputPinField = document.getElementById('input-pin-field');
    inputPinField.value = pin;
})

document.getElementById('calculator').addEventListener('click', function(event){
     const number =  event.target.innerText;

      const typedInputField = document.getElementById('typed-number-field');
      const previousTypedNumber = typedInputField.value;

      if(isNaN(number)){
        if(number === 'C'){
            typedInputField.value = '';
        }
        else if(number === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedInputField.value = remainingDigits;
        }
      }
      else{
        const newTypedNumber = previousTypedNumber + number;
        typedInputField.value = newTypedNumber;
      }
})


document.getElementById('btn-submit').addEventListener('click', function(){

    const inputPinField = document.getElementById('input-pin-field');
    const inputPinValue = inputPinField.value;

    const typedInputField = document.getElementById('typed-number-field');
    const typedInputValue = typedInputField.value;

    const rightPin = document.getElementById('right-pin');
    const wrongPin = document.getElementById('wrong-pin');
    if(inputPinValue === typedInputValue){
        rightPin.style.display = 'block';
        wrongPin.style.display = 'none';
    }
    else{
        rightPin.style.display = 'none';
        wrongPin.style.display = 'block';
    }
})