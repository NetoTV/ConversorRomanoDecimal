let valorRomano = "CDL"

const arrayRomano = valorRomano.split('');

const valoresRomanos = [{ I: 1 }, { V: 5 }, { X: 10 }, { L: 50 }, { C: 100 }, { D: 500 }, { M: 1000 }]

function retornarNumerico() {
    if (arrayRomano.length > 0) {
        let valorAtual = [];
        arrayRomano.forEach((elementoR) => {
            valoresRomanos.forEach((valorR, i) => {
                if (elementoR == Object.keys(valoresRomanos[i])) {
                    if (elementoR === 'I') {
                        valorAtual.push(valorR.I);
                    } else if (elementoR === 'V') {
                        valorAtual.push(valorR.V);
                    } else if (elementoR === 'X') {
                        valorAtual.push(valorR.X);
                    } else if (elementoR === 'L') {
                        valorAtual.push(valorR.L);
                    } else if (elementoR === 'C') {
                        valorAtual.push(valorR.C);
                    } else if (elementoR === 'D') {
                        valorAtual.push(valorR.D);
                    } else if (elementoR === 'M') {
                        valorAtual.push(valorR.M);
                    }
                }
            })
        })
        if (valorAtual.length > 0) {
            valorAtual.forEach((valor, indice) => {
                if (valor < valorAtual[indice + 1]) {
                    valorAtual[indice] = valor * (-1);
                }
            })
            valorAtual = valorAtual.reduce((total, numero) => {
                return total + numero;
            })
            return (valorAtual);
        }
    }
}

console.log(retornarNumerico())