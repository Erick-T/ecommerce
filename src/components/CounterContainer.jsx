import React, { useState } from 'react'
import Counter from './counter'
const CounterContainer = () => {
    const [count, setCount] = useState(0)

    const sumar = () => {
        setCount(count + 1)
        console.log(count)
    }

    const restar = () => {
        count >= 1 ? setCount(count - 1) : console.log("valor 0")
    }
    return (
        <Counter count={count} sumar={sumar} restar={restar} />
    )
}

export default CounterContainer