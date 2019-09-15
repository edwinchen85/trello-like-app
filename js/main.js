document.querySelector('.icon-edit').addEventListener('click', e => {
  document.querySelector('.card-title').setAttribute('contenteditable', true);
  document.querySelector('.card-title').focus();
  document.querySelector('.card-title').addEventListener('keypress', e => {
    if (e.keyCode === 13) { // enter key is pressed
      e.target.blur();
      e.target.removeAttribute('contenteditable');
      return false;
    }
  });
});
document.querySelector('.icon-caret').addEventListener('click', e => {
  document.querySelector('.icon-caret').classList.toggle('rotate');
  document.querySelector('.card-desc').classList.toggle('show');
});
