const typeDefinitions = `
type President {
  name: String
  party: String
  term: String
}

type User {
  id: String
  first_name: String
  last_name: String
  avatar: String
}
type RootQuery {
  president(name: String, party: String, term: String): President, 
  users(id: String, first_name: String, last_name: String, avatar: String): User
}
schema {
  query: RootQuery
}
`;

module.exports = [typeDefinitions];
