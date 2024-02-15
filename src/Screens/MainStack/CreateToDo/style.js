import { StyleSheet } from "react-native";
import { colors, fontSize, radius } from "../../../Constants";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.white
    },
    head: {
        color: colors.black,
        alignSelf: 'center',
        fontSize: fontSize.fontSize6,
        fontWeight: '500',
        paddingVertical: hp(5),
        textAlign: 'center',
    },
    labels: {
        fontSize: fontSize.small,
        color: colors.black,
        marginVertical: hp(1),
        paddingHorizontal: wp(5),
        paddingVertical:hp(1)
    },
    btnTextCreate: {
        fontWeight: '500',
        textAlign: "center",
        justifyContent: 'center',
        fontSize: fontSize.fontSize4,
        color: colors.white,
    },
    btnCreate: {
        paddingVertical: hp(1.5),
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: colors.purple,
        width: wp(60),
        borderRadius: radius.radius1,
        marginVertical: hp(3)
    },
    descpField:{
        justifyContent: 'center',
        textAlign: 'left',
        textAlignVertical:'top',
        borderWidth: wp(0.2),
        width: wp(90),
        alignSelf: 'center',
        paddingHorizontal: wp(5),
        borderRadius: radius.radius2,
        fontSize:fontSize.fontSize3point5,
        height:hp(15),
        paddingVertical:hp(1.5),
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
