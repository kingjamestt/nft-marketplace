import { StyleSheet, Text, View } from 'react-native'
import { SIZES } from '../constants'

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

export const ImageCmp = () => {
    return (
        <View>
            <Text>Image Cmp</Text>
        </View>
    )
}

export const People = () => {
    return (
        <View style={styles.people}>
            <Text>People</Text>
        </View>
    )
}

export const EndDate = () => {
    return (
        <View style={styles.endDate}>
            <Text>EndDate</Text>
        </View>
    )
}

export const SubInfo = () => {
    return (
        <View style={styles.subInfo}>
            {/* <Text>SubInfo</Text> */}
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
    endDate: {

    }
})