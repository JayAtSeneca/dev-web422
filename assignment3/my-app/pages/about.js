import Link from "next/link";
import Card from "react-bootstrap/Card";
import MovieDetails from "../components/MovieDetails";
import PageHeader from "../components/PageHeader";

export async function getStaticProps() {
  const res = await fetch('https://kind-pink-beetle-hose.cyclic.app/api/movies/573a13b7f29313caabd49ace');
  const data = await res.json();

  return { props: { movie: data } };
}

export default function About(props) {
  return (
    <>
    <PageHeader text="About the Developer : Jay Pravinkumar Chaudhari"/>
    <Card>
      <Card.Body>
      Hello! I am Jay Chaudhari - I am an international student from India. Previously, I completed my High school from India and I took this course and has very positive experience. I know three languages English, Hindi and Gujarati. I like to live my life in creative way. I like to create programming related projects, play and write. <br/><br/>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas malesuada massa, sit amet vehicula arcu tempus vel. Donec vel ante enim. Pellentesque scelerisque nisl tellus, nec volutpat leo dignissim sed. Quisque vel maximus velit. Ut ut turpis mi. Duis imperdiet tincidunt nisl. Praesent ut posuere sem. Curabitur scelerisque libero sit amet justo porttitor, aliquam dignissim turpis condimentum.<br/><br/>
      Vestibulum in eleifend nibh. Sed sodales porta nulla, dapibus egestas nibh aliquam nec. In a leo iaculis, tincidunt sapien placerat, tincidunt mauris. Aenean pellentesque magna ac felis aliquam, non porttitor magna finibus. Proin dapibus vel arcu ut interdum. Curabitur vitae sapien lacinia, iaculis neque non, venenatis justo. Vivamus gravida diam sit amet turpis cursus tincidunt. Nulla sed posuere nisl. Aenean id lorem nulla. Integer dapibus sem sem, et imperdiet mauris interdum at. Aliquam volutpat arcu at turpis eleifend, at pulvinar leo pretium. Nulla ac vehicula justo.<br/><br/>
      It&apos;s difficult to choose a favourite movie, but <Link href="/movies/Avatar"><a>&quot;Avatar&quot;</a></Link> (released in 2009) is one that I always enjoy watching.<br/><br/> 
      </Card.Body>
      <MovieDetails movie={props.movie}/>
    </Card>
    </>
  );
}