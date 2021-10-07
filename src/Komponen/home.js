import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Detail from './detail';

export function Home() {
  return (
    <Container>
      <br />
      <Card className=" bg-light text-Dark ">
        <Card.Img src="https://www.linkpicture.com/q/bg-22g.jpg" alt="Card image" width={400} height={500} />
        <Card.ImgOverlay>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Card.Title className="title-1 ">
            CINTAILAH MAKANAN <span className=" text-warning">DAERAH </span> KALIAN
          </Card.Title>

          <Card.Text> CHECK MAKANAN DAERAH PATI</Card.Text>
          <Detail />
        </Card.ImgOverlay>
      </Card>
      <footer className="blockquote-footer">
        <CardGroup>
          <Card>
            <Card.Body className=" body-4">
              <Card.Title>
                <br />
                <p> Makanan Khas Daerah Pati</p>
              </Card.Title>
              <Card.Text>
                <br />
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body className=" body-5">
              <Card.Title>
                KELOMPOK 14
                <br />
                Muhammad Adib Bowo L
                <br />
                Khoirunnisa Ayu Handayani
              </Card.Title>
            </Card.Body>
          </Card>
        </CardGroup>
      </footer>
      <br />
      <br />
    </Container>
  );
}
