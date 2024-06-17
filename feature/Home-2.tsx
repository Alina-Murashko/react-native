import { FlatList, StyleSheet, TouchableOpacity, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {dp, dpHeight, dpWeight, h, sp, w} from "../const/consts";
import {ButtonComponent} from "../common/components/ButtonComponent";
import {Card} from "../common/components/Card";
import Close from "../assets/close.svg";
import {Title} from "../common/components/Title";
import {Background} from "../common/components/Background";
import uuid from 'react-native-uuid';

type Item = {
    cover: string;
    id: string;
};
const dataScreens: Item[] =Array.from({ length: 50 }, (_, i) => ({
    cover: '',
    id: uuid.v4().toString(),
}));

export const Home2 = ({navigation}) => {
    const onDelete = () => {
        //delete screen
    }
    const onUpload = () => {
       navigation.navigate("Upload")
    }

    return (
        <Background styles={styles.container}>
                <Title style={styles.title}/>
                <FlatList data={dataScreens} renderItem={({item}) => <Screen onDelete={onDelete} /> }
                          keyExtractor={item => item.id}
                          numColumns={3}
                          showsVerticalScrollIndicator={false}
                          columnWrapperStyle={styles.flatList}
                          contentContainerStyle={styles.containerFlatList}
                />
                <ButtonFlatList onUpload={onUpload}/>
        </Background>

    )}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: dpWeight(w,100),
        paddingTop: dpHeight(h,192),
        position: "relative",
    },
    title: {
        color: '#FFFFFF',
    },
    buttonContainer: {
        height: dpHeight(h,650),
        width: w,
        paddingHorizontal: dpWeight(w,115),
        position: 'absolute',
        bottom: 0,
    },
    button: {
        marginTop: dpHeight(h,215),
        marginBottom: dpHeight(h,250),
    },
    flatList: {
        width: '100%',
        marginTop: dpHeight(h,80),
    },
    containerFlatList: {
         paddingBottom:  dpHeight(h,600),
    },
    iosButton: {
        shadowColor: '#00A676',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 100,
    },
    androidButton: {
        elevation: 20,
    },
});

type ButtonFlatListProps = {
    onUpload: () => void
}
const ButtonFlatList = ({onUpload}: ButtonFlatListProps) => {
    return (
        <LinearGradient colors={['#04040400','#040404']}
                        locations={[0, 0.4]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 0.7 }}
                        style={styles.buttonContainer}>
            <ButtonComponent onPress={onUpload}
                             title={'Upload Screenshot'}
                             accessibilityLabel={'Upload Screenshot'}
                             buttonStyles={[styles.button,styles.androidButton,styles.iosButton]}
            />

        </LinearGradient>
    )
}

type ScreenProps = {
    onDelete: () => void
}
const Screen = ({onDelete}: ScreenProps) => {
    return <View style={stylesScreen.container}>
        <Card style={[stylesScreen.card,stylesScreen.ios, stylesScreen.android]} styleText={stylesScreen.text}>
            <TouchableOpacity style={stylesScreen.touchable} onPress={ onDelete}>
                <Close color={stylesScreen.icon.color} width={ dpWeight(w,70)} height={ dpHeight(h,70)}/>
            </TouchableOpacity>
        </Card>

    </View>
}

const stylesScreen = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    icon: {
        color: '#FFFFFF',
    },
    touchable: {
        width: dpWeight(w,70),
        height: dpHeight(h,70),
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
    card: {
        backgroundColor: '#040404',
        position: 'relative',
        borderRadius: dp(30),
        width: dpWeight(w,272),
        height: dpHeight(h,484),
        paddingHorizontal: (4),
        marginRight:( w - (dpWeight(w,272))*3 - (dpWeight(w,100))*2)/2
    },
    text: {
        color: '#FFFFFF',
        fontSize: sp(50),
        textAlign: 'center'
    },
    ios: {
        shadowColor: '#FFFFFF',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 3,

    },
    android: {
        elevation: 15,
    },

})