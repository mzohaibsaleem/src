import React from 'react'
import Link from 'antd/es/typography/Link'



export default function Reg() {
  
  return ( <>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <div className='card mt-5 p-3' id='logincard'>
                    <div className='text-center'><h3>Register</h3></div><hr/>
                    <form>
                          <div class="mb-3">
                            <label for="firstname" class="form-label">First Name</label>
                            <input type="text" class="form-control" id="" />
                            </div>
                            <div class="mb-3">
                            <label for="" class="form-label">Last Name</label>
                            <input type="text" class="form-control" id=""/>
                            </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1"/>
                        </div>
                        <button type="submit"  class="btn btn-primary my-3 w-100" >Register</button>
                        <p id='regtext'>Already acoount? <span><Link to="/login"><b>login</b></Link></span></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>

  </> 
  )
}

