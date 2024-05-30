export const useFetchData = (query: string, params: Object ) => {

  const  {data: pageData, pending, error } = useFetch<any>(query, {
    params,
    baseURL: 'http://localhost:1337'}
  );

  return { data: pageData, pending, error }

}
