import { StyleSheet } from "react-native";

import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#b30000',
    marginBottom: 20,
  },
  texto: {
    fontSize: 32,
    marginBottom: 10,
    color: '#800000',
  },
  input: {
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#ffcccc',
    backgroundColor: '#fff0f0',
    borderRadius: 10,
    padding: 10,
    width: '20%',
    marginBottom: 10,
    fontSize: 16,
  },
  resultado: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#cc0000',
    marginBottom: 20,
  },
  containerDirecao: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 15,
  },
  botao: {
    backgroundColor: '#ff4d4d',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 5,
    minWidth: 60,
    alignItems: 'center',
  },
  botaoTexto: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  zerar: {
    backgroundColor: '#cc0000',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  zerarTexto: {
    color: 'white',
    fontWeight: 'bold',
  }
});

export default styles;