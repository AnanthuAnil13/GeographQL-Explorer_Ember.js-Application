import { action } from '@ember/object';
import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { gql } from 'graphql-tag';

export default class CountryListController extends Controller {
  @service apollo;

  perPage = 20;
  pageNumber = 0;

  async refreshModel() {
    const response = await this.apollo.query({
      query: gql`
        query CountryList($perPage: Int!, $pageNumber: String!) {
          countries(page: { first: $perPage, after: $pageNumber }) {
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

    this.set('model', response.countries);
  }

  @action
  async previousPage() {
    if (this.model.pageInfo.hasPreviousPage == true) {
      this.pageNumber = JSON.parse(atob(this.model.pageInfo.startCursor)).cursor - 21;
      await this.refreshModel();
    }
  }

  @action
  async nextPage() {
    if (this.model.pageInfo.hasNextPage == true) {
      this.pageNumber = JSON.parse(atob(this.model.pageInfo.endCursor)).cursor;
      await this.refreshModel();
    }
  }  
}
