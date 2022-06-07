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
        <View style={styles.container}>
            <Text>
                Loading...
            </Text>
        </View>
    )

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar background={COLORS.primary} />
            <View style={{ flex: 1 }}>
                <View style={{ zIndex: 0 }}>
                    <FlatList
                        data={NFTData}
                        renderItem={({ item }) => <Text>{item.name}</Text>}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={HomeHeader}
                    />
                </View>
                <View style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: -1,
                }}>
                    <View style={{ height: 300, backgroundColor: COLORS.primary }} />
                    <View style={{ flex: 1, backgroundColor: COLORS.white }} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})