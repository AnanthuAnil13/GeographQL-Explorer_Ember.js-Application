# GeographQL Explorer

GeographQL Explorer is an Ember.js application that allows users to explore geographic data from the GeographQL service. It utilizes the GeographQL API, ember-apollo-client, and Ember Inspector for debugging. The app provides a user-friendly interface for interactive exploration of countries and their associated details.

## Requirements

- **Ember.js:** Refer to the [Ember.js documentation](https://emberjs.com/) for guidance during development.
- **GeographQL API:** Use the provided GeographQL API (`https://api.geographql.rudio.dev/graphql`) to fetch data. No authentication is required.
- **ember-apollo-client:** Utilize the `ember-apollo-client` library as the GraphQL client for Ember. See the [library documentation](https://github.com/ember-graphql/ember-apollo-client) for usage details.
- **Ember Inspector:** Use [Ember Inspector](https://guides.emberjs.com/release/ember-inspector/) to help with debugging your application.

## Features

### Country List Page

- The index page should display a table of countries, including their name, currency, and capital.
- Implement pagination on the table, showing 20 countries per page.
- Include next/previous buttons to navigate between pages.
- Make the country name clickable, leading to the Country Detail page.

### Country Detail Page

- Display the name, currency, currency symbol, and phone code of the selected country.
- Show a table of states within the country, including their name, state code, latitude, and longitude.
- Implement pagination on the table, displaying 20 states per page.
- Include next/previous buttons to navigate between pages.

## Installation

1. Clone the repository: `git clone https://github.com/your-username/geographql-explorer.git`
2. Navigate to the project directory: `cd geographql-explorer`
3. Install dependencies: `npm install`
4. Start the development server: `ember serve`
5. Visit `http://localhost:4200` in your web browser to access the application.

## Contributions

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
