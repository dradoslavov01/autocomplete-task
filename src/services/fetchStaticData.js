export const fetchStaticData = async () => {
  try {
    const res = await fetch('../us-states.json');
    const states = await res.json();
    return states.map(state => ({
      id: crypto.randomUUID(),
      text: state.name,
      value: state.abbreviation,
    }));
  } catch (err) {
    console.error('Static data fetch error:', err);
  }
}