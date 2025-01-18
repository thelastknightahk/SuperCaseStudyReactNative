import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setUsers, setSearchedUser} from '../store/actions/userActions';
import {User, UserState} from '../store/types';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import {Keyboard} from 'react-native';

const leaderboardData = require('../assets/leaderboard.json');

export const useUserLogic = () => {
  const [searchText, setSearchText] = useState('');
  const [sortByName, setSortByName] = useState(false);
  const [showLowest, setShowLowest] = useState(false);
  const [fuzzySearchResults, setFuzzySearchResults] = useState<User[]>([]);
  const [isInfoDialogVisible, setIsInfoDialogVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [originalTop10, setOriginalTop10] = useState<User[]>([]);

  const dispatch = useDispatch();
  const {users, searchedUser} = useSelector(
    (state: {user: UserState}) => state.user,
  );

  useEffect(() => {
    const usersArray = Object.values(leaderboardData).map((user: any) => ({
      name: user.name,
      bananas: user.bananas,
      subscribed: user.subscribed,
      stars: user.stars,
    }));

    const sortedUsers = usersArray.sort((a, b) => b.bananas - a.bananas);
    const top10 = sortedUsers.slice(0, 10);
    setOriginalTop10(top10);
    dispatch(setUsers(top10));
  }, [dispatch]);

  const fuzzySearch = (query: string, users: User[]) => {
    return users.filter(user =>
      user.name.toLowerCase().includes(query.toLowerCase()),
    );
  };

  const handleSearch = () => {
    ReactNativeHapticFeedback.trigger('impactLight', {
      enableVibrateFallback: true,
      ignoreAndroidSystemSettings: false,
    });

    dispatch(setUsers(originalTop10));
    const allUsers = Object.values(leaderboardData).map((user: any) => ({
      name: user.name,
      bananas: user.bananas,
      subscribed: user.subscribed,
      stars: user.stars,
    }));

    const fuzzyResults = fuzzySearch(searchText, allUsers);

    if (fuzzyResults.length > 0) {
      const exactMatch = allUsers.find(
        u => u.name.toLowerCase() === searchText.toLowerCase(),
      );

      if (exactMatch) {
        dispatch(setSearchedUser(exactMatch));
        setFuzzySearchResults([]);

        const isInTop10 = originalTop10.some(u => u.name === exactMatch.name);

        if (!isInTop10) {
          const updatedTop10 = [...originalTop10.slice(0, 9), exactMatch];
          dispatch(setUsers(updatedTop10));
        }
      } else {
        const sortedFuzzyResults = fuzzyResults.sort(
          (a, b) => b.bananas - a.bananas,
        );
        setFuzzySearchResults(sortedFuzzyResults);
        dispatch(setSearchedUser(sortedFuzzyResults[0]));
      }
    } else {
      dispatch(setSearchedUser(null));
      setIsModalVisible(true); // Show custom alert
    }
    Keyboard.dismiss();
  };

  const resetUserList = () => {
    setFuzzySearchResults([]);
    dispatch(setUsers(originalTop10));
    dispatch(setSearchedUser(null));
  };

  const handleItemPress = (user: User) => {
    ReactNativeHapticFeedback.trigger('impactLight', {
      enableVibrateFallback: true,
      ignoreAndroidSystemSettings: false,
    });
    setSelectedUser(user);
    setIsInfoDialogVisible(true);
  };

  const getDisplayedUsers = () => {
    let displayedUsers = users.slice(0, 10); // Default: Top 10 users.

    if (sortByName) {
      // Sort by name
      ReactNativeHapticFeedback.trigger('impactLight', {
        enableVibrateFallback: true,
        ignoreAndroidSystemSettings: false,
      });
      displayedUsers = [...displayedUsers].sort((a, b) =>
        a.name.localeCompare(b.name),
      );
    } else if (showLowest) {
      ReactNativeHapticFeedback.trigger('impactLight', {
        enableVibrateFallback: true,
        ignoreAndroidSystemSettings: false,
      });
      // Sort by bananas (lowest to highest)
      displayedUsers = [...displayedUsers].sort(
        (a, b) => a.bananas - b.bananas,
      );
    }

    // Ensure searched user is included and highlighted
    if (
      searchedUser &&
      !displayedUsers.some(user => user.name === searchedUser.name)
    ) {
      displayedUsers = [searchedUser, ...displayedUsers]; // Add searched user to the top.
    }

    return displayedUsers;
  };

  return {
    searchText,
    setSearchText,
    handleSearch,
    resetUserList,
    isModalVisible,
    setIsModalVisible,
    getDisplayedUsers,
    sortByName,
    setSortByName,
    showLowest,
    setShowLowest,
    isInfoDialogVisible,
    setIsInfoDialogVisible,
    selectedUser,
    handleItemPress,
    fuzzySearchResults,
    searchedUser,
  };
};
