import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Preto() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Página preta</Text>
            <Link href="/" style={styles.text}>Ir para a tela branca</Link>
            <Link href="/azul" style={styles.text}>Ir para a tela azul</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
    },
    text: {
        color: '#fff',
        fontSize: 18,
    }
});
