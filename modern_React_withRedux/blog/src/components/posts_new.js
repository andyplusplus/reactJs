import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {
  render() {
    const { fields: {title, categories, content}, handleSubmit } = this.props;
    // const handleSubmit = this.props.handleSubmit;
    const title1 = this.props.fields.title;
    //console.log(title);
    //console.log(title1);
    console.log(this.props);

    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create A New</h3>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
        </div>

        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
        </div>

        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control" {...content} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

/*
connect:
  1st: mapStateToProps
  2nd: mapDispatchToProps
reduxForm:
  1st: form config
  2nd: mapStateToProps
  3rd: mapDispatchToProps
*/
export default reduxForm({
  form: 'PostNewForm',
  fields: ['title', 'categories', 'content']
}, null, {createPost})(PostsNew);

// user types something in ... ... record it on application state
/*
state === {
  form: {
    PostsNewForm: {
      title: '...',
      categories: '...',
      content: '...'
    }
  }
}
*/
