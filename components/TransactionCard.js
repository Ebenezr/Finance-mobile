import { StyleSheet, Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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

export default TransactionCard;

const styles = StyleSheet.create({
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
});
