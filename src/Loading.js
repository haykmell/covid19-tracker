import React from 'react'
import Nav from './Nav';

const Loading = () => {
    return (
        <>
            <Nav />
            <div className="lodaing loading-container">
                <div className="about">

                </div>
                <div className="content">
                    <div className="loading">
                        <p>loading</p>
                        <span></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loading
