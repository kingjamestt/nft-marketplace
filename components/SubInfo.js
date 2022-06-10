import { StyleSheet, Text, View, Image } from 'react-native'
import { SIZES, FONTS, COLORS, SHADOWS, assets } from '../constants'

export const NFTTitle = ({ title, subTitle, titleSize, subTitleSize }) => {
    return (
        <View>
            <Text style={[styles.NFTTitle, { fontSize: titleSize }]}>{title}</Text>
            <Text style={[styles.NFTSubTitle, { fontSize: subTitleSize }]}>{subTitle}</Text>
        </View>
    )
}

export const EthPrice = ({ price }) => {
    return (
        <View style={styles.ethPriceContainer}>
            <Image source={assets.eth} resizeMode='contain' style={styles.ethImage} />
            <Text style={styles.ethPrice}>{price}</Text>
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
    NFTTitle: {
        fontFamily: FONTS.semiBold,
        color: COLORS.primary,
    },
    NFTSubTitle: {
        fontFamily: FONTS.regular,
        color: COLORS.primary
    },
    ethPriceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ethPrice: {
        fontSize: SIZES.font,
        fontFamily: FONTS.medium,
        color: COLORS.primary
    },
    ethImage: {
        width: 20,
        height: 20,
        marginRight: 2
    }
})