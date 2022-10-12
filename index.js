
// counter design
document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration){
      let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration /  range)),
      timer = setInterval(() => {
          current += increment;
          obj.textContent = current;
          if(current == end){
              clearInterval(timer);
          }
      }, step);
  }
  counter("count1", 0, 12, 10000);
  counter("count2", 100, 1680, 8000);
  counter("count3", 0, 360, 10000);
});

const panels = document.querySelectorAll('.panel')
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}