<template>
<nav class="container navContainer navbar sticky-top navbar-expand-lg gap-2"> 
    <div class="container-fluid" style="margin: 0!important; padding: 0!important;">

        <!-- Sidebar menu -->
        <div class="d-flex align-items-center gap-1">
            <button v-if="logged_in == 'true'"  class="btn btn-light navbar-brand" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
            </button>

            <router-link to="/" class="navbar-brand" style="margin: 0!important; font-size: 1rem;">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#228B22" class="bi bi-leaf-fill d-inline-block align-text-top" viewBox="0 0 16 16">
                    <path d="M1.4 1.7c.217.289.65.84 1.725 1.274 1.093.44 2.885.774 5.834.528 2.02-.168 3.431.51 4.326 1.556C14.161 6.082 14.5 7.41 14.5 8.5q0 .344-.027.734C13.387 8.252 11.877 7.76 10.39 7.5c-2.016-.288-4.188-.445-5.59-2.045-.142-.162-.402-.102-.379.112.108.985 1.104 1.82 1.844 2.308 2.37 1.566 5.772-.118 7.6 3.071.505.8 1.374 2.7 1.75 4.292.07.298-.066.611-.354.715a.7.7 0 0 1-.161.042 1 1 0 0 1-1.08-.794c-.13-.97-.396-1.913-.868-2.77C12.173 13.386 10.565 14 8 14c-1.854 0-3.32-.544-4.45-1.435-1.124-.887-1.889-2.095-2.39-3.383-1-2.562-1-5.536-.65-7.28L.73.806z"/>
                </svg>
                <span>BloopUrl</span>
            </router-link>            
        </div>

        <!-- Hamburger menu for mobile screens -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Desktop navigation -->
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto gap-3 align-items-center"> 

                <li  v-if="logged_in == 'true'">
                    <button class="btn btn-light d-flex align-items-center gap-2" style="border: 1px solid lightgray;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stars" viewBox="0 0 16 16">
                            <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
                        </svg>
                        Upgrade        
                    </button>
                </li>

                <li v-if="logged_in == 'false'">
                    <router-link to="/register">
                        <button type="button" class="btn gap-2">
                            Register
                        </button>                     
                    </router-link>
                </li>

                <li v-if="logged_in == 'false'">
                    <router-link to="/login">
                        <button type="button" class="btn btn-dark gap-2">
                            Login
                        </button>                     
                    </router-link>
                </li>


                <li  v-if="logged_in == 'true'">
                    |
                </li>

                <li v-if="logged_in == 'true'">
                    <a href="#" class="d-flex align-items-center link-dark text-decoration-none">            
                        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
                        <div class="d-flex flex-column">
                            <span style="font-size: 0.950rem; font-weight: 500;">{{ this.username }}</span>
                            <span style="font-size: 0.785rem; color: #6a6a6a;">{{ this.email }}</span>
                        </div>
                    </a>
                </li>

                <!-- old profile context menu
                <li v-if="logged_in == 'true'">
                    <div class="btn-group dropstart d-none d-lg-block">
                        <button class="btn p-0" title="Other options" type="button" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#4a4a4a" class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                            </svg>
                        </button>
                        <ul class="dropdown-menu">
                            <li>
                                <div class="d-flex align-items-center gap-2 py-2 px-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#4a4a4a" class="bi bi-person-circle" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                                    </svg>
                                    <div class="d-flex flex-column">
                                        <span><b>{{ this.username}}</b></span>
                                        <span style="font-size: 0.785rem; color: #6a6a6a;">{{ this.email }}</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <hr class="p-0" style="color: gray;">
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
                            <li>
                                <hr class="p-0" style="color: gray;">
                            </li>
                            <li>
                                <a class="dropdown-item d-flex align-items-center gap-2 py-2" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#8a8a8a" class="bi bi-people" viewBox="0 0 16 16">
                                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
                                </svg>  
                                    Help center
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item d-flex align-items-center gap-2 py-2" href="#" data-bs-toggle="modal" data-bs-target="#logoutModal">                            
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#D2042D" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
                                        <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
                                    </svg>
                                    <span style="color: #D2042D;">Log out</span>
                                </a>
                            </li>
                        </ul>   
                    </div>  
                </li>
                -->
            </ul>
        </div>
    </div>
</nav>


