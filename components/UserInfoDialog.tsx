import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Modal,
} from 'react-native';
import { User } from '../store/types';

interface UserInfoDialogProps {
  visible: boolean;
  user: User | null;
  onClose: () => void;
}

const UserInfoDialog = ({ visible, user, onClose }: UserInfoDialogProps) => {
  const scaleValue = useRef(new Animated.Value(0)).current;
  const fadeValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      // Animate scale and fade-in when the dialog becomes visible
      Animated.parallel([
        Animated.spring(scaleValue, {
          toValue: 1,
          useNativeDriver: true,
        }),
        Animated.timing(fadeValue, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      // Reset animations when dialog is hidden
      Animated.parallel([
        Animated.timing(scaleValue, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(fadeValue, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [visible]);

  if (!user) return null;

  return (
    <Modal transparent visible={visible} animationType="none">
      <View style={styles.modalContainer}>
        <Animated.View
          style={[
            styles.dialogContainer,
            { transform: [{ scale: scaleValue }], opacity: fadeValue },
          ]}
        >
          {/* User Avatar */}
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>
              {user.name[0].toUpperCase()}
            </Text>
          </View>

          {/* User Name */}
          <Text style={styles.title}>{user.name}</Text>

          {/* User Information */}
          <Text style={styles.message}>
            {user.name} has {user.bananas} bananas!
          </Text>
          <Text style={styles.details}>
            Subscribed: {user.subscribed ? 'Yes' : 'No'} | Stars: {user.stars}
          </Text>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Close Button */}
          <TouchableOpacity style={styles.fullWidthTouchable} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  dialogContainer: {
    width: 320, 
    backgroundColor: 'white',
    borderRadius: 12,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  avatarContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
    
  },
  avatarText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  message: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'center',
    color: '#666',
  },
  details: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    marginBottom: 15,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#ccc',
    
  },
  fullWidthTouchable: {
    width: '100%',
    paddingVertical: 12,
    justifyContent: 'center',
  },
  closeButtonText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#007BFF',
    fontWeight: 'bold',
    marginBottom:8
  },
});

export default UserInfoDialog;
