import { useContext, createContext, useState, useEffect } from 'react';

const TheContext = createContext();
export const useTheContext = () => useContext(TheContext);

// TODO Consider doing without a context..? Instead just have the componenents that need the data getting the data
// TODO     allStudents: select-students componenet gets allStudents (not needed anywhere else?)
// TODO     selectedStudent: only select-student uses it (make it a useState in this component only, can check localstorage on refresh)
// TODO     studentProgress: so far only used in ProgressChart and progress-data (maybe pass studentID and get from api, can also use localstorage)
export const ContextProvider = ({ children }) => {
  const [allStudents, setAllStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState({});
  const [studentProgress, setStudentProgress] = useState([]);

  // await fetch('/api/get-students', { headers: { usertype: 'Staff' } })
  useEffect(() => {
    (async () =>
      setAllStudents(await (await fetch('/api/get-students')).json()))();
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
      }}
    >
      {children}
    </TheContext.Provider>
  );
};
