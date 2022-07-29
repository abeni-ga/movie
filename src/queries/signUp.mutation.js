import { gql } from "@apollo/client";

export const SIGN_UP =gql`
mutation SignUp($signUp:SignUpInput!){
  signUp(SignUpInput:$signUp){
    _id
    name
    email
    phone
    token
  }
}
`;