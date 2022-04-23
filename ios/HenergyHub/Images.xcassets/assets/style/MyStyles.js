import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const windowWidth = Dimensions.get('window').width;

export const MyStyles = StyleSheet.create({

    // Containers

    root: {
        alignItems: 'center',
        padding: 20,
        flexDirection: 'column',
        backgroundColor: '#eee',
        flex: 1
    },

    container: {
        flexDirection: 'column',
        backgroundColor: '#eee',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        flex: 1
    },

    container1: {
        flexDirection: 'column',
        backgroundColor: '#023047',
        flex: 1
    },

    textcontainer: {
        textAlign: 'center',
        paddingTop: 10,
    },

    containerTitle: {
        marginTop: 10,
        paddingBottom: 7,
        paddingLeft: 20,
    },

    containerText: {
        marginTop: 10,
        paddingBottom: 7,
        paddingLeft: 20,
        backgroundColor: '#eee',
    },

    carouselContainer: {
        justifyContent: 'center',
        padding: 20,
        borderRadius: 10
    },

    containerPicker: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        padding: 10,
        paddingLeft: 20,
    },

    inputContainer: {
        margin: 10,

        borderColor: '#808080',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,

        paddingHorizontal: 10,
        marginVertical: 10,
    },

    containerSubs: {
        backgroundColor: '#eee',
        width: (windowWidth - 30),
        padding: 15,
        margin: 15,
        alignItems: 'center',
        borderRadius: 15,
        marginTop: 30,

    },

    barChart: {
        justifyContent: 'center',
        paddingLeft: 20,
        marginRight: 30,
    },


    // Texts

    title: {
        fontFamily: 'Oswald-Bold',
        fontSize: RFValue(26, 844),
        letterSpacing: 0.75,

        margin: 3,
        textAlign: 'center',

        color: '#023047'
    },

    titleGray: {
        fontFamily: 'Oswald-Bold',
        fontSize: RFValue(26, 844),
        letterSpacing: 0.75,

        paddingTop: 10,
        margin: 3,
        textAlign: 'center',

        color: '#eee'
    },

    subtitle: {
        fontFamily: 'Oswald-Regular',
        fontSize: RFValue(21, 844),
        letterSpacing: 0.75,

        paddingLeft: 20,
        margin: 5,
        alignContent: 'flex-end',

        color: '#023047',
    },

    subtitleGray: {
        fontFamily: 'Oswald-Regular',
        fontSize: RFValue(21, 844),
        letterSpacing: 0.75,

        paddingTop: 20,
        paddingLeft: 20,
        paddingBottom: 10,
        margin: 5,
        alignContent: 'flex-end',

        color: '#eee',
    },

    subtitleSmall: {
        fontFamily: 'Oswald-Regular',
        fontSize: RFValue(18, 844),
        letterSpacing: 0.75,

        margin: 5,
        paddingBottom: 10,
        paddingRight: 10,
        alignSelf: 'center',
        marginTop: 10,
        alignContent: 'stretch',

        color: '#023047',
    },

    content: {
        fontFamily: 'Oswald-Light',
        letterSpacing: 0.75,

        marginTop: 10,

        color: '#eee',
    },

    contentPurple: {
        fontFamily: 'Oswald-Light',
        letterSpacing: 0.75,

        marginTop: 10,

        color: '#023047',
    },

    text: {
        fontFamily: 'Oswald-Bold',
        fontSize: RFValue(25, 844),
        letterSpacing: 0.75,

        paddingTop: 5,
        margin: 5,
        marginBottom: 8,
        textAlign: 'left',

        color: '#023047',
    },

    textSmall: {
        fontFamily: 'Oswald-Regular',
        fontSize: RFValue(18, 844),
        letterSpacing: 0.6,

        paddingTop: 5,
        margin: 5,
        marginBottom: 8,
        textAlign: 'center',

        color: '#023047',
    },

    textGray: {
        fontFamily: 'Oswald-Bold',
        fontSize: RFValue(23, 844),
        letterSpacing: 0.75,

        paddingTop: 5,
        margin: 5,
        marginBottom: 8,
        textAlign: 'center',

        color: '#eee',
    },

    textTermosUso: {
        fontFamily: 'Oswald-Regular',
        letterSpacing: 0.70,

        marginVertical: 10,
        padding: 20,

        color: '#333',
    },

    descriptionInput: {
        fontFamily: 'Oswald-Bold',
        fontSize: RFValue(17, 844),
        letterSpacing: 0.75,

        marginLeft: 15,
        alignSelf: 'flex-start',
        alignItems: 'center',

        color: '#333',
    },

    link: {
        color: '#FDB075'
    },

    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        fontSize: RFValue(12, 844),

        marginBottom: 10,
        paddingLeft: 15,
    },

    descriptionInputPicker: {
        fontFamily: 'Oswald-Bold',
        fontSize: RFValue(17, 844),
        letterSpacing: 0.75,

        color: '#333',
    },

    // Outros

    logo: {
        width: '80%',
        maxWidth: 400,
        maxHeight: 200,
        paddingTop: 50
    },
    button: {
        width: 180,
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 16,
    },
    header: {
        width: windowWidth,
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        position: 'absolute',
        left: 10,
        width: 20,
        height: 30
    }
})