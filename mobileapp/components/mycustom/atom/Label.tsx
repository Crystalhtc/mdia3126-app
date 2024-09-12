import {View, Text} from "react-native";

export default function myLabel({
    text="Label"
}) {
    
    return <View style={{
        backgroundColor: "#CCC",
        borderRadius: 10,
        padding:5
    }}>
        <Text>{text}</Text>
    </View>
    
}