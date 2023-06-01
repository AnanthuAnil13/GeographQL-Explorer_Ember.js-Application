GeographQL Explorer
GeographQL Explorer is an Ember.js application that allows users to explore geographic data from the GeographQL service. It utilizes the GeographQL API, ember-apollo-client, and Ember Inspector for debugging. The app provides a user-friendly interface for interactive exploration of countries and their associated details.

Requirements
Ember.js: Refer to the Ember.js documentation for guidance during development.
GeographQL API: Use the provided GeographQL API (https://api.geographql.rudio.dev/graphql) to fetch data. No authentication is required.
ember-apollo-client: Utilize the ember-apollo-client library as the GraphQL client for Ember.
Ember Inspector: Use Ember Inspector to help with debugging your application.
Features
Country List Page
Displays a table of countries with their name, currency, and capital.
Implements pagination for the table, showing 20 countries per page.
Provides next/previous buttons for navigating between pages.
Allows clicking on a country name to access the Country Detail page.
Country Detail Page
Displays the name, currency, currency symbol, and phone code of the selected country.
Shows a table of states within the country, including their name, state code, latitude, and longitude.
Implements pagination for the state table, displaying 20 states per page.
Provides next/previous buttons for navigating between pages.
Getting Started
Clone the repository.
Install dependencies using npm install.
Start the Ember development server using ember serve.
Access the application in your browser at http://localhost:4200.
Development
Use Ember Inspector to inspect and debug your application.
Refer to the Ember.js documentation for guidance on Ember.js development.
License
This project is licensed under the MIT License.

Acknowledgements
GeographQL API for providing the geographic data.
ember-apollo-client library for GraphQL integration with Ember.js.
Ember Inspector for aiding in debugging the application.
