import {useState} from 'react';

const Contador = ()=>{
    const [contador, setContador] = useState(0);

    const incrementar = ()=>{
        setContador(contador + 1);
        console.log('contador', contador)
    }
   
    return(
        <button className='btn-search' onClick={incrementar}>Cantidad: {contador} </button>
    );
}

export default Contador;