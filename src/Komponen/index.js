import React, { Component } from 'react';
import Makanan from './Data/Makanan';

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
        <h4>Daftar Makanan Kota Pati</h4>
        <Makanan />
      </div>
    );
  }
}
export default Index;
