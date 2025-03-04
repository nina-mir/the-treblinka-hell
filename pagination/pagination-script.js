// To-Do create a series of a tags and populate them with href

const paginationNav = document.createElement('nav')
paginationNav.ariaLabel = "pagination"

const ul = document.createElement('ul')
ul.classList.add('pagination')

let listItemNum = 10
let listItemArr = []

for (let i=0; i< listItemNum; ++i){
    let listItem = document.createElement('li')
    listItemArr.push(listItem)
}

// to DO: loop throught list item array and add a child a tag to each with a link to a file name
