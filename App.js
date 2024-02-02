import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  const transactions = [
    {
      icon: 'apple',
      companyName: 'Apple Inc',
      date: '01/01/2024',
      amount: '$100',
    },
    {
      icon: 'google',
      companyName: 'Google Inc',
      date: '01/02/2024',
      amount: '$69',
    },

    {
      icon: 'facebook',
      companyName: 'Facebook Inc',
      date: '01/02/2024',
      amount: '$45',
    },
    {
      icon: 'apple',
      companyName: 'Apple Inc',
      date: '12/12/2021',
      amount: '$100',
    },
    {
      icon: 'google',
      companyName: 'Google Inc',
      date: '12/12/2021',
      amount: '$784',
    },

    {
      icon: 'facebook',
      companyName: 'Facebook Inc',
      date: '12/12/2021',
      amount: '$100',
    },
    {
      icon: 'apple',
      companyName: 'Apple Inc',
      date: '12/12/2021',
      amount: '$898',
    },
    {
      icon: 'google',
      companyName: 'Google Inc',
      date: '12/12/2021',
      amount: '$100',
    },

    {
      icon: 'facebook',
      companyName: 'Facebook Inc',
      date: '12/12/2021',
      amount: '$888',
    },
    {
      icon: 'apple',
      companyName: 'Apple Inc',
      date: '12/12/2021',
      amount: '$100',
    },
    {
      icon: 'google',
      companyName: 'Google Inc',
      date: '12/12/2021',
      amount: '$189',
    },

    {
      icon: 'facebook',
      companyName: 'Facebook Inc',
      date: '12/12/2021',
      amount: '$99',
    },
    {
      icon: 'apple',
      companyName: 'Apple Inc',
      date: '12/12/2021',
      amount: '$100',
    },
    {
      icon: 'google',
      companyName: 'Google Inc',
      date: '12/12/2021',
      amount: '$100',
    },
    {
      icon: 'facebook',
      companyName: 'Facebook Inc',
      date: '12/12/2021',
      amount: '$250',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <NavBar />
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
            {transactions.map((transaction, index) => (
              <View key={index}>
                <TransactionCard
                  key={index}
                  icon={transaction.icon}
                  companyName={transaction.companyName}
                  date={transaction.date}
                  amount={transaction.amount}
                />
                <View style={styles.divider}></View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}

const NavBar = () => {
  return (
    <View style={styles.nav}>
      <Text>NavBar</Text>
    </View>
  );
};

const TransactionCard = ({ icon, companyName, date, amount }) => {
  return (
    <View style={styles.transactionCard}>
      <Icon
        name={icon}
        size={24}
        color='#FF9900'
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
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  header: {
    backgroundColor: '#161616',
    height: '55%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  footer: {},
  nav: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  transactions: {
    height: '100%',
    padding: 20,
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
  textContainer: {
    flex: 1,
  },
  companyName: {
    fontWeight: 'bold',
    color: '#333',
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
