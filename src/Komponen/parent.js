import { Component } from "react";
import React from "react";
import Child1 from "./child1";
import Child2 from "./child2";
class Parent extends Component {
    state = {
        komponen1: false,
        komponen2: false
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return window.confirm('Apakah Anda yakin?');
    }
    ubahkomponen1 = () => {
        this.setState((state) => {
            return { komponen1: !this.state.komponen1 }
        })
    }
    ubahkomponen2 = () => {
        this.setState((state) => {
            return { komponen2: !this.state.komponen2 }
        })
    }
    render() {
        return (
            <div>
                {this.state.komponen1 ? <Child1 /> : ''}
                <button className="button bg-danger" onClick={this.ubahkomponen1}>{this.state.komponen1 ? 'Sembunyikan' : 'Tampilkan'} Database Pemain</button>
                <br/>
                {this.state.komponen2 ? <Child2 /> : ''}
                <button className="button bg-danger" onClick={this.ubahkomponen2}>{this.state.komponen2 ? 'Sembunyikan' : 'Tampilkan'} Tentang Kami</button>
            </div>
        );
    }
}
export default Parent;