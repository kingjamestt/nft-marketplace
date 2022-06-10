import { StyleSheet, Text, Image, View, TextInput } from 'react-native'
import { COLORS, FONTS, SIZES, assets } from '../constants'

const HomeHeader = () => {
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <Image source={assets.logo} resizeMode='contain' style={styles.logo} />
                <View style={styles.profileContainer}>
                    <Image source={assets.person01} resizeMode='contain' style={styles.profileImg} />
                    <Image source={assets.badge} resizeMode='contain' style={styles.badge} />
                </View>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.hello}>Hello, Crystal 👋</Text>
                <Text style={styles.msg}>Hello 👋</Text>
            </View>
        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primary,
        padding: SIZES.font,

    },
    inner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo: {
        width: 90,
        height: 25,
    },
    profileContainer: {
        width: 45,
        height: 45,
    },
    profileImg: {
        width: '100%',
        height: '100%',
    },
    badge: {
        width: 15,
        height: 15,
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    textContainer: {
        marginVertical: SIZES.font
    },
    hello: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.small,
        color: COLORS.white
    },
    msg: {
        fontFamily: FONTS.bold,
        fontSize: SIZES.large,
        color: COLORS.white
    },
})