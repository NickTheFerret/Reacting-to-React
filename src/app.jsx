import React, { useState } from 'react';
import Greeter from './components/Greeter';

const App = () => {
    const [username, setUsername] = useState("");
    const [hasLoaded, setLoaded] = useState(false);


    if (hasLoaded) {



        setUsername("Brad")
        return (
            // <h1>Hello,There...</h1>
            <>
                <Greeter phrase={"Hello"} name={"Nick"} />
                <Greeter phrase={"Hi"} name={"Garrett"} />
                <Greeter phrase={"well"} name={"done"} />

                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

                <p>you are logged in as {username}</p>
            </>)
    } else {
        return (
            <>
            <h1>Website Laoding....</h1>
        <button onClick={() => setLoaded(true)}>Load Website</button>
 </>       
        )
    }
}

export default App



