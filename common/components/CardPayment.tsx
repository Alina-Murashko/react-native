import {StatusBar, StyleSheet, Text, View} from "react-native";
import { ButtonComponent } from "./ButtonComponent";
import { LinearGradient } from 'expo-linear-gradient';
import {GradientText} from "./GradientText";
import {dp, dpHeight, dpWeight, h, sp, w} from "../../const/consts";


type PropsCardPayment = {
    addOffer: () => void
}

export const CardPayment = (props: PropsCardPayment ) => {
    const {addOffer} = props
    return <View style={styles.container}>
        <LinearGradient colors={['#00A676', '#46B1C9']}
                        style={styles.textGradient}
                        start={{x: 0, y: 0}}
                        end={{x: 0, y: 1}} >
            <Text style={styles.text}>Rizz God</Text>
        </LinearGradient>
        <GradientText text={'Elevate Your Game'} textStyle={styles.title} gradient={['#FFFFFF', '#46B1C9']}
                          start={{ x: 0, y: 0 }}
                          end={{ x: 1, y: 1 }}/>
        <ButtonComponent title={'Unlock Free Trial'}
                         onPress={addOffer}
                         accessibilityLabel={'Payment button'}
                         buttonStyles={styles.button}
                        />
        <Text style={styles.price}>risk-free trial then $8.67/week</Text>
    </View>
}

const  styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'space-around',
        borderStyle: "solid",
        borderColor: '#00A676',
        borderWidth: dp(10),
        borderRadius: dp(50),
        backgroundColor: 'rgba(112, 112, 112, 0.5)',

        paddingHorizontal: dpWeight(w,80),
        paddingTop: dpHeight(h,110),
        paddingBottom: dpHeight(h,100),
        position: 'relative',
    },
    text: {
        fontSize: sp(45),
        fontFamily: 'SF-Bold',
        color:'#FFFFFF',

    },
    price: {
        textAlign: "left",
        fontSize: sp(50),
        fontFamily: 'SF-Thin',
        color: '#FFFFFF',
    },
    textGradient: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: dpHeight(h,40),
        paddingVertical: dpWeight(w, 18),
        borderRadius: dp(100),
        borderWidth: dp(1),
        borderColor:'#707070',
        position: "absolute",
        transform: [{ translateX:  0  }, { translateY: -( sp(80)+ w/126.6 + dp(1))/2}],
    },
    title: {
        fontSize: sp(80),
        fontFamily: 'SF-Bold',
        fontWeight: 'bold',
    },
    button: {
        marginTop: dpHeight(h,68),
        marginBottom: dpHeight(h,50),
    }

})