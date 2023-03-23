export class Cuenta{
    #cliente;
    #saldo;

    constructor(cliente, numero, agencia, saldo){
        this.#cliente=cliente;
        this.numero=numero;
        this.agencia=agencia;
        this.#saldo=saldo;
    }

     //set o asignador

     set cliente(valor){
        if(valor instanceof Cliente)
        this.#cliente= valor;
    }

    //get u obtener

    get cliente(){
       return this.#cliente;
    }
     depositoEnCuenta(valor){
        if(valor > 0){
            this.#saldo += valor; 
            return this.#saldo;
        }
    }
    retiroEnCuenta(valor){
       /* if(this.tipo== 'Corriente'){
            valor = valor * 1.05;
        }else if(this.tipo=='Ahorro'){
            valor = valor * 1.02;
        }*/
        if(valor<=this.#saldo){
            this.#saldo -= valor;
            return this.#saldo;
        }
    }
    verSaldo(){
        return this.#saldo;
    }
    tranferirParaCuenta(valor, cuentaDestino){
        this.retiroEnCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
    }
}