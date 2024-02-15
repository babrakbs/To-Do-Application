
import { StyleSheet, View } from 'react-native';
import {
    heightPercentageToDP as hp
} from "react-native-responsive-screen";
import Text from '../Components/Text';
import { colors, fontSize } from "../Constants";

const Header = (props) => {
    return (
        <View
            style={[
                props.headerStyle ? props.headerStyle : styles.mainContainer]}>
            <View style={props?.customTopView ? props.customTopView : styles.topView}>
                <Text style={styles.titleStyle}>{props?.topTitle}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: colors.white,
        paddingVertical: hp(1),
        marginVertical:hp(1.5),
    },
    topView: {
        alignItems: "center",
        justifyContent: 'center',
    },
    titleStyle: {
        color: colors.black,
        fontSize: fontSize.fontSize6,
        textAlign: 'center',
        fontWeight: '700',
        justifyContent: 'center',
    },
});
export default Header;
