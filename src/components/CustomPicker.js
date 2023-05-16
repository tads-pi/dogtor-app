import React, { useState } from 'react';
import { View, Picker } from 'react-native';

const MyPicker = () => {
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <View>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedValue(itemValue)
        }
      >
        <Picker.Item label="Opção 1" value="option1" />
        <Picker.Item label="Opção 2" value="option2" />
        <Picker.Item label="Opção 3" value="option3" />
      </Picker>
    </View>
  );
};

export default MyPicker;
