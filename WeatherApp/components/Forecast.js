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
                    {this.props.temp}°C
                </Text>
                <Text style={styles.bigText}>
                    {this.props.description}
                </Text>
                <Text style={styles.mainText}>
                    Friday, Nov 27
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
        fontSize: 20,
        textAlign: 'center',
        color: '#848F91'
    },
    mainText: {
        flex: 1,
        fontSize: BASE_FONT_SIZE,
        textAlign: 'center',
        color: '#848F91'
    },
});

module.exports = Forecast
