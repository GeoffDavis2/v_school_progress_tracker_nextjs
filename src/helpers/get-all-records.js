const getData = async (endpointUrl, offset = "") => {
  const airTableToken = "Bearer keyc4hHWKfMJQyutK";
  const res = await fetch(`${endpointUrl}&offset=${offset}`, {
    headers: { Authorization: airTableToken },
  });
  const data = await res.json();
  return data;
};

export const getAllRecs = async (endpointUrl, maxRecursiveCt, offset) => {
  const data = await getData(endpointUrl, offset);
  const fields = data.records.map((rec) => rec.fields);
  return data.offset && maxRecursiveCt > 0
    ? [
        ...fields,
        ...(await getAllRecs(endpointUrl, maxRecursiveCt - 1, data.offset)),
      ]
    : fields;
};
