import { useState, useEffect } from "react";

export function useFetch(url) {
    const [finaldata, setfinaldata] = useState({});
    

    async function getdetails(url) {
        const response = await fetch(url)
        const json = await response.json();
        setfinaldata(json);
    }

    useEffect(() => {
        getdetails();
    }, [url]) //any time the url changes run this useffect

    return (
        finaldata
    )
}