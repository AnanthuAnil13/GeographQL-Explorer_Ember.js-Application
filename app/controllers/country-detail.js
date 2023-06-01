import { action } from '@ember/object';
import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { queryManager } from 'ember-apollo-client';

import { gql } from 'graphql-tag';

export default class CountryListController extends Controller {
  @service('apollo') apollo;
  @queryManager() apolloClient;

  perPage = 20;
  pageNumber = 0;

  get countryId() {
    const href = window.location.href;
    // console.log(this);
    return href[href.length - 1];
  }

  countryId = this.countryId;

  async refreshModel() {
    const response = await this.apollo.query({
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
        countryId: parseInt(this.countryId),
        perPage: this.perPage,
        pageNumber: btoa(JSON.stringify({ cursor: this.pageNumber })),
      },
    });

    this.set('model', response.country);
  }

  @action
  async previousPage() {
    if (this.model.states.pageInfo.hasPreviousPage == true) {
      this.pageNumber = JSON.parse(atob(this.model.states.pageInfo.startCursor)).cursor - 21;
      await this.refreshModel();
    }
  }

  @action
  async nextPage() {
    if (this.model.states.pageInfo.hasNextPage == true) {
      this.pageNumber = JSON.parse(atob(this.model.states.pageInfo.endCursor)).cursor;
      await this.refreshModel();
    }
  }
}
