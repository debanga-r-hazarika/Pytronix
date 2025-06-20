import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { NotificationProvider } from './context/NotificationContext';
import { ProfileProvider } from './context/ProfileContext';
import Layout from './components/layout/Layout';
import Loader from './components/ui/Loader';
import { Toaster } from 'react-hot-toast';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial data loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <ThemeProvider>
      <NotificationProvider>
        <AuthProvider>
          <ProfileProvider>
            <CartProvider>
              <Router>
                <Layout>
                  <AppRoutes />
                </Layout>
                <Toaster
                  position="top-center"
                  reverseOrder={false}
                  toastOptions={{
                    className: 'dark:bg-light-navy dark:text-white',
                  }}
                />
              </Router>
            </CartProvider>
          </ProfileProvider>
        </AuthProvider>
      </NotificationProvider>
    </ThemeProvider>
  );
}

export default App;
