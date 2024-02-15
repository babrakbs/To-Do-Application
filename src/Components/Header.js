import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { colors, fontSize } from "../Constants";

const Header = (props) => {
    return (
        <View
            style={[
                props.headerStyle ? props.headerStyle : styles.mainContainer,
            ]}>
            <View style={props.customTopView ? props.customTopView : styles.topView}>
                <View style={{ height: hp(5), width: wp(10) }}>
                    <TouchableOpacity onPress={props?.onBackButtonPressTop}>
                        {props?.leftIconTop && (
                            <Image resizeMode={props?.resizeModeLeftTop} source={props?.leftIconTop} style={props.CustomLeftIconTopStyles ? props.CustomLeftIconBottomStyles : styles.leftIconBottomStyles} />
                        )}
                    </TouchableOpacity>

                </View>
                <Text allowFontScaling={false} style={props.customTopTitleStyles ? props.customTopTitleStyles : styles.topTitleStyles}>{props?.titleTop}</Text>
                <View style={{ height: hp(5), width: wp(10) }}>
                    <TouchableOpacity onPress={props?.onrightIconPressTop}>
                        {props?.rightIconTop && (
                            <Image resizeMode={props?.resizeModeRightTop} source={props?.rightIconTop} style={props.CustomRightIconTopStyles ? props.CustomRightIconTopStyles : styles.rightIconBottomStyles} />
                        )}
                    </TouchableOpacity>
                </View>
            </View>
            <View style={props.customBottomView ? props.customBottomView : styles.bottomView}>
                <View style={{ height: hp(5), width: wp(10) }}>
                    <TouchableOpacity onPress={props?.onBackButtonPressBottom}>
                        {props?.leftIconBottom && (
                            <Image resizeMode={props?.resizeModeLeft} source={props?.leftIconBottom} style={props.CustomLeftIconBottomStyles ? props.CustomLeftIconBottomStyles : styles.leftIconBottomStyles} />
                        )}
                    </TouchableOpacity>
                </View>
                <Text allowFontScaling={false} style={props.customBottomTitleStyles ? props.customBottomTitleStyles : styles.bottomTitleStyles}>{props?.titleBottom}</Text>
                <View style={{ height: hp(5), width: wp(10) }}>
                    <TouchableOpacity onPress={props?.onrightIconPressBottom}>
                        {props?.rightIconBottom && (
                            <Image resizeMode={props?.resizeModeRight} source={props?.rightIconBottom} style={props.CustomrightIconBottomStyles ? props.CustomrightIconBottomStyles : styles.rightIconBottomStyles} />
                        )}
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    mainContainer: {
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: colors.white,
        height: hp(10),
        marginVertical: hp(2),
    },
    topView: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        width: wp(100),
        height: hp(5),
    },
    bottomView: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        width: wp(100),
        height: hp(5),
    },
    topTitleStyles: {
        color: colors.midBlue,
        fontSize: fontSize.fontSize6,
        textAlign: 'center',
        fontWeight:'500',
        justifyContent: 'center',

    },
    bottomTitleStyles: {
        color: colors.midBlue,
        fontSize: fontSize.fontSize4,
        textAlign: 'center',
        justifyContent: 'center',
    },
    leftIconBottomStyles: {
        alignSelf: "center",
        height: hp(5),
        width: wp(10),
    },
    rightIconBottomStyles: {
        alignSelf: "center",
        height: hp(5),
        width: wp(10),
    },
    textContainer: {
        color: colors.white,
        marginLeft: wp(2),
        width: wp(60),
    },
    placeholderColor: colors.white,
});
export default Header;
