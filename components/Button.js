import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import { COLORS, SIZES, FONTS, SHADOWS } from '../constants'

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
    return (
        <TouchableOpacity style={[styles.circleBtn, { ...props }]}>
            <Image source={imgUrl} resizeMode='contain' style={styles.image} />
        </TouchableOpacity>
    )
}

export const RectButton = ({ imgUrl, handlePress, ...props }) => {
    return (
        <TouchableOpacity style={[styles.rectBtn, { ...props }]} onPress={handlePress}>
            <Image source={imgUrl} resizeMode='contain' style={styles.image} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    circleBtn: {
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: 'absolute',
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
    },
    rectBtn: {

    },
    image: {
        width: 24,
        height: 24
    }
})