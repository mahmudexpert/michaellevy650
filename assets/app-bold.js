//  A map of categories
let categories = new Map();
categories.set('category-art-link', 'make-bold');
categories.set('category-text-link', 'make-bold');
categories.set('category-loose-ends-link', 'make-bold');
categories.set('category-hyperlinks-link', 'make-bold');
categories.set('category-etc-link', 'make-bold');
categories.set('category-bookshelf-link', 'make-bold');

// list of posts
let postCategories = new Map();
postCategories.set('category-art-post', 'make-bold');
postCategories.set('category-text-post', 'make-bold');
postCategories.set('category-loose-ends-post', 'make-bold');
postCategories.set('category-hyperlinks-post', 'make-bold');
postCategories.set('category-etc-post', 'make-bold');
postCategories.set('category-bookshelf-post', 'make-bold');


/**
 * Toggles the selected category on click and removes any effect on other categories
 * 
 * @param {The category selected by clicking} selectedCategory 
 * @param {This is map. List of categories available} listOfCategories 
 */
function showSelectedCategoryOnly(selectedCategory, listOfCategories) {
  // Toggle the selected category class
  document.getElementsByClassName(selectedCategory)['0'].classList.toggle(listOfCategories.get(selectedCategory));

  // remove selection classes from all other categories
  for (let [key, value] of listOfCategories) {

    // skip the selected category as we don't want it to be manipulated
    if (key === selectedCategory) {
      continue;
    }
    let re = new RegExp(value, "g");
    document.getElementsByClassName(key)['0'].className = document.getElementsByClassName(key)['0'].className.replace(re, "");
  }

}

/**
 * Remove the classes from non-selected category posts
 * @param {The category selected by clicking} selectedCategory 
 * @param {This is map. List of categories available} listOfCategories 
 */
function removeSelectionFromOtherCategoryPosts(selectedCategory, listOfCategories) {

  for (let [key, value] of listOfCategories) {
    // skip the selected category as we don't want it to be manipulated
    if (key === selectedCategory) {
      continue;
    }
    // get list of posts to be unselected
    let unselectedElementsList = document.getElementsByClassName(key);
    let loopIndex;
    let re = new RegExp(value, "g");
    for (loopIndex = 0; loopIndex < unselectedElementsList.length; loopIndex++) {
      unselectedElementsList[loopIndex].className = unselectedElementsList[loopIndex].className.replace(re, "");
    }
  }

}

/**
 * Adds given class to all elements of target class
 * @param { The class to find elements for } targetElement 
 * @param { The class to add } classToAdd 
 */
function addClassToAll(targetElement, classToAdd) {
  var catElements = document.getElementsByClassName(targetElement);
  var catIndex;
  for (catIndex = 0; catIndex < catElements.length; catIndex++) {
    catElements[catIndex].classList.toggle(classToAdd);
  }
}

// The function calls from HTML
function showCategoryArt() {
  showSelectedCategoryOnly('category-art-link', categories);
  addClassToAll('category-art-post', 'make-bold');
  removeSelectionFromOtherCategoryPosts('category-art-post', postCategories);
}
function showCategoryText() {
  showSelectedCategoryOnly('category-text-link', categories);
  addClassToAll('category-text-post', 'make-bold');
  removeSelectionFromOtherCategoryPosts('category-text-post', postCategories);
}
function showCategoryLooseEnds() {
  showSelectedCategoryOnly('category-loose-ends-link', categories);
  addClassToAll('category-loose-ends-post', 'make-bold');
  removeSelectionFromOtherCategoryPosts('category-loose-ends-post', postCategories);
}
function showCategoryBookshelf() {
  showSelectedCategoryOnly('category-bookshelf-link', categories);
  addClassToAll('category-bookshelf-post', 'make-bold');
  removeSelectionFromOtherCategoryPosts('category-bookshelf-post', postCategories);
}
function showCategoryHyperlinks() {
  showSelectedCategoryOnly('category-hyperlinks-link', categories);
  addClassToAll('category-hyperlinks-post', 'make-bold');
  removeSelectionFromOtherCategoryPosts('category-hyperlinks-post', postCategories);
}
function showCategoryEtc() {
  showSelectedCategoryOnly('category-etc-link', categories);
  addClassToAll('category-etc-post', 'make-bold');
  removeSelectionFromOtherCategoryPosts('category-etc-post', postCategories);
}