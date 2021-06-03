class customFunction {
  static extractTags(tagsCategory) {
    let txtValue;
    const arrayCategory = [];
    for (let i = 0; i < tagsCategory.length; ++i) {
      txtValue = tagsCategory[i].textContent;
      if (arrayCategory[i] !== txtValue) {
        arrayCategory.push(txtValue);
      }
    }
    return arrayCategory;
  }
}

export { customFunction };
