# Basic Node API Scaffold

Welcome to your `Basic Node API Repository`. Use this to start your own Greenfield Project using nodejs, express and common industry standards.

This repository assumes a handful of industry practices and standards. We strive to keep you on the bleeding edge of the industry and as a result, we have made some opinions for you so that you don't have to; you're welcome.

Read more at <https://docs.labs.lambdaschool.com/labs-api-strarter/>

[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=labs-api-starter&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=labs-api-starter)

## Requirements

Labs teams must follow all [Labs Engineering Standards](https://labs.lambdaschool.com/topics/node-js/).


## Getting Started

### Enviornment Variables

- `PORT` - API port (optional, but helpful with FE running as well)
  - The following ports are whitelisted for use with okta
    - 3000
    - 8000
    - 8080
- `DS_API_URL` - URL to a data science api. (eg. <https://ds-bw-test.herokuapp.com/>)
- `DS_API_TOKEN` - authorization header token for data science api (eg. SUPERSECRET)
- `DATABASE_URL` - connection string for postgres database
- `OKTA_URL_ISSUER` - The complete issuer URL for verifying okta access tokens. `https://example.okta.com/oauth2/default`
- `OKTA_CLIENT_ID` - the okta client ID.

See .env.sample for example values

### ENDPOINTS

#### Cases Endpoints
| Request | URL | Description | Returns | Ready |
| ------- | --- | ----------- | ------- | ------- |
| POST | api/cases/ | post a new case| the new case Obj | |
| POST | api/cases/:id/tags | post a new tag to a specified case | array with tags | |
| GET | api/cases/ | gets all cases | array of all cases | |
| GET | api/cases/:id | gets the case with a specified ID | Obj with case | |
| GET | api/cases/:id/tags | gets all tags for the case with a specified ID | array with tags | |
| PUT | api/cases/:id | updates case with specified ID | new case Obj | |
| PUT | api/cases/:id/tags | updates tags for case with specified ID | new case Obj | |
| DELETE | api/cases/:id | deletes a case with specified ID | number of deleted objects | |

#### GET CASE OBJECT

```
{
  "case_id":"int",
  "user_id":"int",
  "public":"bool",
  "case_title":"string",
  "case_number":"int",
  "judge_name":"string",
  "outcome":"string (or bool)",
  "country_of_origin":"string",
  "pdf_file":"string (pdf file link)",
  "tags": [
    {
      "main_category":"string from seeds",
      "sub_category":"string from seeds",
      "tag_name":"string",
    },
    {
      "main_category":"string from seeds",
      "sub_category":"string from seeds",
      "tag_name":"string",
    }
  ]
}
```

#### Post Case Object
```
{
  "case_id":"int",
  "user_id":"int",
  "public":"bool",
  "case_title":"string",
  "case_number":"int",
  "judge_name":"string",
  "outcome":"string",
  "country_of_origin":"string",
  "pdf_file":"string (pdf file link)"
}
```

#### Tags Endpoints
| Request | URL | Description | Returns | Ready |
| ------- | --- | ----------- | ------- | ------- |
| POST | api/tags/ | post a new tag| the new tag Obj | |
| GET | api/tags/ | gets all tags | array of all tags | |
| GET | api/tags/:main_category_id | gets the tag with a specified main category ID | array with tags | |
| GET | api/tags/:sub_category_id | gets the tag with a specified sub category ID | array with tags | |
| PUT | api/tags/:id | updates tag with specified ID | new tag Obj | |
| DELETE | api/tags/:id | deletes a tag with specified ID | number of deleted objects | |

#### Post Tag Object
```
{
  "main_category_id":"int",
  "sub_category_id":"int",
  "tag_name":"string"
}
```

#### Tags_By_Cases Endpoints
| Request | URL | Description | Returns | Ready |
| ------- | --- | ----------- | ------- | ------- |
| POST | api/tags_by_case/ | post a new tags_by_case| the new tags_by_case Obj | |
| GET | api/tags_by_case/:id | gets the tags_by_case with a specified case ID | Obj with tags_by_case | |
| DELETE | api/tags_by_case/:id | deletes a tags_by_case with specified ID | number of deleted objects | |

#### Post tags_by_case Object
```
{
  "case_id":"int ",
  "tag_id":"int"
}
```

#### main_categories Endpoints
| Request | URL | Description | Returns | Ready |
| ------- | --- | ----------- | ------- | ------- |
| POST | api/main_categories/ | post a new main_categories| the new main_categories Obj | |
| GET | api/main_categories/ | gets the main_categories | array with main_categories | |
| DELETE | api/main_categories/:id | deletes a main_categories with specified ID | number of deleted objects | |

#### GET main_categories Object
```
{
  "id":"int",
  "main_category_name":"string"
}
```

#### sub_categories Endpoints
| Request | URL | Description | Returns | Ready |
| ------- | --- | ----------- | ------- | ------- |
| POST | api/sub_categories/ | post a new sub_categories| the new sub_categories Obj | |
| GET | api/sub_categories/:id | gets the sub_categories for main_cateogory id| array with sub_categories | |
| DELETE | api/sub_categories/:id | deletes a sub_categories with specified ID | number of deleted objects | |

#### GET sub_categories Object
```
{
  "id":"int",
  "main_category_name":"string",
  "sub_category_name":"string"
}
```

### Setup postgres

There are 3 options to get postgresql installed locally [Choose one]:

1. Use docker. [Install](https://docs.docker.com/get-docker/) for your platform
    - run: `docker-compose up -d` to start up the postgresql database and pgadmin.
    - Open a browser to [pgadmin](http://localhost:5050/) and you should see the Dev server already defined.
    - If you need to start over you will need to delete the folder `$ rm -rf ./data/pg` as this is where all of the server data is stored.
      - if the database `api-dev` was not created then start over.
2. Download and install postgresql directly from the [main site](https://www.postgresql.org/download/)
    - make note of the port, username and password you use to setup the database.
    - Connect your client to the server manually using the values previously mentioned
    - You will need to create a database manually using a client.
    - Make sure to update the DATABASE_URL connection string with the values for username/password, databasename and server port (if not 5432).
3. Setup a free account at [ElephantSQL](https://www.elephantsql.com/plans.html)
    - Sign up for a free `Tiney Turtle` plan
    - copy the URL to the DATABASE_URL .env variable
    - make sure to add `?ssl=true` to the end of this url

### Setup the application

- create your project repo by forking or using this as a template.
- run: `npm install` to download all dependencies.
- run: `cp .env.sample .env` and update the enviornment variables to match your local setup.
- run: `npm run knex migrate:latest` to create the starting schema.
- run: `npm run knex seed:run` to populate your db with some data.
- run: `npm run tests` to confirm all is setup and tests pass.
- run: `npm run watch:dev` to start nodemon in local dev enviornment.

> Make sure to update the details of the app name, description and version in
> the `package.json` and `config/jsdoc.js` files.

## Contributing

See the [contributing doc](https://github.com/Lambda-School-Labs/labs-api-starter/blob/main/CONTRIBUTING.md)
for more info.
