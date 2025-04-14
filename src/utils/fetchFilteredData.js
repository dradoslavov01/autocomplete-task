import { fetchStaticData, fetchApiData } from '@services';
import { filterResults } from '@utils';


export const fetchFilteredData = async ({ query, dataEndPoint, numOfResults }) => {
  const data = dataEndPoint
    ? await fetchApiData(dataEndPoint, query)
    : await fetchStaticData();
  return filterResults(data, query, dataEndPoint ? undefined : numOfResults);
};