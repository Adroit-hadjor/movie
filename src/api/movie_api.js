const REACT_BASE_APP_API_URL= `https://api.themoviedb.org/3`
const REACT_END_URL = `&api_key=0453f59696952511d3b6ef02627bd6f7&append_to_response=videos`


export const Get = async(url,token) => {
  const link = `${REACT_BASE_APP_API_URL}` + '/' + url+REACT_END_URL;
  console.log('link',link)

  
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
