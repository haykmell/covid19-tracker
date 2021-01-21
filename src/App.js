import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Total from './Total';
import Current from './Current';
import Loading from './Loading';
import './loading.css';

const App = () => {
    const [loading, setLoading] = useState(true);
    const [total, setTotal] = useState({});
    const [currentDefault, setCurrentDefault] = useState([]);
    const [current, setCurrent] = useState([]);

    const getData = async () => {
        const totalURL = 'https://covid2019-api.herokuapp.com/v2/total';
        const respTotal = await fetch(totalURL);
        const totalData = await respTotal.json();

        const currentURL = 'https://covid2019-api.herokuapp.com/v2/current';
        const respCurrent = await fetch(currentURL);
        const currentData = await respCurrent.json();

        setTotal(totalData.data);
        setCurrent(currentData.data);
        setCurrentDefault(currentData.data)
        setLoading(false)
    }
    useEffect(() => {
        getData();
    }, [])

    const searchCountry = (e) => {
        const regex = new RegExp(`${e.target.value.toLowerCase()}`, 'g');
        const newArr = currentDefault.filter(item => regex.test(item.location.toLowerCase()))
        if (newArr.length === 0) {
            setCurrent([])
        } else {
            setCurrent(newArr)
        }
    }

    if (loading) {
        return <>
            <Loading />
        </>
    }

    return (
        <>
            <Nav />
            <main>
                <Total total={total} />
                <Current current={current} searchCountry={searchCountry} />
            </main>

            <footer>
                <h4>Made with ❤️ by HAYKMELL</h4>
            </footer>
        </>
    )
}

export default App;