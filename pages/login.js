import { css } from '@emotion/css'
import { useState, useEffect } from 'react';
const loginButton = css`
    background: red;
    font-size: 45px;
`;


const Login = () => {

    // const getGreeting = async () => {
    //     const response = await fetch("/api/login?name=avinash", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(state)
    //     });
    //     console.log("response --- ", response)

    //     return response;
    // };
    // return (
    //     <div>
    //         <button className={loginButton}> Login </button>
    //         <div>--- {getGreeting}</div>
    //     </div>
    // )
    const [data, setData] = useState(null)

    useEffect(() => {
        console.log("coming here")
        fetch('/api/login', {
            dataType: "json"
        })
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setData(data)
        })
    }, [])

    if (!data) return <p>No profile data</p>

    return (
        <div>
        <h1>{JSON.stringify(data)}</h1>
        </div>
    )
}

export default Login;