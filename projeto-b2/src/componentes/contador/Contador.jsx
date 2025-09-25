import { Fragment, useState } from "react"
import "./contador.css";

//função arrow function
const Contador = () => {
    //Inicializa o estado com valor 0
    const [count, setCount] = useState(0);

    const aumentar = () => {

        setCount(count + 1);

    }

    const diminuir = () => {

        setCount(count - 1);


    }

    return (
        <main className="container">
            <h1>{count}</h1>
            <section>
                <h2>Resultado</h2>
                <button onClick={aumentar} style={{ marginRight: "10px", color: "red", padding: "5px", }}>Aumentar</button>
                <button onClick={diminuir} style={{ marginRight: "10px", color: "red", padding: "5px", }}> Diminuir</button>
            </section>
        </main>
    )
}

export default Contador;