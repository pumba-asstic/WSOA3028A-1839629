const menuTop=[
 {title :"Home", link:".index.htm/"},
 {title :"About", link:".about-Guheadd.html/"},
 {title :"Contact",link:".contact-Guyheadd.hmtl/"},
 {title:"Guyheadd blogs", link:".Guyheadd-Blogs-home.html/"},
 {title:"Theoretical work",link:".wits-blog-homepage.html/"},
 {title:"Side works",link:"Extrawork.hmtl"},

]
window.addEventListener('DOMContentLoaded', (event)=>{
    console.log('DOM fully loaded and parsed');
    renderMenu();
});

const renderMenu=() =>{
    const navBar =document.querySelector(".menuTop");
    
    menuItems.forEach(item => {
        const newItem = documen.createElement("li");
        const newItem = documen.createElement("a");
        newLink.href = item.links;
        newLink.text = item.text;
        newItem.appendchild(newlink);
        navBar.appendChild(newItem);
    });
        
};