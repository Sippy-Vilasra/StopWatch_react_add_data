import React, { useEffect, useState } from 'react';



const Testing = (props) => {

    const [email, setEmail] = useState('')

    const [gender, setGender] = useState('');

    const [name, setName] = useState('');

    const [age, setAge] = useState('')

    const [district, setDistrict] = useState('')

    const [data, setData] = useState([]);

    const onChangeHendleName = (e) => {
        setName(e.target.value)

    }
    const onChangeHendleAge = (event) => {
        setAge(event.target.value)
    }
    const onChangeHendleDistrict = (event) => {
        setDistrict(event.target.value)
    }
    // console.log(gender)
    const submitHendle = (e) => {
        e.preventDefault();

        // console.log(name)
        // setData([...data,name, age, district])
        // console.log(data);
        if (name && age && district && gender && email) {
            setData((prev) => {
                const newData = [
                    ...prev,
                    {
                        name: name,
                        age: age,
                        district: district,
                        gender: gender,
                        email: email
                    }
                ];
                // console.log(newData, "newData", ...prev)
                localStorage.setItem("DATA", JSON.stringify(newData))
                return newData;


            })
            setName('')
            setAge('')
            setDistrict('')
            setGender('')
            setEmail('')
        } else {
            alert('plz fill the data')
        }

    }


    const removeItem = (index, e) => {
        setData(data.filter((v, i) => i !== index));
    }

    const editItem = (e) => {

        let name = e.target.name;

        // console.log(name, 'jjjj')
        let newEditItem = data.find((elem) => {
            return elem.name === name;
        });
        // console.log(newEditItem, "hhh")
        let filteredData = data.filter((element) => {
            return element.name !== name;
        });
        // console.log(filteredData, "ddddd")
        // setName(newEditItem.name);
        // setAge(newEditItem.age)
        // setDistrict(newEditItem.district);
        setData(filteredData);
        setName(newEditItem.name);
        setAge(newEditItem.age);
        setDistrict(newEditItem.district);
        setGender(newEditItem.gender);
        setEmail(newEditItem.email)
        console.log("data", filteredData);
    }

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem("DATA")) || [])
    }, []);


    const handleChange = e => {
        // setGender(e.target.value)
        const target = e.target;
        if (target.checked) {
            setGender(target.value);
        }
    };

    const handleChangeEmail = e => {
        setEmail(e.target.value)
        // const { id, value } = e.target
        // setEmail(prevState => ({
        //     ...prevState,
        //     [id]: value
        // }))
    }

    return (
        <>
            <form onSubmit={submitHendle} >
                <h5>Name</h5>
                <input placeholder='Name fill' type="text" value={name} onChange={onChangeHendleName} required />
                <h5>Age</h5>
                <input placeholder='Age fill' value={age} onChange={onChangeHendleAge} type='number' required />
                <h5>District</h5>
                <input placeholder='District fill' type="text" value={district} onChange={onChangeHendleDistrict} required />
                <h5>Email</h5>
                <input className='email'
                    type="email" placeholder="Email" value={email} onChange={handleChangeEmail} />

                <br />
                <br />
                <input type="radio" value="male" checked={gender === 'male'} onChange={handleChange} />
                <span>Male</span>
                <input type="radio" value="female" checked={gender === 'female'} onChange={handleChange} />
                <span>Female</span>
                <input type="radio" value="others" checked={gender === 'others'} onChange={handleChange} />
                <span>Others</span>
                <br />
                <br />
                <button type='submit'>Submit</button>
            </form>
            <br />
            <br />

            <div>

                <div>
                    <table className="tableCon">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>District</th>
                                <th>Email</th>
                                <th>Male&Female</th>
                                <th>Action</th>
                                <th>Update</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((value, index) => (

                                    <tr key={index + "WERTY%%RTTYTs"}>
                                        <td>{value.name}</td>
                                        <td>{value.age}</td>
                                        <td>{value.district}</td>
                                        <td>{value.email}</td>
                                        <td>{value.gender}</td>

                                        <td><button onClick={e => removeItem(index, e)}>Delete</button></td>
                                        <td><button name={value.name} onClick={editItem}>Edit</button></td>

                                    </tr>

                                ))
                            }


                        </tbody>
                    </table>


                </div>
            </div>


        </>
    )
}

export default Testing;
