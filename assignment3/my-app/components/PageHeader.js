import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
export default function PageHeader(props) {
  return (
    <>
      <Card className="bg-light">
        <Card.Body>
          <Container>
            <strong>{props.text}</strong>
          </Container>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}
