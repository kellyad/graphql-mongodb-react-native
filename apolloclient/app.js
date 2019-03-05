import React, { Component } from 'react'
import { TouchableHighlight, View, Text, TextInput, StyleSheet } from 'react-native'

import { graphql } from 'react-apollo';
import gql from 'graphql-tag'

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: 'George Washington',
      user: 'Emma'
    }
    this.updateName = this.updateName.bind(this)
    this.updateUserName = this.updateUserName.bind(this)
  }
  updateName(name) {
    this.setState({
      name
    })
  }
  updateUserName(user) {
    this.setState({
      user
    })
  }
  render () {
    const query = gql`query PresidentQuery($name: String!) { 
      president(name: $name) {
        name
        term
        party
      }
    }`
    const userQuery = gql`query UserQuery($name: String!) { 
      users(first_name: $name) {
        id
        first_name
        last_name
        avatar
      }
    }`

    const President = ({ data }) => (
      <View style={{paddingLeft: 20, paddingTop: 20}}>
        <Text>Name: {data.president && data.president.name}</Text>
        <Text>Party: {data.president && data.president.party}</Text>
        <Text>Term: {data.president && data.president.term}</Text>
      </View>
    )
    const User = ({ data }) => (
      <View style={{paddingLeft: 20, paddingTop: 20}}>
        <Text>Name: {data.users && data.users.first_name}</Text>
        <Text>last Name: {data.users && data.users.last_name}</Text>
        <Text>Avatar: {data.users && data.users.avatar}</Text>
      </View>
    )
    
    const ViewWithData = graphql(query, {
      options: { variables: { name: this.state.name } }
    })(President)

    const ViewWithUserData = graphql(userQuery, {
      options: { variables: { name: this.state.user } }
    })(User)

    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center'}}>Find President Info</Text>
        <TextInput
          onChangeText={this.updateName}
          style={styles.input} />
        <ViewWithData />
        <Text style={{textAlign: 'center'}}>Find User Info</Text>
        <TextInput
          onChangeText={this.updateUserName}
          style={styles.input} />
        <ViewWithUserData />
      </View>
    )
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#dddddd',
    height: 50,
    margin: 20,
    marginBottom: 0,
    paddingLeft: 10
  }
})

export default App
