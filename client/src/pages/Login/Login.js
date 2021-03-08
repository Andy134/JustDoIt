
function Login() {
    
    return (
        <>
            <div>
                <h3>Login</h3>
            </div>

            <div>
                <div>
                    Email <input type="text" name="email"  />
                </div>
                <br/>
                <div>
                    Password <input type="password" name="password"  />
                </div>
                <br/>
                <div>
                    <button style={{ color: 'red' }}>Login</button>
                </div>
            </div>

        </>
    )
}

export default Login