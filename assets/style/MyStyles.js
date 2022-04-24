import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const windowWidth = Dimensions.get('window').width;

export const MyStyles = StyleSheet.create({

    // Containers

    root: {
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'column',
        backgroundColor: '#eee',
        flex: 1
    },

    home_text: {
        fontFamily: 'Oswald-Bold',
        fontSize: RFValue(26, 844),
        letterSpacing: 0.75,

        textAlign: 'center',
        backgroundColor: 'black',
        borderBottomLeftRadius: (windowWidth - 80),
        borderBottomRightRadius: (windowWidth - 80) ,

        color: 'white',
        padding: 40, 
        width: (windowWidth),
        height: 150
    },

    container: {
        flexDirection: 'column',
        backgroundColor: '#eee',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        flex: 1
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


    barChart: {
        justifyContent: 'center',
        //paddingLeft: 20,
        margin: 15,
        backgroundColor: 'white',
        borderRadius: 15,
    },


    // Texts

    title: {
        fontSize: RFValue(26, 844),
        letterSpacing: 0.75,
        fontWeight: '700',
        margin: 15,
        textAlign: 'center',
        padding: 10,
        color: '#000',
        borderTopWidth: 3,
        borderBottomWidth: 3,
    },

    title1: {
        fontSize: RFValue(26, 844),
        letterSpacing: 0.75,
        fontWeight: '700',
        margin: 15,
        textAlign: 'center',
        padding: 10,
        color: '#000',
    },

    contentPurple: {
        letterSpacing: 0.75,
        fontWeight: '700',
        marginTop: 20,

        color: '#000',
    },

    content: {
        letterSpacing: 0.75,
        fontWeight: '500',
        marginTop: 10,

        color: '#000',
    },

    textGray: {
        fontSize: RFValue(26, 844),
        letterSpacing: 0.75,
        fontWeight: '500',
        textAlign: 'center',
        color: 'white'
    },

    text: {
        fontSize: RFValue(25, 844),
        letterSpacing: 0.75,
        fontWeight:'800',

        paddingTop: 5,
        margin: 5,
        marginBottom: 30,
        textAlign: 'center',

        color: '#000',
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