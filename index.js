console.log('script loaded')

const todayDate = document.getElementById('today');
if (todayDate) {
  const today = new Date();
  todayDate.textContent = 'my interests as of: ' + today.toDateString();
}


const images = document.querySelectorAll('.img-caption img')

images.forEach(function(image) {
  image.addEventListener('mouseenter', function() {
    const caption = image.parentElement.querySelector('p');
    caption.classList.add('show');
  });
  image.addEventListener('mouseleave', function() {
    const caption = image.parentElement.querySelector('p');
    caption.classList.remove('show');
  });
});

