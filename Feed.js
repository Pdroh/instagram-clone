import React, { Component } from 'react';
import { Text, View, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
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
      .then(function (respostaDoServer) {
        return respostaDoServer.json();
      })
      .then(respostaConvertida => {
        this.setState({
          posts: respostaConvertida,
          carregando: false
        })
      });
  }

  render() {

    if (this.state.carregando) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator style={{ flex: 1 }} />
        </View>
      );
    }

    return (
      <ScrollView>
        {this.state.posts.map(post => {
          return (
            <TouchableOpacity
              key={post.id}
              onPress={() => {
                this.props.navigation.navigate('FeedStackPostInterno', {
                  postId: post.id,
                  post: post
                })  
              }}
            >
              <CardPost key={post.id} post={post} />
          </TouchableOpacity>
          )
        })}
        {/* {this.state.posts.map(post => {
          return (
            <TouchableOpacity>
              key={post.id}
              onPress={() => {
                // this.props.navigation.navigate('FeedStackPostInterno', {
                //   postId: post.id,
                //   post: post
                // })  
              }}
            >
           <Text>aaaa</Text>
            <CardPost key={post.id} post={post} />; 
            </TouchableOpacity>
          )
        })}
       */}
      </ScrollView>
    )
  }
}
