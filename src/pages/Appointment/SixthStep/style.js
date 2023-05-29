import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 8,
  },

  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },

  boxTitle: {
    alignItems: "center",
    justifyContent: "center",
  },

  textTitle: {
    color: "#000000",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },

  boxTitle1: {
    alignItems: "center",
    alignSelf: "center",
    paddingTop: 8,
    maxWidth: "100%",
  },
  textTitle1: {
    color: "#ACBBC3",
    fontSize: 18,
    textAlign: "center",
  },
  qrcodeWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  qrcode: {
  },
  boxTitle2: {
    alignItems: "center",
    justifyContent: "center",
    padding: 32,
  },

  textTitle2: {
    color: "#ACBBC3",
    fontSize: 18,
  },

  buttonCopy: {
    flexDirection: 'row',
    borderRadius: 8,
    width: "90%",
    backgroundColor: "#FFFFF",
    borderWidth: 1,
    padding: 4,
    margin: 16,
  },

  textButtonCopy: {
    color: "#000000",
    fontSize: 8,
    textAlign: "left",
  },

  buttonConfirm: {
    borderRadius: 25,
    alignItems: "center",
    alignSelf: "center",
    width: "90%",
    backgroundColor: "#41C4E5",
    padding: 20,
  },

  textButtonConfirm: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles