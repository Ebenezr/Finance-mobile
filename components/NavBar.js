import { StyleSheet, Text, View } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const NavBar = () => {
  return (
    <View style={styles.nav}>
      <AntDesign
        name='gitlab'
        size={24}
        color='green'
        backgroundColor='#f8f8f8'
        style={styles.avatar}
      />
      <View style={styles.textContainer}>
        <Text style={styles.userName}>Ebenezar Bukosia</Text>
        <Text style={styles.greetings}>Good Afternoon Sir!</Text>
      </View>
      <Entypo name='dots-two-horizontal' size={24} color='white' />
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  nav: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 35,
  },
  avatar: {
    width: 45,
    padding: 10,
    borderRadius: 50,
    margin: 10,
  },
  textContainer: {
    flex: 1,
  },
  userName: {
    fontWeight: 'bold',
    color: '#ffff',
    fontSize: 20,
  },
  greetings: {
    color: '#f1f1f1',
    fontSize: 15,
    marginTop: 5,
  },
});
