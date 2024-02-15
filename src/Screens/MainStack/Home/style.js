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
        color: colors.purple,
        alignSelf: 'flex-start',
        fontSize: fontSize.fontSize4point5,
        paddingHorizontal: wp(5),
        fontWeight: '500',
        paddingVertical: hp(2),
        textAlign: 'center',
    },
    flatListItemView: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-around',
        borderColor: colors.black,
        width: wp(90),
        alignSelf: 'center',
        height: hp(8.5),
        marginVertical: hp(1.5),
        elevation: 10,
        backgroundColor:colors.white,
        borderRadius: radius.radius1,
        paddingHorizontal:wp(1)
    },
    titleDescpView: {
        width: wp(70),
        height: hp(8),
        justifyContent: 'space-evenly',
        alignItems:'flex-start',
        paddingHorizontal: wp(5),
    },
    flatListTitle: {
        fontSize: fontSize.fontSize4point2,
        color: colors.primaryColor,
        textAlign: 'left',
        fontWeight: '700'
    },
    flatListDescription: {
        fontSize: fontSize.fontSize4,
        color: colors.gray,
        textAlign: 'left',
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
    deleteView:{
        height:hp(8),
        width:wp(30),
        justifyContent:'center',
        alignItems:'center'
    },
    deleteBtn: {
        backgroundColor: colors.red,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: radius.radius1,
        height: hp(4),
        width: wp(17),
    },
    deleteText: {
        textAlign: 'center',
        fontWeight: '700',
        color: colors.white,
        fontSize: fontSize.fontSize3point5
    },
    btnTextTodo: {
        fontWeight: '500',
        textAlign: "center",
        justifyContent: 'center',
        fontSize: fontSize.fontSize4,
        color: colors.white,
    },
    btnTodo: {
        paddingVertical: hp(1.5),
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: colors.purple,
        width: wp(90),
        borderRadius: radius.radius1,
    },
    btnTextLogout: {
        fontWeight: '500',
        textAlign: "center",
        justifyContent: 'center',
        fontSize: fontSize.fontSize4,
        color: colors.purple,
    },
    btnLogout: {
        paddingVertical: hp(1.5),
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: colors.white,
        width: wp(90),
        borderRadius: radius.radius1,
        marginVertical: hp(2),
        elevation:10,
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
    placeholderTextColor: colors.black,
})