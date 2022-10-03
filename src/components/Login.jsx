import '../stylesheets/login.css'

const Login = () => {
  return (
    <div className='Auth-form-container'>
      <form className='Auth-form'>
        <div className='Auth-form-content'>
            <>
              <div>
                <input type='email' className='input-feild' placeholder='E-mail Address' />
              </div>
              <div>
                <input type='password' className='input-feild' placeholder='Password' />
              </div>
            </>
          <div>
            <button type='submit'className='btn-login submit-btn mt-4'>
              SUBMIT
            </button>
          </div>
          <div>
            <button type='submit' className='btn-login signin-btn mt-4'>
              SIGNIN
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
export default Login
