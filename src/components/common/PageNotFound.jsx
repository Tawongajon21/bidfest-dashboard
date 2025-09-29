import React from 'react'
import { Link } from 'react-router-dom';
function PageNotFound({data}) {
  console.log(data);
  return (
   
    <div class="container-xxl container-p-y">
    <div class="misc-wrapper">
      <h2 class="mb-2 mx-2">Page Not Found :(</h2>
      <p class="mb-4 mx-2">Oops! 😖 You have come to a wrong page.</p>
      {
data ?    <Link to="/home" class="btn btn-primary">Back to home</Link> :
<Link to="/login" class="btn btn-primary">Login</Link>
      }
    
      <div class="mt-3">
        <img
          src="../assets/img/illustrations/page-misc-error-light.png"
          alt="page-misc-error-light"
          width="500"
          class="img-fluid"
          data-app-dark-img="illustrations/page-misc-error-dark.png"
          data-app-light-img="illustrations/page-misc-error-light.png"
        />
      </div>
    </div>
  </div>
  

  )
}

export default PageNotFound