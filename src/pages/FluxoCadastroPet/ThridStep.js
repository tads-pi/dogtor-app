import React, { useEffect, useState } from "react";
import { AppointmentContext } from "../../../context/appoiment";
import { AuthContext } from "../../../context/auth";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DogtorView from "../../components/DogtorView";
import * as colors from "../../constants/colors";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import routes from "../../routes";
import { DEFAULT_FLOW } from "../../../constants/appointment";
import AppLoading from "../../components/AppLoading";
import { generateImage } from "../../utils/openai";
import { SHOULD_USE_AI } from '@env';

export default function PetThirdStep() {
    const defaultImageComponent = <Image style={styles.image} source={require("../../assets/images/adicionar.png")} />
    const [image, setImage] = useState(defaultImageComponent)
    const [alreadyUsedAI, setUsedAI] = useState(false)

    const [imageUrl, setImageUrl] = useState("")

    const { appointment } = useContext(AppointmentContext)
    const { inRegisterPet } = useContext(AuthContext)
    const { flow } = appointment
    const { name, race, breed } = inRegisterPet

    const { addPet } = useContext(AuthContext)
    const navigate = useNavigation().navigate

    function goNext() {
        addPet(
            () => {
                return {
                    uri: imageUrl
                }
            },
            () => {
                return {
                    uri: imageUrl
                }
            },
        )

        if (flow == DEFAULT_FLOW) {
            navigate(routes.TELA_MENU)
        } else {
            navigate(routes.FLUXO_AGENDAMENTO_4)
        }
    }

    const shouldDisableGoNext = image?.props?.source === defaultImageComponent.props.source || imageUrl === ""
    return (
        <DogtorView goNext={goNext} goNextTitle="Adicionar" hide_go_next={shouldDisableGoNext}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    Foto do Pet
                </Text>

                <Text style={styles.subTitle}>
                    Vamos criar uma linda montagem para o seu pet, não se preocupe!
                </Text>
            </View>

            <TouchableOpacity
                style={styles.imageWrapper}
                onPress={() => {
                    if (alreadyUsedAI) {
                        return
                    }

                    setImage(<AppLoading />)
                    setTimeout(async () => {
                        try {
                            console.log("SHOULD_USE_AI: ", SHOULD_USE_AI);
                            if (SHOULD_USE_AI === "true") {
                                const url = await generateImage(`a beautiful ${breed} ${race} named ${name} in an colorful photo studio`)
                                setImage(<Image style={styles.userPhotoImage} source={{ uri: url }} />)
                                setImageUrl(url)
                                console.log("generated image url: ", url);
                                setUsedAI(true)
                            } else {
                                setImage(<Image style={styles.userPhotoImage} source={require("../../assets/images/pets/thor_pp.png")} />)
                                setImageUrl("https://s3.sa-east-1.amazonaws.com/kauacalixtolab.xyz/dogtor_images/thor_pp.png")
                            }
                        } catch (error) {
                            setImage(<Image style={styles.userPhotoImage} source={require("../../assets/images/pets/thor_pp.png")} />)
                            setImageUrl("https://s3.sa-east-1.amazonaws.com/kauacalixtolab.xyz/dogtor_images/thor_pp.png")
                        }
                    }, 100);
                }}
            >
                {image}
            </TouchableOpacity>

        </DogtorView>
    );
};
const styles = StyleSheet.create({
    header: {
        width: "100%",
        alignItems: "center",
        padding: 16,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        // marginTop: 30,
    },
    subTitle: {
        color: colors.DOGTOR_DARK_GRAY,
        fontSize: 16,
        marginTop: 10,
        justifyContent: "center",
        textAlign: 'center'
    },
    imageWrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        resizeMode: "contain",
    },
    userPhotoImage: {
        resizeMode: "contain",
        width: 300,
        height: 300,
    }
})

