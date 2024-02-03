import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  FlatList,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default function App() {
  const transactions = [
    {
      id: 1,
      icon: 'apple',
      companyName: 'Apple Inc',
      date: '01/02/2024',
      amount: '$100',
    },
    {
      id: 2,
      icon: 'google',
      companyName: 'Google Inc',
      date: '01/02/2024',
      amount: '$69',
    },

    {
      id: 3,
      icon: 'viadeo',
      companyName: 'Viadeo Inc',
      date: '01/02/2024',
      amount: '$45',
    },
    {
      id: 4,
      icon: 'snapchat',
      companyName: 'SnapChat',
      date: '12/12/2023',
      amount: '$1,005',
    },
    {
      id: 5,
      icon: 'microchip',
      companyName: 'Trancent Inc',
      date: '12/12/2023',
      amount: '$7,845',
    },

    {
      id: 6,
      icon: 'themeisle',
      companyName: 'Themeisle Inc',
      date: '12/12/2023',
      amount: '$1,400',
    },
    {
      id: 7,
      icon: 'snowflake-o',
      companyName: 'Snowflake Inc',
      date: '12/12/2023',
      amount: '$898',
    },
    {
      id: 8,
      icon: 'glide',
      companyName: 'Glide Inc',
      date: '12/12/2023',
      amount: '$100',
    },

    {
      id: 9,
      icon: 'imdb',
      companyName: 'IMDB Inc',
      date: '12/12/2023',
      amount: '$888',
    },
    {
      id: 10,
      icon: 'apple',
      companyName: 'Apple Inc',
      date: '12/12/2021',
      amount: '$100',
    },
    {
      id: 11,
      icon: 'yoast',
      companyName: 'Yoast Inc',
      date: '12/12/2022',
      amount: '$189',
    },

    {
      id: 12,
      icon: 'first-order',
      companyName: 'First Order Inc',
      date: '12/12/2023',
      amount: '$99',
    },
    {
      id: 13,
      icon: 'podcast',
      companyName: 'Podcast Inc',
      date: '12/12/2023',
      amount: '$100',
    },
    {
      id: 14,
      icon: 'eercast',
      companyName: 'Eercast Inc',
      date: '12/12/2023',
      amount: '$9,999',
    },
    {
      id: 15,
      icon: 'telegram',
      companyName: 'Telegram Inc',
      date: '12/12/2021',
      amount: '$250',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <NavBar />
        <InfoCard />
        <MenuItems />
      </View>
      <View style={styles.footer}>
        <View style={styles.transactions}>
          {/* header */}
          <View style={styles.titleWrapper}>
            <Text style={styles.headerText}>Last Transaction</Text>
            <Text style={styles.subText}>See all</Text>
          </View>
          {/* list */}
          <View style={styles.transactionList}>
            <FlatList
              keyExtractor={(item) => item.id}
              data={transactions}
              renderItem={({ item }) => (
                <TransactionCard
                  icon={item.icon}
                  companyName={item.companyName}
                  date={item.date}
                  amount={item.amount}
                />
              )}
            />
          </View>
          {/* bottom nav */}
        </View>
        <BottomNav />
      </View>
    </View>
  );
}

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
const InfoCard = () => {
  return (
    <View style={styles.infoCard}>
      <Text style={styles.h2}>Total Balance</Text>
      <View style={styles.balanceCard}>
        <Text style={styles.h1Disabled}>KES</Text>
        <Text style={styles.h1}>145,000</Text>
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Choose card</Text>
      </Pressable>
    </View>
  );
};
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

const MenuItems = () => {
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

const TransactionCard = ({ icon, companyName, date, amount }) => {
  return (
    <View style={styles.transactionCard}>
      <FontAwesome
        name={icon}
        size={24}
        color='green'
        backgroundColor='#f8f8f8'
        style={styles.icon}
      />
      <View style={styles.textContainer}>
        <Text style={styles.companyName}>{companyName}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Text style={styles.amount}>{amount}</Text>
    </View>
  );
};

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
  button: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'gray',
    borderStyle: 'solid',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 50,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    lineHeight: 20,
    letterSpacing: 0.25,
    fontWeight: 'bold',
  },
  h1: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
  },
  h2: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'gray',
  },
  h1Disabled: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'gray',
  },
  container: {
    backgroundColor: '#f8f8f8',
    height: '100%',
  },
  header: {
    backgroundColor: '#161616',
    height: '55%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  footer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '45%',
  },
  nav: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 35,
  },
  balanceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
    gap: 10,
  },
  infoCard: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  transactions: {
    paddingTop: 15,
    paddingHorizontal: 20,
  },
  headerText: {
    color: 'black',
    fontSize: 30,
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subText: {
    color: 'gray',
    fontSize: 20,
  },
  transactionList: {
    marginTop: 20,
    height: '70%',
  },
  transactionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  icon: {
    width: 45,
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  menuIcon: {
    width: 50,
    height: 50,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
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
  companyName: {
    fontWeight: 'bold',
    color: '#333',
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
  date: {
    color: '#666',
  },
  amount: {
    fontWeight: 'bold',
    color: 'red',
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#f8f8f8',
  },
});
