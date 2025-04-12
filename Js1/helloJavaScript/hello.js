const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];

let tarjetasval = [];

let tarjetasinval = [];

const validateCred = card => {
//debe devolver un valor booleano

let result = 0;

  for (let i = card.length - 1; i >= 0; i--) {

    let numtemp = card[i]; 
    

    if (i % 2 === 1) {
      numtemp *= 2;

      if(numtemp > 9) {
        numtemp -= 9; 
      }

      result = numtemp + result;

    } 
    
    result += numtemp;
  };

  return result % 10 === 0;

};


const findInvalidCards = cardid => {

  const verification = validateCred(cardid);

  if (verification) {

    tarjetasval.push( ' tarjeta:  ' );
    tarjetasval.push( [...cardid] );

  } else {

    tarjetasinval.push( ' tarjeta:  ' );
    tarjetasinval.push( [...cardid] );

  }

};

/* 

console.log("Tarjetas inválidas: " + tarjetasinval);

console.log("Tarjetas válidas: " + tarjetasval);


*/

// quiero que se guarde en tarjetasval asi: [[4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8], [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]]
findInvalidCards(mystery1);
findInvalidCards(mystery2);
findInvalidCards(mystery3);
findInvalidCards(mystery4);
findInvalidCards(mystery5);

const idInvalidCardCompanies = tarjet => {

  let compamalas = [];

  for (let i = 0; i <tarjet.length; i++) {

    let idtarjetas = tarjetasinval[i][0];

    if (typeof idtarjetas === 'number') {


      if (idtarjetas === 3) {

        compamalas += ['Amex (American Express)'];
  
      } else if (idtarjetas === 4) {
  
        compamalas += ' Visa ';
  
      } else if (idtarjetas === 5) {
  
        compamalas += ' Mastercard ';
  
      } else if (idtarjetas === 6) {
  
        compamalas += ' Discover ';
  
      } else {
  
        console.log(' Company not found ');
      }


    }

  }

  return compamalas;

};

idInvalidCardCompanies(tarjetasinval);