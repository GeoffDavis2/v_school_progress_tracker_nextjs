import { useEffect } from 'react';
import { useTheContext } from '../hocs/context-provider';

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
    console.log('selectedStudent', selectedStudent);
    if (selectedStudent?.studentId)
      localStorage.setItem('selectedStudentId', selectedStudent.studentId);

    (async () => {
      const res = await (
        await fetch('/api/get-student-progress', {
          method: 'POST',
          body: JSON.stringify(selectedStudent),
        })
      ).json();
      setStudentProgress(res);
    })();
  }, [selectedStudent, setStudentProgress]);

  if (allStudents.length === 0)
    return <h1 style={{ marginTop: '50px' }}>Loading Students</h1>;

  // TODO if Demo then show sample list of students

  // TODO  If not Staff then just show logged in students name

  // TODO If Staff then show email address for who is logged in and show dropdown box
  return (
    <div style={{ marginTop: '50px' }}>
      <label>
        <h2 style={{ display: 'inline' }}>Select a Student: </h2>
      </label>
      <select
        value={allStudents?.findIndex(
          (obj) => obj.studentId === selectedStudent.studentId,
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
