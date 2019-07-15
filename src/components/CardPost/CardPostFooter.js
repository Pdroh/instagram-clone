import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export class CardPostFooter extends Component {
    state = {
        likeada: false
    }
    render() {
        return (
            <View style={{ padding: 15 }}>
                <TouchableOpacity
                    onPress={() => {
                        this.setState({
                            likeada: !this.state.likeada
                        });
                    }}
                    style={{
                        backgroundColor: this.state.likeada ? 'red' : 'gray',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 50,
                        height: 50
                    }}
                >
                </TouchableOpacity>
                <Text style={{ padding: 15 }}>{this.props.comentario}</Text>
            </View>
        )

    }
}