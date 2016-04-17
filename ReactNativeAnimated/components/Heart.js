import React, {
    Component,
    StyleSheet,
    View
} from 'react-native'

class Heart extends Component {
    render() {
        return (
            <View {...this.props} style={[styles.heart, this.props.style]}>
                <View style={[styles.leftHeart, styles.heartShape]} />
                <View style={[styles.rightHeart, styles.heartShape]} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
  heart: {
    height: 50,
    width: 50
  },
  heartShape: {
    width: 30,
    height: 45,
    position: 'absolute',
    top: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#6427d1'
  },
  leftHeart: {
    transform: [
        {rotate: '-45deg'}
    ],
    left: 5
  },
  rightHeart: {
    transform: [
        {rotate: '45deg'}
    ],
    right: 5
  }
});

module.exports = Heart;
