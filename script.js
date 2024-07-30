const input = document.getElementById('inputField');
const button = document.querySelector('.searchBtn'); // Fix: correctly select the button
const imageBox = document.getElementById('image-render');

button.addEventListener('click', async function (e) {
  e.preventDefault();
  const getInput = input.value;
  console.log(`Searching for: ${getInput}`); // Debugging
  const config = { params: { q: getInput } };
  const res = await axios.get('https://api.tvmaze.com/search/shows?', config);
  console.log(res.data); // Debugging
  makeImage(res.data);
  input.value = ''; // Clear the input field after search
});

const makeImage = (shows) => {
  imageBox.innerHTML = ''; // Clear previous images
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement('IMG');
      img.src = result.show.image.medium;
      img.classList.add('styled-image'); // Add CSS class
      imageBox.append(img);
    }
  }
};
