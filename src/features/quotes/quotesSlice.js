import { v4 as uuid } from 'uuid';

// Action Creators
// TODO: Create action creators as defined in tests
export const addQuote = (quote) => {
  return {
    type: "quotes/add",
    payload: quote,
  }
} 

export const removeQuote = (quoteId) => {
  return {
    type: "quotes/remove",
    payload: quoteId,
  }
}

export const upvoteQuote = (quoteId) => {
  return {
    type: "quotes/upvote",
    payload: quoteId,
  }
}

export const downvoteQuote = (quoteId) => {
  return {
    type: "quotes/downvote",
    payload: quoteId
  }
}

// Reducer
const initialState = [];

export default function quotesReducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case "quotes/add":
      return [...state, payload];

    case "quotes/remove":
      return state.filter((quote) => quote.id !== payload);

    case "quotes/upvote":
      return state.map((quote) => {
        if (quote.id === payload) {
          return {
            ...quote,
            votes: quote.votes + 1,
          }
        } else {
          return quote 
        }}
        )
      // const upvotedQuote = state.find((quote) => quote.id === payload)
      // const updatedVotes = upvotedQuote.votes + 1 
      // const updatedQuote = {...upvotedQuote, votes: updatedVotes}
      // return [updatedQuote];
      
    case "quotes/downvote":
      return state.map((quote) => {
        if (quote.id === payload && quote.votes > 0) {
          return {
            ...quote,
            votes: quote.votes - 1,
          }
        } else {
          return quote
        }
      })
      // const downQuote = state.find((quote) => quote.id === payload)
      // if (downQuote.votes > 0) {
      //   const downVotes = downQuote.votes - 1
      //   const downdatedQuote = {...downQuote, votes: downVotes}
      //   return [downdatedQuote]
      // } else {
      //   return state
      // };

    default:
      break
  }
  return state;
}
