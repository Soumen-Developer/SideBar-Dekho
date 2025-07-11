Data Storage and Flow
This Application, the user data is stored in the browser's memory using React's state management. It is not persisted to a database or local storage, so all changes will be lost upon a page reload.

Here's a breakdown of the data flow:

Initial Fetch (Home.jsx): When the Home component mounts, a useEffect hook triggers a fetch request to https://jsonplaceholder.typicode.com/users.
In-Memory State (Home.jsx): The fetched user data is stored in a state variable called allUsers using the useState hook. A second state variable, filteredUsers, is also initialized with this data and is the one actually rendered in the UserTable.
Adding a User (AddUserForm.jsx -> Home.jsx):
The AddUserForm component collects new user information in its own local state.
When the form is submitted, it calls the addUser function passed down from the Home component.
The addUser function in Home.jsx creates a new user object and adds it to the allUsers and filteredUsers arrays in the state. This update happens entirely in memory.
Searching/Filtering (searchbar.jsx -> Home.jsx):
As you type in the SearchBar, the handleSearch function in Home.jsx is called.
This function filters the master allUsers array based on the search term and updates the filteredUsers state, causing the UserTable to re-render with only the matching users. This is also an in-memory operation.
Because the data lives in the component's state, it is ephemeral. When you reload the page, the entire React application re-initializes, the state is reset, and the useEffect in Home.jsx fetches the original list of users from the API again.

Application Features Overview
Your application is a clean, single-page application (SPA) with a responsive sidebar and a main content area for displaying and managing user data.

1. Main Layout & Routing (App.jsx)
Routing: The app uses react-router-dom to manage navigation. Routes are defined for /, /products, /dashboard, etc., each rendering a specific page component.
Responsive Layout: The main layout is a flex container that holds the Sidebar and the main content area. The main content area's left margin (ml-64, ml-16, ml-0) dynamically adjusts based on the sidebar's state (expanded, collapsed, or hidden), creating a smooth, animated transition.
2. Collapsible Sidebar (Sidebar.jsx)
This is a sophisticated and feature-rich component.

Three States: The sidebar can be fully expanded to show icons and labels (state 2), collapsed to show only icons (state 1), or completely hidden (state 0).
State Management: The state is controlled from the parent App.jsx component and passed down via props (sidebarState, setSidebarState), making it a controlled component.
User Interaction:
A toggle button in the header allows users to expand and collapse the sidebar.
When hidden, a "hamburger" menu icon (MdMenu) appears in the top-left corner to reopen it.
It cleverly closes automatically when the user clicks outside of it, unless it is "pinned".
Tooltips: When collapsed, hovering over an icon reveals a tooltip with the menu item's label for better UX.
Pinning: A "pin" icon in the footer allows the user to lock the sidebar in its current state, preventing it from auto-collapsing when clicking outside.
3. Home Page (Home.jsx)
This is the most functional page in the application.

User Data Display (UserTable.jsx): It presents a list of users in a clean, responsive table.
Live Search (searchbar.jsx): A search bar allows for real-time, case-insensitive filtering of the user list by name. The search results are displayed in a dropdown list below the search bar.
Add User Modal (AddUserForm.jsx):
Clicking the "Add User" button opens a modal form overlay.
The form includes fields for Name, Email, Pincode, and Phone, all of which are required.
The Pincode input has HTML5 pattern validation to ensure a 6-digit entry.
The modal's position correctly shifts based on the sidebar's width to remain centered in the visible content area.
4. Reusable Components
PageContent.jsx: A simple, reusable component that provides a consistent layout for page titles and content, as seen in the Log.jsx page.
searchbar.jsx, SearchResultsList.jsx, SearchResult.jsx: These components work together to create the search experience. The SearchResultsList is currently not used in Home.jsx but is set up to display search results.
