import React, { useState, useEffect } from 'react'

const Testing2 = () => {

    const [data, setData] = useState('');

    const [data1, setData1] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("NameAdd")) {
            setData1(JSON.parse(localStorage.getItem("NameAdd")))
        }
    }, [])

    const onChangeHendle = (e) => {
        setData(e.target.value)
    }

    const addName = (e) => {
        e.preventDefault();
        setData1([...data1, data])
        // setData1((pev) => {
        //     return [...pev, data]
        // });
        setData('');





    }
    const handleRemove = (e) => {

        const removeData = data1.filter((element) => {
            return element !== e.target.name;
        })
        setData1(removeData);
    }
    useEffect(() => {
        localStorage.setItem("NameAdd", JSON.stringify(data1))
    }, [data1])

    return (
        <div>
            <form onSubmit={addName}>
                <br />
                <input placeholder='Add Name' type="text" value={data} onChange={onChangeHendle} required />
                <button type='submit'>AddName</button>
            </form>
            <div>
                {data1.map((value, index, item) => {
                    return <div key={index + 1} >
                        <h4>{value}
                            <button name={value} onClick={handleRemove}>X</button>
                        </h4>


                    </div>

                })}
            </div>

        </div>
    )
}

export default Testing2
