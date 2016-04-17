/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native';

import Heart from './components/Heart'

var {height, width} = Dimensions.get('window');

const ANIMATION_END_Y = Math.ceil(height * 0.5);
const NEGATIVE_END_Y = ANIMATION_END_Y * -1;
let startCount = 1;

class ReactNativeAnimated extends Component {
    constructor(props) {
        super(props)
        this.state = {
            position: new Animated.Value(0)
        };
    }

    componentDidMount() {
        Animated.timing(this.state.position, {
            duration: 2000,
            toValue: NEGATIVE_END_Y
        }).start()

        this._yAnimation = this.state.position.interpolate({
            inputRange: [NEGATIVE_END_Y, 0],
            outputRange: [ANIMATION_END_Y, 0]
        });
        this._opacityAnimation = this._yAnimation.interpolate({
            inputRange: [0, ANIMATION_END_Y],
            outputRange: [1, 0]
        })
    }

    getHeartAnimationStyle() {
        return {
            transform: [
                {translateY: this.state.position}
            ],
            opacity: this._opacityAnimation
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Animated.View style={[styles.heartWrap, this.getHeartAnimationStyle()]}>
                    <Heart />
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  heartWrap: {
      position: 'absolute',
      bottom: 50,
      right: (width/2) - 25
  }
});

AppRegistry.registerComponent('ReactNativeAnimated', () => ReactNativeAnimated);
