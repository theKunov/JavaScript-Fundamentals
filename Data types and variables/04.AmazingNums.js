function amazing(num) {
    num = num.toString();
    let amazingNum = 0;
    for (let index = 0; index < num.length; index++) {
        amazingNum += Number(num[index]);
    }
    let endResult = amazingNum.toString();
    console.log(endResult.includes("9") ? `${num} Amazing? True` : `${num} Amazing? False`);
}
amazing(999)