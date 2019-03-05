
based on medium post https://medium.com/react-native-training/react-native-with-apollo-server-and-client-part-1-efb7d15d2361

trying to made connection bridge between apollo server with react native

# Apollo Server

#### Using Apollo + GraphQL + MongoDB + Express

To get setup:
download repository

cd into repository

`cd apolloserver`

install dependencies

`yarn`

Start MongoDB Server

`mongod`

Start project server

`node app.js`

Open GraphQL Explorer on http://localhost:8080/graphiql

Try submitting a query:
```
query {
  users(name: "Emma") {
    first_name
    last_name
    avatar
  }
}

```


# Apollo Client

After setting the apollo server and get setup

download repository

cd into repository

`cd apolloclient`

install dependencies

`yarn`

run project

`react-native run-ios` or `react-native run-android`

##ScreenShot

<img src="https://github.com/kellyad/graphql-mongodb-react-native/blob/master/screenshot/firstScreen.png"
width="256">&nbsp;&nbsp;&nbsp;
<img src="https://github.com/kellyad/graphql-mongodb-react-native/blob/master/screenShot/secondScreen.png"
width="256">&nbsp;&nbsp;&nbsp;

 ### Tech Stack

 * [x] React Native
 * [x] GraphQL
 * [x] MongoDB
