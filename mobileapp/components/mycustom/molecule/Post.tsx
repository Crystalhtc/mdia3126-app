import {View, TextInput} from "react-native";
import ProfileImage from "@/components/mycustom/atom/ProfileImage";
import Name from "@/components/mycustom/atom/Name";
import Message from "@/components/mycustom/atom/Message";

export default function Index() {
  return (
    <View
        style={{
        flex: 1,
        justifyContent: "center",
        gap: 50,
      }}
    >
        <View style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
        }}>
            <ProfileImage />
            <Name nameText="John Doe"/>
        </View>
        <View>
            <Message messageText="Hi everyone! I love cats, and wanna adopt one in the future."/>
        </View>
    </View>
  );
}

//placeholder
//the string that will be rendered before text input has been entered