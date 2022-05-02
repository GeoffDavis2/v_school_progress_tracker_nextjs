import { yyyymmdd, newOffsetDt } from './my-date-functions';
// import { secureAxios } from './secureAxios';

export const getProgressData = async (theStudent) => {
  try {
    const allRecs = (
      await secureAxios.get(`/secure/progress/${theStudent.studentId}`)
    ).data;

    const reMappedFields = allRecs.map((obj) => ({
      dt: obj['Date Reported'],
      lvl: obj['Level at submission '],
      pts: obj['Current Story Point'],
    }));

    const revSortedProgress = reMappedFields
      .slice()
      .sort((a, b) =>
        a.dt > b.dt
          ? -1
          : a.dt < b.dt
          ? 1
          : a.pts > b.pts
          ? -1
          : a.pts < b.pts
          ? 1
          : 0,
      );

    const genAllDates = (st, end, arr = []) =>
      st <= end
        ? genAllDates(newOffsetDt(st, 1), end, [...arr, { dt: yyyymmdd(st) }])
        : arr;
    const allDates = genAllDates(
      new Date(theStudent.startDt),
      new Date(theStudent.endDt),
    );

    const mergedArr = allDates.map((obj, i, arr) => ({
      ...obj,
      pts: revSortedProgress.find((x) => x.dt === obj.dt)?.pts ?? null,
    }));

    const addStudenName = JSON.parse(JSON.stringify(mergedArr));
    if (addStudenName[0]) addStudenName[0].studentName = theStudent.studentName;

    return addStudenName;
  } catch (err) {
    alert('Error getting progress data.');
    // TODO Add error handling specifically for selecting "--- Select Student ---"
    // TODO add error handling for if this function returns the err
    return err;
  }
};
