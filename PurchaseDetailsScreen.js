// In App.js in a new project

import * as React from "react";
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    TextInput,
    FlatList,
    Image,
    ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, FontAwesome } from "@expo/vector-icons";


import styles from "../../../Style/CustomStyle";
import endpoint from "../../../auth/apiConnection";

function PurchaseDetailsScreen({ navigation }) {
    const main_Cat_arr = [
        {
            id: 1,
            date: "d1",
            totalApply: "ta1",
            remaingingApply: "ra1",
            couponCode: "cc1",
            orderId: "oid1",
            applyedBy: "ab1",
            ammountReceived: "ar1",
        },
        {
            id: 2,
            date: "d2",
            totalApply: "ta2",
            remaingingApply: "ra2",
            couponCode: "cc2",
            orderId: "oid2",
            applyedBy: "ab2",
            ammountReceived: "ar2",
        },
        {
            id: 3,
            date: "d3",
            totalApply: "ta3",
            remaingingApply: "ra3",
            couponCode: "cc3",
            orderId: "oid3",
            applyedBy: "ab3",
            ammountReceived: "ar3",
        },
    ];
    return (
        <FlatList
            style={{ width: "100%",  }}
            data={main_Cat_arr}
            renderItem={({ item, index }) => (
                <View style={styles.container}>
                    <View style={styles.purchaseDetailsMainView}>
                        <View style={styles.purchaseDetailsBoxView}>
                            <Text style={styles.purchaseDetailsSerialNumber}>
                                {/* 100 */}
                                {item.id}
                            </Text>
                            <Text style={styles.purchaseDetailsSideline}></Text>
                        </View>
                        <View style={styles.purchaseDetailsDateView}>
                            <View>
                                <Text style={styles.purchaseDetailsDateText}>
                                    {/* 10 October 2020 */}
                                    {item.date}
                                </Text>
                            </View>
                            <View style={styles.purchaseDetailsInnerText}>
                                <View
                                    style={
                                        styles.purchaseDetailsInnerTextFirstView
                                    }
                                >
                                    <View
                                        style={
                                            styles.purchaseDetailsInnerTextSecondView
                                        }
                                    >
                                        <Ionicons
                                            name="md-contact"
                                            size={40}
                                            color="#3B9CBA"
                                        />
                                    </View>
                                    <View>
                                        <Text>Coupon Code</Text>
                                        <Text
                                            style={
                                                styles.purchaseDetailsCouponText
                                            }
                                        >
                                            {/* Abi123456789 */}
                                            {item.couponCode}
                                        </Text>
                                        <Text
                                            style={styles.purchaseDetailsIdText}
                                        >
                                            {/* Trans / order Id : 1175352680 */}
                                            Trans / order Id : {item.orderId}
                                        </Text>
                                    </View>
                                    <View>
                                        <Text
                                            style={
                                                styles.purchaseDetailsAppliedText
                                            }
                                        >
                                            {/* Applyed : 2/5 */}
                                            Applyed : {item.remaingingApply}/
                                            {item.totalApply}
                                        </Text>
                                    </View>
                                </View>

                                <View>
                                    <Text
                                        style={styles.purchaseDetailsBottomLine}
                                    ></Text>
                                </View>
                                <View style={styles.purchaseDetailsBottomView}>
                                    <View
                                        style={
                                            styles.purchaseDetailsBottomSecondView
                                        }
                                    >
                                        <Text
                                            style={
                                                styles.purchaseDetailsBottomApplyedHead
                                            }
                                        >
                                            Applyed by :
                                        </Text>
                                        <Text
                                            style={
                                                styles.purchaseDetailsBottomApplyedName
                                            }
                                        >
                                            {/* Abinash Sonar  */}
                                            {item.applyedBy}
                                        </Text>
                                    </View>
                                    <View
                                        style={
                                            styles.purchaseDetailsBottomAmmountView
                                        }
                                    >
                                        <Text
                                            style={
                                                styles.purchaseDetailsAmmountHead
                                            }
                                        >
                                            {/* Amount Received : 50 */}
                                            Amount Received :
                                            {item.ammountReceived}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            )}
        />
    );
}

export default PurchaseDetailsScreen;
