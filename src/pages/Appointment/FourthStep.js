import React, { useContext } from 'react';
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    Image,
    TouchableOpacity,
    ScrollView,
    TouchableWithoutFeedback,
} from 'react-native';
import { AuthContext } from '../../../context/auth'
import PetWrapper from '../../components/PetWrapper'
import { useNavigation } from '@react-navigation/native';
import routes from '../../routes';
import { AppointmentContext } from '../../../context/appoiment';
import { REGISTER_PET_FLOW } from '../../../constants/appointment';
import DogtorView from '../../components/DogtorView';

export default function FourthStep() {
    const { user } = useContext(AuthContext)
    const { setFlow, setPet } = useContext(AppointmentContext)
    const navigate = useNavigation().navigate

    function goNext() {
        if (user.pets.length > 0) {
            navigate(routes.FLUXO_AGENDAMENTO_5)
        } else {
            setFlow(REGISTER_PET_FLOW)
            navigate(routes.FLUXO_CADASTRO_PET_1)
        }
    }

    return (
        <DogtorView>
            <SafeAreaView style={styles.safeAreaView}>
                <ScrollView>
                    <View style={styles.blueBar}></View>
                    <View style={styles.navBar}>
                        <TouchableOpacity onPress={() => navigate(routes.FLUXO_AGENDAMENTO_2)}><Image source={require('../../assets/images/back.png')} /></TouchableOpacity>
                        <TouchableOpacity onPress={() => navigate(routes.TELA_MENU)}><Image source={require('../../assets/images/cancel.png')} /></TouchableOpacity>
                    </View>
                    <View style={styles.dogNoExiste}>
                        <Text style={styles.subtitle}>
                            Escolha o pet que irá para a consulta
                        </Text>
                        <Text style={styles.descriptionColor}>
                            Clique em uma das imagens abaixo para selecionar
                        </Text>
                    </View>
                    <View style={styles.petExists}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            {
                                user.pets.length > 0
                                    ?
                                    user?.pets?.map((pet) => (
                                        <TouchableWithoutFeedback key={pet.id} onPress={() => {
                                            setPet(pet)
                                        }}>
                                            <PetWrapper pet={pet} key={pet.id} in_appointment_flow={true}></PetWrapper>
                                        </TouchableWithoutFeedback>
                                    ))
                                    : <NoPetsButton />
                            }
                        </ScrollView>
                    </View>
                    <TouchableOpacity style={styles.btnProcurarAtendimento} onPress={goNext}>
                        {
                            user.pets.length > 0
                                ? <Text style={styles.btnProcurarAtendimentoText}>Continuar</Text>
                                : <Text style={styles.btnProcurarAtendimentoText}>Cadastrar Pet</Text>
                        }
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </DogtorView>
    );
}


const NoPetsButton = () => {
    return (
        <View>
            <View style={styles.petDoesNotExists}>
                <Image style={styles.petDoesNotExistsImage} source={require('../../assets/images/DogNoExiste.png')} />
                <Text style={styles.petDoesNotExistsTitle}>Ops, você ainda não tem nenhum pet cadastrado</Text>
                <Text style={styles.petDoesNotExistsSubtitle}>Para continuar, você precisa cadastrar um pet</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1
    },
    petExists: {
        flex: 1,
        alignItems: 'flex-start',
        marginBottom: 32,
        marginTop: 8,
        marginLeft: 20,
        flexDirection: "row",
    },
    petDoesNotExists: {
        flex: 1,
        alignItems: 'center',
        textAlign: 'center',
        margin: 40,
    },
    petDoesNotExistsImage: {
        height: 275,
        width: 285,
    },
    petDoesNotExistsTitle: {
        marginTop: 20,
        fontSize: 14,
        fontWeight: "bold",
        color: "black",
    },
    petDoesNotExistsSubtitle: {
        fontSize: 12,
        color: "#ACBBC3",
        maxWidth: "75%",
        textAlign: "center",
        margin: 5,
    },
    blueBar: {
        backgroundColor: '#41C4E5',
        width: 290,
        height: 14
    },
    petExists: {
        flex: 1,
        alignItems: 'flex-start',
        marginBottom: 32,
        marginTop: 8,
        marginLeft: 20,
        flexDirection: "row",
    },
    petDoesNotExists: {
        flex: 1,
        alignItems: 'center',
        textAlign: 'center',
        margin: 40,
    },
    petDoesNotExistsImage: {
        height: 275,
        width: 285,
    },
    petDoesNotExistsTitle: {
        marginTop: 20,
        fontSize: 14,
        fontWeight: "bold",
        color: "black",
    },
    petDoesNotExistsSubtitle: {
        fontSize: 12,
        color: "#ACBBC3",
        maxWidth: "75%",
        textAlign: "center",
        margin: 5,
    },
    blueBar: {
        backgroundColor:
            '#41C4E5',
        width: 290,
        height: 14
    },
    navBar: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },
    descriptionColor: {
        marginTop: 8,
        color: '#ACBBC3',
    },
    subtitle: {
        color: 'black',
        fontSize: 16,
        fontWeight: '700',
        marginLeft: 17,
        marginTop: 20,
    },
    dogNoExiste: {
        flex: 1,
        alignItems: 'center',
        margin: 40,
        marginBottom: 70,
    },
    btnProcurarAtendimento: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        alignSelf: 'center',
        width: 328,
        height: 66,
        marginTop: 70,
        borderRadius: 11,
        backgroundColor: '#41C4E5',
    },
    btnProcurarAtendimentoText: {
        color: '#FFFFFF',
    },
});