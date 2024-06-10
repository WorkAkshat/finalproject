document.addEventListener('DOMContentLoaded', function() {
    var openBtn = document.getElementById('openBtn');
    var closeBtn = document.getElementById('closeBtn');
    var drawer = document.getElementById('drawer');
    var mainContent = document.querySelector('.main-content');

    openBtn.addEventListener('click', function() {
        drawer.style.width = '250px';
        mainContent.classList.add('drawer-open');
    });

    closeBtn.addEventListener('click', function() {
        drawer.style.width = '0';
        mainContent.classList.remove('drawer-open');
    });
    document.getElementById("openBtn").addEventListener("click", function() {
        document.getElementById("drawer").classList.add("drawer-opened");
        // Hide the menu icon when the drawer is opened
        document.getElementById("openBtn").style.display = "none";
    });
    
    document.getElementById("closeBtn").addEventListener("click", function() {
        document.getElementById("drawer").classList.remove("drawer-opened");
        // Delay showing the menu icon until after the drawer has closed fully
        setTimeout(function() {
            document.getElementById("openBtn").style.display = "block";
        }, 300); // Adjust the delay time as needed (500ms in this example)
    });
    
    
});
