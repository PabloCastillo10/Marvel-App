import CryptoJS from "crypto-js" 

 export const reqCharacteres = async (name = '', offset = 0) => {
   //time Stamp = Marca de tiempo . el get Time Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.
   const timeStap = new Date().getTime()
   //fetch api marvel
   //se necesita la url y las dos api key y el hash
   const PRIVAT_API_KEY = '054dd22c0655aa06bbb5c5ea0e7f92197149dc20'
   const PUBLIC_API_KEY = 'df8b3a1608f0980044faf37d5da5c2c6'
   //una constante para encriptar contraseña en el parentesis se envia la marca del tiempo la fecha y la hora actual 
   const hash = CryptoJS.MD5( timeStap + PRIVAT_API_KEY + PUBLIC_API_KEY).toString()

       let api_url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timeStap}&apikey=${PUBLIC_API_KEY}&hash=${hash}&limit=${limit}&offset=${offset}`;
       
       if (name) {
         url += `&nameStartsWith=${name}`;
     }

       const resp = await fetch(api_url);
       const { data } = await resp.json();

       return data;
  
};


