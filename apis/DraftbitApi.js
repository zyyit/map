import * as React from 'react';
import {
  useQuery,
  useMutation,
  useIsFetching,
  useQueryClient,
} from 'react-query';
import useFetch from 'react-fetch-hook';
import { useIsFocused } from '@react-navigation/native';
import { handleResponse, isOkStatus } from '../utils/handleRestApiResponse';
import usePrevious from '../utils/usePrevious';
import * as GlobalVariables from '../config/GlobalVariableContext';

export const episodesGET = (Constants, { limit }, handlers = {}) =>
  fetch(
    `https://example-data.draftbit.com/podcasts?_limit=${encodeURIComponent(
      `${typeof limit === 'string' ? limit : JSON.stringify(limit ?? '')}`
    )}&_sort=created_at_utc`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  ).then(res => handleResponse(res, handlers));

export const useEpisodesGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['episodes', args],
    () => episodesGET(Constants, args, handlers),
    {
      refetchInterval,
    }
  );
};

export const FetchEpisodesGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  limit,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useEpisodesGET(
    { limit },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchEpisodes: refetch });
};

export const postsGET = (Constants, { limit }, handlers = {}) =>
  fetch(
    `https://example-data.draftbit.com/posts?_limit=${encodeURIComponent(
      `${typeof limit === 'string' ? limit : JSON.stringify(limit ?? '')}`
    )}&_sort=created_at_utc`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  ).then(res => handleResponse(res, handlers));

export const usePostsGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(['posts', args], () => postsGET(Constants, args, handlers), {
    refetchInterval,
  });
};

export const FetchPostsGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  limit,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = usePostsGET(
    { limit },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchPosts: refetch });
};

export const productsGET = (Constants, { limit }, handlers = {}) =>
  fetch(
    `https://example-data.draftbit.com/products?_limit=${encodeURIComponent(
      `${typeof limit === 'string' ? limit : JSON.stringify(limit ?? '')}`
    )}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  ).then(res => handleResponse(res, handlers));

export const useProductsGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['draftbitProductsGET', args],
    () => productsGET(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () => queryClient.invalidateQueries(['draftbitProductsGETS']),
    }
  );
};

export const FetchProductsGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  limit,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useProductsGET(
    { limit },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchProducts: refetch });
};

export const reviewsGET = (Constants, { limit }, handlers = {}) =>
  fetch(
    `https://example-data.draftbit.com/orders?_limit=${encodeURIComponent(
      `${typeof limit === 'string' ? limit : JSON.stringify(limit ?? '')}`
    )}&_sort=created_at_utc`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  ).then(res => handleResponse(res, handlers));

export const useReviewsGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['reviews', args],
    () => reviewsGET(Constants, args, handlers),
    {
      refetchInterval,
    }
  );
};

export const FetchReviewsGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  limit,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useReviewsGET(
    { limit },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchReviews: refetch });
};
