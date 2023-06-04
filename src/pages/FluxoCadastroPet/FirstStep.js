import React, { useState } from 'react';
// import { Picker } from '@react-native-picker/picker';
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    //   Dimensions,
    TouchableOpacity,
    handleSubmit,
    Image,
} from 'react-native';
import DogtorView from '../../components/DogtorView';
import { SelectList } from 'react-native-dropdown-select-list'
import * as colors from "../../constants/colors"

// import { TextInputMask } from 'react-native-masked-text';

// const screenWidth = Dimensions.get('window').width;
// const screenHeight = Dimensions.get('window').height;

// import RNPickerSelect from 'react-native-picker-select';

// array de raças e espécies

const especies = [
    { id: 1, nome: 'Cachorro' },
    { id: 2, nome: 'Gato' },
    { id: 3, nome: 'Pássaro' },
];

const racas = {
    1: [
        { id: 1, nome: 'Labrador' },
        { id: 2, nome: 'Yorkshire' },
        { id: 3, nome: 'Chihuahua' },
        { id: 4, nome: 'Golden' },
        { id: 5, nome: 'Pastor Alemão' },
    ],
    2: [
        { id: 1, nome: 'Siames' },
        { id: 2, nome: 'Selvagem' },
        { id: 3, nome: 'Angorá' },
        { id: 4, nome: 'Ragdoll' },
        { id: 5, nome: 'Persa' },
    ],
    3: [
        { id: 1, nome: 'Arara' },
        { id: 2, nome: 'Calopsita' },
        { id: 3, nome: 'Canário' },
        { id: 4, nome: 'Beija-flor' },
        { id: 5, nome: 'Papagaio' },
    ],
};

export default function PetFirst() {
    const [selectedValue, setSelectedValue] = useState('java');
    const [selectedRacaValue, setSelectedRacaValue] = useState('java');
    const goNext = () => {
        // Lógica a ser executada ao pressionar o botão "Confirmar"
        console.log("Botão 'Confirmar' pressionado!");
    };

    const handleVoltarPress = () => {
        console.log('Voltar');
    };

    // especies e raças

    const [especieSelecionada, setEspecieSelecionada] = useState(null);
    const [racaSelecionada, setRacaSelecionada] = useState(null);

    const handleEspecieChange = (especie) => {
        setEspecieSelecionada(especie);
        setRacaSelecionada(null);
        console.log(especie);
    };

    const handleRacaChange = (raca) => {
        setRacaSelecionada(raca);
    };

    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');

    const [selected, setSelected] = useState("");
    const data = [
        { key: '1', value: 'Mobiles', disabled: true },
        { key: '2', value: 'Appliances' },
        { key: '3', value: 'Cameras' },
        { key: '4', value: 'Computers', disabled: true },
        { key: '5', value: 'Vegetables' },
        { key: '6', value: 'Diary Products' },
        { key: '7', value: 'Drinks' },
    ]

    return (
        <DogtorView component_style={styles.container} goNext={goNext}>
            {/* <View style={styles.navBar}>
        <TouchableOpacity onPress={handleVoltarPress}>
          <Image />
        </TouchableOpacity>
      </View> */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Informações do Pet</Text>
            </View>


            <View style={styles.body}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do pet"
                    placeholderTextColor={colors.DOGTOR_GRAY}
                    keyboardType="name-phone-pad"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Idade"
                    placeholderTextColor={colors.DOGTOR_GRAY}
                    keyboardType="numeric"
                />

                <View style={styles.wrapper}>
                    <TextInput
                        style={styles.inputInWrapper}
                        placeholder="Peso (kg)"
                        placeholderTextColor={colors.DOGTOR_GRAY}
                        keyboardType="numeric"
                        type="money"
                        value={peso}
                        onChangeText={(maskedValue, rawValue) => setPeso(rawValue)}
                    />
                    <TextInput
                        style={styles.inputInWrapper}
                        placeholder="Altura (m)"
                        placeholderTextColor={colors.DOGTOR_GRAY}
                        keyboardType="numeric"
                        type="money"
                    />
                </View>

                <View style={styles.pickerContainer}>
                    <View style={styles.pickerWrapper}>
                        <SelectList
                            style={styles.picker}
                            boxStyles={styles.pickerBoxStyles}
                            dropdownStyles={styles.pickerBoxStyles}
                            setSelected={(val) => setSelected(val)}
                            data={data}
                            save="value"
                        />
                    </View>
                </View>
            </View>
        </DogtorView>
    );
}

const pickerStyle = {
    inputIOS: {
        color: 'black',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // paddingLeft: 10,
        fontSize: 16,
    },
    placeholderColor: 'white',
    underline: { borderTopWidth: 0 },

    icon: {
        position: 'absolute',
        backgroundColor: 'transparent',
        borderTopWidth: 5,
        borderTopColor: '#00000099',
        borderRightWidth: 5,
        borderRightColor: 'transparent',
        borderLeftWidth: 5,
        borderLeftColor: 'transparent',
        width: 0,
        height: 0,
        top: 20,
        right: 15,
    },
};

const styles = StyleSheet.create({
    container: {
        borderColor: "red",
        borderWidth: 1,
    },
    header: {
        alignItems: "center",

        borderColor: "green",
        borderWidth: 1,
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    wrapper: {
        flexDirection: "row",

        borderColor: "purple",
        borderWidth: 1,
    },
    body: {
        flex: 1,
        flexDirection: 'column',
        // justifyContent: 'space-between',

        borderColor: "red",
        borderWidth: 1,
    },
    input: {
        borderWidth: 1,
        // width: '100%',
        padding: 16,
        margin: 12,
        backgroundColor: 'white',
        borderRadius: 12,
        borderColor: colors.DOGTOR_GRAY,
        fontSize: 16,
    },
    inputInWrapper: {
        flex: 1,
        borderWidth: 1,
        padding: 16,
        margin: 12,
        borderRadius: 12,
        backgroundColor: colors.DOGTOR_WHITE,
        borderColor: colors.DOGTOR_GRAY,
        fontSize: 16,
    },
    pickerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,

        borderColor: "blue",
        borderWidth: 1,
    },
    pickerWrapper: {
        width: "100%",
        fontSize: 16,
    },
    picker: {
        flex: 1,
        // backgroundColor: colors.DOGTOR_WHITE

    },
    pickerBoxStyles: {
        borderColor: colors.DOGTOR_GRAY,
        backgroundColor: colors.DOGTOR_WHITE
    },
    pickerDropdownStyle: {
        borderColor: colors.DOGTOR_GRAY,
        backgroundColor: colors.DOGTOR_WHITE
    },





    itemStylePicker: {
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: 'white',
        borderColor: '#ACBBC3',
        color: '#ACBBC3',
    },

    newPicker: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        borderColor: '#ACBBC3',
        color: '#ACBBC3',
        // padding: 16,
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
        // padding: 16,
        fontSize: 16,
    },
});
