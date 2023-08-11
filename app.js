
const searchWrapper = document.querySelector("[searchWrapper]")
const searchValue = document.querySelector("[searchValue]")
const searchOpenBtn = document.querySelector("[searchOpenBtn]")
const searchCloseBtn = document.querySelector("[searchCloseBtn]")


const usersList = document.querySelector("[usersList]")
let users = []



const navLogic = ()=>{

      // ! search bar animation
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

      // ! nav bar animation 
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


        // ! fetching users data

        const loadUsersScript = async()=>{
                try {
                    const res = await fetch('https://jsonplaceholder.typicode.com/users')
                    users = await res.json()
                    displayUsers(users)
                } catch(error) {
                    console.log(error)
                }
        }
        loadUsersScript();

        const displayUsers = (users)=> {
                let htmlString = users
                .map((user)=>{
                    return `
                        <div class="user-card">
                            <h2>Name : ${user.name}</h2>
                            <p>Address : ${user.address.street}, ${user.address.city}, zipcode : ${user.address.zipcode}</p>
                            <p>Email : ${user.email}</p>
                            <a>Website : ${user.website}</a>
                        </div>
                    `
                })
                .join('')
                usersList.innerHTML = htmlString        
        }

        // ! search logic
        searchValue.addEventListener('input', (e)=>{
                let value = e.target.value.toLowerCase()
                
                const filteredUsers = users.filter((user)=>{
                    const toName = user.name.toLowerCase().includes(value)
                    const toStreetAddress = user.address.street.toLowerCase().includes(value)
                    const toCityAddress = user.address.city.toLowerCase().includes(value)
                    const toZipcodeAddress = user.address.zipcode.toLowerCase().includes(value)
                    const toEmail = user.email.toLowerCase().includes(value)
                    const toWebsite = user.website.toLowerCase().includes(value)
                    return (
                        toName || toStreetAddress || toCityAddress || toZipcodeAddress || toEmail || toWebsite
                    )
                })
                
                displayUsers(filteredUsers)
        })


}

navLogic();

