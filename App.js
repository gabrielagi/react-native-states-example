/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import CustomButton from './components/button';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter:0,
    };

    this.handleUp = this.handleUp.bind(this);
    this.handleDown = this.handleDown.bind(this);
  }

  handleUp() {
    const { counter: ct } = this.state;
    this.setState({ counter: ct + 1 });
  }

  handleDown () {
    const { counter: ct } = this.state;
    this.setState({ counter: ct - 1 });
  }


  render() {
    const { counter} = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.subcontariner}>
          <CustomButton label="-" action={this.handleDown}/>
          <View style={styles.counterContainer}>
            <Text style={styles.counter}>{counter}</Text>
          </View>
          <CustomButton label="+" action={this.handleUp}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ffe140',
    justifyContent: 'center',
  },
  subcontariner: {
    height: 50,
    width: '100%',
    paddingHorizontal: 60,
    flexDirection: 'row',
  },
  counterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter: {
    fontSize: 60,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default App;
