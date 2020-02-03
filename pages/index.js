import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';

async function fetcher() {
    const data = await fetch('http://api.icndb.com/jokes/random').then(r => r.json())
    return data.value;
  }
  

const Index = () => {

    const [record, setRecord] = useState({})
    
    const loadJoke = async () => {
        const rec = await fetcher()
        setRecord(rec)
    }

    useEffect(() => {
        loadJoke()
    }, [])


    return (
        <main className="center">
            <div className="joke">{record.joke}</div>
            <button onClick={loadJoke}>Reload</button>
            <pre>{JSON.stringify(record, null, 2)} </pre>

        <style jsx>{`
          main {
            width: 90%;
            max-width: 900px;
            margin: 300px auto;
            text-align: center;
          }
          .joke {
            font-size: 24px;
            padding-bottom: 10px;
          }
          .author {
            font-family: sans-serif;
            color: #559834;
            font-size: 20px;
          }
        `}</style>
        </main>
    );
}


  

export default Index