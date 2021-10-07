import React, { Component, useEffect } from 'react';
import Makanan from './Data/Makanan';
import { Button } from 'react-bootstrap';
class Index extends Component {
  componentDidMount() {
    alert(`Menampilkan Daftar Makanan`);
  }
  componentWillUnmount() {
    alert('Daftar Makanan Disembunyikan');
  }

  render() {
    return (
      <div>
        <Makanan />
      </div>
    );
  }
}

export default Index;
