import '../assets/stylesheets/login.css'
const Login = () => {
  return (
    <div className='container'>
      <form className='form'>
        <div className='content'>
            <>
              <div>
                <input type='email' className='input' placeholder='Email Address' name = "email"  />
            </div>
              <div>
                <input type='password' className='input' placeholder='Password' name = "pass"/>
            </div>
            </>
          <div>
            <button type='submit'className='btn-login submit-btn mt-4'>
              SUBMIT
            </button>
          </div>
          <div>
            <button type='submit'className='btn-login submit-btn mt-4'>
            <a href="Signup">REGISTER</a>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login
