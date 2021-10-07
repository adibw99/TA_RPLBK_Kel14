import { Component } from 'react';
import React from 'react';
import Index from './index';
import { Button } from 'react-bootstrap';

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
        <Button variant="outline-warning" href="Makanan" onClick={this.ubahkomponen1}>
          {this.state.komponen1 ? 'HIDE ' : 'SHOW '}
          MAKE AN ACTION
        </Button>
      </div>
    );
  }
}
export default Detail;
