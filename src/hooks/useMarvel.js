import { useCallback, useEffect, useState } from "react";
import { Get } from "../api/marvel_api";

function useMarvel(page) {
    
    const [stories, setStories] = useState([]);
 
  

  const getStories = useCallback(async () => {
      const url = `comics?offset=${page}`
       const res = await Get(url)
       console.log("sorere",res.data)
       setStories(res.data)
  }, [page]);

  
  
 

  useEffect(() => {
    getStories();
  }, [page]);
 
 



  return {
    stories,
  
  };
}

export default useMarvel;