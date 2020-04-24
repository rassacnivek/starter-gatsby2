import React, { useState } from 'react'

const NewsLetter = () => {
  const [inputForm, setInputForm] = useState({
    email: ""
  })

  const handleChange = (e) => {
    setInputForm({
      [e.target.name]: e.target.value
    })
  }

  const submitForm = (e) => {
    e.preventDefault()
    console.log(inputForm)
  }

  return (
    <div>
      <form onSubmit={submitForm}>
        <input type="email" value={inputForm.email} name="" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default NewsLetter