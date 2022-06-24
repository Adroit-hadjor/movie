import React, { useContext,useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/card";
import spm from "../assets/spm.jpg";
import useMarvel from "../hooks/useMarvel";
import useAnimes from "../hooks/useAnime";
import useMovie from "../hooks/useMovie";
import Loading from "../components/loading";

export default function Home() {
  const navigate= useNavigate()
  const {stories} = useMarvel(1)
  const {animes} = useAnimes(1) 
  const {movies,movieImgURL,trending} = useMovie(1) 
  const [loading,setLoading] = useState(true)
  const [page,pageNumber] = useState(1)
  
   useEffect(()=>{
    if (movies && trending && animes && stories){
      setLoading(false)
    }
  },[movies,trending,animes,stories]) 
  useEffect(() => {
    console.log('movies',movies)
  }, [stories])
  
  if(loading){
    return <div style={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}><Loading></Loading></div>
  }
  return (
    
    <div className="container" style={{ border: "0px solid purple" }}>
      <div className="row">
        <div
          className="middle col-md-8"
          style={{ color: "white", border: "0px solid green", height: "99vh" }}
        >
          <div className="row" style={{border:"0px solid red",marginBottom:"10px"}}>
           <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
           <div style={{ fontSize: "13px", padding: 10 }}>Movies </div>
           <div onClick={()=>navigate("/movies")} style={{cursor:"pointer",fontSize: "13px", padding: 10}}>more...</div>
           </div>
           
            <div className="row">
              <div className="col-xs-12" style={{ border: "0px solid blue",padding:"0px",height:"300px" }}>
                <div
                  className="cardScroll"
                  style={{
                    display: "flex",
                    //alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    overflowY: "hidden",
                    overflowX: "scroll",
                    height: "100%",
                    maxWidth: "800px",
                    border: "0px solid red",
                
                  }}
                >
                  
                  {movies.results && movies.results.map((movie)=>
            <>
             <div key={movie.id} className="cardCont">
              
              <Card url="movies" id={movie.id} title={movie.title} desc={movie.overview} source={`${movieImgURL}${movie.poster_path}`}></Card>
            </div>
            </>
            )}
                 
                  
                
                </div>
              </div>
            </div>
          </div>
          <div className="row"  style={{marginBottom:"10px"}}>
          <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
           <div style={{ fontSize: "13px", padding: 10 }}>Marvel Comics </div>
           <div onClick={()=>navigate("/marvel")} style={{cursor:"pointer",fontSize: "13px", padding: 10}}>more...</div>
           </div>
            <div className="row">
              <div className="col-xs-12" style={{ border: "0px solid blue",padding:"0px",height:"300px" }}>
                <div
                  className="cardScroll"
                  style={{
                    display: "flex",
                    //alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    overflowY: "hidden",
                    overflowX: "scroll",
                    height: "100%",
                    maxWidth: "800px",
                    border: "0px solid red",
                
                  }}
                >
                  {stories.results && stories.results.map((story)=>
            <>
             <div className="cardCont">
              <Card url={"marvel"} id={story.id} title={story.title} desc={story.format} source={`${story.thumbnail.path}.${story.thumbnail.extension}`}></Card>
            </div>
            </>
            )}
                 
                  
                
                </div>
              </div>
            </div>
          </div>
 
          <div className="row"  style={{marginBottom:"10px"}}>
          <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
           <div style={{ fontSize: "13px", padding: 10 }}>Anime </div>
           <div onClick={()=>navigate("/anime")} style={{cursor:"pointer",fontSize: "13px", padding: 10}}>more...</div>
           </div>
            <div className="row">
              <div className="col-xs-12" style={{ border: "0px solid blue",padding:"0px",height:"300px" }}>
                <div
                  className="cardScroll"
                  style={{
                    display: "flex",
                    //alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    overflowY: "hidden",
                    overflowX: "scroll",
                    height: "100%",
                    maxWidth: "800px",
                    border: "0px solid red",
                
                  }}
                >
                  
                  {animes && animes.map((anime)=>
            <>
             <div className="cardCont">
              
              <Card url="anime" id={anime.id} title={anime.attributes.canonicalTitle} desc={anime.attributes.description} source={`${anime.attributes.posterImage.medium}`}></Card>
            </div>
            </>
            )}
                 
                  
                
                </div>
              </div>
            </div>
            <div className="row homeEnd">

            </div>
          </div>


        </div>
        <div
          className="left-col col-md-4"
          style={{ color: "white", border: "0px solid red", height: "89vh" }}
        >
          <div className="row">
            <div className="col-xs-12" style={{fontSize:"15px",fontWeight:"bold"}}>Today's Trends</div>
            
          </div>
          <div className="row trendsScroll" style={{overflowY:"scroll",height:"100%"}}>
            {trending.results && trending.results.slice(0,10).map((trend)=>
              <>
                <div className="col-xs-12 trendCard" style={{border:"0px solid yellow",display:"flex",justifyContent:"space-between",width:"100%",height:"100px"}}>
                   <div className="trendImageContainer">
                   <img onClick={()=>navigate(`/movies/${trend.id}`)} className="trendImage" src={`${movieImgURL}${trend.poster_path}`} alt="" />
                   </div>
                    
                    <div className="trendTextBox">
                      <div className="cardTitle" style={{border:"0px solid orange",height:"30%"}}>{trend.title}</div>
                      <div className="cardSubText2"  style={{border:"0px solid orange"}}>{trend.overview} ...</div>
                    </div>
               </div>
              </>
            )}
        
          </div>
          <div className=" row">
                        
          </div>
        </div>
      </div>
    </div>
  );
}
