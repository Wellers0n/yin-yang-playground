<p align="center">
    <img src="./../client/src/assets/images/backend.png" height="130"/>
</p>
<p align="center">
    <img src="https://img.shields.io/github/package-json/v/wellers0n/yin-yang-playground?style=flat-square"/>
    <img src="https://img.shields.io/github/last-commit/wellers0n/yin-yang-playground?style=flat-square"/>
    <img src="https://img.shields.io/github/license/wellers0n/yin-yang-playground?style=flat-square"/>
    <a href="https://twitter.com/wellers0n_" target="_blank">
        <img src="https://img.shields.io/twitter/url/https/wellers0n_.svg?style=social"/>
    </a>
</p>

<p>
   <h1 align="center">Backend</h1>
<p/>
    
<br/>

## Server package  
  
The client uses graphql and koa to build back-end

## Routes

### Queries

#### me
```graphql
me {
  id
  _id
  name
  description
  email
}
```

#### User
```graphql
user {
  id
  _id
  name
  description
  email
}
```

#### Users[Array]
```graphql
users {
  id
  _id
  name
  description
  email
}
```

### Mutations

#### UserLoginMutation
```graphql
UserLoginMutation(input: {email: "test@gmail.com", password: "test"}) {
  token
  message
}
```

#### UserRegisterMutation
```graphql
UserRegisterMutation(input: {email: "test@gmail.com", password: "test", description: "test", name: "test name"}) {
  token
  message
}
```

#### UserDeleteMutation
```graphql
UserDeleteMutation(input: {id: 1}) {
  users
  message
}
```

#### UserUpdateMutation
```graphql
UserUpdateMutation(input: {id:1, email: "test@gmail.com", description: "test", name: "test name"}) {
  users
  message
}
```

## Initing in the your PC

- For clone the project `git clone https://github.com/Wellers0n/yin-yang-playground.git`
- Enter in the folder `cd yin-yang-playground/packages/server`
- To install project dependency: `yarn install`
- After the installation of the dependencies `yarn start` in the default directory
