// labels

let unidades = 0
let decenas = 0

cicloDecenas: while (true){
    cicloUnidades: while (true){
        console.log(`El número actual es: ${decenas}${unidades}`);
        unidades++
        if (unidades === 10){
            unidades = 0
            break cicloUnidades
        }
        if (decenas === 2){
            break cicloDecenas
        }
    }
    decenas++
}