<!-- offcanvas -->
<div class="offcanvas offcanvas-start p-3" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style="width: 300px;">
    <div class="offcanvas-header gap-1">
        <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#228B22" class="bi bi-leaf-fill d-inline-block align-text-top" viewBox="0 0 16 16">
            <path d="M1.4 1.7c.217.289.65.84 1.725 1.274 1.093.44 2.885.774 5.834.528 2.02-.168 3.431.51 4.326 1.556C14.161 6.082 14.5 7.41 14.5 8.5q0 .344-.027.734C13.387 8.252 11.877 7.76 10.39 7.5c-2.016-.288-4.188-.445-5.59-2.045-.142-.162-.402-.102-.379.112.108.985 1.104 1.82 1.844 2.308 2.37 1.566 5.772-.118 7.6 3.071.505.8 1.374 2.7 1.75 4.292.07.298-.066.611-.354.715a.7.7 0 0 1-.161.042 1 1 0 0 1-1.08-.794c-.13-.97-.396-1.913-.868-2.77C12.173 13.386 10.565 14 8 14c-1.854 0-3.32-.544-4.45-1.435-1.124-.887-1.889-2.095-2.39-3.383-1-2.562-1-5.536-.65-7.28L.73.806z"/>
        </svg>
        <span class="fs-6">BloopUrl</span>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>        
    </div>

    <hr class="mx-3">

    <ul class="list-group nav nav-pills flex-column mb-auto gap-1">
        <li>
            <span class="nav-link align-items-center" style="font-size: 0.8rem; color: #4a4a4a;">General</span>
        </li>
        <li data-bs-dismiss="offcanvas">
            <a href="#" class="d-flex gap-2 align-items-center list-group-item list-group-item-action rounded-2" style="border: 0px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16" style="stroke-width: 0.5px; stroke: black;">
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                </svg>
                <span style="font-size: 0.875rem; font-weight: 500; color: #2a2a2a;">Home</span>
            </a>
        </li>
        <li data-bs-dismiss="offcanvas">
            <router-link to="/dashboard">
            <a href="#" class="d-flex gap-2 align-items-center list-group-item list-group-item-secondary rounded-2" style="border: 0px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-folder" viewBox="0 0 16 16" style="stroke-width: 0.5px; stroke: black;">
                    <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139q.323-.119.684-.12h5.396z"/>
                </svg>
                <span style="font-size: 0.875rem; font-weight: 500; color: #2a2a2a;">Dashboard</span>
            </a>
            </router-link>
        </li>
        <li data-bs-dismiss="offcanvas">
            <a href="#" class="d-flex gap-2 align-items-center list-group-item list-group-item-action" style="border: 0px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-graph-up" viewBox="0 0 16 16" style="stroke-width: 0.5px; stroke: black;">
                    <path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07"/>
                </svg>
                <span style="font-size: 0.875rem; font-weight: 500; color: #2a2a2a;">Analyze</span>
            </a>
        </li>
        <li data-bs-dismiss="offcanvas">
            <a href="#" class="d-flex gap-2 align-items-center list-group-item list-group-item-action" style="border: 0px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16" style="stroke-width: 0.5px; stroke: black;">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
                <span style="font-size: 0.875rem; font-weight: 500; color: #2a2a2a;">Check</span>
            </a>
        </li>
        <li data-bs-dismiss="offcanvas">
            <a href="#" class="d-flex gap-2 align-items-center list-group-item list-group-item-action" style="border: 0px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16" style="stroke-width: 0.5px; stroke: black;">
                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
                </svg>
                <span style="font-size: 0.875rem; font-weight: 500; color: #2a2a2a;">Settings</span>
            </a>
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
        <!--
        <div class="d-flex align-items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#4a4a4a" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
            </svg>
            <div class="d-flex flex-column">
                <span style="font-weight: 500;">{{ this.username}}</span>
                <span style="font-size: 0.785rem; color: #6a6a6a;">{{ this.email }}</span>
            </div>
        </div>
        -->

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

<!-- Log out confirmation modal -->
<div class="modal fade " id="logoutModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-body" style="padding-bottom: 0;">
                <h4 style="font-size: 1rem;">Logout</h4>
                <p style="font-size: 0.875rem; color: #6a6a6a;">Are you sure you want to log out ?</p>
            </div>
            <div class="modal-footer" style="border-top: 0px; padding-top: 0;">
                <button type="button" class="btn btn-light" data-bs-dismiss="modal" style="border: 1px solid lightgray; font-size: 0.875rem;">
                    Close
                </button>
                <button type="button" class="btn btn-dark" data-bs-dismiss="modal" style="border: 1px solid lightgray; font-size: 0.875rem;" @click="logOut()">
                    Logout
                </button>
            </div>
        </div>
    </div>
</div>

</template>

<script>

export default{    
    data(){
        return {
            logged_in: localStorage.getItem("logged_in"),
            username: localStorage.getItem("username"),
            email: localStorage.getItem("email")
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