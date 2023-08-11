
const searchWrapper = document.querySelector("[searchWrapper]")
const searchValue = document.querySelector("[searchValue]")
const searchOpenBtn = document.querySelector("[searchOpenBtn]")
const searchCloseBtn = document.querySelector("[searchCloseBtn]")


const mainLogic = ()=>{

      // search bar animation
        searchOpenBtn.addEventListener('click', ()=>{
            const ifValue = searchWrapper.classList.contains('active')
            if(!ifValue){
                searchWrapper.classList.add('active')
                searchValue.focus()
            } else {
                searchValue.value = ''
            }
        })
        searchCloseBtn.addEventListener('click', ()=>{
            searchWrapper.classList.remove('active')
            searchValue.value = ''
        }) 

      // nav bar animation 
        const navAnimation = () => {
            const navItems = document.querySelector(".nav-items")
            const menuOpenBtn = document.querySelector(".menu-open-btn")
            const menuCloseBtn = document.querySelector(".menu-close-btn")

            menuOpenBtn.addEventListener('click', ()=>{
                    navItems.classList.remove('nav-bar-inactive')
                })  
                
            menuCloseBtn.addEventListener('click', (e)=>{
                    navItems.classList.add('nav-bar-inactive')
            })
        }

        navAnimation();
}

mainLogic();

