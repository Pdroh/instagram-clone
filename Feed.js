import React, { Component } from 'react';
import { Text, View, ScrollView, ActivityIndicator } from 'react-native';
import CardPost from './src/components/CardPost';
import LogoTitle from './src/components/Header';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Feed extends Component {
  
  static navigationOptions = {
    headerTitle: <LogoTitle texto={'Feed'} />,
    headerStyle: {
      backgroundColor: '#00E676',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      color: '#000'
    }
  };

  state = {
    posts: [],
    carregando: true
  }

  componentDidMount() {
    fetch("https://instalura-api.herokuapp.com/api/public/fotos/rafael")
      .then(function(respostaDoServer) {
        return respostaDoServer.json();
      })
      .then(respostaConvertida => {
        this.setState({
          posts : respostaConvertida,
          carregando: false
        })
      });
  }

  render(){

    if (this.state.carregando) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator style={{flex: 1}} />
        </View>
      );
    }

    return(
      <ScrollView>
        
        {this.state.posts.length ? null : (<Text>Carregando ... </Text>)}

        {this.state.posts.map(function(post){
          return <CardPost key={post.id} post={post} />;
        })}
      </ScrollView>
    )
  }
}
