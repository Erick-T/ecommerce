import { useState } from 'react'
import styles from "./style.module.css"
import data from "./data.json"

function Prueba() {
    const [count, setCount] = useState(0)

    const promedioAlto = data.filter((est) => est.note > 6)

    return (
        <div >
            <h1>Hola coders</h1>
            <div>
                {
                    promedioAlto.map((est) => (
                        <ul className={styles.lista}>
                            <li key={est.id}> {est.last_name}, {est.first_name}: {est.note}</li>
                        </ul>
                    ))
                }
            </div>
        </div>
    )
}

export default Prueba
