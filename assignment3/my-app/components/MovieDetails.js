import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
export default function MovieDetails(props){
    return (
        <>
        <Container>
        <Row>
            {props.movie?.poster &&
             <Col md><Image src={props.movie?.poster} alt="poster" className="img-fluid w-100" /><br /><br /></Col>}
            <Col md>
                <strong>Directed By:</strong> {props.movie.directors.join(", ")}<br/><br/>
                <p>{props.movie.fullplot}</p>
                <strong>Cast:</strong> {props.movie.cast ? props.movie.cast.join(", ") : "N/A"}<br/><br/>
                <strong>Awards:</strong> {props.movie.awards.text}<br/>
                <strong>IMDB Rating:</strong> {props.movie.imdb.rating} ({props.movie.imdb.votes} votes)
            </Col>
        </Row>
        </Container>
        </>
    );
}