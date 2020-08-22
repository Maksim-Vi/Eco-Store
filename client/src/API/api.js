import * as axios from 'axios'


// const InstenceAPI2 = axios.create({
//     withCredentials: true,
//     //baseURL:'https://maksim-vi.github.io/Eco-Store/' // обязательно такая запись иначе не работает baseURL
//     baseURL:'http://localhost:3000/Eco-Store/',
//     headers:{
//        'content-type':'application/json'
//     }
// })

// export const getStoreApi = () => {
//     return InstenceAPI2.get(`Store.json`)
//     //return InstenceAPI.get(`StoreLocal.json`)
//         .then (response => {
//             return response.data;
//         })
// }
//-----------------------------------------------

export const getStoreApi = (token) => {
        return axios({
            url: `/products` ,
            method: 'GET',
            headers: {
                'Authorization': token,
                //'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then (response => {
            return (
                response.data
            )
        })
    }


export const postFormStoreApi = (token,firstName,LastName,Email,subject,phone) => { 
    return axios({
        url: `/MainLink/form` ,
        method: 'POST',
        headers: {
            'Authorization': token,
            //'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: {firstName,LastName,Email,subject,phone}
    })
    .then (response => {
        return response.data;
    })
}

export const postFormStoreBasketApi = (token,firstName,Email,phone,items) => { 
    return axios({
        url: `/StoreBasket/form` ,
        method: 'POST',
        headers: {
            'Authorization': token,
            //'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: {firstName,phone,Email,items}
    })
    .then (response => {
        return response.data;
    })
}

export const getPopularApi = (token) => { 
    return axios({
        url: `/top` ,
        method: 'GET',
        headers: {
            'Authorization': token,
        }
    })
    .then (response => {
        return response.data;
    })
}