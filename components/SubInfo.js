import { StyleSheet, Text, View, Image } from 'react-native'
import { SIZES, FONTS, COLORS, SHADOWS, assets } from '../constants'

export const NFTTitle = () => {
    return (
        <View>
            <Text>NFT Title</Text>
        </View>
    )
}

export const EthPrice = () => {
    return (
        <View>
            <Text>Eth Price</Text>
        </View>
    )
}

export const ImageCmp = ({ imgUrl, index }) => {
    return (
        <Image
            source={imgUrl}
            resizeMode='contain'
            style={[styles.imageCmp, { marginLeft: index === 0 ? 0 : -SIZES.extraLarge }]} />
    )
}

export const People = () => {
    return (
        <View style={styles.people}>
            {[assets.person02, assets.person03, assets.person04]
                .map((imgUrl, index) => <ImageCmp imgUrl={imgUrl} key={`People-${index}`} index={index} />)}
        </View>
    )
}

export const EndDate = () => {
    return (
        <View style={styles.endDate}>
            <Text style={styles.edText1}>Ending In</Text>
            <Text style={styles.edText2}>12h 30m</Text>
        </View>
    )
}

export const SubInfo = () => {
    return (
        <View style={styles.subInfo}>
            <People />
            <EndDate />
        </View>
    )
}


const styles = StyleSheet.create({
    subInfo: {
        width: '100%',
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    people: {
        flexDirection: 'row',
    },
    imageCmp: {
        width: 48,
        height: 48,
    },
    endDate: {
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: '50%',
    },
    edText1: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.small,
        color: COLORS.primary
    },
    edText2: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.medium,
        color: COLORS.primary
    },
})