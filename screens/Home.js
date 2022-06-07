import { SafeAreaView, StyleSheet, Text, FlatList, View } from 'react-native'
import { useState, useEffect } from 'react'
import { COLORS, NFTData } from '../constants'
import { NFTCard, FocusedStatusBar, HomeHeader } from '../components'

const Home = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        //do something before loading
        // ...
        // ...
        // ...
        setLoading(false)
    }, [])

    if (loading) return (
        <View style={styles.container}>
            <Text>
                Loading...
            </Text>
        </View>
    )

    return (
        <SafeAreaView style={styles.container}>
            <Text>Home</Text>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})