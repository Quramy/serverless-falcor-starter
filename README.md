# Serverless Falcor Starter

Provides a [Serverless](http://serverless.com/) project including a [Falcor](http://netflix.github.io/falcor/) endpoint.

## Getting Started

You need `serverless` CLI. See http://docs.serverless.com/docs/installing-serverless .

Create and initialize project from serverless-falcor-starter:

```sh
serverless project install serverless-falcor-starter
```

Deploy function and endpoints:

```sh
cd serverless-falcor-starter
serverless function deploy
serverless endpoints deploy --all
```

Then your console says the API Gateway endpoint's URL such as:

```text
Serverless: Successfully deployed endpoints in "dev" to the following regions:
Serverless: us-east-1 ------------------------
Serverless:   GET - model - https://xxx.yyy.zzz.amazonaws.com/dev/model
Serverless:   POST - model - https://xxx.yyy.zzz.amazonaws.com/dev/model
Serverless:   OPTIONS - model - https://xxx.yyy.zzz.amazonaws.com/dev/model
```

copy this URL. So edit `client-sample/config.json` file and replace the value of `"endpoint"` to the copied URL:

```json
{
  "endpoint": "https://xxx.yyy.zzz.amazonaws.com/dev/model"
}
```

You are ready to start client app! Finally exec the following, and open `http://localhost:8080`!

```sh
cd client-sample
npm i
npm start
```

## License

This software is released under the MIT License, see LICENSE.txt.
