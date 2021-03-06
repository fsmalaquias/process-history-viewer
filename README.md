# Camunda Process Instance Activity History Viewer

This project uses REST APIs from Camunda Community Edition for list and detail Process Instances

https://docs.camunda.org/manual/7.15/reference/rest/

## Highlights 14.02.2022

- Error handling
- Variable listing on Activity Details

## Run the Project

In the project directory, you can run:

### `yarn install`

Create a .env file in your root folder and configure your base endpoint like the example below:

### `REACT_APP_BASE_URL = 'http://myapi.endpoint'`

And then run your project

### `yarn start`

### Custom internal link

If you want link the item to a internal system url, use use the .env variable below
The value used is BusinessKey and the link is shown on it

### `REACT_APP_CUSTOM_DETAIL_URL = 'http://mysystem.link/:businessKey'`


## Warnings

When you run it in localhost, maybe you will need add a CORS extension in your browser
