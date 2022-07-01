import React, { useEffect, useState, useContext } from 'react'
import Spinner from '../layouts/Spinner'
import User from './User'
import GitContext from '../../context/github/GitContext'


const UsersResults = () => {
    const {loading, users} = useContext(GitContext)
  if (!loading) {
    return (
        <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
            {users.map(user =>(<User key={user.id} user={{login:user.login, avatar_url:user.avatar_url}}/>))}
        </div>
      )
  }
  else {
      return (
          <>
            <Spinner/>
          </>
      )
  }
}

export default UsersResults