import React, { Component } from "react";
import Tentang from "./Tentang/Tentang";

class child2 extends Component {
    componentDidMount() {
        alert(`Inilah Kami`)
    }
    componentWillUnmount() {
        alert('Tentang Kami disembunyikan')
    }
    render() {
        return (
            <div>
                <h3>Kelompok 34</h3>
                <Tentang/>
            </div>
        );
    }
}
export default child2;
