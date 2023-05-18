import React from 'react'

const Sesion = () => {
  return (
    <div id="container">
        <form>
            <label htmlFor="name">Username:</label>
            <input type="name"/>
            <label htmlFor="username">Password:</label>
            <p><a href="#">Forgot your password?</a></p>
                <input type="password"/>
            <div id="lower">
                <input type="checkbox"/><label className="check" for="checkbox">Keep me logged in</label>
                <input type="submit" value="Login"/>
            </div>
        </form>
    </div>
  )
}

export default Sesion