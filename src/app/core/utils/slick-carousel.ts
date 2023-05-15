import { checkElementExistsInDom } from "./particles";
const carouselExitingClasses:Array<string> = [];
declare const $: any;

async function intializeJsSleekCarousel(classname:string, errHandler = (e:any)=>{}){
  try {
    
    console.log(carouselExitingClasses)
    await checkElementExistsInDom(classname);
    if(!carouselExitingClasses.includes(classname)){
        $.HSCore.components.HSSlickCarousel.init(classname);
    }

  } catch (error) {
    // console.log(error)
    // console.log(carouselExitingClasses)
  }
}

export {
  intializeJsSleekCarousel,
  carouselExitingClasses
};
