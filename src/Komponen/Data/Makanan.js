import React, { Component } from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import { useState, createContext, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Makanan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      makanan: [],
      visible: false,
      nama: '',
      gambar: '',
      daerah: '',
      harga: '',
      detail: '',
      id: '',
    };
  }

  handleId = (e) => {
    this.setState({
      id: e.target.value,
    });
    console.log(this.state.id);
  };

  handleNama = (e) => {
    this.setState({
      nama: e.target.value,
    });
    console.log(this.state.nama);
  };

  handleGambar = (e) => {
    this.setState({
      gambar: e.target.value,
    });
    console.log(this.state.gambar);
  };
  handleDaerah = (e) => {
    this.setState({
      daerah: e.target.value,
    });
    console.log(this.state.daerah);
  };
  handleHarga = (e) => {
    this.setState({
      harga: e.target.value,
    });
    console.log(this.state.harga);
  };
  handleDetail = (e) => {
    this.setState({
      detail: e.target.value,
    });
    console.log(this.state.detail);
  };

  componentDidMount() {
    axios({
      method: 'get',
      url: 'http://localhost:3000/dataMakanan',
      // json-server --watch dataPemain.json
      headers: {
        accept: '*/*',
      },
    })
      .then((data) => {
        console.log(data.data);
        this.setState({
          makanan: data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        {this.state.makanan.map((results, index) => {
          return (
            <>
              <Row xs={1} md={3} className="g-10">
                {Array.from({ length: 1 }).map((_, idx) => (
                  <div key={results.id}>
                    <Col key={idx}>
                      <Card className="text-white" key={results.id} style={{ width: '18rem' }}>
                        <Card.Img src={results.gambar} alt="Card image" width={210} height={175} />
                        <Card.ImgOverlay>
                          <Card.Title className="mb-2 bg-success ">{results.nama}</Card.Title>
                          {/* <Card.Text className="mb-2 ">{results.daerah}</Card.Text> */}
                          <Card.Text className="mb-2 bg-dark">{results.harga}</Card.Text>

                          <Card.Footer>
                            <MakananDetail nama={results.nama} gambar={results.gambar} daerah={results.daerah} harga={results.harga} detail={results.detail} />
                          </Card.Footer>
                        </Card.ImgOverlay>
                      </Card>
                    </Col>
                  </div>
                ))}
              </Row>
              <br />
            </>
          );
        })}
      </div>
    );
  }
}

function MakananDetail(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { id, nama, daerah, harga, detail, gambar } = props;

  var userDetailContext = createContext(null);

  useEffect(() => {
    document.title = `${nama}`;
  });
  return (
    <>
      <userDetailContext.Provider key={id}>
        <Button variant="primary" onClick={handleShow}>
          Detail
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{nama}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Poto src={gambar}></Poto>
            <p>Daerah : {daerah}</p>
            <p>Harga : {harga}</p>
            <p>
              Detail : <br /> {detail}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </userDetailContext.Provider>
    </>
  );
}

function Poto(props) {
  return (
    <div>
      <Image src={props.src} />
      <br />
    </div>
  );
}

const Image = styled.img`
  border: 1px solid #03bfcb;
  border-radius: 5%;
  padding: 0px;
  width: 50%;
  height: 10%;
  margin: 20px;
`;
