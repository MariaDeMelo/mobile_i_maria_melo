import { Stack } from 'expo-router';

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: "Branco" }} />
            <Stack.Screen name="preta" options={{ title: "Preto" }} />
            <Stack.Screen name="azul" options={{ title: "Azul" }} />
        </Stack>
    );
}
