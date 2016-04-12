import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Animated
} from 'react-native';

class WeatherApp extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0),
    };
  }
  render(): ReactElement {
    return (
      <Animated.Image
        source={{uri: 'http://i.imgur.com/XMKOH81.jpg'}}
        style={{
          flex: 1,
          transform: [
            {scale: this.state.bounceValue},
          ]
        }}
      />
    );
  }
  componentDidMount() {
    this.state.bounceValue.setValue(1.5);
    Animated.spring(
      this.state.bounceValue,
      {
        toValue: 0.8,
        friction: 1,
      }
    ).start();
  }
}

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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('WeatherApp', () => WeatherApp);
