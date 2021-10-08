import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Detail from './detail';
import { useContext, createContext } from 'react';

const Context = createContext('Default Value');
export function Home() {
  const value = 'Muhammad Adib Bowo L  ';
  const value1 = 'Khoirunnisa Ayu H';
  return (
    <Container>
      <br />
      <Card className=" bg-light text-Dark ">
        <Card.Img src="https://www.linkpicture.com/q/bg-22g.jpg" alt="Card image" width={400} height={500} />
        <Card.ImgOverlay style={{ marginTop: '15%', marginLeft: '25%', marginRight: '25%' }}>
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
                <Context.Provider value={value}>
                  <MyComponent />
                </Context.Provider>
                <br />
                <Context.Provider value={value1}>
                  <MyComponent1 />
                </Context.Provider>
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

function MyComponent() {
  const value = useContext(Context);

  return <span>{value}</span>;
}

function MyComponent1() {
  const value1 = useContext(Context);

  return <span>{value1}</span>;
}
