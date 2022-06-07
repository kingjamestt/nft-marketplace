import { SafeAreaView, StyleSheet, Text, FlatList, View } from 'react-native'
import { useState, useEffect } from 'react'
import { COLORS, NFTData } from '../constants'
import { NFTCard, FocusedStatusBar, HomeHeader } from '../components'

const Home = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        //do something before loading
        // ...
        setLoading(false)
    }, [])

    //Loading Animation
    if (loading) return (
        <View style={styles.loading}>
            <Text>
                Loading...
            </Text>
        </View>
    )

    return (
        <SafeAreaView style={styles.flexContainer}>
            <FocusedStatusBar background={COLORS.primary} />
            <View style={styles.flexContainer}>
                <View style={styles.flatListContainer}>
                    <FlatList
                        data={NFTData}
                        renderItem={({ item }) => <NFTCard data={item} />}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={HomeHeader}
                    />
                </View>
                <View style={styles.backgroundContainer}>
                    <View style={styles.heroBg} />
                    <View style={styles.contentBg} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    flexContainer: {
        flex: 1
    },
    flatListContainer: {
        zIndex: 0
    },
    backgroundContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: -1,
    },
    heroBg: {
        height: 300,
        backgroundColor: COLORS.primary
    },
    contentBg: {
        flex: 1,
        backgroundColor: COLORS.white
    },
})