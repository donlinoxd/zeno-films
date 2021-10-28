import useSWR from "swr";

const fetcher = (...args) =>
  fetch(...args)
    .then((response) => response.json())
    .catch((error) => console.log(error));

export const useFetch = (url) => {
  const { data, error } = useSWR(url, fetcher);

  return {
    data: data,
    isError: error,
    isLoading: !error && !data,
  };
};
