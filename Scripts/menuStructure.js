const menuItems = [
 {title:'Home', link:'/'},
 {title:'About', link:'/About'},
 {title:'Contact ', link:'/contact'},
 {title:'Guyheadd blogs', link:'/Guyheadd-Blogs-home'},
 {title:'Theoretical work', link:'/wits-blogs-homepage'},
 {title:'Side Works ', link:'/Extrawork'},
];

const intialiseMenu = () =>{
     const nav = document.querySelector("nav");

     const ul = document.createElement("ul");

     for (let item of (menuItems) ) {
        const li = document.createElement('li');
        const a = document.createElement('a');

        a.innertext = item.title;
        a.href = item.link;
        li.appendChild(a);
        ul.appendChild(li);
     } 

     nav.appendChild(ul);
};

document.addEventListener('DOMContentLoaded',() => intialiseMenu());
