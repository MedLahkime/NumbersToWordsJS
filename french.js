const { info } = require("console");

french = {
    "single_digits" : ["", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf"],
    "teens" : ["dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"],
    "double_digits" : ["", "dix", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante-dix", "quatre-vingts", "quatre-vingt-dix" ],
    }
  


function numbersToWords(num){
    if(num>999 && num<=9999)
        return convertQuadraDigit(num);
    else
        if (num>99 && num<=999)
            return convertTripleDigit(num);
        else
            if(num>9 && num<=99)
                return convertDoubleDigit(num);
            else
                return convertSingleDigit(num);

}

function convertSingleDigit(num){
    if (num<10)
        return french.single_digits[num];
    return null;
}

function convertDoubleDigit(num){
    if (num<10)
        return convertSingleDigit(num);
    if (num<20)
        return french.teens[num-10];
    if (num>=20 && num<=69){
        if(num%10===0)
            return french.double_digits[num/10];
        else 
            if(num%10===1)
                return french.double_digits[(num-1)/10] + ' et un';
            else{
                const a = num%10;
                const b = (num-a)/10;
                return french.double_digits[b] +'-' + french.single_digits[a]
            } 

        }
    else{
        if(num%10===0) return french.double_digits[num/10];
        if (num===71) return 'soixante-et-onze';
        if (num===81) return 'quatre-vingt-un';
        if (num===91) return 'quatre-vingt-onze';
        if (num>71 && num<80) return 'soixante-' + french.teens[num-70];
        if (num>81 && num<90) return 'quatre-vingt-' + french.single_digits[num-80];
        if (num>91 && num<100) return 'quatre-vingt-' + french.teens[num-90];
    }

}

function convertTripleDigit(num){
    if (num<=99) return convertDoubleDigit(num);
    if (num>99 && num<=999){
        let res = '';
        let a = (num-(num%100))/100;
        let b = num-a*100;
        console.log(a + 'et' + b);
        if (a>1) res = convertSingleDigit(a) +' ';
        return res + 'cent ' + convertDoubleDigit(b);
    }
}

function convertQuadraDigit(num){
    if (num>999 && num<=9999){
        let res = '';
        let a = (num-(num%1000))/1000;
        let b = num-a*1000;
        console.log(a + 'et' + b);
        if (a>1) res = convertSingleDigit(a) +' ';
        return res + 'mille ' + convertTripleDigit(b);
    }
}
console.log(numbersToWords(7496));
/*
for (let i = 1000; i<1100; i++)
    console.log(numbersToWords(i));
    */
