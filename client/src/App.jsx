import { useState, useEffect } from 'react'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Apartmentproject from "./components/Apartmentproject.jsx";
import Pagination from './components/pagintion';

function App() {

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsperpage=40
  const [postsPerPage, setPostsPerPage] = useState(60);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    
    axios.get('http://localhost:5000/apartmentprojectdata')
      .then(response => {
        
        setData(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

 
  
  //   const currentPosts = coinsData.slice(firstPostIndex, lastPostIndex);

 
  return (
    <> 
    {/* <h1>helloworld</h1> */}
    <Apartmentproject  data={currentPosts} /> 
    <Pagination
                totalPosts={data.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                firstindex={firstPostIndex}
                lastindex={lastPostIndex}
            />


    </>
  )
}

export default App
