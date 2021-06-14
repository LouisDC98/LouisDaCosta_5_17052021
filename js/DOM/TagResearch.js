import { closeAllDropdown, openDropdown } from './domDropdown.js';

class TagResearch {
  // Research match between input in dropdown and tag content
  static filterFunction(event) {
    const filter = event.target.value.toUpperCase();
    const dropdown = event.target.parentElement.parentElement;
    if (filter.length > 0) {
      closeAllDropdown();
      openDropdown(dropdown.id);
    }

    [...dropdown.getElementsByTagName('a')].forEach((element) => {
      const txtValue = element.textContent || element.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        if (element.classList.contains('dropdown__content__links--hide')) {
          element.classList.remove('dropdown__content__links--hide');
        }
      } else if (!element.classList.contains('dropdown__content__links--hide')) {
        element.classList.add('dropdown__content__links--hide');
      }
    });
  }
}

export default TagResearch;
