function wrongRes(numOne, numTwo, numThree) {
    if (numOne * numTwo * numThree < 0) {
        return 'Negative'
    }else{
        return 'Positive'
    }

}
wrongRes(5, -12, -15)