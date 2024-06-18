import {ScrollView,  StyleSheet, Text, TouchableOpacity, View} from "react-native";
import GoBack from "../assets/goback.svg";
import Plus from "../assets/plus.svg";
import Copy from "../assets/copy.svg";
import { ButtonComponent } from "../common/components/ButtonComponent";
import {dp, dpHeight, dpWeight, h, sp, w} from "../const/consts";
import { Card } from "../common/components/Card";
import { Background } from "../common/components/Background";
import { Title } from "../common/components/Title";
import * as Clipboard from 'expo-clipboard';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../app/store";
import {pickImage} from "../const/screen";
import {screenActions} from "../app/screenReducer";
import {useAppDispatch} from "../common/hooks/useAppDispatch";

export const Upload = ({navigation}) => {
    const  dispatch = useAppDispatch()
    const assetId = useSelector((state: AppRootStateType) => state.app.assetProcessedId)
    const cover = useSelector((state: AppRootStateType) => state.app.assets
        .filter(cover => cover.assetId === assetId)[0]?.uri)

    const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Fusce quis est ut dui faucibus dapibus nec vel erat.'
    const goBack = () => {
        navigation.goBack();
    };

    const addItem = async () => {
        try {
            const resultImg = await pickImage()
            dispatch(screenActions.setScreen({screen: resultImg}))
            dispatch(screenActions.setProcessedIdScreen({assetId: resultImg.assetId}))
            navigation.navigate('Upload');
        } catch {
        }
    };

    const generateMore = () => {
        navigation.navigate('Home–2')
    };

    const fetchCopiedText = async () => {
      await Clipboard.setStringAsync(description);
    };


    return (
            <ScrollView showsHorizontalScrollIndicator={false}  showsVerticalScrollIndicator={false}>
                <Background styles={styles.containerBackground}>
                    <View style={styles.containerTitle}>
                        <TouchableOpacity style={[styles.touchable]} onPress={goBack}>
                            <GoBack color={styles.icon.color}
                                    width={dpWeight(w,70)}
                                    height={dpHeight(h,70)}
                                     />
                        </TouchableOpacity>
                        <Title/>
                        <TouchableOpacity style={styles.touchable} onPress={addItem}>
                            <Plus color={styles.icon.color}
                                  height={dpHeight(h,70)}
                                  width={dpWeight(w,70)}/>
                        </TouchableOpacity>
                    </View>
                    <Card style={[styles.card]} screenUri={cover}/>
                    <Text  style={styles.tapToCopy}>Tap to copy rizz</Text>
                </Background>
                    <View style={styles.container}>
                        <View style={[styles.containerCopy,styles.ios, styles.android]}>
                            <Text selectable={true} style={styles.descriptionCopy} children={description}/>
                            <View style={styles.containerCopyIcon} >
                                <TouchableOpacity onPress={fetchCopiedText}>
                                    <Copy color={styles.copyIcon.color} height={dp(80)} width={dp(80)}/>
                                </TouchableOpacity>
                                <Text style={styles.copyText}> copy</Text>
                            </View>
                        </View>
                        <ButtonComponent buttonStyles={[styles.buttonComponent, styles.iosButton, styles.android]}
                                         onPress={generateMore} title={'Generate more'}
                                         accessibilityLabel={'Generate more'} />
                    </View>

            </ScrollView>
    )
}

const styles = StyleSheet.create({
    containerBackground: {
        flex: 1,
        paddingHorizontal: dpWeight(w,115),
        paddingTop: dpHeight(h,192),

    },
    container: {
        paddingBottom: dpHeight(h,164),
        paddingHorizontal: dpWeight(w,115),
        backgroundColor: '#040404',
    },
    containerTitle: {
        flex: 1,
        flexDirection: "row",
        width: '100%',
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        fontSize: sp(100),
        color: '#FFFFFF',
    },
    descriptionCopy: {
        flex: 0.9,
        fontFamily: 'SF-Regular',
        fontSize: sp(65),
        textAlign: 'left',
        color: '#040404'
    },
    icon: {
        color:'#FFFFFF',
    },
    touchable: {
       alignItems: "center",
        width: dpWeight(w,70),
        height: dpHeight(h,70),
    },
    copyIcon: {
       color:'#040404',
    },
    copyText: {
        color:'#040404',
        fontSize: sp(40),
        textAlign: 'left',
        fontFamily: 'SF-Thin'
    },
    containerCopy: {
        flex: 1,
        flexDirection: "row",
        marginVertical: dpHeight(h,100),

        backgroundColor: '#E0E0E0',
        borderRadius: dp(50),
        paddingHorizontal: dpWeight(w,50),
        paddingVertical: dpHeight(h,75),
    },
    containerCopyIcon: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center",
    },
    tapToCopy: {
        color:'#FFFFFF',
        fontSize: dp(65),
        fontFamily: 'SF-Regular',
        textAlign: 'left',
    },
    card :{
        flex: 1,
        alignSelf: "center",
        marginTop: dpHeight(h,160),
        marginBottom: dpHeight(h,100),
    },
    buttonComponent: {
        position: "relative",
        borderRadius: dp(50),
        alignItems: "flex-start",
        paddingHorizontal: dpWeight(w,50),

    },
    ios: {
        shadowColor: '#FFFFFF',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 10,
    },
    android: {
        elevation: 18,
    },
    iosButton: {
        shadowColor: '#00A676',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 20,
    },
})

