const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
  
// let parent = document.getElementsByClassName('gallery')[0]
// for (let i = 0; i < images.length; i++) {
//   let elem = document.createElement('li')
//   console.log(elem)
//   let img_elem = document.createElement('img')
//   img_elem.src = images[i].url
//   img_elem.alt = images[i].alt
//   console.log(img_elem)
//   elem.appendChild(img_elem)
//   parent.appendChild(elem)
// }
// let gallery = document.querySelector('.gallery')
// gallery.style.display = "flex";
// gallery.style.flexDirection = "column";
// // gallery.style.listStyle = "none";
// // gallery.style.alight = "center";
// gallery.style.width = "400px";
// gallery.style.height = "400px";
// gallery.style.margin = "50px 50px";
// gallery.style.padding = "0"

// gallery.getElementsByClassName.cssText = ``

// const gallery = document.querySelector('.gallery');
// const elements = images.map((image) => `<li>
//   <img src="${image.url}" alt = "${image.alt}"
//     width="400"
//     height = "250"
// </li>`);
// galleryElem.insertAdjacentHTML('beforeend', elements.join(''));
// galleryElem.style.cssText = `display: flex;
// alight-item: center;
// justifyly-content: space-between;
// list-style-type none;
// margin: 50px 50px;
// padding:0;
// `;


const list = document.querySelector('.gallery')

const markup = images
	.map(image => `<li><img class="picture" src=${image.url} width = '400' alt='${image.alt}'></img></li>`)
	.join('')

  list.insertAdjacentHTML('beforeend', markup)
    // const img = document.createElement('img')
  
const pictures = document.querySelectorAll('.picture')

list.style.display = 'flex';
list.style.flexWrap = 'column-reverse'
list.style.listStyle = 'none'
list.style.gap = '20px'
list.style.justifyContent = 'center'