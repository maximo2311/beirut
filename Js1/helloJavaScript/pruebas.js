const ex1 = ['A', 'C', 'T', 'G']
const ex2 = ['C', 'A', 'T', 'T']

const comparador = (col1, col2) => {
    let contador = 0;

    for (let i = 0; i<col1.length; i++) {

        for (let j = 0; j<col2.length; j++) {

            if (i === j) {

                if (col1[i] === col2[j]) {
    
                    contador ++;
        
                }

            }
    

    
        }
    
    }

    return contador;

};

console.log(comparador (ex1, ex2));