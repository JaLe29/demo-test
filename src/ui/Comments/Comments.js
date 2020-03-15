import React, { useState, useCallback } from 'react'
import ApolloClient from 'apollo-boost'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { ApolloProvider } from '@apollo/react-hooks'
import TextArea from '../TextArea'
import { gql } from 'apollo-boost'
import Comment from './../Comment'

const API = 'http://localhost:8080/graphql'

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

const ADD_COMMENT = gql`
  mutation createComment($text: String!, $code: String!) {
    createComment(data: { text: $text, code: $code }) {
      id
      text
      createdAt
    }
  }
`

const Comments = props => {
  console.log(props)
  const { code, authKey } = props

  const [clientData, setClientData] = useState([])
  const { loading, data } = useQuery(GET_COMMENTS, { variables: { code }, context: { Authorization: authKey } })
  const [addMessage] = useMutation(ADD_COMMENT)
  const [inputState, setInputState] = useState('ready')

  const handleSubmit = useCallback(
    async value => {
      setInputState('sending')
      const response = await addMessage({ variables: { text: value, code }, context: { Authorization: authKey } })
      const comment = response.data.createComment
      setClientData([comment, ...clientData])
      setInputState('done')
    },
    [addMessage, authKey, clientData, code]
  )

  return (
    <div>
      <TextArea onSubmit={handleSubmit} inputState={inputState} setInputState={setInputState} />
      {loading ? (
        'LOADING'
      ) : (
        <>
          {clientData.length === 0 && data.getComments.length === 0 ? (
            'EMPTY'
          ) : (
            <>
              {clientData.map(c => (
                <Comment key={c.id} {...c} />
              ))}
              {data.getComments.map(c => (
                <Comment key={c.id} {...c} />
              ))}
            </>
          )}
        </>
      )}
    </div>
  )
}

const CommentsWrapper = () => {
  return (
    <ApolloProvider client={client}>
      <Comments authKey={'785aa3c19923d26170b19e05baa507adfb2beeb5234449f58f30f21368180048'} code={'about'} />
    </ApolloProvider>
  )
}

export default CommentsWrapper
