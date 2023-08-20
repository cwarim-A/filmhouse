import { BrowserRouter,Route,Routes } from "react-router-dom";
import "./App.css";
import RootLayout from "./components/RootLayout";
import MoviesDetails from "./components/MoviesDetails";
// import Banner from "./components/Banner";
// import MovieCard from "./components/MovieCard";
// import Searchbar from "./components/Searchbar";


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RootLayout/>}>
//       <Route path="/moviesDetails/:moviesid" element={<MoviesDetails/>}/>
//     </Route>
    


//   )
// ) 
function App() {
  

 

  return (
    <>
      <BrowserRouter basename="/filmhouse">
      <Routes>
        <Route exact path="/" element={<RootLayout/>}/>
        <Route path="/moviesDetails/:moviesid" element={<MoviesDetails/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
