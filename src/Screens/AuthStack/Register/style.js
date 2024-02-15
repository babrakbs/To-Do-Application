import { StyleSheet } from "react-native";
import { colors, radius, fontSize } from "../../../Constants";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.white
    },
    customBottomTitleStyles:{
        color: colors.primaryColor,
        fontWeight:'600',
        fontSize: fontSize.fontSize4point5,
        textAlign: 'center',
        justifyContent: 'center'
    },
    labels: {
        fontSize: fontSize.small,
        color: colors.black,
        marginVertical: hp(2),
        paddingHorizontal: wp(5),
        fontWeight:'500'
    },
    loginBtn: {
        alignSelf: 'center',
        backgroundColor: colors.purple,
        paddingVertical: hp(2),
        marginTop: hp(2),
        width: wp(20),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: radius.radius3
    },
    signUpBtnText:{
        fontSize: fontSize.fontSize4,
        color: colors.white,
        textAlign: 'center',
        fontWeight:'500'
    },
    alreadyText: {
        fontSize: fontSize.fontSize3point5,
        alignSelf: 'center',
        marginVertical:hp(2)
    },
    signUpText: {
        color: colors.purple,
        fontWeight: '700',
        fontSize: fontSize.fontSize3point7,

    },
    error: {
        fontSize: fontSize.avgSmall,
        color: colors.red,
        marginTop: hp(1),
        paddingHorizontal: wp(5),
    },
    modalBackground: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: "center",
        justifyContent: "center",
    },
    modalContainer: {
        justifyContent: "center",
        alignSelf: "center",
    },
})
