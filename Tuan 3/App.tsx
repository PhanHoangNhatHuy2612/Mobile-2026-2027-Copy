import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import BookCard from './components/BookCard';
import CategoryChips from './components/CategoryChips';
import Header from './components/Header';
import BookGrid from './components/BookGrid';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Header />
      <View style={styles.contentContainer}>
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.heading}>Kệ sách hôm nay</Text>
          <Text style={styles.lead}>Những tựa sách nhỏ cho một ngày nhiều ý tưởng.</Text>
          <BookCard />
          <BookCard />
          <CategoryChips/>
          <BookGrid/>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1, 
  },
  scrollContent: {
    paddingVertical: 12,
    alignItems: 'center',
    paddingBottom: 40,
  },
  heading: { alignSelf: 'flex-start', marginLeft: 18, fontSize: 28, fontWeight: '800', color: '#172554' },
  lead: { alignSelf: 'flex-start', marginHorizontal: 18, marginBottom: 10, color: '#64748b' },
});