import React, { Component } from "react";
import { View, Image, Dimensions } from "react-native";
import { CardPostHeader } from "./CardPostHeader"
import { CardPostFooter } from "./CardPostFooter"

export default class CardPost extends Component {
    render() {
        const screenWidth = Dimensions.get("screen").width;
        const post = this.props.post;
        return (
            <View key={post.id}>
                <CardPostHeader imagem={post.urlPerfil} usuario={post.loginUsuario} />
                <Image
                    style={{ width: screenWidth, height: screenWidth }}
                    source={{ uri: post.urlFoto }}
                />
                <CardPostFooter comentario={post.comentario} />
            </View>);
    }
}
