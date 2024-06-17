import { Image, StyleSheet, Text, View } from "react-native";
import {dp, dpHeight, dpWeight, h, sp, w} from "../const/consts";
import {ButtonComponent} from "../common/components/ButtonComponent";
import {Background} from "../common/components/Background";
import {Title} from "../common/components/Title";

export const Home = ({navigation}) => {
    const generateMore = () => {
        navigation.navigate('Upload');
    };
    return (
        <Background styles={styles.container}>
            <View style={styles.containerText}>
               <Title/>
                <Text style={styles.text}>Upload a screenshot of a chat or bio</Text>
            </View>
            <View style={styles.containerImage}>
                <View style={[styles.screen,styles.screen1]}>
                    <Image style={imageStyle.image} source={require('../assets/screen3.png')} />
                </View>
                <View  style={[styles.screen,styles.screen2]}>
                    <Image style={imageStyle.image} source={require('../assets/screen2.png')} />
                </View >
                <View  style={[styles.screen,styles.screen3]}>
                    <Image style={imageStyle.image} source={require('../assets/screen1.png')} />
                </View>
            </View>
            <ButtonComponent onPress={generateMore}
                                 title={'Upload Screenshot'}
                                 accessibilityLabel={'Upload Screenshot'}
                                 buttonStyles={[styles.ios, styles.android]}/>
        </Background>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        paddingHorizontal: dpWeight(w,130),
        paddingTop:dpHeight(h,192),
        paddingBottom: dpHeight(h,250),
    },
    text: {
        fontSize: sp(80),
        fontFamily: 'SF-Regular',
        textAlign: "center",
        color: '#FFFFFF',
        maxWidth: dpWeight(w,750),
    },
    containerImage: {
        position: "relative",
        width: '100%',

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    screen1: {
        transform: [{ rotate: '345deg' }, { translateX: -50 }, { translateY: 0 }],
    },
    screen2: {
        transform: [{ rotate: '0deg' }, { translateX: 0 }, { translateY: 0 }],
    },
    screen3: {
        transform: [{ rotate: '15deg' }, { translateX: dp(174) }, { translateY: 0 }],
    },
    screen: {
        position: 'absolute',
    },
    containerText: {
        flex: 0.3 ,
        justifyContent: "space-between",
        alignItems: "center",
    },
    ios: {
        shadowColor: '#00A676',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 100,
    },
    android: {
        elevation: 20,
    },
})

const imageStyle = StyleSheet.create({
    image: {
        width: dpWeight(w,348),
        height: dpHeight(h,750),
        overflow: 'hidden',
        borderColor: '#FFFFFF',
        borderWidth: dp(2),
        borderRadius: dp(40),
    },
})