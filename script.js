const div = document.querySelector('.moji');
const mojis = ['đ','đ','đ','đ','âšī¸','đŠ','đ ','đĄ','đ¤ĸ','đ¤','đ¤§'];

range.addEventListener('input', (e) => {
  let rangeValue = e.target.value;
  div.textContent = mojis[rangeValue];
});
