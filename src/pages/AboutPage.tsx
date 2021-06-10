import React from 'react'
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
  const history = useHistory()

  return (
    <>
    <h1>About Page</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et laborum itaque sed aliquam voluptas, commodi at pariatur. Dignissimos asperiores rerum sit expedita, iste dolores, adipisci, sint consequatur tempore animi doloremque?</p>
    <button className="btn" onClick={() => history.push('/')}>Back to ToDos</button>
    </>
  )
}