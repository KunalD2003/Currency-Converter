import { useEffect,useCallback,useState } from "react";

let useCurrencyInfo = (currency) => {
    const [data, setData] = useState("")
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((response) => {
            // console.log(response);
            return response.json()
        })
        .then((response) => {
            return setData(response[currency])
        })
    },[currency])
    return data
}

export default useCurrencyInfo