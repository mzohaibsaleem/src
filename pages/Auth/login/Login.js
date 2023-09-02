import React from 'react'

export default function Login() {
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <div className='card mt-5 p-3' id='logincard'>
                    <div className='text-center'><h3>Login</h3></div><hr/>
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1"/>
                        </div>
                        
                        <button type="submit"  class="btn btn-primary my-3 w-100" >Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
