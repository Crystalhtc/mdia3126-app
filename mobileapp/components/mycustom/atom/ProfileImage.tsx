import { View, Image } from "react-native";
export default function ProfileImage({
    url
}) {

    return (
        <View>
            <Image
                style={{
                    width: 150,
                    height: 150,
                    borderRadius: 100,
                }}
                source={{
                    uri: "https://as1.ftcdn.net/v2/jpg/00/35/66/46/1000_F_35664648_N33kGk5LKODV6A9Hq5cqDaU9X2VwTPmg.jpg"
                }}
        />
        </View>
    )
}