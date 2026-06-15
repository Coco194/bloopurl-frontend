<template>
<!-- offcanvas -->
<div class="offcanvas offcanvas-start p-3" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style="width: 300px; background-color: #fafafa;">
    <div class="offcanvas-header gap-1">
        <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#228B22" class="bi bi-leaf-fill d-inline-block align-text-top" viewBox="0 0 16 16">
            <path d="M1.4 1.7c.217.289.65.84 1.725 1.274 1.093.44 2.885.774 5.834.528 2.02-.168 3.431.51 4.326 1.556C14.161 6.082 14.5 7.41 14.5 8.5q0 .344-.027.734C13.387 8.252 11.877 7.76 10.39 7.5c-2.016-.288-4.188-.445-5.59-2.045-.142-.162-.402-.102-.379.112.108.985 1.104 1.82 1.844 2.308 2.37 1.566 5.772-.118 7.6 3.071.505.8 1.374 2.7 1.75 4.292.07.298-.066.611-.354.715a.7.7 0 0 1-.161.042 1 1 0 0 1-1.08-.794c-.13-.97-.396-1.913-.868-2.77C12.173 13.386 10.565 14 8 14c-1.854 0-3.32-.544-4.45-1.435-1.124-.887-1.889-2.095-2.39-3.383-1-2.562-1-5.536-.65-7.28L.73.806z"/>
        </svg>
        <span class="fs-6">BloopUrl</span>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>        
    </div>

    <!--<hr class="mx-3">-->

    <ul class="list-group nav nav-pills flex-column mb-auto gap-1">
        <li>
            <span class="nav-link align-items-center" style="font-size: 0.8rem; color: rgb(97, 86, 86);">General</span>
        </li>
        <li data-bs-dismiss="offcanvas">
            <router-link to="/dashboard" class="d-flex gap-2 align-items-center list-group-item list-group-item-action rounded-2" style="border: 0px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-folder" viewBox="0 0 16 16" style="stroke-width: 0.5px; stroke: black;">
                    <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139q.323-.119.684-.12h5.396z"/>
                </svg>
                <span style="font-size: 0.875rem; font-weight: 500; color: rgb(97, 86, 86);">
                    Dashboard
                </span>                    
            </router-link>
        </li>
        <li data-bs-dismiss="offcanvas">
            <router-link to="/" class="d-flex gap-2 align-items-center list-group-item list-group-item-action rounded-2" style="border: 0px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-graph-up" viewBox="0 0 16 16" style="stroke-width: 0.5px; stroke: black;">
                    <path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07"/>
                </svg>
                <span style="font-size: 0.875rem; font-weight: 500; color: rgb(97, 86, 86);"  
                data-bs-dismiss="offcanvas">
                    Analyze
                </span>
            </router-link>
        </li>
        <li data-bs-dismiss="offcanvas">  
            <router-link to="/dashboard/export" class="d-flex gap-2 align-items-center list-group-item list-group-item-action rounded-2" style="border: 0px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16" style="stroke-width: 0.5px; stroke: black;">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
                <span style="font-size: 0.875rem; font-weight: 500; color: rgb(97, 86, 86);">
                    Import/export
                </span>
            </router-link>
        </li>
        <li data-bs-dismiss="offcanvas">
            <router-link to="/dashboard/settings" class="d-flex gap-2 align-items-center list-group-item list-group-item-action rounded-2" style="border: 0px;" >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16" style="stroke-width: 0.5px; stroke: black;">
                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
                </svg>
                <span style="font-size: 0.875rem; font-weight: 500; color: rgb(97, 86, 86);">
                    Settings
                </span>
            </router-link>
        </li>
    </ul>

    <hr class="mx-3">

    <div class="dropdown d-flex justify-content-between mx-3" style="transition-duration: 0.25s;">
        <a href="#" class="d-flex align-items-center link-dark text-decoration-none">            
            <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
            <div class="d-flex flex-column">
                <span style="font-weight: 500;">Shaffaq</span>
                <span style="font-size: 0.785rem; color: #6a6a6a;">coco@gmail.com</span>
            </div>
        </a>

        <!-- Default dropup button -->
        <div class="btn-group dropup" >
            <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                
            </button>
            <ul class="dropdown-menu" style="transition-duration: 0.25s;">

                <!-- Dropdown menu links -->
                <li><a class="dropdown-item" href="#">New project...</a></li>
                <li><a class="dropdown-item" href="#">Settings</a></li>
                <li><a class="dropdown-item" href="#">Profile</a></li>
                <li><hr class="dropdown-divider"></li>
                <li data-bs-dismiss="offcanvas">
                    <a class="dropdown-item link-dark" href="#" data-bs-toggle="modal" data-bs-target="#logoutModal">
                        Sign out
                    </a>
                </li>
            </ul>
        </div>     
    </div>
</div>
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
                localStorage.setItem("logged_in", false);
                localStorage.setItem("username", "");
                localStorage.setItem("email", "");
                this.$router.push("/login");
                return;
            }

            console.log("Login failed:", data);
        }        
    }
}
</script>


<style scoped>
.list-group-item{
    background-color: #fafafa;
}
.list-group-item:active{
    background-color: #e0e0e0;
}

.list-group-item:hover{
    background-color: #f0f0f0;
}

/* Vue Router automatically assigns this class to the current tab */
.router-link-active {
  background-color: #f0f0f0;
  /*color: rgb(42, 42, 42);
  color: black !important;*/
}
</style>