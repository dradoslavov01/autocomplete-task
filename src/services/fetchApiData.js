export const fetchApiData = async (dataEndPoint, query, numOfResults = 10) => {
  const url = dataEndPoint.replace('{query}', query).replace('{numOfResults}', numOfResults)
  try {
    const res = await fetch(url);
    const json = await res.json();
    return (json.items || []).map(item => ({
      id: item.id,
      text: item.login,
      value: item.id,
    }));
  } catch (error) {
    console.error('API fetch error:', error);
  }
}