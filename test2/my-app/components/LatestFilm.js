import LatestFilm from '../components/LatestFilm';
export async function getStaticProps() {

    const res = await fetch("https://testTwo.ca/api/latestFilm");
    const data = await res.json();
  
    return { props: { staticPost: data } };
  }

  export default function Home(props) {
    return (
      <LatestFilm staticPost={props.staticPost}/>
    )
  }

// LatestFilm.js
export default function LatestFilm({ staticPost }) {
  return (
    <div class="film">
        <strong>Title: </strong>{staticPost?.title}<br />
        <strong>Plot: </strong>{staticPost?.plot}
    </div>
  );
}