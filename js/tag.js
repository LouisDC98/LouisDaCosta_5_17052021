import DOMService from './domService.js';

class Tag {
  constructor() {
    this.tags = [];
  }

  // Add tag in array and launch function for create tag
  addTag(name, categorie) {
    const index = this.tags.findIndex((tag) => tag === name);
    if (index === -1) {
      this.tags.push(name);
      DOMService.addTag(name, categorie);
    }
  }

  // Remove tag in array and launch function for remove tag
  removeTag(name) {
    const index = this.tags.findIndex((tag) => tag === name);
    if (index >= 0) {
      this.tags.splice(index, 1);
      DOMService.removeTag(name);
    }
  }
}

export default Tag;
