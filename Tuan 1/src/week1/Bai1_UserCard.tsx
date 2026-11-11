import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
type ProfileProps = {
  name: string;
  age: number;
  isAdmin: boolean;
};


const UserCard = ({ name, age, isAdmin }: ProfileProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.badge}>{isAdmin ? 'CORE TEAM' : 'COMMUNITY'}</Text>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.text}>{age} tuổi · {isAdmin ? 'Có quyền quản lý' : 'Tài khoản tiêu chuẩn'}</Text>
      <Text style={styles.text}>
        Trạng thái: {isAdmin ? 'Đang hoạt động' : 'Đang chờ xác nhận'}
      </Text>
      
    </View>
  );
};
const MainApp = () => {
  return (
    <View style={styles.list}>
      <UserCard name="Minh Anh" age={22} isAdmin={true} />
      <UserCard name="Gia Huy" age={24} isAdmin={false} />
    </View>
  );
};
const styles = StyleSheet.create({
  list: { padding: 18, gap: 12 },
  card: { padding: 16, borderRadius: 16, backgroundColor: '#e0f2fe' },
  badge: { color: '#0369a1', fontSize: 11, fontWeight: '700', letterSpacing: 1 },
  name: { fontSize: 22, fontWeight: '700', color: '#0f172a', marginVertical: 6 },
  text: {
    fontSize: 16,
    color: '#334155',
  },
});
export default MainApp;
