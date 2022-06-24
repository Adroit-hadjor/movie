import React,{useState,useEffect} from 'react'
import {FaArrowLeft,FaArrowRight,FaArrow,FaAngleDoubleLeft,FaAngleDoubleRight} from 'react-icons/fa'
import useAnime from "../hooks/useAnime";
import Card from "../components/card";
import Loading from '../components/loading';

export const Anime = () => {
  const lower = 1
  const [currentPage,setCurrentPage] = useState(1)
  const [start,setStart] = useState(1)
  const [end,setEnd] = useState(5)
  const {animes} = useAnime(currentPage)
  const upper = animes?.meta?.count 
  const [arr,setArray] = useState([])
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
  if(animes.length>0){
    setLoading(false)
  }
  },[animes])

  const incrementPageNumber=()=>{
    setStart(start+5)
    setEnd(end+5)

  }
  const decrementPageNumber=()=>{
    setStart(start-5)
    setEnd(end-5)
   
  }
  useEffect(()=>{
    var temp_array = []
    for(var i=start;i<=end;i++){
      temp_array.push(i)
    }
    setArray(temp_array)
  },[start])

  if(loading){
    return <div style={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}><Loading></Loading></div>
  }

  return (
    <div className="container" style={{ border: "0px solid purple" }}>
    <div className="row">
      <div
        className="middle col-md-12"
        style={{ color: "white", border: "0px solid green", height: "99vh" }}
      >
          <div className="row"  style={{marginBottom:"10px",overflowX:'hidden'}}>
            <div style={{ fontSize: "13px", padding: 10 }}>Anime</div>
                <div
                  className="row"
                >
                  {animes && animes.map((anime)=>
            <>
                 <div className="col-md-2 itemCont">
              <div className='itemCard'  style={{marginBottom:"10px",}} >
            <Card url="anime" id={anime.id} title={anime.attributes.canonicalTitle} desc={anime.attributes.description} source={`${anime.attributes.posterImage.medium}`}></Card>
              </div>
            </div>
             
            </>
            )}
                 
                  
                
                </div>
              </div>
              <div className="row paginationCont" >
                    <div style={{border:"0px solid red",width:"30%",display:"flex",justifyContent:"center"}} className='paginationSub'>
                     {start==lower?<></> :<div onClick={decrementPageNumber} className='prev' style={{paddingRight:"10px"}}><FaAngleDoubleLeft/></div>}
                    {arr && arr.map((ar)=>
                <>
              {currentPage==ar ? <> <div onClick={()=>setCurrentPage(ar)} style={{border:"0px solid blue",backgroundColor:"rgb(29, 155, 240)",color:"white"}} className="numPage">{ar}</div></>: 
              <div onClick={()=>setCurrentPage(ar)} style={{border:"0px solid blue"}} className="numPage">{ar}</div>}
                        
                        </>
                    
)}
{lower==end ? <></>:<div onClick={incrementPageNumber} className='prev' style={{paddingLeft:"10px"}}><FaAngleDoubleRight/></div>}


                    </div>
              </div>
        </div></div></div>
  )
}
