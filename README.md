# my-wdio-project

Test automation framework for the login flow of
[the-internet.herokuapp.com](https://the-internet.herokuapp.com), built with
WebdriverIO + Mocha, using the Page Object pattern and a layered
architecture.

## Architecture

```
src/
  core/                  # Core layer - generic, project-agnostic TAF code
    pages/
      BasePage.js        # navigation + wait helpers, no selectors, no URLs
  business/              # Business layer - logic of the tested application
    pages/
      LoginPage.js        # Login page: selectors + actions
      SecurePage.js        # Secure area page: selectors + actions
    data/
      users.js            # test data (credentials)
      messages.js          # expected UI messages
test/
  specs/                 # Tests layer - test scenarios + assertions only
    login.e2e.js
wdio.conf.js             # TAF configuration (baseUrl, framework, capabilities)
```

- **Core** never references a specific selector, URL or business term - it
  could be reused in any WebdriverIO project.
- **Business** contains everything tied to the tested application:
  page objects (selectors + actions) and domain test data.
- **Tests** only orchestrate business-layer objects and assert outcomes -
  no selectors or hardcoded strings live here.

## Running tests

```bash
npm install
npm test
```
