import { StyleSheet, Text, View, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { COLORS, SIZES, SHADOWS, assets } from '../constants'
import { CircleButton, RectButton } from './Button'
import { SubInfo, EthPrice, NFTTitle } from './SubInfo'

const NFTCard = ({ data }) => {
    const navigation = useNavigation()

    return (
        <View style={styles.card}>
            <View style={styles.inner}>
                <Image
                    source={data.image}
                    resizeMode='cover'
                    style={styles.image}
                />
                <CircleButton imgUrl={assets.heart} right={10} top={10} />
            </View>
            <SubInfo />

        </View>
    )
}

export default NFTCard

const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark
    },
    inner: {
        width: '100%',
        height: 250,
    },
    image: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: SIZES.font,
        borderTopRightRadius: SIZES.font
    }
})