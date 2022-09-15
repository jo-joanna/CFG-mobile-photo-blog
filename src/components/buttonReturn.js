import { StyleSheet, Text, Pressable, Alert } from 'react-native';

function write() {alert('Hello')}

const PressMe = () => {
    console.log("This button was pressed!");

return (
  <Pressable style={style.buttonStyle} onPress={(write)}>
    <Text> What does it do? </Text>
  </Pressable>
)
};


const style = StyleSheet.create({
buttonStyle:{
  backgroundColor: '#FB8500',
  color: '#023047',
  marginTop: 100,
  marginLeft: 10,
  marginRight: 20,
  padding: 20,
  overflow: "hidden",
  marginBottom: 10,
},
});
export default PressMe;