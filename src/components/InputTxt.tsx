import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import React from 'react';

type props = {
  title?: string;
  placeholder?: string;
  keyboardType?: string | undefined | null;
  onChangeText: (txt: string | number) => void;
  secureTextEntry?: true | false;
};

const InputTxt: React.FC<props> = props => {
  return (
    <View>
      <Text style={styles.labelStyle}>{props.title}</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder={props.placeholder}
        keyboardType={props.keyboardType ? props.keyboardType : 'default'}
        onChangeText={props.onChangeText}
        secureTextEntry={props.secureTextEntry ? props.secureTextEntry : false}
        placeholderTextColor={'#999999'}
      />
    </View>
  );
};

export default InputTxt;

const styles = StyleSheet.create({
  labelStyle: {
    color: '#4B0060',
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 10,
  },
  inputStyle: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 16,
  },
});
