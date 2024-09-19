import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Branco() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Página branca</Text>
            <Link href="/preta"style={styles.text}>Ir para a tela preta</Link>
            <Link href="/azul" style={styles.text}>Ir para a tela azul</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#000',
    },
    text: {
        color: '#000',
        fontSize: 18,
    },
});
