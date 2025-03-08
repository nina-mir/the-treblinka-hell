// data of files
let pageNamesData = [
  '1.html',  '2.html',  '3.html',
  '4.html',  '5.html',  '6.html',
  '7.html',  '8.html',  '9.html',
  '10.html', '11.html', '12.html',
  '13.html', '14.html', '15.html',
  '16.html', '17.html', '18.html',
  '19.html', '20.html', '21.html',
  '22.html', '23.html', '24.html',
  '25.html', '26.html', '27.html',
  '28.html', '29.html', '30.html',
  '31.html', '32.html', '33.html',
  '34.html', '35.html'
]

let numTotalPages = pageNamesData.length

let h2Text = document.querySelector('h2').innerHTML
let currentPageNumber = h2Text.split('-')[1]

const mainElement = document.querySelector('main') //main element of the page


const paginationNav = document.createElement('nav')
paginationNav.ariaLabel = "pagination"

const ul = document.createElement('ul')
ul.classList.add('pagination')


{/* <a class="wrapper-full-star" href="">
<li class="full-star">
  <span aria-hidden="true">&laquo;</span>
  <span class="visuallyhidden">first page</span>
</li>
</a> */}

function createFullStar(direction) {
  let aWrapper = document.createElement('a')
  aWrapper.classList.add("wrapper-full-star")
  let li = document.createElement('li')
  li.classList.add('full-star')
  let spanAriaHidden = document.createElement('span')
  spanAriaHidden.ariaHidden = "true"
  let spanVisuallyHidden = document.createElement('span')
  spanVisuallyHidden.classList.add('visuallyhidden')
  spanVisuallyHidden.textContent = "to the first page"
  li.appendChild(spanAriaHidden)
  li.append(spanVisuallyHidden)
  aWrapper.appendChild(li)

  if (direction == "left") {
    aWrapper.href = 'index.html'
  } else if (direction == "right") {
    aWrapper.href = pageNamesData[numTotalPages - 1]
  }

  return aWrapper
}



// <a href="" aria-current="page">
//   <span class="visuallyhidden">page </span>1 /<span class="total-pages"> 20 </span>
// </a>

function createCurrentPage() {
  let container = document.createElement('a')
  // container.classList.add("wrapper-half-star")
  container.ariaCurrent = "page"

  let spanVisuallyHidden = document.createElement('span')
  spanVisuallyHidden.classList.add('visuallyhidden')
  spanVisuallyHidden.textContent = "page "

  let totalPagesSpan = document.createElement('span')
  totalPagesSpan.classList.add('total-pages')
  totalPagesSpan.textContent = numTotalPages

  // Create the container element (optional, if needed)
  container.appendChild(spanVisuallyHidden);
  container.appendChild(document.createTextNode(`${currentPageNumber} /`)); // "1 /" is just text
  container.appendChild(totalPagesSpan);


  return container
}





function createHalfStar(direction) {
  let aWrapper = document.createElement('a')
  aWrapper.classList.add("wrapper-half-star")

  let li = document.createElement('li')
  li.classList.add('full-star', direction)
  let spanVisuallyHidden = document.createElement('span')
  spanVisuallyHidden.classList.add('visuallyhidden')
  let text = ""

  if (direction == "left") {
    text = "previous page"
    aWrapper.href = currentPageNumber > 1 ? `${+currentPageNumber - 1}.html` : ''

  } else if (direction == "right") {
    text = "next page"
    aWrapper.href = currentPageNumber < numTotalPages ? `${+currentPageNumber + 1}.html` : ''

  }

  spanVisuallyHidden.textContent = text
  li.append(spanVisuallyHidden)
  aWrapper.appendChild(li)
  return aWrapper
}

const fullStarStart = createFullStar('left')
const fullStarEnd = createFullStar('right')

const halfLeft = createHalfStar('left')
const halfRight = createHalfStar('right')

// create current 


ul.append(fullStarStart)
ul.appendChild(halfLeft)

ul.appendChild(createCurrentPage())

ul.appendChild(halfRight)
ul.appendChild(fullStarEnd)


paginationNav.append(ul)

mainElement.appendChild(paginationNav)
mainElement.prepend(paginationNav.cloneNode(true))