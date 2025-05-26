import React, {useState} from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ModalScreen: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Modal Demo</Text>
      <TouchableOpacity onPress={() => setShowModal(true)} style={styles.btn}>
        <Text style={styles.text}>Open Modal</Text>
      </TouchableOpacity>
      <Modal
        visible={showModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowModal(false)}>
        <View style={styles.centerView}>
          <View style={styles.modalView}>
            <Text>Modal Component</Text>
            <TouchableOpacity
              onPress={() => setShowModal(false)}
              style={styles.btn}>
              <Text style={styles.text}>Close </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  btn: {
    padding: 10,
    backgroundColor: '#4ca008',
    borderRadius: 5,
    minWidth: 250,
    marginBottom: 10,
    alignItems: 'center',
  },
  btnTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default ModalScreen;
