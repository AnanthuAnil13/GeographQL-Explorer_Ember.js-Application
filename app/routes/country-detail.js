import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { queryManager } from 'ember-apollo-client';

import gql from 'graphql-tag';

export default class CountryDetailRoute extends Route {
  @service('apollo') apollo;
  @queryManager() apolloClient;

  perPage = 20;
  pageNumber = 0;

  async model(params) {
    const { country_id: countryId } = params;

    const response = await this.apolloClient.query({
      query: gql`
        query CountryDetail($countryId: Int!, $perPage: Int!, $pageNumber: String!) {
          country(id: $countryId) {
            id
            name
            phone_code
            currency
            currency_symbol
            states(page: { first: $perPage, after: $pageNumber }) {
              totalCount
              edges {
                cursor
                node {
                  id
                  name
                  state_code
                  country_code
                  latitude
                  longitude
                }
              }
              pageInfo {
                hasNextPage
                hasPreviousPage
                endCursor
                startCursor
              }
            }
          }
        }
      `,
      variables: {
        countryId: parseInt(countryId),
        perPage: this.perPage,
        pageNumber: btoa(JSON.stringify({ cursor: this.pageNumber })),
      },
    });

    return response.country;
  }
}
