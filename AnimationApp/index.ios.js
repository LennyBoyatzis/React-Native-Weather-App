/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import PaperPlaneScene from './components/PaperPlaneScene';

class AnimationApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <PaperPlaneScene />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('AnimationApp', () => AnimationApp);
