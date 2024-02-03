import { FlatList, StyleSheet, Text, View } from 'react-native';
import TransactionCard from './TransactionCard';

const Transactions = () => {
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
  );
};

export default Transactions;

const styles = StyleSheet.create({
  transactionList: {
    marginTop: 20,
    height: '70%',
  },
  transactions: {
    paddingTop: 15,
    paddingHorizontal: 20,
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
  headerText: {
    color: 'black',
    fontSize: 30,
  },
});
