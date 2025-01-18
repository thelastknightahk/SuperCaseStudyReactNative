import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image, 
  TouchableWithoutFeedback,
} from 'react-native';
import images from '../utils/constants/assets';
import {User} from '../store/types';

interface UserListProps {
  users: User[]; // Use the User model
  searchedUser: User | null; // Use the User model
  listHeader: string;
  onItemPress: (user: User) => void; // Use the User model
}

const UserList = ({
  users,
  searchedUser,
  listHeader,
  onItemPress,
}: UserListProps) => (
  <View style={styles.container}>
    <Text style={styles.header}>{listHeader}</Text>
    <FlatList
      data={users}
      keyExtractor={item => item.name}
      renderItem={({item, index}) => (
        <TouchableWithoutFeedback onPress={() => onItemPress(item)}>
          <View
            style={[
              styles.card,
              item.name === searchedUser?.name ? styles.highlightCard : null,
            ]}>
            <View style={styles.groupRow}>
              {/* Rank and Name as One Group */}
              <View style={styles.rowGroup}>
                <View
                  style={[
                    styles.rankCircle,
                    index === 0
                      ? styles.goldBackground
                      : index === 1
                      ? styles.silverBackground
                      : index === 2
                      ? styles.bronzeBackground
                      : styles.defaultBackground,
                  ]}>
                  <Text style={styles.rankText}>{index + 1}</Text>
                </View>
                <Text style={styles.cardText}>{item.name}</Text>
              </View>

              {/* Bananas and Icon as Another Group */}
              <View style={styles.rowGroup}>
                <Image source={images.bananas} style={styles.icon} />
                <Text style={styles.cardText}>{item.bananas}</Text>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      )}
      showsVerticalScrollIndicator={false}
    />
  </View>
);

// Styles remain the same
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal:8,
  },
  header: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  card: {
    paddingHorizontal: 8,
    paddingVertical: 10,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  highlightCard: {
    borderColor: '#6a5acd',
    borderWidth: 2,
  },
  groupRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rankCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  goldBackground: {
    backgroundColor: 'gold',
  },
  silverBackground: {
    backgroundColor: '#17B8A6',
  },
  bronzeBackground: {
    backgroundColor: '#cd7f32',
  },
  defaultBackground: {
    backgroundColor: '#e0e0e0',
  },
  rankText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardText: {
    fontSize: 14,
    color: '#333',
    fontFamily: 'PlusJakartaSans-Bold',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
});

export default UserList;
