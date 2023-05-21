import { Image, Text, View, StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get('window').width;

export default function DogtorMapCallout(props) {
    const name = props.name;
    const address = `${props.street}, ${props.number}`;
    const getImage = props.image;

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={getImage()} />
            <View style={styles.information}>
                <Text style={styles.title}>{name}</Text>
                <View style={styles.address}>
                    <Image style={styles.icon} source={require("../../../../assets/images/empty_pin.png")} />
                    <Text style={styles.subTitle}>{address}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
    },
    information: {
        flexDirection: "column",
        padding: 8,
    },
    address: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 10,
    },
    image: {
        width: 300,
        height: 125,
    },
    icon: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 14,
        fontWeight: "bold",
        color: "black"
    },
    subTitle: {
        fontSize: 14,
        color: "#ACBBC3"
    }
})
