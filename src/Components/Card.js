import { StyleSheet, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Text from '../Components/Text';
import { colors, fontSize, radius } from "../Constants";
import Button from './Button';
const Card = (props) => {
    return (
        <TouchableOpacity style={styles.flatListItemView} onPress={props?.cardPress}>
            <View style={styles.titleDescpView}>
                <View style={styles.titleDescpView}>
                    <Text numberOfLines={1} style={styles.flatListTitle}>
                        {props?.title}
                    </Text>
                    <Text numberOfLines={2} style={styles.flatListDescription} >
                        {props?.description}
                    </Text>
                </View>
            </View>
            <View style={styles.deleteView}>
                <Button
                    onPress={props?.deletePress}
                    style={styles.deleteBtn}
                    btnTitleStyle={styles.deleteText}
                    title="Delete"
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    flatListItemView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderColor: colors.black,
        width: wp(90),
        alignSelf: 'center',
        marginVertical: hp(1.5),
        elevation: 10,
        backgroundColor: colors.white,
        borderRadius: radius.radius1,
        paddingHorizontal: wp(2),
        paddingVertical: hp(1),
    },
    titleDescpView: {
        width: wp(70),
        height: hp(8),
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        paddingHorizontal: wp(1),
    },
    flatListTitle: {
        width: wp(35),
        fontSize: fontSize.fontSize4point2,
        color: colors.primaryColor,
        textAlign: 'left',
        fontWeight: '700',
    },
    flatListDescription: {
        width: wp(60),
        fontSize: fontSize.fontSize4,
        color: colors.gray,
        textAlign: 'left',
    },
    deleteView: {
        height: hp(8),
        width: wp(20),
        justifyContent: 'center',
        alignItems: 'center',
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
});
export default Card;
