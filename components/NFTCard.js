import { StyleSheet, Text, View, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { COLORS, SIZES, SHADOWS, assets } from '../constants'

const NFTCard = ({ data }) => {
    const navigation = useNavigation()

    return (
        <View style={styles.card}>
            <Text>NFT Card</Text>
        </View>
    )
}

export default NFTCard

const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base
    },
})