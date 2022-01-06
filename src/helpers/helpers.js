const MILISECONDS_BY_DAY = 1000 * 60 * 60 * 24

const options = {
    timeZone: 'America/Costa_Rica',
    dateStyle: 'full',
    hour12: true
}

export const daysInMonth = (month, year) => new Date(year, month, 0).getDate()


export const getCurrentDate = () => {
    const date = new Date()
    return date.toLocaleString('en-UK', options)
}

export const getDateOfPayments = (date, days) => {
    let semanaEnMs = MILISECONDS_BY_DAY * days
    let sumDay = new Date(date).getTime() + semanaEnMs
    let datePayments = new Date(sumDay)

    return datePayments.toLocaleString('en-UK', options)
}

/****************************** 
** CALCULOS DE LOS PRESTAMOS **  
*******************************/
// montoCredito: 16384,
// interes(%): 32.00,
// numCuotas: 4
// montoInteres: 5242.88, 
// montoTotal: 21626.88,
// montoCuota: 5406.72 

export const loanCalculate = (montoCredito, interes, numCuotas = 0) => {
    
    class Calculate {
        constructor(credito, intereses, cuotas) {
            this.montoCredito = credito
            this.interes = intereses
            this.numCuotas = cuotas
        }

        getAmountInteres() {
            return (this.montoCredito * this.interes) / 100;
        }

        getAmountTotal() {
            return this.montoCredito + this.getAmountInteres();
        }

        getAmountFee() {
            return this.getAmountTotal() / this.numCuotas;
        }
    }

    let calculate = new Calculate(montoCredito, interes, numCuotas);

    return {
        amountInteres: calculate.getAmountInteres(),
        amountTotal: calculate.getAmountTotal(),
        amountFee: calculate.getAmountFee()
    }

    // return new Promise((resolve, reject) => {
    //     class Calculate {
    //         constructor(credito, intereses, cuotas) {
    //             this.montoCredito = credito
    //             this.interes = intereses
    //             this.numCuotas = cuotas
    //         }

    //         getAmountInteres() {
    //             return (this.montoCredito * this.interes) / 100;
    //         }

    //         getAmountTotal() {
    //             return this.montoCredito + this.getAmountInteres();
    //         }

    //         getAmountFee() {
    //             return this.getAmountTotal() / this.numCuotas;
    //         }
    //     }

    //     let calculate = new Calculate(montoCredito, interes, numCuotas);

    //     const result = {
    //         amountInteres: calculate.getAmountInteres(),
    //         amountTotal: calculate.getAmountTotal(),
    //         amountFee: calculate.getAmountFee()
    //     }

    //     if(montoCredito > 0 || interes > 0) {
    //         resolve(result);
    //     } else {
    //         reject(`El monto o los inteses no pueden ser negativos`);
    //     }
    // })
}
    
export const getPayments = (loans, status = 'pago') => {
    let feeList = []
    
    if(loans.length){
        loans.forEach((loan, idx) => {
            const { amortizacion } = loan
            if(amortizacion) {
                amortizacion.forEach((fee, index) => {
                    if(fee.status === status) {
                        feeList.push({ ...fee, _id: `${idx}${index}`, loanId: loan.id, clientId: loan.clienteId})
                    }
                })
            }
        })
    }
    return feeList
}

/*
/// EJEMPLO DE GENERADOR DE CODIGO

//tomamos la ultima id
$consu = $db->query("SELECT * FROM tabla ORDER BY id DESC");
$total = mysqli_num_rows($consu);
$rowid = $consu->fetch_assoc();
 
 
$codigo = sprintf("%06d", $rowid['id']+1); //le asignamos ceros antes a nuestra id para formatearla ejemplo 000015
 
$prefijo = "ABC";
 
$cod_final = $prefijo."-".$codigo; //quedaria algo asi ABC-000015
 
//guardamos el codigo en la base de datos
$guarda = $db->query("INSERT INTO tabla (codigo) VALUE ('$cod_final')");
 
//mostramos el Codigo
echo $cod_final;

*/


