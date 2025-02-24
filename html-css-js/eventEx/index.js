const vartical = document.querySelector('.vartical');
const horizontal = document.querySelector('.horizontal');
const img = document.querySelector('img');
const span = document.querySelector('span');

// img.addEventListener("mousemove", (e) => {
//   let x = e.clientX; // 화면에 body 부분만 좌표 : px
//   let y = e.clientY; // 화면에 body 부분만 좌표 : px
//   // console.log(`x: ${x}, y:${y}`);
//   let locX = `left: ${x}px;`;
//   let locY = `top: ${y}px;`;

//   img.style.left = x + 'px';
//   img.style.top = y + 'px';

//   span.innerHTML = `x: ${x}, y:${y}`;

//   vartical.style.cssText = locX;
//   horizontal.style.cssText = locY;
//   span.style.cssText = locX + locY;
// })


document.querySelector('body').addEventListener("mousemove", (e) => {
  let x = e.clientX / window.innerWidth * 100; // 화면에 body 부분만 좌표 : px
  let y = e.clientY / window.innerHeight * 100; // 화면에 body 부분만 좌표 : px
  // console.log(`x: ${x}, y:${y}`);
  let locX = `left: ${x}%;`;
  let locY = `top: ${y}%;`;

  img.style.left = x + '%';
  img.style.top = y + '%';

  span.innerHTML = `x: ${parseInt(x)}, y:${parseInt(y)}`;

  vartical.style.cssText = locX;
  horizontal.style.cssText = locY;
  span.style.cssText = locX + locY;
})