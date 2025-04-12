// Este es un juego que me pidió hacer codeacademi

const prompt = require('prompt-sync')({sigint: true});
console.log('hola bienvenido a mi juego');
console.log('Para moverte debes usar a, s, d, w')

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor (camp) {
    this._camp = camp;
    this._secondcamp = [];
    this._positionY = 0;
    this._positionX = 0;
    this._status = true;
    this._winner = false;
  }
  get camp () {
    return this._camp;
  }
  print () {
    this._camp.forEach(row => {
      console.log(row.join(' '));
    })
  } // repuesta a la pregunta de movimiento, ademas de filtro
  direcction (move) {
    switch (move) {

      case 'a':
      this._positionX --;
      break;

      case 'd':
      this._positionX ++;
      break;

      case 'w':
      this._positionY --;
      break;

      case 's':
      this._positionY ++;
      break;

      default:
        console.log('Esa no es una de las teclas de movimiento');
        return;

    }
  } // Verificador de limite de mapa
  lose (map) {
    if  (this._positionY < 0 ||
        this._positionY >= map.length
     ) {
        return this._status = false;

     } else if (this._positionX < 0 ||
        this._positionX >= map[this._positionY].length
    ) {
        return this._status = false;
    }
  } // transformacion de ░ a esto *, para luego imprimirlo y agregaré de que si es un 'o' se va a la caca;
  moving (ejeX, ejeY, map) {
    if (map[ejeY] === '░') {
        return map[ejeY] = '*';
    } else if (map[ejeY][ejeX] === '░') {
        return map[ejeY][ejeX] = '*';
    } else if (map[ejeY] === 'O') {
        return this._status = false;
    } else if (map[ejeY][ejeX] === 'O') {
        return this._status = false; 
    } else if (map[ejeY][ejeX] === hat) {
        return this._winner = true; 
    } else if (map[ejeY] === hat) {
        return this._winner = true;
    }
  }
  game () {
    do {
        this.print();
        const move = prompt ('A donde e quieres mover?')
        this.direcction(move);
        this.lose(this._camp);
        this.moving(this._positionX, this._positionY, this.camp);
        

    } while (this._status === true && this._winner === false);

    if (this._status === false) {
        console.log('Lo lamento pero perdiste');
    } else if (this._winner === true) {
        console.log('Felicidades ganaste');
    }
  }
  generateField (ancho, alto, porcentajeagujeros) {

    const randomancho = Math.ceil(Math.random() * ancho);

    const randomalto = Math.ceil(Math.random() * alto);
    
    let agujeros = (ancho * alto) * (porcentajeagujeros / 100);

    for (let i = 0; i < alto; i++) {
      for (let j = 0; j < ancho; j++) {
        this._secondcamp.push(fieldCharacter);
      }
    }

    this._secondcamp[randomalto][randomancho] = hat;
    let cambiohecho = 0;

    while (cambiohecho < agujeros) {
      if (this._secondcamp[randomalto][randomancho] === fieldCharacter) {
        this._secondcamp[randomalto][randomancho] = hole;
        cambiohecho ++;
      }
    }

  }
}
//node main.js
const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);

myField.game();

