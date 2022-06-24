import React, { useEffect,useState } from 'react'
import useMovie from '../hooks/useMovie'
import {FaArrowLeft,FaArrowRight,FaArrow,FaAngleDoubleLeft,FaAngleDoubleRight} from 'react-icons/fa'
import Card from "../components/card";
import Loading from '../components/loading';

const Movies = () => {
  const upper = 500
  const lower = 1
  const [currentPage,setCurrentPage] = useState(1)
  const [start,setStart] = useState(1)
  const [end,setEnd] = useState(5)
  const {movies,movieImgURL} = useMovie(currentPage)
  const [arr,setArray] = useState([])
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
  if(movies?.results?.length>0){
    setLoading(false)
  }
  console.log(loading)
  },[movies])

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
  useEffect(()=>{
    console.log('movies',movies)
  },[movies])
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
            <div style={{ fontSize: "13px", padding: 10 }}>Movies</div>
                <div
                  className="row"
                >
                  {movies.results && movies.results.map((movie)=>
            <>
            <div className="col-md-2 itemCont">
              <div className='itemCard'  style={{marginBottom:"10px",}} >
              <Card url="movies" id={movie.id} title={movie.title} desc={movie.overview} source={`${movieImgURL}${movie.poster_path}`}></Card>
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

export default Movies