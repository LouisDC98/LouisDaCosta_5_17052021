class CustomFunction {
  static extractTags(tagsCategory) {
    let txtValue;
    const arrayCategory = [];
    const tagsCategoryArray = [...tagsCategory];
    tagsCategoryArray.forEach((element) => {
      txtValue = element.textContent;
      if (arrayCategory !== txtValue) {
        arrayCategory.push(txtValue);
      }
    });
    return arrayCategory;
  }
}

export default CustomFunction;
