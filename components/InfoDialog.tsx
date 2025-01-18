import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const InfoDialog = ({
  visible,
  title,
  description,
  confirmButtonText,
  onConfirm,
}: {
  visible: boolean;
  title: string;
  description: string;
  confirmButtonText: string;
  onConfirm: () => void;
}) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onConfirm} // Dismiss on back button
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{title}</Text>
          <Text style={styles.modalMessage}>{description}</Text>
          
          {/* Divider */}
          <View style={styles.divider} />

          {/* Confirm Button as Text */}
          <TouchableOpacity style={styles.fullWidthTouchable} onPress={onConfirm}>
            <Text style={styles.modalButtonText}>{confirmButtonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 300,
    
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    paddingHorizontal:10, 
    paddingTop:8
  },
  modalMessage: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
    paddingHorizontal:10
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#ccc',
   
  },
  modalButtonText: {
    color: '#007BFF',
    fontWeight: 'bold',
    fontSize: 16,
    paddingVertical: 12,
    
    textAlign: 'center',
  },
  fullWidthTouchable: {
    width: '100%', // Makes the TouchableOpacity full width
  },
});

export default InfoDialog;
