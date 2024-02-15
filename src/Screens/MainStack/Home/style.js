import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { colors, fontSize, radius } from "../../../Constants";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.white,
    },
    head: {
        color: colors.black,
        alignSelf: 'center',
        fontSize: fontSize.fontSize6,
        fontWeight: '500',
        paddingVertical: hp(5),
        textAlign: 'center',
    },
    listText: {
        color: colors.primaryColor,
        alignSelf: 'flex-start',
        fontSize: fontSize.fontSize4point5,
        paddingHorizontal: wp(5),
        fontWeight: '500',
        paddingVertical: hp(2),
        textAlign: 'center',
    },
    upcomingView: {
        height: hp(50),
        justifyContent: 'center',
    },
    upcomingTodo: {
        alignSelf: 'center',
        fontSize: fontSize.fontSize5,
        color: colors.primaryColor,
        fontWeight: '700'
    },
    btnTextTodo: {
        fontWeight: '600',
        textAlign: "center",
        justifyContent: 'center',
        fontSize: fontSize.fontSize4,
        color: colors.white,
    },
    btnTodo: {
        paddingVertical: hp(1.5),
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: colors.primaryColor,
        width: wp(90),
        borderRadius: radius.radius1,
    },
    btnTextLogout: {
        fontWeight: '800',
        textAlign: "center",
        justifyContent: 'center',
        fontSize: fontSize.fontSize4,
        color: colors.primaryColor,
    },
    btnLogout: {
        paddingVertical: hp(1.5),
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: colors.white,
        width: wp(90),
        borderRadius: radius.radius1,
        marginVertical: hp(2),
        elevation: 10,
    },
    ActivityIndicatorView:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    placeholderTextColor: colors.black,
})