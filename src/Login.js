// import React from 'react'
// import { useGlobalContext } from './Context'

// const Login = () => {
//     const { hits, isLoading } = useGlobalContext();
//     if (isLoading) {
//         return (
//             <>
//                 <h1>Loading......</h1>
//             </>
//         )
//     }




//     // useEffect(() => {
//     //     fetch("https://dog.ceo/api/breeds/image/random")
//     //         .then(response => response.json())
//     //         // 4. Setting *dogImage* to the image url that we received from the response above
//     //         .then(data => setDogImage(data.message))
//     // }, [])


//     return (
//         <div>
//             <h2>My Tech News Post</h2>
//             {hits.map((curPost) => {
//                 return <h2>{curPost.titel}</h2>
//             })}

//         </div>
//     )
// }

// export default Login
















// import React from 'react'

// const { useState, useEffect } = React;



// const ItemCard = props => (
//     <div className="item-card">
//         <h5>{props.name}</h5>
//     </div>
// );

// const ItemList = props => (
//     <div className="item-list">
//         {props.pokemon.map((poke, i) => (
//             <ItemCard key={i} name={poke.name.toUpperCase()} />
//         ))}
//     </div>
// )


// function useFetch(url, defaultData) {
//     const [data, updateData] = useState(defaultData);


//     async function getDataFromAPI() {
//         try {
//             if (!url) {
//                 updateData(defaultData);

//                 return;
//             }
//             const resp = await fetch(url);
//             const json = await resp.json();
//             updateData(json);
//         } catch (e) {
//             console.log(e);
//         }
//     }


//     useEffect(() => {
//         getDataFromAPI();
//     }, [url]);
//     return data;
// }

// const Login = (props) => {
//     const pokeURL = `https://pokeapi.co/api/v2/pokemon?limit=10`;
//     const initialData = useFetch(pokeURL, { results: [] });
//     const pokeData = initialData.results;

//     return (
//         <React.Fragment>
//             <h1>Just a Few Pok&eacute;mon with React Hooks!</h1>
//             <ItemList pokemon={pokeData} />
//         </React.Fragment>
//     )
// }

// export default Login;













import React, { useRef, useState } from 'react'

const Login = () => {
    const [myData, setMyData] = useState('');

    const inputElm = useRef("");

    const changeStyle = () => {
        inputElm.current.style.color = "#82E0AA";
        // inputElm.current.value = "Sippy"
    };
    const Reset = () => {
        setMyData('')
        inputElm.current.focus();
        inputElm.current.style.color = "red";
    }


    return (
        <>
            <input
                ref={inputElm}
                type='text'
                value={myData}
                onChange={(e) => setMyData(e.target.value)}
            /><br />
            <button onClick={Reset}>Reset</button>
            <button onClick={changeStyle}>Submit</button>

        </>
    )
}

export default Login
