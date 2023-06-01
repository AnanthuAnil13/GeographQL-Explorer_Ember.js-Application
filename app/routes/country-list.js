import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { queryManager } from 'ember-apollo-client';

import gql from 'graphql-tag';

export default class CountryListRoute extends Route {
  @service('apollo') apollo;

  @queryManager() apolloClient;

  perPage = 20;
  pageNumber = 0;

  async model() {
	const response = await this.apollo.query({
	  query: gql`
	    query CountryList($perPage: Int!, $pageNumber: String!) {
          countries(
            page: { first: $perPage, after: $pageNumber }
          ) {
            totalCount
            edges {
              cursor
              node {
                id
                name
                currency
                capital
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
      `,
	  variables: {
	  	perPage: this.perPage,
			pageNumber: btoa(JSON.stringify({ cursor: this.pageNumber })),
	  },
	});

    return response.countries;
  }
}
