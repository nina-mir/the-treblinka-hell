// data of files
let pageNamesData = [
  '1.html', '2.html', '3.html',
  '4.html', '5.html', '6.html',
  '7.html', '8.html', '9.html',
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
</li> ›>‹<«»
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

  // add symbol
  let symbolSpan = document.createElement('span')
  
  symbolSpan.classList.add('symbol-span')



  if (direction == "left") {
    aWrapper.href = '1.html'
    symbolSpan.innerText = '«'
    symbolSpan.classList.add('left-symbol')
  } else if (direction == "right") {
    aWrapper.href = pageNamesData[numTotalPages - 1]
    symbolSpan.innerText = '»'
    symbolSpan.classList.add('right-symbol')
  }

  aWrapper.appendChild(symbolSpan)

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

  // add symbol
  let symbolSpan = document.createElement('span')
    symbolSpan.className = 'symbol-span'

  if (direction == "left") {
    text = "previous page"
    aWrapper.href = currentPageNumber > 1 ? `${+currentPageNumber - 1}.html` : ''
    symbolSpan.innerText = '‹'
    symbolSpan.classList.add('left-symbol')

    // ›>‹<«»

  } else if (direction == "right") {
    text = "next page"
    aWrapper.href = currentPageNumber < numTotalPages ? `${+currentPageNumber + 1}.html` : ''
    symbolSpan.innerText = '›'
    symbolSpan.classList.add('right-symbol')

  }

  spanVisuallyHidden.textContent = text
  li.append(spanVisuallyHidden)
  aWrapper.appendChild(li)

  aWrapper.appendChild(symbolSpan)

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


// footer manipulation code

{/* <p class="footer-text">
      OpenAI GPT-4o was used to transcribe text from the original English
      version published in 1946 (Moscow, USSR). The Years Of War
      1941-1945&mdash;a volume of Vassili Grossman's wartime writings&mdash;
      is available for free on
      <a href="https://archive.org/details/in.ernet.dli.2015.507855">
        <strong>the Internet Archives</strong> website</a>. OpenAI API credits was obtained by Nina Ruth Mir thanks to a
      hackathon grant by Microsoft Azure Start-up Fund during a Scale
      Hackathon event in Summer 2024.
    </p> */}

footerParagraph = document.querySelector('.footer-text')

const footerText = `
  OpenAI API credits obtained via Microsoft Azure Start-up Fund during a Scale Hackathon event (Summer 2024)
  was used to transcribe the original text from the book "The Years Of War
  1941-1945"&mdash;a volume of Vassili Grossman's wartime writings&mdash;
  is available for free on the Internet Archives.
`
footerParagraph.innerHTML = footerText

// Add GitHub logo <a> tag for repo link

const copyright = document.querySelector('.copyright')
copyright.textContent = ''

// 2. Create the <p> tag
const paragraph = document.createElement("p");
paragraph.innerHTML = 'Nina Ruth Mir © 2025&nbsp;San Francisco, USA'
paragraph.className = 'copyright-disclaimer-text'
copyright.appendChild(paragraph);

// create svg of github logo  Not DOING THIS but keepiong it for it's cool!
// const svgCode = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 90" height="30">
//   <g fill="currentColor">
//     <path d="m46.1 0c-25.5 0-46.1 20.6-46.1 46.1 0 20.4 13.2 37.7 31.5 43.8 2.3.4 3.2-1 3.2-2.2 0-1.1-.1-4.7-.1-8.6-11.6 2.1-14.6-2.8-15.5-5.4-.5-1.3-2.8-5.4-4.7-6.5-1.6-.9-3.9-3-.1-3.1 3.6-.1 6.2 3.3 7.1 4.7 4.2 7 10.8 5 13.4 3.8.4-3 1.6-5 2.9-6.2-10.3-1.2-21-5.1-21-22.8 0-5 1.8-9.2 4.7-12.4-.5-1.2-2.1-5.9.5-12.2 0 0 3.9-1.2 12.7 4.7 3.7-1 7.6-1.6 11.5-1.6s7.8.5 11.5 1.6c8.8-6 12.7-4.7 12.7-4.7 2.5 6.3.9 11.1.5 12.2 2.9 3.2 4.7 7.3 4.7 12.4 0 17.7-10.8 21.6-21.1 22.8 1.7 1.4 3.1 4.2 3.1 8.5 0 6.2-.1 11.1-.1 12.7 0 1.2.9 2.7 3.2 2.2 18.2-6.1 31.4-23.4 31.4-43.8.3-25.4-20.4-46-45.9-46z"></path>
// </g>
// </svg>`
// 2.a. Convert SVG to a Data URL
// const svgBlob = new Blob([svgCode], { type: "image/svg+xml" });
// const svgUrl = URL.createObjectURL(svgBlob);


// 3. Create the <a> tag (GitHub link)
const link = document.createElement("a");
link.href = "https://github.com/nina-mir/the-treblinka-hell";
link.target = "_blank"; // Opens in a new tab
link.rel = "noopener noreferrer"; // Security best practice
link.ariaLabel = "GitHub repository for The Treblinka Hell"; // Accessibility

// 4. Create the <img> tag (GitHub logo)
const githubLogo = document.createElement("img");

githubLogo.className = 'github-logo'

githubLogo.src = 'github-mark-white.svg'
// svgUrl// Official GitHub logo

githubLogo.alt = "GitHub logo -- Rendered SVG"; // Accessibility
// githubLogo.width = 240; // Small size
// githubLogo.height = 240;

// 5. Assemble the elements
link.appendChild(githubLogo); // Add <img> inside <a>
copyright.appendChild(link); // Add <link svg> inside .copyright class

