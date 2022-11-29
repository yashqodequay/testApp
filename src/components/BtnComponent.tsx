import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';

type props = {
  title?: string | undefined;
  onPress: () => void;
};

const BtnComponent: React.FC<props> = props => {
  return (
    <Button
      mode="contained"
      onPress={() => {
        props.onPress();
      }}>
      {props.title}
    </Button>
  );
};

// const BtnComponent = props => {
//   return (
//     // <TouchableOpacity
//     //   style={[styles.container]}
//     //   onPress={() => {
//     //     props.onPress();
//     //   }}>
//     //   <Text
//     //     style={styles.btnTitle}
//     //     onPress={() => {
//     //       props.onPress();
//     //     }}>
//     //     {props.title}
//     //   </Text>
//     // </TouchableOpacity>

//     <Button
//       mode="contained"
//       onPress={() => {
//         props.onPress();
//       }}>
//       {props.title}
//     </Button>
//   );
// };

export default BtnComponent;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4B0060',
    borderRadius: 10,
    marginTop: 50,
    justifyContent: 'center',
  },
  btnTitle: {
    // color: '#FFF',
    fontSize: 15,
    // alignSelf: 'center',
    // paddingHorizontal: 20,
    // paddingVertical: 10,
  },
});
