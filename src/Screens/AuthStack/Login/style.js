import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { colors, fontSize, radius } from "../../../Constants";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent:'center'
    },
    customBottomTitleStyles:{
        color: colors.primaryColor,
        fontWeight:'600',
        fontSize: fontSize.fontSize5,
        textAlign: 'center',
        justifyContent: 'center'
    },
    labels: {
        fontSize: fontSize.fontSize3point7,
        color: colors.black,
        marginVertical: hp(0.5),
        paddingHorizontal: wp(5),
        marginTop: hp(2),
        marginBottom:hp(1),
        fontWeight: '500'
    },
    loginText: {
        fontWeight: '500',
        textAlign: "center",
        justifyContent: 'center',
        fontSize: fontSize.fontSize4,
        color: colors.white,
    },
    btn: {
        paddingVertical: hp(1.5),
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: colors.purple,
        width: wp(90),
        borderRadius: radius.radius1,
        marginVertical: hp(2.5)
    },
    alreadyText: {
        fontSize: fontSize.fontSize4,
        alignSelf: 'center',
        marginVertical: hp(2)
    },
    signUpText: {
        color: colors.purple,
        fontWeight: '700',
        fontSize: fontSize.fontSize4point2,
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
