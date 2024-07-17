function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
};

function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
};

document.getElementById('generate-pin').addEventListener('click', function () {
    document.getElementById('display-pin').value = getPin();
});

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    previousTypedNumber = typedNumberField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typedNumberField.value = '';
        }
        else if (number === '<') {
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;

        }

    }
    else {
        newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }
})

document.getElementById('submit-btn').addEventListener('click', function () {
    if (document.getElementById('typed-numbers').value === document.getElementById('display-pin').value) {
        document.getElementById('pin-success').style.display = 'block';
        document.getElementById('pin-mismatch').style.display = 'none';

    }
    else {
        document.getElementById('pin-mismatch').style.display = 'block';
        document.getElementById('pin-success').style.display = 'none';

        const countShow = document.getElementById('count-show');
        let count = parseInt(countShow.innerText);
        if (count > 0) {
            count--;
            countShow.innerText = count;
        }
        else {
            alert('Please Try Again Later');
        }

    }
})