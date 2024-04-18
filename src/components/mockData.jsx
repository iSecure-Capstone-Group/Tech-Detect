// mockApi.js
const mockUserData = {
    id: 1,
    firstname: "Blessing",
    username: 'Blessing Shelly',
    email: 'BlessingShelly@gmail.com',
    profilePicture: 'https://res.cloudinary.com/dbv1y1xey/image/upload/v1713143230/Avatar_hmbnjv.svg',
    role: 'user',
    phoneNumber: '+234 6767996543',
    organization: 'Winnietour care'
    // Other user data...
  };
  
  const mockSettingsData = {
    theme: 'dark',
    notifications: true,
    // Other settings...
  };
  
  // Export mock data functions
  export const fetchUserData = () => {
    return Promise.resolve(mockUserData); // Simulating an async API call
  };
  
  export const fetchSettingsData = () => {
    return Promise.resolve(mockSettingsData); // Simulating an async API call
  };
  