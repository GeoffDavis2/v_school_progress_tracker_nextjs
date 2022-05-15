import React, { useContext, createContext, useState, useEffect } from 'react';

const TheContext = createContext();
export const useTheContext = () => useContext(TheContext);

export const ContextProvider = ({ children }) => {
  const [allStudents, setAllStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState({});
  const [studentProgress, setStudentProgress] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    (async () => {
      const allStudents = await (await fetch('/api/get-students')).json();
      setAllStudents(allStudents);
    })();
  }, []);

  return (
    <TheContext.Provider
      value={{
        allStudents,
        setAllStudents,
        selectedStudent,
        setSelectedStudent,
        studentProgress,
        setStudentProgress,
        user,
        setUser,
      }}
    >
      {children}
    </TheContext.Provider>
  );
};
