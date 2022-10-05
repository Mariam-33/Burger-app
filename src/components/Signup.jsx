import '../assets/stylesheets/login.css'
const SignUp = () => {
  return (
    <div className='container'>
      <form className='form'>
        <div className='content'>
            <>
              <div>
                <input type='email' className='input' placeholder='Email Address'  name = "email" />
              </div>
              <div>
                <input type='password' className='input' placeholder='Password'  name = "pass"/>
              </div>
            </>
          <div>
            <button type='submit'className='btn-login submit-btn mt-4'>
              REGISTER
            </button>
            <br/>
          </div>
          <div>
            <button type='submit'className='btn-login submit-btn mt-4'>
            <a href="login">LOGIN</a>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
export default SignUp
