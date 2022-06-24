import { useCallback, useEffect, useState } from "react";
import { Get } from "../api/marvel_api";

function useMarvelDetails(id) {
    
    const [story, setStory] = useState([]);
 
  

  const getStory = useCallback(async () => {
      const url = `comics/${id}?offset=1`
       const res = await Get(url)
       setStory(res.data)
  }, []);

  
  
 

  useEffect(() => {
    getStory();
  }, [getStory]);
 
 



  return {
    story,
  
  };
}

export default useMarvelDetails;