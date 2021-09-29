import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { addQuote } from "./quotesSlice";

function QuoteForm() {
  const [formData, setFormData] = useState({
    // set up a controlled form with internal state
    // look at the form to determine what keys need to go here
    content: "",
    author: "",
  });

  const dispatch = useDispatch()

  function handleChange(e) {
    // Handle Updating Component State
    setFormData({
      ...formData,
			[e.target.id]: e.target.value,      
    })
  }

  function handleSubmit(e) {
    // Handle Form Submit event default
    e.preventDefault()
    // Create quote object from state
    const newQuote = {
      ...formData,
      id: uuid(),
      votes: 0,
    }
    // Pass quote object to action creator
    dispatch(addQuote(newQuote))
    // Update component state to return to default state
    setFormData({
      content: "",
      author: "",
    })
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="panel panel-default">
            <div className="panel-body">
              <form className="form-horizontal" onSubmit={handleSubmit} >
                <div className="form-group">
                  <label htmlFor="content" className="col-md-4 control-label">
                    Quote
                  </label>
                  <div className="col-md-5">
                    <textarea
                      className="form-control"
                      id="content"
                      name="content"
                      value={formData.content}
                      onChange={e => handleChange(e)}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="author" className="col-md-4 control-label">
                    Author
                  </label>
                  <div className="col-md-5">
                    <input
                      className="form-control"
                      type="text"
                      id="author"
                      name="author"
                      value={formData.author}
                      onChange={e => handleChange(e)}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-md-6 col-md-offset-4">
                    <button type="submit" className="btn btn-default">
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuoteForm;
