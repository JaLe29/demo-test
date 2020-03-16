import React, {useState, useCallback} from 'react'
import ApolloClient from 'apollo-boost'
import {useQuery, useMutation} from '@apollo/react-hooks'
import {ApolloProvider} from '@apollo/react-hooks'
import TextArea from '../TextArea'
import {gql} from 'apollo-boost'
import Comment from './../Comment'

const API = 'https://suite.chimp.click/graphql'

const client = new ApolloClient({uri: API})

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
	const {code, authKey} = props

	const [clientData, setClientData] = useState([])
	const {loading, data} = useQuery(GET_COMMENTS, {variables: {code}, context: {headers: {authorization: authKey}}})
	const [addMessage] = useMutation(ADD_COMMENT)
	const [inputState, setInputState] = useState('ready')

	const handleSubmit = useCallback(
		async value => {
			setInputState('sending')
			const response = await addMessage({variables: {text: value, code}, context: {headers: {authorization: authKey}}})
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
			<Comments authKey={'835b553fb710a95a026c790dd54eb97b70efa3993f9d22ef2599be4a354153e0'} code={'about'} />
		</ApolloProvider>
	)
}

export default CommentsWrapper
