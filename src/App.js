import './App.scss';
import React,{useState,useEffect} from 'react';
/* import styled,{ThemeProvider} from 'styled-components'
import {darkMode,lightMode,GlobalStyles} from './themes/themes' */
import Home from './pages/home';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';
import AnimeDetails from './pages/AnimeDetails';
import MarvelDetails from './pages/MarvelDetails';

//import ThemeContext,{themes} from './themes/themeContext';
import {
  BrowserRouter as Router,
  Routes,
  Route,
 useNavigate
} from "react-router-dom";
import { Characters } from './pages/characters';
import { Marvel } from './pages/marvel';
import { CharacterDetail } from './pages/characterDetail';
import { Anime } from './pages/anime';
import { LeftNav } from './components/leftNav';
import { TopNav } from './components/topNav';
import MovieSearch from './pages/MovieSearch';


/* const StyledApp = styled.div`
 color: ${(props)=> props.theme.fontColor}
` */

function App() {
 // const [theme,setTheme] = useState('dark')

 /*  const themeToggler=()=>{
    theme ==='light' ? setTheme('dark') : setTheme('light')
  } */
  const [search,setSearch] = useState('')
  const navigate = useNavigate()
  useEffect(()=>{
    

    if(search.length>0){
      navigate({
        pathname:'/movieSearch',
        search
      })
    }
    
  },[search])
  return (
   
    <div className='app'>
    
    <div className='left-nav'>
      <LeftNav />
    </div>
    <div className='main-nav'>
    <div  className='top-nav'>
        <TopNav setSearch={setSearch} />
      </div> 
      <div className='content'>
         {/* A <Routes> looks through its children <Route>s and
         renders the first one that matches the current URL. */}
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route  path="/home"  element={<Home/>} />
       <Route  path="/characters"  element={<Characters/>} />
       <Route  path="/movies"  element={<Movies/>} />
       <Route  path="/movies/:id"  element={<MovieDetails/>} />
       <Route  path="/movieSearch"  element={<MovieSearch/>} />
       <Route  path="/marvel"  element={<Marvel/>} />
       <Route  path="/marvel/:id"  element={<MarvelDetails/>} />
       <Route  path="/anime"  element={<Anime/>} />
       <Route  path="/anime/:id"  element={<AnimeDetails/>} />
       <Route  path="/characterDetails"  element={<CharacterDetail/>} />
      
     </Routes>
  
      </div>
    
     

    

    </div>
   
   
      
    </div>
  
   
  
  
   
 
 
  );
}

export default App;
