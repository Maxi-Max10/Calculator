class Display {
    constructor(previus, current){
        this.previus = previus;
        this.current = current;
        this.typeO = undefined;
        this.calculator = new Calculator();
        this.vActual = '';
        this.vAnterior = '';
        this.signos = {
            sum: '+',
            div: '/',
            mult: '*',
            res: '-',
            parA: '(',
            parC: ')',
        }

    }

    agregarN(num){
        if (num === '.' && this.vActual.includes('.')) return
        this.vActual = this.vActual.toString() + num.toString();
        this.impriV();

    }
    
    deleteN(num) {
        this.vActual = this.vActual.toString().slice(0,-1);
        this.impriV();
    }
    deleteT() {
        this.vActual = '';
        this.vAnterior = '';
        this.typeO = undefined;
        this.impriV();
    }
    computar(tipo){
        this.typeO !== 'igual' &&  this.calculo();
        this.typeO = tipo;
        this.vAnterior = this.vActual || this.vAnterior;
        this.vActual = '';
        this.impriV();
    }

    impriV(){
        this.current.textContent = this.vActual;
        this.previus.textContent = `${this.vAnterior} ${this.signos[this.typeO] || ''}`;
    }

    calculo(){
        const vAnterior = parseFloat(this.vAnterior); //vuelvo al numero que estaba como string
        const vActual = parseFloat(this.vActual);

        if (isNaN(vActual) || isNaN(vAnterior)) return
        this.vActual = this.calculator[this.typeO](vActual,vAnterior);
    }

    
}