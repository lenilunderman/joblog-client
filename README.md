![Website](https://i.imgur.com/wOi8SOX.png)

## Description of Job Logger Application

This application is perfect to keep track of your job search. The user is able to create an account, view, edit, delete a job listing and more importantly, keep themselves organized to find that dream job.


## Important Links

- [Job Logger Client Repo](https://github.com/lenilunderman/joblog-client)
- [Job Logger API Repo](https://github.com/lenilunderman/joblog-api)
- [Deployed Job Logger API](https://radiant-sierra-86306.herokuapp.com)
- [Deployed Job Logger Client](https://lenilunderman.github.io/joblog-client/#/)

#### Technologies used for the Application.

- HTML
- SCSS
- JavaScript
- React
- Axios
- Bootstrap
- Passport
- Mongo DB

## User Stories

- As a user, I want to be able to sign in/up.
- As a user, I want to be able to change my password.
- As a user, I want to be able to login/logout successfully.
- As a user, I want to be able to create a new < resource >.
- As a user, I want to be able to read multiple < resources >.
- As a user, I want to be able to update a < resource > I own.
- As a user, I want to be able to delete a < resource > I own.

## Set up and installation
1. Download this application.
2. Unzip the application.
3. Move into the folder and run the command `git init`.
4. Install dependencies with `npm install`.
5. `git add` and `git commit` your changes.
6. Run the development server with `npm start`.
7. Optional download of the  [API Back-end](https://github.com/lenilunderman/joblog-api "API Back-end JobLogger")

## Deployment

Before deploying, you first need to make sure the  `homepage`  key in your  `package.json`  is pointing to the correct value. It should be the url of your deployed application.

To deploy you should first make sure you are on the  `master`  branch with a clean working directory, then you can run  `npm run deploy`  and wait to see if it runs successfully.

## Structure

The top-level  `App`  component stores the currently authenticated user in state, as well as data related to the flash messages.  `App`  renders the  `Header`  component, and a list of routes, each of which render a component from  `src/components`. The  `src/api`  directory has a component file,  `auth.js`, which contains all the needed  `axios`  calls pertaining to authentication.

## Features

### `<AuthenticatedRoute />`
This application contains a handy component for creating routes that require a
user to be authenticated before visiting. This component lives in
`src/auth/components/AuthenticatedRoute.js` and is already required in `App`.
It's a thin wrapper around React Router's `<Route />` component. The only
difference is that it expects a prop called `user`, and if that prop is falsy,
it will render a `<Redirect />` that takes the user to `/`. **To use
it, you must pass it the user as a prop!**

### `<AutoAlertDismiss />` Component

This application also already contains a component that displays user messages.
Messages are configurable via redux actions.  This component can be found in
`src/components/AutoAlertDismiss/AutoAlertDismiss.js`. **There is no need to add
this component to your app. It is already required in `App`.**  A single
component instance is used to manage all alerts application-wide. The alert can be used by passing the `alertMsg` method to a rendered route.  The `alertMsg` method expects an object with a `heading`, `message`, and a `variant` property.

### `src/apiConfig.js`

This file will determine whether you're in a production or development
environment and choose an API URL accordingly. Don't forget to replace the
`production` URL with your deployed API's URL.

## Wireframes
![Wireframe](https://i.imgur.com/sxuZhXV.png)

## Future Updates

For future updates, I would like to add a theme color and options to export the file to XML or similar and add a job search bar.
