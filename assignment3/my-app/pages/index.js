import useSWR from 'swr';
import { useState, useEffect } from "react";
import Pagination from 'react-bootstrap/Pagination';
import Accordion from 'react-bootstrap/Accordion';
import MovieDetails from '../components/MovieDetails';
import PageHeader from '../components/PageHeader';
export default function Home() {
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);
  const {data, error} = useSWR(`https://kind-pink-beetle-hose.cyclic.app/api/movies?page=${page}&perPage=10`);

  useEffect(() => {
    if (data) {
    setPageData(data);
    }
   }, [data]);
  
   function previous(){
    if(page > 1){
      setPage(prev=> prev - 1);
    }
   }
   function next(){
    setPage(prev=> prev + 1);
   }
  return (
    <>
    <PageHeader text="Film Collection : Sorted by Date" />
    <Accordion defaultActiveKey="0">
    {pageData.map((movie)=>{
      return (<Accordion.Item eventKey={movie._id} key={movie._id}>
        <Accordion.Header> <strong>{movie.title}</strong> ({movie.year}: Directed By {movie.directors.join(', ')})</Accordion.Header>
        <Accordion.Body>
          <MovieDetails movie={movie} />
        </Accordion.Body>
      </Accordion.Item>);
    })}
    </Accordion>
    <br/>
    <Pagination>
      <Pagination.Prev onClick={previous} />
      <Pagination.Item>{page}</Pagination.Item>
      <Pagination.Next onClick={next} />
    </Pagination>
    </>
  )
}
