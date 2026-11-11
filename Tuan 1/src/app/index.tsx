import { useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

// =========================================================================================
// HƯỚNG DẪN DÀNH CHO GIẢNG VIÊN CHẤM BÀI:
// - Thầy có thể bấm các nút chọn "Bài 1" -> "Bài 8" trên màn hình app để xem kết quả trực tiếp.
// - Hoặc thầy có thể comment/uncomment trực tiếp các import dưới đây để kiểm tra từng file:
// =========================================================================================

import Bai1 from '../week1/Bai1_UserCard';
import Bai2 from '../week1/Bai2_Counter';
import Bai3 from '../week1/Bai3_TodoListBasic';
import Bai4 from '../week1/Bai4_CustomButton';
import Bai5 from '../week1/Bai5_LiveInput';
import Bai6 from '../week1/Bai6_LoadingWrapper';
import Bai7 from '../week1/Bai7_GenderSelector';
import Bai8 from '../week1/Bai8_AppButton';

export default function Index() {
  const [activeLesson, setActiveLesson] = useState(1);
  const lessons = [
    { id: 1, label: 'Hồ sơ', screen: <Bai1 /> },
    { id: 2, label: 'Bộ đếm', screen: <Bai2 /> },
    { id: 3, label: 'Việc cần làm', screen: <Bai3 /> },
    { id: 4, label: 'Nút riêng', screen: <Bai4 /> },
    { id: 5, label: 'Nhập liệu', screen: <Bai5 /> },
    { id: 6, label: 'Tải dữ liệu', screen: <Bai6 /> },
    { id: 7, label: 'Giới tính', screen: <Bai7 /> },
    { id: 8, label: 'App button', screen: <Bai8 /> },
  ];
  const currentLesson = lessons.find((lesson) => lesson.id === activeLesson) ?? lessons[0];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.kicker}>LAB 01 / REACT NATIVE</Text>
        <Text style={styles.headerTitle}>Bảng thực hành</Text>
        <Text style={styles.subTitle}>Chọn một chủ đề để xem bản chạy thử.</Text>
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.menuBar}>
          {lessons.map((lesson) => (
            <Pressable
              key={lesson.id}
              style={[
                styles.btnMenu,
                activeLesson === lesson.id && styles.btnActive
              ]}
              onPress={() => setActiveLesson(lesson.id)}
            >
              <Text style={[styles.txtMenu, activeLesson === lesson.id && styles.txtActive]}>
                {lesson.id}. {lesson.label}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      <View style={styles.content}>
        <View style={styles.contentHeading}>
          <Text style={styles.lessonTitle}>{currentLesson.label}</Text>
          <Text style={styles.lessonNumber}>0{currentLesson.id}</Text>
        </View>
        <ScrollView style={styles.screenView}>
          {currentLesson.screen}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    marginTop: 35,
  },
  header: {
    padding: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#172554',
  },
  kicker: {
    color: '#2563eb',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.4,
    marginBottom: 4,
  },
  subTitle: {
    fontSize: 12,
    color: '#666',
    marginVertical: 4,
    color: '#64748b',
  },
  menuBar: {
    flexDirection: 'row',
    marginTop: 6,
  },
  btnMenu: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#e8eefc',
    borderRadius: 18,
    marginRight: 8,
  },
  btnActive: {
    backgroundColor: '#2563eb',
  },
  txtMenu: {
    fontSize: 13,
    color: '#1e3a8a',
    fontWeight: '500',
  },
  txtActive: {
    color: '#fff',
    fontWeight: '700',
  },
  content: {
    flex: 1,
    padding: 10,
  },
  lessonTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#172554',
  },
  contentHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  lessonNumber: {
    fontSize: 28,
    fontWeight: '800',
    color: '#bfdbfe',
  },
  screenView: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 10,
  }
});