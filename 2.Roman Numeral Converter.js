// Roman Numeral Converter

/*
Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {
    const arrRoman = [
        {
            symbol: 'M',
            value: 1000
        },
        {
            symbol: 'CM',
            value: 900
        },
        {
            symbol: 'D',
            value: 500
        },
        {
            symbol: 'CD',
            value: 400
        },
        {
            symbol: 'C',
            value: 100
        },
        {
            symbol: 'XC',
            value: 90
        },
        {
            symbol: 'L',
            value: 50
        },
        {
            symbol: 'XL',
            value: 40
        },
        {
            symbol: 'X',
            value: 10
        },
        {
            symbol: 'IX',
            value: 9
        },
        {
            symbol: 'V',
            value: 5
        },
        {
            symbol: 'IV',
            value: 4
        },
        {
            symbol: 'I',
            value: 1
        }
    ];
  
   return arrRoman.reduce((result,key) => {
     while (num >= key.value) {
       result = result + key.symbol;
       num -= key.value;
     }
      return result;
   },"");
  }

  console.log(convertToRoman(6))
  console.log(convertToRoman(36));
  console.log(convertToRoman(1000));
  console.log(convertToRoman(3999));