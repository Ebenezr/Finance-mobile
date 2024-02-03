import { StyleSheet, Text, View, FlatList } from 'react-native';
import MenuItems from './components/MenuItems';
import TransactionCard from './components/TransactionCard';
import NavBar from './components/NavBar';
import InfoCard from './components/InfoCard';
import BottomNav from './components/BottomNav';

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
          <View style={styles.titleWrapper}>
            <Text style={styles.headerText}>Last Transaction</Text>
            <Text style={styles.subText}>See all</Text>
          </View>

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
        </View>
        <BottomNav />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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

  icon: {
    width: 45,
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
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
