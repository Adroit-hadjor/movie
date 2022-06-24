const REACT_BASE_APP_API_URL= `https://gateway.marvel.com/v1/public`
const REACT_END_URL = `&limit=18&ts=${process.env.REACT_APP_TS}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${process.env.REACT_APP_HASH}`


export const Get = async(url,token) => {
  const link = `${REACT_BASE_APP_API_URL}` + '/' + url+REACT_END_URL;

  
  if (token){
    
   const response = await fetch(`${REACT_BASE_APP_API_URL}` + '/' + url+REACT_END_URL, {
      method: 'GET',
      headers: {
         'Authorization':`Bearer ${token}`,
          'Content-Type': 'application/json',
      },
  
   })
     
   if(response.ok){
      const data = await response.json()
      return data
  }

  const errMessage = await response.text()
  throw new Error(errMessage)

  return response; 
  }
  else{
  
   const response = await fetch(`${REACT_BASE_APP_API_URL}` + '/' + url+REACT_END_URL, {
      method: 'GET',
      headers: {
           
          'Content-Type': 'application/json',
      },
    
   })
     
   if(response.ok){
      const data = await response.json()
      return data
  }

  const errMessage = await response.text()
  throw new Error(errMessage)


  return response; 
 
  }
 




}
