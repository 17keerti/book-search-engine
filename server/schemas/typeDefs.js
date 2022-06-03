const { gql } = require("apollo-server-express");

const typeDefs = gql`
type user {
  _id: ID
  username: String
  email: String
  password: String
  savedBooks: []
}

type book {
  _id: ID
  authors: 
  description: String
  bookId: String
  image: String
  link: String
  title: String
}

type Auth {
  token: ID!
  user: User
}
`;
