import React, { Component } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import styled from 'styled-components'

const Tombol = styled.button

`
background: #e8c087;
border-radius: 5px;
border: none;
color: black;
margin:16px;
font-size:16px;
&:hover {
  border:solid 2px #008b8b;
  cursor: pointer;
  
}`

export default class pemain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pemain: [],
      visible: false,
      nama: "",
      tim: "",
      kebangsaan: "",
    };
  }
 
  handleButton = (nama) => {
    alert(nama);
  };
  handleNama = (e) => {
    this.setState({
      nama: e.target.value,
    });
    console.log(this.state.nama);
  };
  handleTim = (e) => {
    this.setState({
      tim: e.target.value,
    });
    console.log(this.state.tim);
  };
  handleKebangsaan = (e) => {
    this.setState({
      kebangsaan: e.target.value,
    });
    console.log(this.state.asal);
  };

  componentDidMount() {
    axios({
      method: "get",
      url: "https://cors-anywhere.herokuapp.com/https://database-pemain-bola.herokuapp.com",
      headers: {
        accept: "*/*",
      },
    })
      .then((data) => {
        console.log(data.data);
        this.setState({
          pemain: data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }
 
  render() {
    return (
      <div> 
          {this.state.pemain.map((results, index) => {
            return (
              <div className="card" key={results._id}>
                <div className="card-body">
                  <h5 className="card-title">
                    Nama : {results.nama}</h5>
                  <h5 className="card-subtitle mb-2 text-muted">
                    Tim : {results.tim}</h5>
                  <h5 className="card-text text-black">
                    Kebangsaan : {results.kebangsaan}</h5>
                </div>
                   <Tombol onClick={() => this.handleButton(results.nama)}>KlikMe</Tombol>
              </div>
            );
          })}
        </div>
    );
  }
}