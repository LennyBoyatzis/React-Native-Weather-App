import React, {
    StyleSheet,
    Component,
    Text,
    View,
    TextInput,
    Image,
    Animated
} from 'react-native';

const Forecast = require('./components/Forecast');

class WeatherApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bounceValue: new Animated.Value(0)
        }
    }

    componentDidMount() {
        this.state.bounceValue.setValue(1.5);
        Animated.spring(
            this.state.bounceValue,
            {
                toValue: 0.8,
                friction: 1,
            }
        ).start(console.log("Completeeeddd"));
    }

    render() {
        console.log("this.state.bounceValue", this.state.bounceValue)
        return (
            <View style={styles.container}>
                <View style={styles.houseSetting}>
                    <Animated.Image
                        style={[
                            styles.sun,
                            { transform: [
                                {scale: this.state.bounceValue}
                            ]}]}
                        source={require('image!Sun')} />
                    <Image
                        source={require('image!House')} />
                    <Image
                        style={styles.treeTop}
                        source={require('image!Tree')} />
                </View>
                <Forecast temp={23} description='Sunny'/>
            </View>
        )
    }
}

const BASE_FONT_SIZE = 16;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ECECFA'
    },
    houseSetting: {
        marginTop: 200
    },
    treeTop: {
        position: 'absolute',
        right: -10,
        bottom: 30,
    },
    sun: {
        position: 'absolute',
        left: -40
    }
});

module.exports = WeatherApp
