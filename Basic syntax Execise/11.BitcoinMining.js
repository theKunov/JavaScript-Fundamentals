function mining(gold) {
  let goldForDay = 0;
  let money = 0;
  let days = 0;
 
  let bitcoins = 0;
  let dayBought = 0;
  let allDays = 0;
  for(let i = 0 ; i < gold.length ; i++){
    goldForDay  = gold[i];
    days++;
    allDays++;
    if (days === 3) {
      goldForDay -= gold[i] * 0.30;
      days = 0;
    }
    money += goldForDay * 67.51;
    while (money >= 11949.16) {
      money -= 11949.16;
      bitcoins++;
      if (bitcoins === 1) {
        dayBought = allDays;
      }
    }
  }
  console.log(`Bought bitcoins: ${bitcoins}`);
  if (bitcoins > 0) {
    console.log(`Day of the first purchased bitcoin: ${dayBought}`);
  }
  console.log(`Left money: ${money.toFixed(2)} lv.`);
  

}
mining([3124.15,504.212,2511.124])