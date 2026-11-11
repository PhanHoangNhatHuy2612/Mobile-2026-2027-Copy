import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
type Gender = 'male' | 'female' | 'other';

const GenderSelector = () => {
  const [gender, setGender] = useState<Gender>('male');

  return (
    <View style={{ padding: 20, gap: 10 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
        Lựa chọn xưng hô: {gender}
      </Text>

      <Button title="Anh ấy" onPress={() => setGender('male')} />
      <Button title="Cô ấy" onPress={() => setGender('female')} />
      <Button title="Họ / khác" onPress={() => setGender('other')} />
    </View>
  );
};

export default GenderSelector;