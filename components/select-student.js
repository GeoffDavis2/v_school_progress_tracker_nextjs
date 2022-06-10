import { useEffect } from 'react';
import { useTheContext } from '../hocs/context-provider';

// TODO Make this and all other compenent filenames start with a capital letter
export const SelectStudent = () => {
  const {
    allStudents,
    selectedStudent,
    setSelectedStudent,
    setStudentProgress,
  } = useTheContext();

  // Load selected student if possible
  useEffect(() => {
    if (localStorage.getItem('selectedStudentId') && allStudents.length > 0) {
      setSelectedStudent(
        allStudents.find(
          (obj) => obj.studentId === localStorage.getItem('selectedStudentId'),
        ),
      );
    } else {
      setSelectedStudent({
        studentId: 'placeholder',
        studentName: '--- Select Student ---',
      });
    }
  }, [allStudents, setSelectedStudent]);

  // If new selected student, load in localstorage and load progress data for the student
  useEffect(() => {
    if (selectedStudent?.studentId) {
      localStorage.setItem('selectedStudentId', selectedStudent?.studentId);

      (async () => {
        const res = await (
          await fetch('/api/get-student-progress', {
            method: 'POST',
            body: JSON.stringify(selectedStudent),
          })
        ).json();
        setStudentProgress(res);
      })();
    }
  }, [selectedStudent, setStudentProgress]);

  if (allStudents.length === 0)
    return <h1 style={{ marginTop: '50px' }}>Loading Students</h1>;

  return (
    <div style={{ marginTop: '25px' }}>
      <label>
        <h2 style={{ display: 'inline' }}>Select a Student: </h2>
      </label>
      <select
        value={allStudents?.findIndex(
          (obj) => obj.studentId === selectedStudent?.studentId,
        )}
        onChange={(e) => setSelectedStudent(allStudents[e.target.value])}
      >
        {allStudents.map((obj, ndx) => (
          <option key={obj.studentId} value={ndx}>
            {obj.studentName}
          </option>
        ))}
      </select>
    </div>
  );
};
