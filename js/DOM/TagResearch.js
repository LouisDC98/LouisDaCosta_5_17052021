import {closeAllDropdown, openDropdown} from './domDropdown.js';
import {eventKeyupInput} from '../eventListener.js';

eventKeyupInput();

class TagResearch {
  // Research match between input in dropdown and tag content
  static filterFunction(input, content) {
    const filter = input.value.toUpperCase();
    if (filter.length > 0) {
      closeAllDropdown();
      openDropdown(content.id);
    }

    const a = content.getElementsByTagName('a');
    for (let i = 0; i < a.length; ++i) {
      const txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = '';
      } else {
        a[i].style.display = 'none';
      }
    }
  }
}


export default TagResearch;