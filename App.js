import { Pressable, StyleSheet, View } from 'react-native';
import MenuItems from './components/MenuItems';
import NavBar from './components/NavBar';
import InfoCard from './components/InfoCard';
import BottomNav from './components/BottomNav';
import Transactions from './components/Transactions';
import { useState } from 'react';

export default function App() {
  const [isActive, setIsActive] = useState(false);
  const handlePress = () => {
    setIsActive(!isActive);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <NavBar />
        <InfoCard />
        <MenuItems />
        <Pressable
          onPress={handlePress}
          style={isActive ? styles.btnActive : styles.btn}
        ></Pressable>
      </View>
      <View style={styles.footer}>
        <Transactions />
        <BottomNav />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    height: '100%',
  },
  header: {
    backgroundColor: '#161616',
    height: '55%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '45%',
  },
  btn: {
    marginTop: 20,
    height: 5,
    borderRadius: 50,
    width: 60,
    backgroundColor: '#303030',
  },
  btnActive: {
    marginTop: 20,
    height: 5,
    borderRadius: 50,
    width: 80,
    backgroundColor: 'green',
  },
});
