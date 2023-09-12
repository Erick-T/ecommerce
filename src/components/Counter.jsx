import React from 'react'

const Counter = ({ count, sumar, restar }) => {

    return (
        <div className='container'>
            <div className='row'>
                <button onClick={() => restar()} className="btn btn-secondary">-</button>
                <p> {count}</p>
                <button onClick={() => sumar()} className="btn btn-secondary">+</button>
            </div>
        </div>

    )
}

export default Counter