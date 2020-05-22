function bonusScoring(all) {
    all.map(Number);
    all.shift();
    let lectures = all.shift();
    let aditionalBonus = all.shift();
    
    let maxBonus = 0;
    let maxLectures = 0; 
    for (let index = 0; index < all.length; index++) {
        let attendacies = all[index];
            if (attendacies > maxLectures ) {
                maxLectures = attendacies
            }
        
    }
    maxBonus = maxLectures / lectures * ( 5 + aditionalBonus )
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${Math.ceil(maxLectures)} lectures.`);
}
bonusScoring([10,
    30,
    14,
    8,
    23,
    27,
    28,
    15,
    17,
    25,
    26,
    5,
    18])