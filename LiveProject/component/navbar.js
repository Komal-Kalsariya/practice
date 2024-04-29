 const navBar=()=>{
    return `<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
    <a href="/LiveProject/index.html">
        <img src="/LiveProject/images/logo-gold-letter-beauty-fashion-business-des-vector-23900413.avif" class="logo"  alt="">
    </a>
      
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-centre">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/LiveProject/index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/LiveProject/pages/admin.html">AddProduct</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/LiveProject/pages/product.html">Product</a>
          </li>
          <li class="nav-item">
           
          </li>
        </ul>
        <form class="d-flex" role="search" id="searchform">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <i class="fa-solid fa-magnifying-glass m-3" id="search" type="submit"></i> 
        </form>
        <a class="nav-link" href="/LiveProject/pages/login.html"><i class="fa-regular fa-user"></i></a>
     
        <a class="nav-link" href="/LiveProject/pages/cart.html"><i class="fa-solid fa-cart-shopping m-4"></i></a>
      </div>
    </div>
  </nav>`
 }
 export default navBar