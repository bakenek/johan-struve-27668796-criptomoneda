
addEventListener('DOMContentLoaded', () => {
	
   const btn_menu = document.querySelector('.btn_menu')
   
   
   
   if (btn_menu) {
	   
       btn_menu.addEventListener('click', () => {
		   
           const menu_items = document.querySelector ('.menu2')
		   
           menu_items.classList.toggle('show')
       })
   }
})