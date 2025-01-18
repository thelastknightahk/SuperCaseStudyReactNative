                                                SuperCaseStudy


Overview
   SuperCaseStudy is a React Native application designed to demonstrate a leaderboard UI with advanced features, such as sorting, filtering, and searching for users. It uses Redux for state management and integrates libraries for enhanced user interactions, such as haptic feedback.

The application allows users to:

   View a leaderboard of top-ranked users.
   Search for specific users by name.
   Sort users alphabetically or by ranking.
   Display the lowest-ranked users.
   View detailed user information in a modal dialog.

--------------------------------------------------------------------------------------
Features

   Leaderboard UI: Displays the top 10 users, ranked by bananas earned.
   Search: Search for users by name, with fuzzy search functionality.
   Sorting: Sort users by name or by ranking.
   User Detail: View detailed information about a user, including their subscription status and stars.
   Dynamic Highlighting: Highlights the searched user in the leaderboard.
   Haptic Feedback: Provides tactile feedback on certain actions (e.g., sorting and selecting users).


--------------------------------------------------------------------------------------



File Structure



SuperCaseStudy/
├── android/                # Android-specific configuration
├── ios/                    # iOS-specific configuration
├── assets/                 # Static assets (e.g., images, fonts, etc.)
│   └── images/             # Icons and images
├── components/             # Reusable UI components
│   ├── ButtonRow.tsx       # Buttons for sorting and filtering
│   ├── InfoDialog.tsx      # Custom alert dialog component
│   ├── SearchBar.tsx       # Search bar component with clear and search buttons
│   ├── UserInfoDialog.tsx  # Dialog for displaying detailed user information
│   └── UserList.tsx        # List of users with highlight and sorting features
├── hooks/                  # Custom hooks
│   └── useUserLogic.tsx    # Encapsulates user-related business logic
├── store/                  # Redux state management
│   ├── actions/            # Redux action creators
│   ├── reducers/           # Redux reducers
│   ├── types/              # Type definitions for Redux state and actions
│   └── store.ts            # Redux store configuration
├── utils/                  # Utility functions and constants
│   └── constants/          # Static constants like assets and styles
├── App.tsx                 # Main app entry point
└── package.json            # Project dependencies and scripts


--------------------------------------------------------------------------------



Core Libraries


   React Native: For building cross-platform mobile applications.
   Redux Toolkit: Simplifies state management and provides tools for handling complex state logic.
   React Redux: Connects React components to the Redux store.
   React Native Haptic Feedback: Adds tactile feedback for user interactions.
   Jest: For unit testing the application.


-------------------------------------------------------------------------------------


Key Functionalities
1. Leaderboard Display
   Shows the top 10 users sorted by their number of bananas.
   Displays a rank circle with colors for the top three users:
   Gold for rank 1.
   Silver for rank 2.
   Bronze for rank 3.
2. Search
   Allows users to search by name.
   Supports fuzzy matching for partial names.
   Displays a message if the searched user is not found.
3. Sorting
   Users can sort the leaderboard by:
   Name: Alphabetical order.
   Ranking: By the number of bananas earned.
4. User Info Dialog
   Clicking on a user opens a dialog showing detailed information, including:
   Name
   Number of bananas
   Subscription status
   Number of stars

-------------------------------------------------------------------------


Testing


The application uses Jest for unit tests.
Key functionalities such as reducers, actions, and components are thoroughly tested.



---------------------------------------------------------------------


Contributions

Feel free to contribute! Fork the repository, make changes, and submit a pull request. 🎉

feel free to contact via email [ aunghtetwho@gmail.com ] 





