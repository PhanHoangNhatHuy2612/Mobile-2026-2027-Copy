import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <View style={styles.wrap}>
      <Text style={styles.caption}>NHIỆT ĐỘ PHÒNG</Text>
      <Text style={styles.value}>{count}°</Text>
      <View style={styles.actions}>
        <Pressable style={styles.control} onPress={() => setCount(count - 1)}><Text style={styles.controlText}>−</Text></Pressable>
        <Pressable style={styles.control} onPress={() => setCount(count + 1)}><Text style={styles.controlText}>＋</Text></Pressable>
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  wrap: { margin: 20, padding: 24, borderRadius: 22, backgroundColor: '#172554', alignItems: 'center' },
  caption: { color: '#bfdbfe', fontSize: 12, letterSpacing: 2 },
  value: { color: '#fff', fontSize: 58, fontWeight: '800', marginVertical: 20 },
  actions: { flexDirection: 'row', gap: 14 },
  control: { width: 52, height: 52, borderRadius: 26, backgroundColor: '#38bdf8', alignItems: 'center', justifyContent: 'center' },
  controlText: { color: '#082f49', fontSize: 28, fontWeight: '700' },
});