import React, { createContext, useState, useEffect } from 'react';

export const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://freetestapi.com/api/v1/books');
        const result = await response.json();
        setData(result);
        console.log(result)
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // empty dependency array to run the effect only once when the component mounts


  const value = {
    data,
    loading,
    error,
  };

  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
