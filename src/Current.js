import React from 'react'

const Current = ({ current, searchCountry }) => {
    return (
        <>
            <form>
                <input type="text" onChange={(e) => searchCountry(e)} placeholder="Enter Country..." id="searchInput" />
            </form>
            <table>
                <thead>
                    <tr>
                        <th id="country-col">Country</th>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Recovered</th>
                        <th>Deaths</th>
                    </tr>
                </thead>
                <tbody>
                    {current.map((country, index) => {
                        const { location, confirmed, deaths, recovered, active } = country;

                        return (
                            <tr key={index}>
                                <td>{location}</td>
                                <td>{confirmed.toLocaleString()}</td>
                                <td>{active.toLocaleString()}</td>
                                <td>{recovered.toLocaleString()}</td>
                                <td>{deaths.toLocaleString()}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table >
        </>
    )
}

export default Current
