/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {withAuthenticator} from 'aws-amplify-react-native';
import { Storage, API, graphqlOperation } from 'aws-amplify'


const query = `
  query list {
    listTodos {
      items {
        id
        name
        completed
      }
    }
  }  
`

export default class App extends Component {
  state = {todos: []}
  async componentDidMount() {
    const todos = await API.graphql(graphqlOperation(query))
    this.setState({ todos: todos.data.listTodos.items })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Todos
        </Text>
        {
          this.state.todos.map((todo, index) => (
            <Text key={index}>{todo.name}</Text>
          ))
        }
      </View>
    );
  }
}

//export default withAuthenticator(App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
