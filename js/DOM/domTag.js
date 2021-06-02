const tags = [];

// Add tag in array and launch function for create tag
function addTagContent(name, categorie) {
  const index = tags.findIndex((tag) => tag === name);
  if (index === -1) {
    tags.push(name);
    addTag(name, categorie);
  }
}

// Remove tag in array and launch function for remove tag
function removeTagContent(name) {
  const index = tags.findIndex((tag) => tag === name);
  if (index >= 0) {
    tags.splice(index, 1);
    removeTag(name);
  }
}

 /** ******************************************************************************** */
  /** **************************Create and remove a tag div************************** */
  /** ****************************************************************************** */
  //  Create a tag with text of the link pressed
  function addTag(name, categorie) {
    const div = document.createElement('div');
    div.classList.add('tag');
    div.setAttribute('id', name);

    let classColor;
    switch (categorie) {
      case 'contIngr':
        classColor = 'tag--ingredient';
        break;
      case 'contAppa':
        classColor = 'tag--appareil';
        break;
      case 'contUste':
        classColor = 'tag--ustensile';
        break;
      default:
        break;
    }
    div.classList.add(classColor);

    const title = document.createElement('p');
    title.classList.add('tag__name');
    title.innerHTML = name;

    const btnClose = document.createElement('button');
    btnClose.classList.add('tag__close');

    const icon = document.createElement('i');
    icon.classList.add('far');
    icon.classList.add('fa-times-circle');
    icon.classList.add('tag__icon');

    document.getElementById('sectionTag').appendChild(div);
    div.appendChild(title);
    div.appendChild(btnClose);
    btnClose.appendChild(icon);

    btnClose.addEventListener('click', () => {
      removeTagContent(name);
    });
  }

  // Remove tag
  function removeTag(name) {
    document.getElementById(name).remove();
  }

export {addTagContent, removeTagContent, addTag, removeTag}
