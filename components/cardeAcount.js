import {View, Text, StyleSheet} from 'react-native'
import { Image } from 'expo-image'

export default function CardAccount () {
    return (
        <View style={styles.card}>
            <Image 
                style={styles.logo} 
                source="https://img.freepik.com/vetores-gratis/envelope-com-sinal-do-correio-eletronico_1020-530.jpg?size=626&ext=jpg&ga=GA1.1.1105073916.1723753945&semt=ais_hybrid"
            />
            <View style={styles.content}>
                <Text style={styles.service} >Gmail</Text>
                <Text style={styles.username} >renancavichi@gmail.com</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 10,
        borderStyle: 'solid',
        borderColor: '#EEEEEE',
        borderWidth: 1,
        flexDirection: 'row',
        gap: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    logo:{
        width: 60,
        height: 60
    },
    content: {
        gap: 6
    },
    service: {
        fontSize: 17
    },
    username: {
        color: '#777777'
    }
})