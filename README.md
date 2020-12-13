# node-cron-service

Test NodeJs cron service

## PREREQUISITES

- Install Node and NPM
- Install node packages: "npm install"

## EXECUTING

- npm start

## TESTING

- npm run test

## ENVIRONMENTS

- The environment get set by the variable: "NODE_ENV".
- Different configuration settings can be set in config/[ENVIRONMENT].json
- If nothing set "development" will be the default.
- Possible environments are: development, qa, staging, production

## TOUBLESHOOTING

### Kill open connections

```
lsof -i:3001
kill -9 [PID]
```
