import { StyleSheet, Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomNav = () => {
  return (
    <View style={styles.bottomNav}>
      <View style={styles.bottomNavMenus}>
        <MaterialCommunityIcons
          name='home-variant-outline'
          size={24}
          color='black'
        />
        <AntDesign name='creditcard' size={24} color='black' />
      </View>
      <View style={styles.bottomNavMenus}>
        <AntDesign name='user' size={24} color='black' />
        <AntDesign name='setting' size={24} color='black' />
      </View>
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffff',
    padding: 20,
  },
  bottomNavMenus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 30,
  },
});
