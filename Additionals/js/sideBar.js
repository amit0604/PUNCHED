//Sidebar toggle

var SidebarOpen = false
var sidebar = document.getElementById("sidebar")

function openSideBar(){
    if(!SidebarOpen){
    // checks if the side bar is open or not
        sidebar.classList.add("sidebar-responsive")
        // if the sidebar is closed then it would add another class to it 
        SidebarOpen = true
    }
}

function closeSideBar(){
    if(SidebarOpen){
        sidebar.classList.remove("sidebar-responsive")
        SidebarOpen = false;
    }
}