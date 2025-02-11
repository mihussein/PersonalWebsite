'use strict'
// let sidebar = document.querySelector('.sidebar');
// let sidebarIcon = document.querySelector('.sidebar_icon');
// let sidebarList = document.querySelector('.sidebar_list');
// let computedStyle = window.getComputedStyle(sidebarList);
// let sidebarIconContainer = document.querySelector('.sidebar_icon_container');

// sidebarIconContainer.addEventListener('click', () => {
//     sidebarList.style.display = sidebarList.style.display === 'none' ? 'block' : 'none';
//     sidebarList.style.left = sidebarList.style.left === '50px' ? '-20px' : '50px';
//     // sidebarList.style.width = computedStyle.width === '60px' ? '0px' : '60px';
//     sidebarList.style.width = "60px";
// });

function toggleSidebar() {
    document.querySelector(".sidebar").classList.toggle("active");
  }