import { useState, useEffect } from "react";

/* When creating (custom hooks) in react needs to 
start with the 'use' word, otherwise it won't work */
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

     /* We can't use async/await in useEffect.Therefore, we 
    have to externalize the logic into another async function()
    */
    useEffect(() => {
    // We need to clean up the useEffect() function using (abort controller)
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
            .then(res => {
                if(!res.ok){
                    throw Error('Could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                if(err.name === 'AbortError'){
                    console.log('fetch aborted');
                }else{
                    setIsPending(false);
                    setError(err.message);
                }
            });
            return () => abortCont.abort();
    // we need to add the url as a dependency to the useEffect
    }, [url]);

    return { data, isPending, error };
}

export default useFetch;