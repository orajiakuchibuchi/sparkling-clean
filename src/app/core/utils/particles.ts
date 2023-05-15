declare const $: any;


function validateEmail(email:any){
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
function collapseNAvIfOpen(){
  const basicsCollapseOne = (<HTMLButtonElement>document.getElementById("basicsCollapseOne"));
  const basicsCollapseOneButton = (<HTMLDivElement>document.getElementById("basicsCollapseOneButton"));
  if(!basicsCollapseOneButton.classList.contains("collapsed")){
    basicsCollapseOne.classList.add("show")
    basicsCollapseOneButton.classList.add("collapsed");
    basicsCollapseOneButton.setAttribute('aria-expanded', 'true')
    
  }
}
function scrollToTop(){
  window.scrollTo({
    top: 400,
    behavior: 'smooth',
  });
}
function uncollapseNAvIfOpen(){
  const basicsCollapseOne = (<HTMLButtonElement>document.getElementById("basicsCollapseOne"));
  const basicsCollapseOneButton = (<HTMLDivElement>document.getElementById("basicsCollapseOneButton"));
  if(basicsCollapseOneButton.classList.contains("collapsed")){
    basicsCollapseOne.classList.remove("show")
    basicsCollapseOneButton.classList.remove("collapsed");
    basicsCollapseOneButton.setAttribute('aria-expanded', 'false')
    
  }
}

function shouldShowSideMenuRightShow($event?: any) {
  const sidebarContent = (<HTMLButtonElement>document.getElementById("sidebarContent"));
  if (sidebarContent && sidebarContent.classList.contains('u-unfold--hidden')) {
    sidebarContent.classList.remove('u-unfold--hidden');
  }
}

function   shouldHideSideMenuRightShow($event?: any) {
  const sidebarContent = (<HTMLButtonElement>document.getElementById("sidebarContent"));
  // console.log(sidebarContent);
  if (sidebarContent && !sidebarContent.classList.contains('u-unfold--hidden')) {
    sidebarContent.classList.add('u-unfold--hidden');
  }
}
interface Star {
  cls: string,
  xlink: string,
  href: string,
}
function getEmptyStar(): Star{
  return {
    cls: 'star-empty',
    xlink: 'http://www.w3.org/1999/xlink',
    href: 'assets/images/star-rating.icons.svg#star-empty'
  }
}

function getHalfStar(): Star{
  return {
    cls: 'star-half',
    xlink: 'http://www.w3.org/1999/xlink',
    href: 'assets/images/star-rating.icons.svg#star-half'
  }
}


function getFilledStar(): Star{
  return {
    cls: 'star-filled',
    xlink: 'http://www.w3.org/1999/xlink',
    href: 'assets/images/star-rating.icons.svg#star-filled'
  }
}
function shuffleArray(array: Array<any>) {
  var m = array.length, t, i;

  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

async function  checkElementExistsInDom(selector: any){
  while (document.querySelector(selector) === null) {
    await new Promise(resolve => requestAnimationFrame(resolve))
  }
  return document.querySelector(selector);
};


export {
  validateEmail,
  collapseNAvIfOpen,
  uncollapseNAvIfOpen,
  getEmptyStar,
  getHalfStar,
  getFilledStar,
  Star,
  scrollToTop,
  shuffleArray,
  checkElementExistsInDom,
  shouldHideSideMenuRightShow,
  shouldShowSideMenuRightShow
};
