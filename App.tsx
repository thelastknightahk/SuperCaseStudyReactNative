import React  from 'react';
import {SafeAreaView, StyleSheet,  } from 'react-native'; 
import SearchBar from './components/SearchBar';
import ButtonRow from './components/ButtonRow';
import UserList from './components/UserList';
import InfoDialog from './components/InfoDialog';  
import UserInfoDialog from './components/UserInfoDialog';  
import { useUserLogic } from './hooks/useUserLogic';
const App = () => {
  const {
    searchText,
    setSearchText,
    sortByName,
    setSortByName,
    showLowest,
    setShowLowest,
    handleSearch,
    resetUserList,
    handleItemPress,
    getDisplayedUsers,
    isModalVisible,
    setIsModalVisible,
    isInfoDialogVisible,
    setIsInfoDialogVisible,
    selectedUser,
    searchedUser,
  } = useUserLogic();

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        handleSearch={handleSearch}
        resetUserList={resetUserList}
      />
      <ButtonRow
        sortByName={sortByName}
        showLowest={showLowest}
        setSortByName={setSortByName}
        setShowLowest={setShowLowest}
        resetFuzzySearch={resetUserList}
      />
      <UserList
        users={getDisplayedUsers()}
        searchedUser={searchedUser}
        listHeader={
          showLowest ? 'Lowest Ranked Users' : 'Top 10 Users by Bananas'
        }
        onItemPress={handleItemPress}
      />
      <InfoDialog
        visible={isModalVisible}
        title="Info"
        description={`"${searchText}" does not exist! Please specify an existing user name!`}
        confirmButtonText="OK"
        onConfirm={() => setIsModalVisible(false)}
      />
      <UserInfoDialog
        visible={isInfoDialogVisible}
        user={selectedUser}
        onClose={() => setIsInfoDialogVisible(false)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
});

export default App;