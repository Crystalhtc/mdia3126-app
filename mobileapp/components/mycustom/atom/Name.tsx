import { View, Text } from "react-native";

export default function Name({
    nameText
}) {

    return <View>
        <Text style={{
            fontSize: 30,
            fontWeight: "bold",
        }}>
            {nameText}
        </Text>
    </View>
}