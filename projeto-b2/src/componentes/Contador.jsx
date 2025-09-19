import { Fragment } from "react"

//função arrow function
const Contador = () => {

    const aumentar = () => {
        alert("Aumentar")
    }

    const diminuir = () => {
        alert("Diminuir")
    }


    return (
        <Fragment>
            <h1>Contador</h1>
            <section>
                <h2>Resultado</h2>
                <button onClick={aumentar} style={{marginRight: "10px", color:"red", padding:"5px",}}>Aumentar</button>
                <button onClick={diminuir}>Diminuir</button>
            </section>
        </Fragment>
    )
}

export default Contador;