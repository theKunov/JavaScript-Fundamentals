function vacation(num, type, day) {
    let pricePerPerson = 0;
    switch (type) {
        case "Students":
            if (day == "Friday") {
                pricePerPerson += 8.45;
            } else if (day == "Saturday") {
                pricePerPerson += 9.80;
            }
            else if (day == "Sunday") {
                pricePerPerson += 10.46;
            }
            break;
        case "Business":
            if (day == "Friday") {
                pricePerPerson += 10.90;
            } else if (day == "Saturday") {
                pricePerPerson += 15.60;
            }
            else if (day == "Sunday") {
                pricePerPerson += 16;
            }
            break;
        case "Regular":
            if (day == "Friday") {
                pricePerPerson += 15;
            } else if (day == "Saturday") {
                pricePerPerson += 20;
            }
            else if (day == "Sunday") {
                pricePerPerson += 22.50;
            }
            break;
    }
    let totalPrice = pricePerPerson * num;
    if (num >= 30 && type == "Students")  {
        totalPrice = totalPrice * 0.85; 
    }else if(num >= 100 && type == "Business"){
        totalPrice -= pricePerPerson * 10;
    }else if(num >= 10 && num <= 20 && type == "Regular"){
        totalPrice = totalPrice * 0.95;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
    
}
vacation(40,
    "Regular",
    "Saturday")