import { FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {CardPayment} from "../common/components/CardPayment";
import {dp, dpHeight, dpWeight, h, sp, w} from "../const/consts";
import uuid from "react-native-uuid";
import GoBack from '../assets/goback.svg'
import Match from '../assets/match.svg'

type Offers = {
    id: string
    title: string
}

const listOffers: Offers[] = [
    {
        id: uuid.v4().toString(),
        title: 'Unlimited Rizz',
    },
    {
        id:uuid.v4().toString(),
        title: 'Coach Recommended',
    },
    {
        id: uuid.v4().toString(),
        title: 'Proven to Get Dates',
    },
    {
        id: uuid.v4().toString(),
        title: 'x10 More Responses',
    },
    {
        id: uuid.v4().toString(),
        title: 'x8 More Dates',
    },
];

export const Paywall = ({navigation}) => {

    const addOffer= () => {
        //действие по добавлению бесплатной версии
        //перевод после оплаты на Home
        navigation.navigate('Home')
    }
    const goBack = () => {
        navigation.goBack()
    }

    return(
        <View style={styles.container}>
            <View style={styles.flex}>
           <TouchableOpacity style={styles.touchable} onPress={goBack}>
                <GoBack color={styles.goBack.color} width={dpWeight(w,70)} height={dpHeight(h,70)}/>
            </TouchableOpacity>
                <Match width={'100%'} height={'70%'} preserveAspectRatio="xMidYMid slice"/>
            </View>
            <View style={styles.flex}>
                <FlatList
                    contentContainerStyle={styles.flatListOffers}
                    data={listOffers}
                    renderItem={({item}) => <Text style={styles.offer}>{item.title}</Text>  }
                    keyExtractor={item => item.id}
                />
            </View>
            <View style={styles.flex}>
                <CardPayment addOffer={addOffer}/>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: '#040404',
        paddingHorizontal: dpWeight(w,115),
        paddingVertical: dpHeight(h,115),
    },
    touchable: {
        width:dpWeight(w,70),
        height: dpWeight(w,70),
        marginBottom: dpHeight(h,100),
    },
    goBack: {
        color: '#ED217C',
    },
    offer: {
        color: '#FFFFFF',
        fontFamily: 'SF-Regular',
        fontSize: sp(70),
        textAlign: "left"
    },
    flatListOffers: {
        flex: 1,
        paddingLeft: dpWeight(w,140),
        marginLeft: dpWeight(w,70),
        alignItems: 'flex-start',
        justifyContent: 'space-around',

    },
    flex: {
        flex: 0.3,
    }
});