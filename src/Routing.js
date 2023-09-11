// import React from 'react'
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

// export default function Routing() {
//     return (
// <Router>
//     <div>
//         <nav>
//             <ul>
//                 <li>
//                     <Link to="/">Home</Link>
//                 </li>
//                 <li>
//                     <Link to="/about">About</Link>
//                 </li>
//                 <li>
//                     <Link to="/user">User</Link>
//                 </li>
//             </ul>
//         </nav>
//     </div>

//     <Switch>
//         <Route path="/about">
//             <About></About>
//         </Route>
//         <Route path="/user">
//             <User></User>
//         </Route>
//         <Route path="/">
//             <Home></Home>
//         </Route>
//     </Switch>

// </Router>
//     )
// }

// function Home() {
//     return <h1>Hello Home</h1>
// }
// function About() {
//     return <h1>Hello About</h1>
// }
// function User() {
//     return <h1>Hello User</h1>
// }



import React from 'react'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

const Routing = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/user">User</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <Switch>
                <Route path="/about">
                    <About></About>
                </Route>
                <Route path="/user">
                    <User></User>
                </Route>
                <Route path="/">
                    <Home></Home>
                </Route>
            </Switch>

        </Router>
    )
}

function Home() {
    return <h1>Hello Home</h1>
}
function About() {
    return <h1>Hello About</h1>
}
function User() {
    return <h1>Hello User</h1>
}

export default Routing
