import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

function Exemplo05 () {
    const [n1, setN1] = useState('');
    const [n2, setN2] = useState('');
    const [resultado, setResultado] = useState('');
    const [exibido, setExibido] = useState(false); // flag pra controlar se já exibiu

    function exibirResultado() {
        const nomeCompleto = `${n1} ${n2}`;
        setResultado(nomeCompleto);
        setN1('');
        setN2('');
        setExibido(true);
    }

    function reiniciar() {
        setExibido(false);
        setResultado('');
        setN1('');
        setN2('');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 5</Text>

            {/* Aqui vai aparecer o nome completo ou o texto padrão */}
            <Text style={styles.titulo3}>
                {exibido ? resultado : 'Inserir n1 e n2'}
            </Text>

            {/* Só mostra os campos se ainda não exibiu o nome */}
            {!exibido && (
                <>
                    <Text style={styles.titulo2}>Valor 1</Text>
                    <TextInput 
                        style={styles.txtInput} 
                        value={nome}
                        onChangeText={setN1}
                    />

                    <Text style={styles.titulo2}>Valor 2</Text>
                    <TextInput 
                        style={styles.txtInput} 
                        value={sobrenome}
                        onChangeText={setN2}
                    />
                </>
            )}

            {/* Botão de exibir sempre visível */}
            {!exibido && (
                <TouchableOpacity
                    style={styles.botao}
                    onPress={exibirResultado}
                >
                    <Text style={styles.txtBotao}>Exibir Resultado</Text>
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

export default Exemplo05;
