import { StyleSheet, Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const MenuItems = () => {
  const menus = [
    {
      icon: 'upload',
      title: 'Transfer',
    },
    {
      icon: 'check',
      title: 'Receive',
    },
    {
      icon: 'plussquareo',
      title: 'Top Up',
    },
    {
      icon: 'appstore-o',
      title: 'More',
    },
  ];

  return (
    <View style={styles.menuItemsWrapper}>
      {menus.map((item) => (
        <View style={styles.menuItem}>
          <AntDesign
            name={item.icon}
            size={30}
            color='white'
            backgroundColor='#303030'
            style={styles.menuIcon}
          />
          <Text style={styles.subText}>{item.title}</Text>
        </View>
      ))}
    </View>
  );
};

export default MenuItems;

const styles = StyleSheet.create({
  menuItemsWrapper: {
    marginTop: 20,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    gap: 10,
    paddingHorizontal: 30,
  },
  menuItem: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  menuIcon: {
    width: 50,
    height: 50,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#303030',
  },
  subText: {
    color: 'gray',
    fontSize: 20,
  },
});
