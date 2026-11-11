import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

type Todo = {
  id: string;
  title: string;
};

const TodoListBasic = () => {
  const [todos] = useState<Todo[]>([
    { id: '1', title: 'Đọc 20 trang sách' },
    { id: '2', title: 'Đi bộ 30 phút' },
    { id: '3', title: 'Gọi cho gia đình' },
    { id: '4', title: 'Sắp xếp góc làm việc' },
    { id: '5', title: 'Pha một ấm trà' },
  ]);

  return (
    <ScrollView style={{ padding: 20 }}>
      {todos.map((item) => (
        <View key={item.id} style={{ paddingVertical: 8 }}>
          <Text style={{ fontSize: 18 }}>□  {item.title}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default TodoListBasic;