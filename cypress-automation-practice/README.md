# Cypress Automation Practice

A beginner-friendly Cypress E2E automation project using [SauceDemo](https://www.saucedemo.com/).

## Requirements
- Node.js and npm

## Setup
```bash
npm install
npx cypress open
```

For headless execution:
```bash
npm run cy:run
```

After each `cypress run`, an HTML report is saved at `cypress/reports/index.html`. Open that file in a browser to view pass/fail, timing, and screenshots.

## Scenarios
- Successful login
- Invalid login error
- Add product to cart
- Complete checkout

This repository is for learning purposes. Demo credentials are publicly provided by SauceDemo. Do not store real credentials in test files.
