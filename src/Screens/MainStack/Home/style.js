import { StyleSheet } from "react-native";
import { colors, fontSize, radius } from "../../../Constants";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

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

    flatListItem: {
        flexDirection: 'row',
        justifyContent:'space-around',
        borderBottomColor:colors.black,
        borderBottomWidth:wp(0.2),
        paddingHorizontal:wp(1.5),
    },

    flatListDataView: {
        marginVertical: hp(1),
        paddingHorizontal:wp(0.5),
        // backgroundColor:'green',
    },
    titleDescpView: {
        width:wp(75),
        marginVertical: hp(1),
        paddingHorizontal:wp(0.5),
        // backgroundColor:'red',
    },
    flatListTitle:{
        fontSize: fontSize.fontSize4,
        color: colors.primaryColor,
        textAlign: 'left',
        paddingHorizontal: wp(4),
        marginVertical: hp(1),
        fontWeight:'500'
    },
    flatListDescription:{
        fontSize: fontSize.fontSize4,
        color: colors.black,
        textAlign: 'left',
        paddingHorizontal: wp(4),
        marginVertical: hp(1)
    },
    upcomingView:{
        height:hp(50),
        justifyContent:'center',
        // backgroundColor:'red'
    },
    upcomingTodo:{
        alignSelf:'center',
        fontSize:fontSize.fontSize5,
        color:colors.primaryColor,
        fontWeight:'700'
    },
    deleteBtn: {
        backgroundColor: colors.red,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
        borderRadius: radius.radius3,
        height:hp(5),
        width:wp(20),
        padding:5,
    },
    deleteText: {
        textAlign: 'center',
        fontWeight:'500',
        color: colors.white,
        fontSize:fontSize.fontSize3point5
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
        width: wp(60),
        borderRadius: radius.radius1,
        marginVertical: hp(1)
    },
    btnTextLogout: {
        fontWeight: '400',
        textAlign: "center",
        fontSize: fontSize.fontSize4point5,
        color: colors.white,
    },
    btnLogout:{
        alignSelf: 'center',
        backgroundColor: colors.black,
        paddingVertical: hp(1.5),
        marginVertical:hp(2),
        width: wp(30),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: radius.radius3
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