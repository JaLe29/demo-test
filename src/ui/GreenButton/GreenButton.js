import styles from './GreenButton.module.scss'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import ApolloClient from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { ApolloProvider } from '@apollo/react-hooks'
import Comment from '../../components/Comments'

export const API = 'http://localhost:8080/graphql'

const client = new ApolloClient({
  uri: API,
  headers: {
    Authorization: '785aa3c19923d26170b19e05baa507adfb2beeb5234449f58f30f21368180048'
  }
})

const GET_COMMENTS = gql`
  query getComments($code: String!) {
    getComments(where: { code: $code }) {
      id
      text
      createdAt
    }
  }
`

function Child() {
  const [value, setValue] = useState(0)
  const { loading, data } = useQuery(GET_COMMENTS, { variables: { code: '/xxxxxxxxxxxx' } })

  console.log({ loading, data }) // debug print

  return (
    <div>
      <button
        className={styles.button}
        onClick={() => {
          setValue(value + 1)
        }}>
        {value}
      </button>
      <Comment />
    </div>
  )
}

function GreenButton({ onClick, text }) {
  return (
    <ApolloProvider client={client}>
      <Child />
    </ApolloProvider>
  )
}

GreenButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default GreenButton
