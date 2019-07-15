import React, { Component } from 'react';
import {Text, StyleSheet} from 'react-native';

export default class HeaderIni extends Component {
    render() {
        const texto = this.props.texto;
        return (
            <Text style={styles.texto}>{texto}</Text>
        );
    }
}

const styles = StyleSheet.create({
    texto: { paddingLeft: 10, fontWeight: 'bold', fontSize: 16 }
})
