import React, {
    StyleSheet,
    Component,
    Text,
    View
} from 'react-native';

class Forecast extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.bigText}>
                    {this.props.main}
                </Text>
                <Text style={styles.mainText}>
                    Current conditions: {this.props.description}
                </Text>
                <Text style={styles.bigText}>
                    {this.props.temp}°C
                </Text>
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
    bigText: {
        flex: 2,
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#FFFFFF'
    },
    mainText: {
        flex: 1,
        fontSize: BASE_FONT_SIZE,
        textAlign: 'center',
        color: '#FFFFFF'
    },
});

module.exports = Forecast
