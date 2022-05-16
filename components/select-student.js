import React, { useEffect } from 'react';
import { useTheContext } from '../hocs/context-provider';

export const SelectStudent = () => {
  const {
    allStudents,
    selectedStudent,
    setSelectedStudent,
    setStudentProgress,
  } = useTheContext();

  // useEffect(() => {
  //   const prevStudentId = localStorage.getItem('selectedStudentId') ?? null;
  //   if (prevStudentId && allStudents.length > 0)
  //     setSelectedStudent(
  //       allStudents.find((obj) => obj.studentId === prevStudentId),
  //     );
  // }, [allStudents, setSelectedStudent]);

  useEffect(() => {
    if (selectedStudent.studentId)
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
    return <div className="load-students">Loading Students</div>;

  return (
    <div className="load-students">
      <label>Select a Students Name then Click Load Data: </label>
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
