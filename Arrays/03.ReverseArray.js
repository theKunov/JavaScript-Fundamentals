function reverse(num , arr) {
   arr = arr.slice(0 , num);
   let endResult = '';
   for (let index = arr.length -1; index >= 0 ; index--) {
       endResult += arr[index] + ' ';
       
   }
   
   console.log(endResult);
   
    
}
reverse(3, [10, 20, 30, 40, 50])