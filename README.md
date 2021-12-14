# **Enviromental platform module frontend**
This repository contains a web application for an IoT management platform. It is developed using `Angular` and `TypeScript`. If you are looking for the API calls and documentation, [click here](https://github.com/Losina24/enviromental-module-api).

# **Contents**
- [**Project**](#enviromental-platform-module-frontend)
- [**Contents**](#contents)
- [**Pre requirements**](#pre-requirements)
- [**Getting started**](#getting-started)
- [**Development server**](#development-server)
- [**Code scaffolding**](#code-scaffolding)
- [**Running unit tests**](#running-unit-tests)
- [**Deployment**](#deployment)

# **Pre requirements**
This API is being developed using `Angular` and `TypeScript` so you need to be installed `npm` and `Node.js`. 

- Install [Node.js](https://nodejs.org/en/download/)
- Install Angular:

```js
$ npm install -g @angular/cli
```

# **Getting started**

1. Clone the repository

```js
$ git clone https://github.com/Losina24/enviromental-module-front
```

2. Install node modules

```js
$ cd <path-to-directory>/enviromental-module-front
$ npm install
```

3. Run Angular

```js
$ ng serve --open

// If the port 4200 is already in use
$ ng serve --port {port} --open

// If you want to run the application without open it in the browser
$ ng serve
```

4. `Optional` If you want to use the development API, you must to run it. For more information, see at API docs.

```js
// On API directory
$ npm run dev
```

# Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

# Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

# Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

# **License**
All the code in this repository is owned by [Alejandro Losa](https://alejandrolosa.es/). <br>
Copyright © 2021, Alejandro Losa.
