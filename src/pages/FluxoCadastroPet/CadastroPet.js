import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { Text, View, TextInput, StyleSheet, Dimensions,TouchableOpacity,handleSubmit, Image} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

// array de raças e espécies

const especies = [
    {id: 1, nome: 'Cachorro'},
    {id: 2, nome: 'Gato'},
    {id: 3, nome: 'Pássaro'},
]

const racas = {
    1 : [
        {id: 1, nome: "Labrador"},
        {id: 2, nome: "Yorkshire"},
        {id: 3, nome: "Chihuahua"},
        {id: 4, nome: "Golden"},
        {id: 5, nome: "Pastor Alemão"},
    ],
    2 : [
        {id: 1, nome: "Siames"},
        {id: 2, nome: "Selvagem"},
        {id: 3, nome: "Angorá"},
        {id: 4, nome: "Ragdoll"},
        {id: 5, nome: "Persa"},
    ],
    3 : [
        {id: 1, nome: "Arara"},
        {id: 2, nome: "Calopsita"},
        {id: 3, nome: "Canário"},
        {id: 4, nome: "Beija-flor"},
        {id: 5, nome: "Papagaio"},
    ]
}

export function Home() {
 
    const [selectedValue, setSelectedValue] = useState("java");
    const [selectedRacaValue, setSelectedRacaValue] = useState("java");
    const handleConfirmarPress = () => {
    
        // Lógica a ser executada ao pressionar o botão "Confirmar"
        console.log("Botão 'Confirmar' pressionado!");
    };

    const handleVoltarPress =() => {
        console.log("Voltar");
    }

    // especies e raças

    const [especieSelecionada, setEspecieSelecionada]  = useState(null);
    const [racaSelecionada, setRacaSelecionada]  = useState(null);

    const handleEspecieChange = (especie) => {
        setEspecieSelecionada(especie);
        setRacaSelecionada(null);
    };

    const handleRacaChange = (raca) => {
        setRacaSelecionada(raca);
    }

    // mascaras

    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
      
    return (

        <View style={styles.container}>

            
            <View style={styles.navBar}>
                <TouchableOpacity onPress={handleVoltarPress}><Image /></TouchableOpacity>
                
            </View>

            <Text style={styles.infoDog}>
                Informações do Pet
            </Text>
            <View style={styles.body} >

                <TextInput
                    style={styles.input}
                    placeholder='Nome do pet'
                    placeholderTextColor="#ACBBC3"
                    keyboardType='name-phone-pad'
                />
                <TextInput
                    style={styles.input2}
                    placeholder='Idade'
                    placeholderTextColor="#ACBBC3"
                    keyboardType='name-phone-pad'
                />

                <View style={styles.form}> 
                    
                    <TextInputMask                        
                        style={styles.input3}
                        placeholder="Peso (kg)"
                        placeholderTextColor="#ACBBC3"
                        keyboardType='name-phone-pad'
                        type="money"
                        options={{
                            precision: 0,
                            separator: ',',
                            delimiter: '.',
                            unit: 'kg ',
                            suffixUnit: '',
                        }}
                        value={peso}
                        onChangeText={(maskedValue, rawValue) => setPeso(rawValue)}
                    />
                    <TextInputMask
                        style={styles.input4}
                        placeholderTextColor="#ACBBC3"

                        type="custom"
                        options={{
                          mask: '9.99',
                        }}
                        placeholder="Altura (m)"
                        value={altura}
                        onChangeText={(maskedValue, rawValue) => setAltura(rawValue)}
                    />

                </View>
                <View style={styles.pickerContainer}>
                    <Picker
                        style={styles.picker}
                        dropdownIconColor={"white"}
                        itemStyle={styles.itemStylePicker}
                        selectedValue={especieSelecionada}
                        onValueChange={handleEspecieChange}
                    >
                        <Picker.Item label="Selecione a Espécie" value="null" />
                        {especies.map((especie) => (
                            <Picker.Item key={especie.id} label={especie.nome} value={especie.id} />
                        ))}
                    </Picker>
                </View>

                {especieSelecionada && racas[especieSelecionada] && (
                    <View style={styles.pickerContainerRaca}>
                                    
                        <Picker
                            style={styles.pickerRaca}
                            dropdownIconColor={"white"}
                            itemStyle={styles.itemStylePickerRaca}
                            selectedValue={racaSelecionada}
                            onValueChange={handleRacaChange}
                        >
                            <Picker.Item label="Selecione a Raça" value={null} />
                            {
                                racas[especieSelecionada].map((raca) => (
                                    <Picker.Item key={raca.id} label={raca.nome} value={raca.id} />
                                ))
                            }
                        </Picker>
                        
                    </View>
                )}
        
            </View>
            <TouchableOpacity style = {styles.button} onPress={handleConfirmarPress}>
                <Text style ={styles.buttonText} >Confirmar</Text>
            </TouchableOpacity>
         
        </View>
    );


}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 24,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 30,
        width: screenWidth,
        height: screenHeight,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between'

    },
    navBar:{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15
    },
    infoDog: {
        color: '#282C26',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 30,

    },
    body: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        
    },
    input: {
        borderWidth: 1,
        height: 56,
        width: '100%',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: '#ACBBC3',
        color: 'blue',
        fontSize: 16,
        marginTop: 42,
        marginBottom: 30,
    },
    input2: {
        borderWidth: 1,
        height: 56,
        width: '100%',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: '#ACBBC3',
        color: 'blue',
        fontSize: 16,
        marginBottom: 30,
    },
    form: {
        width: '100%',
        flexDirection: 'row'

    },

    input3: {
        flex: 1,
        borderWidth: 1,
        height: 56,
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: '#ACBBC3',
        color: '#ACBBC3',
        padding: 16,
        fontSize: 16

    },
    input4: {
        flex: 1,
        borderWidth: 1,
        height: 56,
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: '#ACBBC3',
        color: '#ACBBC3',
        padding: 16,
        marginLeft: 30,
        fontSize: 16,
        marginBottom: 30,

    },


    itemStylePicker: {
        fontSize: 20,    
        textAlign: 'center',
        backgroundColor: 'white',
        borderColor: '#ACBBC3',
        color: '#ACBBC3',



    },
    pickerContainer: {
        borderRadius: 10,
        overflow: 'hidden',
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: '#ACBBC3',
        color: '#ACBBC3',
        marginBottom: 30,
        height: 56,
        width: '100%',


    },
    picker: {
        height: 56,
        backgroundColor: 'white',
        borderColor: '#ACBBC3',
        color: '#ACBBC3',
        padding: 16,
        fontSize: 16,


    },



    itemStylePickerRaca: {
        fontSize: 20,    
        textAlign: 'center',
        backgroundColor: 'white',
        borderColor: '#ACBBC3',
        color: '#ACBBC3',
    },
    pickerContainerRaca: {
        borderRadius: 10,
        overflow: 'hidden',
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: '#ACBBC3',
        color: '#ACBBC3',
        height: 56,
        width: '100%',
    },
    pickerRaca: {
        
        height: 56,
        color: '#ACBBC3',
        padding: 16,
        fontSize: 16,

    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#41C4E5',
        width: '100%',
        padding: 10,
        borderRadius: 16,
        height: 51,
        fontSize: '16px',
        marginTop: 80,
        color: 'white',
    },
    buttonText:{
        color: 'white',
    }


});

