import { useState } from "react";

useState

const Informacion = ({mensaje}) => {
const [mensajeAdicional, setMensajeAdicional] = useState('')

const mostrar = ()=>{
    setMensajeAdicional('(from changed state)')
}
    return (
        <section>
            <h1>Hello {mensaje} {mensajeAdicional}!</h1>
            <button onClick={mostrar}>Click me</button>
        </section>
    );
};

export default Informacion;