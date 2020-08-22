import { useState, useCallback } from 'react';


export const useHttp = () =>{
    
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const reqest = useCallback(async (url, method='GET', body=null, headers={}) =>{
        setLoading(true)
        try {
            if(body){
                body = JSON.stringify(body)
                headers['content-type'] = 'application/json'
            }

           //const response =  await fetch('http://localhost:5000'+url, {method,body,headers})
           const response =  await fetch(url, {method,body,headers})
           const data = await response.json()
           if (response.ok === false){
               throw new Error(data.message || 'Что-то пошло не так')
               //console.error(new Error(data.message || 'Что-то пошло не так'));
           }
           setLoading(false)

           return data
        } catch (e) {
            //console.log('catch',e.message);
            setLoading(false)
            setError(e.message)
            //throw e 
            console.error(e);

        }
    }, [])

    const clearError = useCallback(() => setError(null), []) 

    return {loading, reqest, error, clearError}
}


// useCallback - для того что бы функция не вошла в рекусрию 