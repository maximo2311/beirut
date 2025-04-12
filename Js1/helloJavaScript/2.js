const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  




//MI CÓDIGO

let Sobrevivientes = [];

const pAequorFactory = (specimenNum, dna) => {

    return {
        specimenNum,
        dna,
        mutate (dna) {
            for (let i = 0; i < dna.length; i++) {

                console.log(dna);

                let ranB = returnRandBase();
                
                let orig = dna[i];
                
                if (orig === ranB) {

                    do {

                        ranB = returnRandBase();

                    } while (orig === ranB);

                    dna[i] = ranB;

                } else {
                
                    dna[i] = ranB;
                
                }

            }
            console.log(dna);
            return dna
        },

        compareDNA (esp1, esp2) {

            let contador = 0;

            for (let i = 0; i<esp1.dna.length; i++) {

                for (let j = 0; j<esp2.dna.length; j++) {

                    if (i === j) {

                        if (esp1.dna[i] === esp2.dna[j]) {

                            contador ++;
    
                        }

                    }

                }

            }

            const porcentaje = Math.floor(100 * contador / esp1.dna.length);

            console.log (`specimen ${esp1} and specimen ${esp2} have ${porcentaje} DNA in common`);

        },

        willLikelySurvive (esp) {

            const cont = 0;

            for (let i = 0; i<esp.length; i++) {

                if (esp[i] === 'C' ||
                    esp[i] === 'G'
                ) {

                    cont ++;

                }

            }

            const porcen = Math.floor(100 * cont / esp.length);

            if (porcen > 59) {
                Sobrevivientes.push( [...esp] );
                console.log('sobrevive');
                return true;
            } else {
                console.log('muere');
                return false;
            }

        }

    }

};