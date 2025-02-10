'use strict'
let navigationBar = document.querySelector('.navigation_bar');
let navigationBarIcon = document.querySelector('.navigation_bar_icon');
let navigationBarList = document.querySelector('.navigation_bar_list');
let computedStyle = window.getComputedStyle(navigationBarList);
console.log(computedStyle.left);
navigationBar.addEventListener('click', () => {
    navigationBarList.style.display = navigationBarList.style.display === 'none' ? 'block' : 'none';
    navigationBarList.style.left = navigationBarList.style.left === '50px' ? '-20px' : '50px';
});