import { gql } from '@apollo/client';

export const LOGIN = gql`
mutation login($email: String!, $password: String!){
    login(email: $email, password: $password) {
      firstName
      lastName
      email
      password
      address
      state
      zipCode
    }
  }
`

export const CREATE_USER = gql`
  mutation createUser($firstName: String!, $lastName: String!, $email: String!, $password: String!, $address: String, $state: String, $zipCode: String) {
    createUser(firstName: $firstName, lastName: $lastName, email: $email , password: $password, address: $address, state: $state, zipCode: $zipCode) {
      firstName
      lastName
      email
      password
      address
      state
      zipCode
  }
}
`