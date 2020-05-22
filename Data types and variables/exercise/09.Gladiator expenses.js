function gladiator(lostFights, helmetP, swordP, shieldP, armorP) {
    let counterHelmet = 0;
    let counterSword = 0;
    let counterShield = 0;
    let priceOfAll = 0;
    for (let index = 1; index <= lostFights; index++) {
        counterHelmet++
        counterSword++;
        if (counterHelmet == 2 && counterSword == 3) {
            priceOfAll += shieldP;
            counterShield++;
        }
        if (counterShield == 2 ) {
            priceOfAll += armorP;
            counterShield =0;
        }
        if (counterHelmet == 2) {
            priceOfAll += helmetP;
            counterHelmet = 0;
        }
        if (counterSword == 3) {
            priceOfAll += swordP;
            counterSword = 0;
        }

    }
    console.log(`Gladiator expenses: ${priceOfAll.toFixed(2)} aureus`);
    
}
gladiator(23, 12.50, 21.50, 40, 200)