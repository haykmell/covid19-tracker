import React from 'react'

const Total = ({ total }) => {
    return (
        <div className="worldwide-info">
            {
                Object.keys(total).map((item, index) => {
                    return (
                        <article key={index}>
                            <h3>{item}</h3>
                            <div className="amount">
                                {total[item].toLocaleString()}
                            </div>
                        </article>
                    )
                }
                )
            }
        </div>
    )
}

export default Total
