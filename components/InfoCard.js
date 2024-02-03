import { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

const InfoCard = () => {
  const [isActive, setIsActive] = useState(false);

  const handlePress = () => {
    setIsActive(!isActive);
  };
  return (
    <View style={styles.infoCard}>
      <Text style={styles.h2}>Total Balance</Text>
      <View style={styles.balanceCard}>
        <Text style={styles.h1Disabled}>KES</Text>
        <Text style={styles.h1}>145,000</Text>
      </View>
      <Pressable
        onPress={handlePress}
        style={isActive ? styles.buttonActive : styles.button}
      >
        <Text style={styles.buttonText}>Choose card</Text>
      </Pressable>
    </View>
  );
};

export default InfoCard;

const styles = StyleSheet.create({
  infoCard: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  h2: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'gray',
  },
  balanceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
    gap: 10,
  },
  h1: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
  },
  h1Disabled: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'gray',
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
  buttonActive: {
    backgroundColor: 'green',
    borderWidth: 1,
    borderColor: 'green',
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
});
