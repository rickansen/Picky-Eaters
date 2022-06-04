document.querySelector('button').addEventListener('click', getMenu)

function getMenu () {
    const query = document.querySelector('input').value
    let random = Math.floor(Math.random() * 100)
   
    const pic = document.querySelector('.pic')
    const name = document.querySelector('h3')
    const from = document.querySelector('span')

    let hide = document.querySelector('.hide')
    
    if (hide) {
        hide.classList.remove('hide')
    }

    fetch(`https://api.spoonacular.com/food/menuItems/search?query=${query}&number=100&apiKey=bb5edf6ba7e4457d84f984025d50f532`)


    .then(res => res.json()) // parse response as JSON
    .then(data => { 

        let menuName = data.menuItems[random].title
        let menuPic = data.menuItems[random].image
        let menuFrom = data.menuItems[random].restaurantChain
        
        
        pic.src = menuPic
      
        name.innerHTML = menuName
    
        from.innerHTML = `by ${menuFrom}`

        console.log(menuName)

    })

    .catch(err => {
    console.log(`error ${err}`)
    });


}


