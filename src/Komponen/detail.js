import { Component } from 'react';
import React from 'react';
import Index from './index';

class Detail extends Component {
  state = {
    komponen1: false,
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return window.confirm('Apakah Anda yakin?');
  }

  ubahkomponen1 = () => {
    this.setState((state) => {
      return { komponen1: !this.state.komponen1 };
    });
  };

  render() {
    return (
      <div>
        {this.state.komponen1 ? <Index /> : ''}
        <button className="button bg-danger" onClick={this.ubahkomponen1}>
          {this.state.komponen1 ? 'Sembunyikan' : 'Tampilkan'} Data Makanan
        </button>
      </div>
    );
  }
}
export default Detail;
