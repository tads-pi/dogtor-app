import React, { useContext, useEffect } from 'react';
import { AppointmentContext } from '../../../context/appoiment';
import { AuthContext } from '../../../context/auth';
import AppointmentHeader from './Header';
import DogtorView from '../../components/DogtorView';
import GoNext from '../../components/GoNext';
import { Image, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { REGISTER_PET_FLOW } from '../../../constants/appointment';
import * as colors from "../../constants/colors";
import PetWrapper from '../../components/PetWrapper';
import routes from '../../routes';
import { useNavigation } from '@react-navigation/native';

export default function FourthStep() {
    const { user } = useContext(AuthContext)
    const { setFlow, setPet, appointment } = useContext(AppointmentContext)
    const { pet } = appointment

    const navigate = useNavigation().navigate

    function goNext() {
        navigate(routes.FLUXO_AGENDAMENTO_5)
    }

    useEffect(() => {
        if ((user?.pets || []).length == 1) {
            setPet(user.pets[0])
            goNext()
        }
    }, [])

    const havePets = (user?.pets || []).length > 0
    const noPetSelected = Object.keys(pet || {}).length <= 0
    return (
        <DogtorView goNext={goNext} disableGoNext={havePets && noPetSelected} hide_go_next={!havePets} absolute_navigators={true}>
            <AppointmentHeader step={3} />

            <View style={styles.header}>
                <Text style={styles.subtitle}>
                    Escolha o pet que irá para a consulta
                </Text>
                <Text style={styles.descriptionColor}>
                    Clique em uma das imagens abaixo para selecionar
                </Text>
            </View>

            <View style={styles.petExists}>
                {
                    (user?.pets || []).length > 0
                        ? <ScrollView
                            style={styles.pets_scroll_view}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            {
                                user?.pets?.map((pet) => (
                                    <TouchableWithoutFeedback key={pet.id} onPress={() => {
                                        setPet(pet)
                                    }}>
                                        <PetWrapper pet={pet} key={pet.id} in_appointment_flow={true}></PetWrapper>
                                    </TouchableWithoutFeedback>
                                ))
                            }
                        </ScrollView>

                        : <NoPetsButton setFlow={setFlow} navigate={navigate} />
                }
            </View>
        </DogtorView>
    );
}


const NoPetsButton = (props) => {
    const { setFlow, navigate } = props

    function goNext() {
        setFlow(REGISTER_PET_FLOW)
        navigate(routes.FLUXO_CADASTRO_PET_1)
    }

    return (
        <View style={styles.no_pets}>
            <Image style={styles.no_pets_image} source={require('../../assets/images/DogNoExiste.png')} />
            <View style={styles.no_pets_text_wrapper}>
                <Text style={styles.no_pets_title}>Ops, você ainda não tem nenhum pet cadastrado</Text>
                <Text style={styles.no_pets_sub}>Para continuar, você precisa cadastrar um pet</Text>
            </View>
            <GoNext title="Cadastrar pet" onPress={goNext} />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        marginTop: 32,
    },
    petExists: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",

        // borderColor: "red",
        // borderWidth: 1,
    },
    pets_scroll_view: {
        paddingLeft: 16,
        // borderColor: "blue",
        // borderWidth: 1,
    },
    no_pets: {
        flex: 1,
        alignItems: 'center',
    },
    no_pets_image: {
        width: "100%",
    },
    no_pets_text_wrapper: {
        margin: 16,
    },
    no_pets_title: {
        fontSize: 14,
        fontWeight: "bold",
        textAlign: 'center',
    },
    no_pets_sub: {
        fontSize: 12,
        color: colors.DOGTOR_GRAY,
        maxWidth: "75%",
        alignSelf: "center",
        textAlign: "center",
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 16,
    },
    descriptionColor: {
        margin: 8,
        color: '#ACBBC3',
        textAlign: 'center',
    },
    subtitle: {
        color: 'black',
        fontSize: 16,
        fontWeight: '700',
        marginTop: 20,
    },
});