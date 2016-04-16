import React, {
    StyleSheet,
    Component,
    Text,
    View,
    TextInput,
    Image
} from 'react-native';

const Forecast = require('./components/Forecast');

class WeatherApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            zip: '',
            forecast: {
                main: 'Clouds',
                description: 'few clouds',
                temp: 23.7
            }
        }
    }

    _handleTextChange(event) {
        console.log("Hello", event.nativeEvent.text)
        this.setState({
            zip: event.nativeEvent.text
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('image!img')}
                    resizeMode='cover'
                    style={styles.backdrop}>
                    <View style={styles.overlay}>
                        <View style={styles.row}>
                            <Text style={styles.mainText}>
                                Current weather for
                            </Text>
                            <View style={styles.zipContainer}>
                                <TextInput
                                    style={[styles.zipContainer, styles.mainText]}
                                    returnKeyType='go'
                                    onSubmitEditing={this._handleTextChange.bind(this)} />
                            </View>
                        </View>
                        <Forecast
                        main={this.state.forecast.main}
                        description={this.state.forecast.description}
                        temp={this.state.forecast.temp} />
                    </View>
                </Image>
            </View>
        )
    }
}

const BASE_FONT_SIZE = 16;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 30
    },
    backdrop: {
        flex: 1,
        flexDirection: 'column'
    },
    overlay: {
        paddingTop: 5,
        backgroundColor: '#000000',
        opacity: 0.5,
        flexDirection: 'column',
        alignItems: 'center'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'flex-start',
        padding: 30
    },
    zipContainer: {
        flex: 1,
        borderBottomColor: '#DDDDDD',
        borderBottomWidth: 1,
        marginLeft: 5,
        marginTop: 3
    },
    zipCode: {
        width: 50,
        height: BASE_FONT_SIZE
    },
    mainText: {
        flex: 1,
        fontSize: BASE_FONT_SIZE,
        color: '#FFFFFF'
    },
});

module.exports = WeatherApp
