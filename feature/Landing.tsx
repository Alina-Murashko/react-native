import {StyleSheet, View} from "react-native";
import {Title} from "../common/components/Title";
import {useEffect} from "react";

export const Landing = ({navigation}) => {

    useEffect(() => {
        // Тут нужна логига по запросу me, если пакет не куплен то на Paywall
        // , если куплен на 'Home
       const idTimeout = setTimeout(() => navigation.navigate('Paywall'), 2000)

        return () => clearTimeout(idTimeout)
    })

    return (
        <View style={styles.container}>
          <Title style={styles.title}/>
        </View>
    )}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#040404',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#ED217C'
    }
});
