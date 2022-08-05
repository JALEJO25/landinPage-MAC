// OBTENEMOS LOS ELEMENTOS DEL DOM
const menuButton=document.getElementById( 'menu-button')
const mainHeader=document.getElementById( 'main-header')
const overlay=document.getElementById( 'main-overlay')
const activeClass='is-active'
const isTablet=matchMedia('(max-width:734px)')

const toogleMenu=()=>mainHeader.classList.toggle(activeClass)
// declaramos una variable para cerrar el menu al hacer click fuera del menu
const closeMenu=()=>mainHeader.classList.remove(activeClass)

// cerrar el menu al precionar en cualquier link del menu
const closeMenuWhenClickLink=(e)=>{
    if(e.target.tagName==='A') closeMenu()
}

// cerrar el menu al precionar la tecla ESC
const closeWhenTypeScape=(e)=>{
    if(e.code==='Escape') closeMenu()
}

const handleAddEventListener=()=>{
    menuButton.addEventListener('click', toogleMenu)
    overlay.addEventListener('click', closeMenu)
    mainHeader.addEventListener('click', closeMenuWhenClickLink)
    mainHeader.addEventListener('keydown', closeWhenTypeScape)
}

const handleRemoveEventListener=()=>{
    menuButton.addEventListener('click', toogleMenu)
    overlay.addEventListener('click', closeMenu)
    mainHeader.addEventListener('click', closeMenuWhenClickLink)
    mainHeader.addEventListener('keydown', closeWhenTypeScape)
}

const handleEventListener=(mediaQuery)=>{
    if(mediaQuery.matches) handleAddEventListener()
    else handleRemoveEventListener()
}

export const handleActiveMenu=()=>{
    if(isTablet.matches) handleAddEventListener()
    isTablet.addEventListener('change', handleAddEventListener)
}


