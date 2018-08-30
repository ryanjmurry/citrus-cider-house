# Citrus Cider House

#### Epicodus Angular Team Project, Aug 30th, 2018

#### Ryan Murry, Reese Glasscock, Nate Cottle, Elly Maimon

## Description

A website concept for a cider house using Angular 6. Features include user reviews, cider list, admin functionality, and jukebox for users to add songs to cider house playlist.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

### Installing

Complete the steps below to clone the project on to your personal machine and get the application running.

Clone the repo from github to your machine

```
git clone https://github.com/ryanjmurry/angular-team-week.git
```

This program is dependent that you already have node installed on your machine and node package manager. Afterwards run the install command.

```
npm install
```
#### Api Key Installation
##### Firebase
 Go to https://console.firebase.google.com/ to sign up and create your database for your project. Select add Firebase to your web app to view api credentials.

##### Jukebox Api
Go to https://theaudiodb.com/ to sign up and request an api key.

##### app/api-keys.ts

Create a file in the root of your app folder named api-keys.ts. Paste in the information for adding firebase as a web app and your jukebox api key.
Follow the pattern below for creating the file:
```
app/api-keys.ts

export const masterFirebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "YOUR_AUTH_DOMAIN_HERE",
  databaseURL: "YOUR_DATABASE_URL_HERE",
  projectId: "YOUR_PROJECT_ID_HERE",
  storageBucket: "YOUR_STORAGE_BUCKET_HERES",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID_HERE"
}

export const jukeboxAPIKey = "YOUR_API_KEY_HERE"
```

To run the program run the command from the project file:

```
npm run start
```

Point your browser to localhost:4200
```
open http://localhost:4200/
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
