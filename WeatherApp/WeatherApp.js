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
            sunPosition: new Animated.Value(20),
            sunOpacity: new Animated.Value(0),
            treeTopRotation: new Animated.Value(0),
            cloudFloat: new Animated.Value(-100),
            cloudFloatUp: new Animated.Value(0),
            cloudOpacity: new Animated.Value(0),
            cloudTwoFloat: new Animated.Value(100),
            cloudTwoOpacity: new Animated.Value(0),
            houseOpacity: new Animated.Value(1),
            rainyHouseOpacity: new Animated.Value(0)
        }
    }

    componentDidMount() {
        Animated.sequence([
            Animated.parallel([
                Animated.timing(this.state.sunPosition, {
                    toValue: -75,
                    duration: 1000,
                }),
                Animated.timing(this.state.sunOpacity, {
                    toValue: 1,
                    duration: 1000,
                }),
            ]),
            Animated.timing(this.state.treeTopRotation, {
                toValue: 100,
                duration: 1000
            }),
            Animated.parallel([
                Animated.timing(this.state.cloudFloat, {
                    toValue: 5,
                    delay: 1000,
                    duration: 3000
                }),
                Animated.timing(this.state.cloudOpacity, {
                    toValue: 1,
                    delay: 1000,
                    duration: 3000
                })
            ]),
            Animated.parallel([
                Animated.timing(this.state.cloudTwoFloat, {
                    toValue: 5,
                    duration: 3000
                }),
                Animated.timing(this.state.cloudTwoOpacity, {
                    toValue: 1,
                    duration: 3000
                }),
                Animated.timing(this.state.cloudFloatUp, {
                    toValue: -40,
                    duration: 3000
                }),
                Animated.timing(this.state.sunOpacity, {
                    toValue: 0,
                    duration: 3000
                })
            ])
            // Animated.parallel([
            //
            // ])
        ]).start(console.log("Completeeeddd"));
    }

    render() {
        var interpolatedRotateAnimation = this.state.treeTopRotation.interpolate({
            inputRange: [0, 25, 50, 75, 100],
            outputRange: ['0deg','-15deg', '0deg', '25deg', '0deg']
        });

        console.log('typeof', typeof(this.state.treeTopRotation))
        return (
            <View style={styles.container}>
                <View style={styles.houseSetting}>
                    <Animated.Image
                        style={[
                            styles.sun,
                            { transform: [
                                {translateY: this.state.sunPosition},
                            ]},
                            {opacity: this.state.sunOpacity}
                        ]}
                        source={require('image!Sun')} />
                    <Animated.Image
                        style={[
                            styles.clouds,
                            { transform: [
                                {translateX: this.state.cloudFloat},
                                {translateY: this.state.cloudFloatUp}
                            ]},
                            {opacity: this.state.cloudOpacity}
                        ]}
                        source={require('image!Clouds')} />
                    <Animated.Image
                        style={[
                            styles.cloudsTwo,
                            { transform: [
                                {translateX: this.state.cloudTwoFloat}
                            ]},
                            {opacity: this.state.cloudTwoOpacity}
                        ]}
                        source={require('image!Clouds2')} />
                    <Animated.Image
                        style={
                            {opacity: this.state.houseOpacity}
                        }
                        source={require('image!House')} />
                    <Animated.Image
                        style={[
                            styles.treeTop,
                            { transform: [
                                {rotate: interpolatedRotateAnimation},
                            ]},
                        ]}
                        source={require('image!Tree')} />
                </View>
                <Forecast temp={23} description='Sunny'/>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ECECFA'
    },
    houseSetting: {
        marginTop: 250
    },
    treeTop: {
        position: 'absolute',
        right: -10,
        bottom: 30,
    },
    sun: {
        position: 'absolute',
        left: -40
    },
    clouds: {
        position: 'absolute',
        left: -50,
        top: -20
    },
    cloudsTwo: {
        position: 'absolute',
        right: 0,
        top: -50
    }
});

module.exports = WeatherApp
