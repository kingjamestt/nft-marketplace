// import { StatusBar } from 'react-native' 
import { StatusBar } from 'expo-status-bar';
import { useIsFocused } from '@react-navigation/native'

const FocusedStatusBar = (props) => {
    const isFocused = useIsFocused()

    // statusbar hidden temporarily:
    //   align styles for ios and android or set individually
    return isFocused ? <StatusBar style='dark' animated {...props} hidden /> : null
}

export default FocusedStatusBar
