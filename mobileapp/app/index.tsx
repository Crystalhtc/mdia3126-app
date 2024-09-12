import { View } from "react-native";

import Post from "@/components/mycustom/molecule/Post";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Post />

    </View>
  );
}
