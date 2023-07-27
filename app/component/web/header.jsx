import web_Head from "./head";

export default function web_Header(){
     return(
          <>
               <div class="bar row m-0 py-3 px-3">
                    <div class="col-lg-10">
                         <div class="box mt-1">
                              <input type="search"  placeholder="search any service"/>
                              <i class="fas fa-search"></i>
                         </div>
                    </div>
                    <div class="col-lg-2 mt-2">
                         <div class=" justify-content-between">
                              <i class="fab fa-twitter-square fa-2x text-primary"></i>
                              <i class="fab fa-facebook-square fa-2x text-primary"></i>
                              <i class="fab fa-instagram-square fa-2x text-primary"></i>
                              <i class="fab fa-whatsapp-square fa-2x text-primary"></i>
                              <i class="fab fa-vimeo-square fa-2x text-primary"></i>

                              <span class="menu float-end px-3 mt-sm-3">
                                   <i class="fas fa-bars fa-2x"></i>
                              </span>
                         </div>
                    </div>
               </div>
               <div class="header px-5 ml-4">
                    <div class="row justify-content-center align-items-baseline text-center m-0">
                         <nav class="ml-5">
                              <ul class="nav-list">
                                   <li class="ml-2">
                                        <a class="logo fw-bold" href="">Dondo</a>
                                   </li>
                                   <li class="mt-2">
                                        <a href="">Home</a>
                                   </li>
                                   <li class="mt-2">
                                        <a href="">Services</a>
                                   </li>
                                   <li class="mt-2">
                                        <a href="">Blockchain</a>
                                   </li>
                                   <li class="mt-2">
                                        <a href="">Eccomerce</a>
                                   </li>
                                   <li class="mt-2">
                                        <a href="">Mobile App</a>
                                   </li>
                                   <li class="mt-2">
                                        <a href="">FAQS</a>
                                   </li>
                                   <li class="mt-2">
                                        <a href="">About Us</a>
                                   </li>                              
                                   <li class="mt-2">
                                        <a href="">Contact us</a>
                                   </li>
                                   <li class="mt-2">
                                        <a href="">Login</a>
                                   </li>
                                   <li class="mt-2 ml-4">
                                        <button class="btn register-btn py-2 px-3">
                                             Register
                                        </button>
                                   </li>
                              </ul>
                         </nav>
                    </div>
               </div>
          </>
     );
}