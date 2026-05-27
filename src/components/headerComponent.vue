<template>
<nav class="container navContainer navbar navbar-expand-lg "> 
  <div class="container-fluid" style="margin: 0!important; padding: 0!important;">
    <router-link to="/" class="navbar-brand" style="margin: 0!important; font-size: 1rem;">
      <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#228B22" class="bi bi-leaf-fill d-inline-block align-text-top" viewBox="0 0 16 16">
        <path d="M1.4 1.7c.217.289.65.84 1.725 1.274 1.093.44 2.885.774 5.834.528 2.02-.168 3.431.51 4.326 1.556C14.161 6.082 14.5 7.41 14.5 8.5q0 .344-.027.734C13.387 8.252 11.877 7.76 10.39 7.5c-2.016-.288-4.188-.445-5.59-2.045-.142-.162-.402-.102-.379.112.108.985 1.104 1.82 1.844 2.308 2.37 1.566 5.772-.118 7.6 3.071.505.8 1.374 2.7 1.75 4.292.07.298-.066.611-.354.715a.7.7 0 0 1-.161.042 1 1 0 0 1-1.08-.794c-.13-.97-.396-1.913-.868-2.77C12.173 13.386 10.565 14 8 14c-1.854 0-3.32-.544-4.45-1.435-1.124-.887-1.889-2.095-2.39-3.383-1-2.562-1-5.536-.65-7.28L.73.806z"/>
      </svg>
      BloopUrl
    </router-link>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>


    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto gap-3 align-items-center">   
            <li class="nav-item">
                <router-link to="/about" class="nav-link">About</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/" class="nav-link">Contact</router-link>
            </li>
        
        <!-- Profile -->
        <!--
        <li>
          <router-link to="/login">
            <button class="btn btn-primary">Login</button>  
          </router-link>
          
        </li>
        -->
            <li>
            <!-- d-none d-lg-block displays nothing on screens below lg size -->
                <div class="btn-group dropstart d-none d-lg-block">
                    <button class="btn p-0" title="Other options" type="button" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#4a4a4a" class="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                        </svg>
                    </button>
                    <ul class="dropdown-menu">
                    <li>
                        <a class="dropdown-item d-flex align-items-center gap-2 py-2" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#8a8a8a" class="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                        </svg>
                            Profile
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item d-flex align-items-center gap-2 py-2" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#8a8a8a" class="bi bi-link-45deg" viewBox="0 0 16 16">
                            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
                            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
                        </svg>
                            Links
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item d-flex align-items-center gap-2 py-2" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#8a8a8a" class="bi bi-gear" viewBox="0 0 16 16">
                            <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
                            <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
                        </svg>
                            Settings
                        </a>
                    </li>
                    <li><hr class="p-0" style="color: gray;"></li>
                    <li>
                        <a class="dropdown-item d-flex align-items-center gap-2 py-2" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#8a8a8a" class="bi bi-people" viewBox="0 0 16 16">
                            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
                        </svg>  
                            Help center
                        </a>
                    </li>
                    <li>
                        <button @click="logOut()">
                            <a class="dropdown-item d-flex align-items-center gap-2 py-2" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#8a8a8a" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
                                <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
                            </svg>
                            Sign out
                            </a>
                        </button>
                    </li>
                    </ul>   
                </div>  
            </li>
        </ul>
      
    </div>
  </div>
</nav>

</template>

<script>
export default{
  data(){
    return {
      
    }
  },
  methods: {       
      async logOut(){
        
        const token = decodeURIComponent(
            document.cookie
                .split('; ')
                .find(row => row.startsWith('XSRF-TOKEN='))
                .split('=')[1]);

        const response = await fetch("http://localhost:8000/api/logout", {
            method: "POST",
            credentials: "include",
            headers: {
                "Accept": "application/json",
                "X-XSRF-TOKEN": token
            }
        });

        const data = await response.json();
        
        console.log("Response:", data);

        if (response.ok) {
            this.$router.push("/login");
            return;
        }

        console.log("Login failed:", data);
      }
  }
}
</script>