const initApp = () => {
    limitNewssize();


}
document.addEventListener("DOMContentLoaded", initApp);

const storysFullContent = [];

const limitNewssize = () => {
    const numOfStorys = document.querySelectorAll(".main__reference");
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    let maxWords = 25;

if (mediaQuery.matches) {
  maxWords = 45;
}/*  else {
  // The viewport width is less than 768 pixels
  // Do something else here
  
} */
    console.log(maxWords)
    let lTracker = numOfStorys.length - 1;
    for (i = 0; i<numOfStorys.length; i++) {
        //console.log(numOfStorys[i].innerHTML)
        /* console.log(i)
        console.log(numOfStorys[i].innerHTML) */
        storysFullContent.push(numOfStorys[i].innerHTML)
        const words = numOfStorys[i].innerHTML.split(" ");
        const wordCap = words.slice(0, maxWords).join(" ");
        const finalText = wordCap + " (...)";

        for (l = numOfStorys.length - 1; l >= 0;) {
            l = lTracker;
            
        const mainStory = document.getElementById(l)
        
        /* storysFullContent.push(mainStory.textContent) */
        mainStory.textContent = finalText;
        l--;
        lTracker = l;
        l = -1;
        //console.log("clown");
        }
    }    
    //console.log(storysFullContent[1])
}