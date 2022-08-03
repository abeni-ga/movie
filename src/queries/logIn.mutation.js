import { gql } from "@apollo/client";

export const LOG_IN = gql`
mutation logIn($logIn:LogInInput!){
  logIn(LogInInput:$logIn){
    name,
    email
    phone
  }
}
`;