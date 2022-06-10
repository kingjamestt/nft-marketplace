import { StyleSheet, Image, TouchableOpacity, Text } from 'react-native'
import { COLORS, SIZES, FONTS, SHADOWS } from '../constants'

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
    return (
        <TouchableOpacity style={[styles.circleBtn, { ...props }]}>
            <Image source={imgUrl} resizeMode='contain' style={styles.image} />
        </TouchableOpacity>
    )
}

export const RectButton = ({ minWidth, fontSize, handlePress, ...props }) => {
    return (
        <TouchableOpacity
            style={[styles.rectBtn, { minWidth: minWidth, ...props }]}
            onPress={handlePress}>
            <Text style={[styles.rectBtnText, { fontSize: fontSize }]}>Place a bid</Text>
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
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        padding: SIZES.small,
    },
    rectBtnText: {
        color: COLORS.white,
        fontFamily: FONTS.semiBold,
        textAlign: 'center'
    },
    image: {
        width: 24,
        height: 24
    }
})