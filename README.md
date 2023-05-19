# strapi-provider-aws-mailer
==========

Strapi email provider plugin to send emails through Amazon SES Service

## Installation

`npm install strapi-provider-aws-mailer --save`

## Usage

**Path -** `./config/plugins.js`

```js
  email: {
    config: {
      provider: "strapi-provider-aws-mailer",
      providerOptions: {
        key: env("SES_USER"),
        secret: env("SES_PASSWORD"),
      },
      settings: {
        defaultFrom: "noreply@domain.com",
        defaultReplyTo: "noreply@domain.com",
      },
    },
  }
```


