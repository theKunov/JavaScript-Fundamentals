function grades(num) {
    if (num >= 2.00 && num <= 2.99) {
        return 'Fail'
    }else if (num >= 3.00 && num <= 3.49) {
        return 'Poor'
    }else if (num >= 3.50 && num <= 4.49) {
        return 'Good'
    }else if (num >= 4.50 && num <= 5.49) {
        return 'Very good'
    }else if (num >= 5.50 && num <= 6.00) {
        return 'Excellent'
    }
}
console.log(grades(3.5));
