function showCoffeeImage(coffeeType) {
    document.getElementById('hotImage').classList.add('hidden');
    document.getElementById('coldImage').classList.add('hidden');
    if (coffeeType === 'hot') {
        document.getElementById('hotImage').classList.remove('hidden');
    } else if (coffeeType === 'cold') {
        document.getElementById('coldImage').classList.remove('hidden');
    }
}

function toggleAddonImage(imageId) {
    var img = document.getElementById(imageId);
    if (img.classList.contains('unselected')) {
        img.classList.remove('unselected');
        img.classList.add('selected');
    } else {
        img.classList.remove('selected');
        img.classList.add('unselected');
    }
}

// פונקציה חדשה לאיסוף פרטי ההזמנה
function getOrderSummary() {
    var name = document.getElementById('name').value;
    var coffeeType = document.querySelector('input[name="coffeeType"]:checked').value;
    var addons = document.querySelectorAll('input[name="addons"]:checked');

    var coffeeTypeHebrew = '';
    if (coffeeType === 'hot') {
        coffeeTypeHebrew = 'Hot Coffee';
    } else {
        coffeeTypeHebrew = 'Cold Coffee';
    }

    var addonsText = '';
    for (var i = 0; i < addons.length; i++) {
        var addon = addons[i].value;
        if (addon === 'strong') {
            addonsText += 'Strong';
        } else if (addon === 'notStrong') {
            addonsText += 'Weak';
        } else if (addon === 'katzefet') {
            addonsText += 'With Cream';
        } else if (addon === 'sprinkles') {
            addonsText += 'With Sprinkles';
        } else if (addon === 'cookies') {
            addonsText += 'With Cookies';
        }

        if (i < addons.length - 1) {
            addonsText += ', ';
        }
    }

    // שימוש בתווים מיוחדים עבור ירידות שורה
    return "Hey " + name + " " +
        "your order is: " +
        coffeeTypeHebrew + ", "+
         addonsText;
}

// בדיקת שדות הטופס להפעלת כפתור ההזמנה
document.getElementById('orderForm').addEventListener('change', function () {
    var name = document.getElementById('name').value.trim();
    var coffeeSelected = document.querySelector('input[name="coffeeType"]:checked');
    var addonsSelected = document.querySelector('input[name="addons"]:checked');
    if (name && coffeeSelected && addonsSelected) {
        document.getElementById('orderButton').disabled = false;
    } else {
        document.getElementById('orderButton').disabled = true;
    }
});

// הוספת event listener חדש לטופס
document.getElementById('orderForm').addEventListener('submit', function (event) {
    event.preventDefault(); // מניעת שליחת הטופס
    var orderSummary = getOrderSummary();
    alert(orderSummary); // הצגת ההתראה עם סיכום ההזמנה
});