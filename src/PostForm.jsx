import React from 'react'
import {Formik, Form, Field} from 'formik'

const handleSubmit = (values) => {
  fetch('https://extremely-cool-shit.herokuapp.com/posts', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      date: values.date,
      time: values.time,
      title: values.title,
      description: values.description,
      body: values.body,
      warnings: values.warnings.split(", ")
    }),
  })
    .then((response) => response.json())
    .then(console.log)
}

const PostForm = () => {
  return (
    <section>
      <Formik
        initialValues={{
          date: "",
          time: "",
          title: "",
          description: "",
          body: "",
          warnings: ""
        }}
        onSubmit={(values, {resetForm}) => {
          handleSubmit(values)
          resetForm({values: ""})
        }}
      >
        {({isSubmitting}) => (
          <Form>
            <h3>Write a new post</h3>

            <label htmlFor="date">Date</label>
            <Field name="date" type="text" autoComplete="off" />

            <br />

            <label htmlFor="time">Time</label>
            <Field name="time" type="text" autoComplete="off" />

            <br />

            <label htmlFor="title">Title</label>
            <Field name="title" type="text" autoComplete="off" />

            <br />

            <label htmlFor="description">Description</label>
            <Field component="textarea" name="description" autoComplete="off" />

            <br />

            <label htmlFor="body">Body</label>
            <Field component="textarea" name="body" autoComplete="off" />

            <br />

            <label htmlFor="warnings">Trigger warnings</label>
            <Field component="textarea" name="warnings" autoComplete="off" />

            <br />

            <button type="submit" disabled={isSubmitting}>
              Create post
            </button>
          </Form>
        )}
      </Formik>
    </section>
  )
}

export default PostForm