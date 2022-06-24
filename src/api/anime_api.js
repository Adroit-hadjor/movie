const REACT_BASE_APP_API_URL= `https://kitsu.io/api/edge/anime/`
const REACT_END_URL = `&page[limit]=18`


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
      console.log("data",data)
      return data
  }

  const errMessage = await response.text()
  throw new Error(errMessage)


  return response; 
 
  }
 




}

export const GetDetails = async(url,token) => {
   const link = `${REACT_BASE_APP_API_URL}` + '/' + url+REACT_END_URL;
 
   
   if (token){
     
    const response = await fetch(`${REACT_BASE_APP_API_URL}` + '/' + url, {
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
       console.log("data",data)
       return data
   }
 
   const errMessage = await response.text()
   throw new Error(errMessage)
 
 
   return response; 
  
   }
  
 
 
 
 
 }
