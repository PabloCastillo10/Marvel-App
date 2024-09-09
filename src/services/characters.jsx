import CryptoJS from "crypto-js"

const PRIVAT_API_KEY = '054dd22c0655aa06bbb5c5ea0e7f92197149dc20'
const PUBLIC_API_KEY = 'df8b3a1608f0980044faf37d5da5c2c6'
const timeStap = new Date().getTime()
const hash = CryptoJS.MD5(timeStap + PRIVAT_API_KEY + PUBLIC_API_KEY).toString()

export const reqCharacteres = async (offset = 0, limit = 20, searchTerm = '') => {
    let api_url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timeStap}&apikey=${PUBLIC_API_KEY}&hash=${hash}&offset=${offset}&limit=${limit}`

    
    if (searchTerm) {
        api_url += `&nameStartsWith=${searchTerm}`
    }

    const resp = await fetch(api_url)
    const { data } = await resp.json()

    return data
}
