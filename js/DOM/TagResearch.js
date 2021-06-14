import { closeAllDropdown, openDropdown } from './domDropdown.js';

class TagResearch {
  // Research match between input in dropdown and tag content
  static filterFunction(input, content) {
    const filter = input.value.toUpperCase();
    if (filter.length > 0) {
      closeAllDropdown();
      openDropdown(content.id);
    }

    const a = [...content.getElementsByTagName('a')];
    a.forEach((element) => {
      const txtValue = element.textContent || element.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        element.style.display = '';
      } else {
        element.style.display = 'none';
      }
    });
  }
}

export default TagResearch;
