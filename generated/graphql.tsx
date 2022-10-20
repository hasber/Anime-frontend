import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Aired = {
  __typename?: 'Aired';
  from: Scalars['DateTime'];
  prop: Prop;
  string: Scalars['String'];
  to: Scalars['String'];
};

export type AnimeObject = {
  __typename?: 'AnimeObject';
  aired?: Maybe<Aired>;
  airing?: Maybe<Scalars['Boolean']>;
  approved?: Maybe<Scalars['Boolean']>;
  background?: Maybe<Scalars['String']>;
  broadcast?: Maybe<Broadcast>;
  demographics?: Maybe<Array<Demographic>>;
  duration?: Maybe<Scalars['String']>;
  episodes?: Maybe<Scalars['Float']>;
  explicit_genres?: Maybe<Array<Scalars['String']>>;
  favorites?: Maybe<Scalars['Float']>;
  genres?: Maybe<Array<Genre>>;
  images?: Maybe<Images>;
  licensors?: Maybe<Array<Scalars['String']>>;
  mal_id?: Maybe<Scalars['Float']>;
  members?: Maybe<Scalars['Float']>;
  popularity?: Maybe<Scalars['Float']>;
  producers?: Maybe<Array<Scalars['String']>>;
  rank?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['String']>;
  scoreMessage: Scalars['String'];
  scored_by?: Maybe<Scalars['String']>;
  season?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  studios?: Maybe<Array<Scalars['String']>>;
  synopsis?: Maybe<Scalars['String']>;
  themes?: Maybe<Array<Theme>>;
  title?: Maybe<Scalars['String']>;
  title_english?: Maybe<Scalars['String']>;
  title_japanese?: Maybe<Scalars['String']>;
  title_synonyms?: Maybe<Array<Scalars['String']>>;
  titles?: Maybe<Array<Title>>;
  trailer?: Maybe<Trailer>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['String']>;
};

export type Broadcast = {
  __typename?: 'Broadcast';
  day: Scalars['String'];
  string: Scalars['String'];
  time: Scalars['String'];
  timezone: Scalars['String'];
};

export type Demographic = {
  __typename?: 'Demographic';
  mal_id?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  type: Scalars['String'];
  url: Scalars['String'];
};

export type From = {
  __typename?: 'From';
  day: Scalars['Float'];
  month: Scalars['Float'];
  year: Scalars['Float'];
};

export type Genre = {
  __typename?: 'Genre';
  mal_id?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  type: Scalars['String'];
  url: Scalars['String'];
};

export type Images = {
  __typename?: 'Images';
  jpg: Jpg;
  webp: Webp;
};

export type Images2 = {
  __typename?: 'Images2';
  image_url: Scalars['String'];
  large_image_url: Scalars['String'];
  maximum_image_url: Scalars['String'];
  medium_image_url: Scalars['String'];
  small_image_url: Scalars['String'];
};

export type Jpg = {
  __typename?: 'Jpg';
  image_url: Scalars['String'];
  large_image_url: Scalars['String'];
  small_image_url: Scalars['String'];
};

export type Prop = {
  __typename?: 'Prop';
  from: From;
  to: To;
};

export type Query = {
  __typename?: 'Query';
  getAnimes: Array<AnimeObject>;
};

export type QueryGetAnimesArgs = {
  name: Scalars['String'];
};

export type Theme = {
  __typename?: 'Theme';
  mal_id?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  type: Scalars['String'];
  url: Scalars['String'];
};

export type Title = {
  __typename?: 'Title';
  title: Scalars['String'];
  type: Scalars['String'];
};

export type To = {
  __typename?: 'To';
  day: Scalars['String'];
  month: Scalars['String'];
  year: Scalars['String'];
};

export type Trailer = {
  __typename?: 'Trailer';
  embed_url: Scalars['String'];
  images: Images2;
  url: Scalars['String'];
  youtube_id: Scalars['String'];
};

export type Webp = {
  __typename?: 'Webp';
  image_url: Scalars['String'];
  large_image_url: Scalars['String'];
  small_image_url: Scalars['String'];
};

export type GetAnimesQueryVariables = Exact<{
  name: Scalars['String'];
}>;

export type GetAnimesQuery = {
  __typename?: 'Query';
  getAnimes: Array<{
    __typename?: 'AnimeObject';
    mal_id?: number | null;
    url?: string | null;
    approved?: boolean | null;
    title?: string | null;
    title_english?: string | null;
    title_japanese?: string | null;
    title_synonyms?: Array<string> | null;
    type?: string | null;
    source?: string | null;
    episodes?: number | null;
    status?: string | null;
    airing?: boolean | null;
    duration?: string | null;
    rating?: string | null;
    score?: string | null;
    scored_by?: string | null;
    rank?: number | null;
    popularity?: number | null;
    members?: number | null;
    favorites?: number | null;
    synopsis?: string | null;
    background?: string | null;
    season?: string | null;
    year?: string | null;
    explicit_genres?: Array<string> | null;
    scoreMessage: string;
    images?: {
      __typename?: 'Images';
      jpg: {
        __typename?: 'Jpg';
        image_url: string;
        small_image_url: string;
        large_image_url: string;
      };
      webp: {
        __typename?: 'Webp';
        image_url: string;
        small_image_url: string;
        large_image_url: string;
      };
    } | null;
    titles?: Array<{
      __typename?: 'Title';
      type: string;
      title: string;
    }> | null;
  }>;
};

export const GetAnimesDocument = gql`
  query GetAnimes($name: String!) {
    getAnimes(name: $name) {
      mal_id
      url
      images {
        jpg {
          image_url
          small_image_url
          large_image_url
        }
        webp {
          image_url
          small_image_url
          large_image_url
        }
      }
      approved
      titles {
        type
        title
      }
      title
      title_english
      title_japanese
      title_synonyms
      type
      source
      episodes
      status
      airing
      duration
      rating
      score
      scored_by
      rank
      popularity
      members
      favorites
      synopsis
      background
      season
      year
      explicit_genres
      scoreMessage
    }
  }
`;

/**
 * __useGetAnimesQuery__
 *
 * To run a query within a React component, call `useGetAnimesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAnimesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAnimesQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetAnimesQuery(baseOptions: Apollo.QueryHookOptions<GetAnimesQuery, GetAnimesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAnimesQuery, GetAnimesQueryVariables>(GetAnimesDocument, options);
}
export function useGetAnimesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAnimesQuery, GetAnimesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAnimesQuery, GetAnimesQueryVariables>(GetAnimesDocument, options);
}
export type GetAnimesQueryHookResult = ReturnType<typeof useGetAnimesQuery>;
export type GetAnimesLazyQueryHookResult = ReturnType<typeof useGetAnimesLazyQuery>;
export type GetAnimesQueryResult = Apollo.QueryResult<GetAnimesQuery, GetAnimesQueryVariables>;
