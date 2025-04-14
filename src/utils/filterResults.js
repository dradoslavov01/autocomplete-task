export const filterResults = (data, query, limit) => {
  const lowerQuery = query.trim().toLowerCase();
  const filtered = data.filter(item => item.text?.toLowerCase().includes(lowerQuery));
  return limit ? filtered.slice(0, limit) : filtered;
};
