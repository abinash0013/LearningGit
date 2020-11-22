// In App.js in a new project

import * as React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    FlatList,
    Image,
    ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

import styles from "../Style/CustomStyle";

function purchase({ navigation }) {
    // const main_Cat_arr = [
    // {
    // id: 1,
    // image: "https://kamakhyaits.com/images/KITS%20Logo@3x.png",
    // name: "electrician",
    // },
    // {
    //     id: 2,
    //     image: "https://kamakhyaits.com/images/KITS%20Logo@3x.png",
    //     name: "Plumber",
    // },
    // { id: 3, image: "http://", name: "Carpenter" },
    // { id: 4, image: "http://", name: "Appliance Repairing" },
    // { id: 5, image: "http://", name: "Salon" },
    // { id: 6, image: "http://", name: "Cleaning" },
    // { id: 7, image: "http://", name: "Interior Designing" },
    // { id: 8, image: "http://", name: "Body Massage" },
    // ];
    return (
        <View style={styles.container}>
            {/* <TouchableOpacity
                // style={styles.btnbox}
                onPress={() => navigation.navigate("ProfileScreen")}
            > */}
            {/* <FlatList
                    numColumns={1}
                    style={{ height: "100%", width: "100%" }}
                    data={main_Cat_arr}
                    renderItem={({ item, index }) => ( */}
            <View
                style={{
                    // height: "100%",
                    width: "90%",
                    height: 135,
                    // width: 400,
                    margin: 5,
                    color: "#000",
                    // fontSize: 20,
                    fontWeight: "bold",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <LinearGradient
                    colors={["#86FDE8", "#ACB6E5"]}
                    start={[0.99, 0.66]}
                    style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: 10,
                        borderWidth: 3,
                        borderColor: "#8CF1E7",
                        borderStyle: "solid",
                        textAlign: "center",
                        alignContent: "center",
                        justifyContent: "center",
                    }}
                >
                    <View>
                        <ImageBackground
                            source={require("./../../assets/purchageWhiteBack.png")}
                            style={{
                                width: "90%",
                                height: 130,
                                marginTop: 35,
                                // borderWidth: 3,
                                flexDirection: "row",
                                justifyContent: "center",
                                alignContent: "center",
                                alignItems: "center",
                                // resizeMode: "stretch",
                            }}
                            imageStyle={{
                                // borderTopLeftRadius: 20,
                                // resizeMode: "stretch",
                                borderRadius: 10,
                                alignSelf: "flex-start",
                                // borderTopRightRadius: 20,
                            }}
                        >
                            {/* <Text style={styles.flatlistPrice}> */}
                            <Text
                                style={{
                                    color: "#000",
                                    alignSelf: "flex-start",
                                }}
                            >
                                $100
                            </Text>
                        </ImageBackground>
                    </View>
                    <Text
                        style={{
                            fontSizes: 10,
                            alignSelf: "center",
                        }}
                    >
                        Coupon Code
                    </Text>
                    <Text
                        style={{
                            color: "#fff",
                            fontSizes: 20,
                            alignSelf: "center",
                        }}
                    >
                        Abi23456
                    </Text>
                </LinearGradient>
            </View>
            {/* :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::purchase screen copy */}
            <View
                style={{
                    // height: "100%",
                    width: "90%",
                    height: 135,
                    margin: 5,
                    color: "#000",
                    fontWeight: "bold",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <LinearGradient
                    colors={["#86FDE8", "#ACB6E5"]}
                    start={[0.99, 0.66]}
                    style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: 10,
                        borderWidth: 3,
                        borderColor: "#8CF1E7",
                        borderStyle: "solid",
                        textAlign: "center",
                        alignContent: "center",
                        justifyContent: "center",
                    }}
                >
                    <View
                        style={{
                            width: "90%",
                            flexDirection: "row",
                            // justifyContent: "center",
                            alignContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <ImageBackground
                            source={require("./../../assets/purchageWhiteBack.png")}
                            style={{
                                width: "90%",
                                height: 130,
                                flexDirection: "row",
                                justifyContent: "center",
                                alignContent: "center",
                                alignItems: "center",
                            }}
                            imageStyle={{
                                // borderTopLeftRadius: 20,
                                // resizeMode: "stretch",
                                borderRadius: 10,
                                alignSelf: "flex-start",
                                // borderTopRightRadius: 20,
                            }}
                        >
                            <View style={{ width: "40%" }}>
                                <View style={{ width: "40%" }}>
                                    <Text
                                        style={{
                                            color: "#000",
                                            fontSize: 10,
                                            fontWeight: "bold",
                                        }}
                                    >
                                        GET
                                    </Text>
                                </View>
                                <View style={{ width: "40%" }}>
                                    <Text
                                        style={{
                                            color: "#000",
                                            fontSize: 25,
                                            fontWeight: "bold",
                                        }}
                                    >
                                        50%
                                    </Text>
                                    {/* <Text
                                        style={{
                                            color: "#000",
                                            fontSize: 20,
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Purchased On : 13 Oct, 2020
                                    </Text> */}
                                </View>
                            </View>
                            <View
                                style={{
                                    width: "40%",
                                    alignItems: "center",
                                    alignContent: "center",
                                    justifyContent: "center",
                                    // flexDirection: "row",
                                }}
                            >
                                <View style={{ width: "80%" }}>
                                    <Text
                                        style={{
                                            color: "#FFF",
                                            fontSize: 10,
                                            textDecorationLine: "underline",
                                        }}
                                    >
                                        Coupon Code
                                    </Text>
                                </View>
                                <View style={{ width: "80%" }}>
                                    <Text
                                        style={{
                                            color: "#FFF",
                                            fontSize: 25,
                                        }}
                                    >
                                        Abi2345
                                    </Text>
                                </View>
                            </View>
                        </ImageBackground>
                        <View
                            style={{
                                width: "20%",
                                alignItems: "center",
                                padding: 5,
                            }}
                        >
                            <Text
                                style={{
                                    height: "50%",
                                    width: "100%",
                                    borderRadius: 150 / 2,
                                    color: "#3B5998",
                                    fontWeight: "bold",
                                    backgroundColor: "#fff",
                                    padding: 10,
                                    // borderRadius: 100,
                                    marginBottom: 5,
                                    fontSize: 20,
                                    alignItems: "center",
                                    alignContent: "center",
                                    justifyContent: "center",
                                    flexDirection: "row",
                                    borderColor: "#3B5998",
                                    borderStyle: "dotted",
                                    borderWidth: 1,
                                    // width: 50,
                                    // height: 50,
                                }}
                            >
                                $100
                            </Text>
                            <Text
                                style={{
                                    width: "100%",
                                    color: "#3B5998",
                                    backgroundColor: "#fff",
                                    // padding: 5,
                                    borderRadius: 3,
                                }}
                            >
                                Share
                                <Ionicons
                                    name="md-share"
                                    size={15}
                                    color="#3B5998"
                                />
                            </Text>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        </View>
    );
}

export default purchase;
