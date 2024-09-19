import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Azul() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Página azul</Text>
            <Link href="/" style={styles.text}>Ir para a tela branca</Link>
            <Link href="/preta" style={styles.text}>Ir para a tela preta</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#120a8f',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 18,
    },
});
