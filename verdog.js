import { View, Image, TextInput, Button, Text } from 'react-native';
import React, { useState } from 'react';
import { styles } from './estilos';
import { getDog } from './getDog';

export default function VerDog() {
    const [dog, setDog] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    async function carregaDog() {
        try {
            const resultado = await getDog(searchQuery);
            setDog(resultado);
        } catch (error) {
            console.error('Erro ao carregar dados do cachorro:', error);
        }
    }

    return (
        <View style={styles.container}>
            <Text>The Dog API</Text>
            {dog.map((item) => (
                <Image key={item.id} style={{ width: 200, height: 200 }} source={{ uri: item.url }} />
            ))}
            <TextInput
                placeholder='Digite o ID'
                style={styles.textinput}
                value={searchQuery}
                onChangeText={(text) => setSearchQuery(text)}
            />
            <Button title='Buscar por ID' onPress={() => carregaDog()} />
        </View>
    );
}
