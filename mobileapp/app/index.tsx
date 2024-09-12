import { Text, View } from "react-native";

//time to make a branch to do some atmoic design

//may not need template for now
// import MyButton from "@/components/mycustom/atom/Button";
// import LabelButton from "@/components/mycustom/molecule/LabelButton";
// import FormSlider from "@/components/mycustom/organism/FormSlider";
// import Button from "@/components/mycustom/atom/Button";
// import Label from "@/components/mycustom/atom/Label";

import InputForm from "@/components/mycustom/molecule/InputForm";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <InputForm 
        placeholderText="I'm an input form!" 
        labelText="Button Label" 
        titleForButton="Button!"
        placeholderTextColor="pink"
      />
    </View>
  );
}
