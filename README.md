# Country States Cities Module

This package provides a list of all the countries, their states, and cities, and various relevant information pertaining to them.

## Installation

Use the package manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) or [yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable).

```bash
pip install foobar
```

## Usage

```javascript
import {
  getAllCountries,
  getStatesByCountry,
  getCitiesByStateAndCountry,
} from "country-states-cities-module";

const testFunction = async () => {
  // returns list of all the countries in the world
  await getAllCountries().then(data => {
    console.log(data);
  });

  // returns the list of states in the country passed as an argument
  // Also note that for countries having spaces in their name, do not omit spaces.

  await getStatesByCountry("United States").then(data => {
    console.log(data);
  });

  // return the list of cities for the provided pair of Country and States
  await getCitiesByStateAndCountry("United States", "Alabama").then(data => {
    console.log(data);
  });
};
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.  
Github: <https://github.com/brigadierpratap/country-states-cities-module>

[Buy me a coffee](https://www.buymeacoffee.com/brigadierpratap)

## License

[ISC](https://choosealicense.com/licenses/isc/)
