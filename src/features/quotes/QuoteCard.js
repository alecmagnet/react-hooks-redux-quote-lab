import React from "react";
import { useDispatch } from "react-redux";
import { removeQuote, upvoteQuote, downvoteQuote } from './quotesSlice'


function QuoteCard({ quote }) {
  const { id, content, author, votes } = quote

  const dispatch = useDispatch()

  function onUpvote() {
    dispatch(upvoteQuote(id))
  }

  function onDownvote() {
    dispatch(downvoteQuote(id))
  }

  function onRemoveQuote() {
    dispatch(removeQuote(id))
  }

  return (
    <div>
      <div className="card card-inverse card-success card-primary mb-3 text-center">
        <div className="card-block">
          <blockquote className="card-blockquote">
            <p>{/*Render Quote Content*/content}</p>
            <footer>
              - author{" "}
              <cite title="Source Title">{/*Render Quote Author*/author}</cite>
            </footer>
          </blockquote>
        </div>
        <div className="float-right">
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example"
          >
            <button type="button" className="btn btn-primary" value={id} onClick={() => onUpvote()} >
              Upvote
            </button>
            <button type="button" className="btn btn-secondary" onClick={() => onDownvote()} >
              Downvote
            </button>
            <button type="button" className="btn btn-danger" onClick={() => onRemoveQuote()} >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div>Votes: {/*Render Quote Votes*/votes}</div>
        </div>
      </div>
    </div>
  );
}

export default QuoteCard;
