import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

function Atividade04 () {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [resultado, setResultado] = useState('');
    const [exibido, setExibido] = useState(false); // flag pra controlar se já exibiu

    function exibirNomeCompleto() {
        const nomeCompleto = `${nome} ${sobrenome}`;
        setResultado(nomeCompleto);
        setNome('');
        setSobrenome('');
        setExibido(true);
    }

    function reiniciar() {
        setExibido(false);
        setResultado('');
        setNome('');
        setSobrenome('');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 4</Text>

            {/* Aqui vai aparecer o nome completo ou o texto padrão */}
            <Text style={styles.titulo3}>
                {exibido ? resultado : 'Inserir nome e sobrenome'}
            </Text>

            {/* Só mostra os campos se ainda não exibiu o nome */}
            {!exibido && (
                <>
                    <Text style={styles.titulo2}>Nome</Text>
                    <TextInput 
                        style={styles.txtInput} 
                        value={nome}
                        onChangeText={setNome}
                    />

                    <Text style={styles.titulo2}>Sobrenome</Text>
                    <TextInput 
                        style={styles.txtInput} 
                        value={sobrenome}
                        onChangeText={setSobrenome}
                    />
                </>
            )}

            {/* Botão de exibir sempre visível */}
            {!exibido && (
                <TouchableOpacity
                    style={styles.botao}
                    onPress={exibirNomeCompleto}
                >
                    <Text style={styles.txtBotao}>Exibir texto</Text>
                </TouchableOpacity>
            )}

            {/* Botão para reiniciar e digitar outro nome */}
            {exibido && (
                <TouchableOpacity
                    style={styles.botao}
                    onPress={reiniciar}
                >
                    <Text style={styles.txtBotao}>Novo nome</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}

export default Atividade04;
