import { gql } from '@apollo/client';

const FIND_HOMEPAGE = gql`
query findHomepage(
    $environment: String!,
    $url: String!
    $device: String!
    $refs: [String!]!
){
    findHomepage(environment: $environment,url: $url, device: $device, refs: $refs ) {
       content
    }
}
`;
const FIND_SUBSCRIPTION_PAGE = gql`
    query findSubscriptionPage(
        $environment: String!,
        $url: String!,
        $refs: [String!]!
    ){
        findSubscriptionPage(environment: $environment, url: $url, refs: $refs ) {
            content
        }
    }
`;

const FIND_HEADER = gql`
query findHeader(
    $environment: String!,
    $device: String!
){
    findHeader(environment: $environment, device: $device ) {
       content
    }
}
`;

const FIND_FOOTER = gql`
query findFooter(
    $environment: String!,
    $device: String!
){
    findFooter(environment: $environment, device: $device ) {
       content
    }
}
`;

const FIND_URL_QUERY = gql`
        query findUrl($environment: String!, $url: String!){
            findUrl(environment: $environment, url: $url) {
                content
            }
        }
  `;

const FIND_CONTENT_DATA = gql`
    query findContent($contentType: String!, $environment: String!, $query: String, $refs: [String!]){
        findContent(contentType: $contentType, environment: $environment, query: $query, refs: $refs) {
            content
            targetEnv
            contentType
        }
    }
`;

const FIND_SUBSCRIPTION_PLAN = gql`
    query findSubscriptionPlan($environment: String!){
        findSubscriptionPlan(environment: $environment) {
            id
            name
            recurringEligible
            shortDescription
            description
            shortName
            price {
              amount
              currency
            }
            durationDays
            downloadLimit
            externalPlanId
            image
            link
            monthField
            rank
        }
    }
`;

const FIND_CATEGORY_BY_URL = gql`
    query findCollectionByUrl($environment: String!, $url: String!){
        findCollectionByUrl(environment: $environment, url: $url) {
            content
        }
    }
`;

const FIND_COLLECTION_BY_ASSETS = gql`
    query findCollectionByAssets($environment: String!, $pageNumber: Int!, $pageSize: Int!, $contentType: String!, $collectionName: String!){
        findCollectionByAssets(environment: $environment, pageNumber: $pageNumber, pageSize: $pageSize, contentType: $contentType, collectionName: $collectionName) {
            content
        }
    }
`;
const FIND_VIDEO_PAGE = gql`
    query getVideoPage($environment: String!, $url: String!){
        getVideoPage(environment: $environment, url: $url) {
            content
        }
    }
`;

const contentStackQueries = {
    FIND_HOMEPAGE,
    FIND_HEADER,
    FIND_FOOTER,
    FIND_URL_QUERY,
    FIND_CONTENT_DATA,
    FIND_SUBSCRIPTION_PLAN,
    FIND_CATEGORY_BY_URL,
    FIND_COLLECTION_BY_ASSETS,
    FIND_VIDEO_PAGE,
    FIND_SUBSCRIPTION_PAGE,
};

export default contentStackQueries;
