function barIncome(arr) {
    let regExp = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>[\w]+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.]*?(?<price>\d+[.]?[\d]*)\$/gm;
     

}
barIncome(['%George%<Croissant>|2|10.3$',
           '%Peter%<Gum>|1|1.3$',
           '%Maria%<Cola>|1|2.4$',
           'end of shift'])