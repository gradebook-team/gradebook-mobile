import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    absoluteContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        position: "absolute",
        top: 0,
        left: 0
    },
    inputField: {
        borderRadius: 6,
        backgroundColor: "#527aff",
        width: 200,
        color: "white",
        fontFamily: "sofia pro medium",
        paddingLeft: 20,
        marginTop: 20
    },
    loginButton: {
        marginTop: 20,
        borderRadius: 8,
        paddingTop: 20,
        paddingBottom: 20
    },
    gradeCard: {

    }
});

export default styles;