const itemsRef = document.querySelectorAll('.item');

console.log(`Number of categories: ${itemsRef.length}`);

itemsRef.forEach(elem => {
    const titleCategory = elem.firstElementChild.textContent;
    const quantityItem = elem.lastElementChild.children.length;

    console.log(`Category: ${titleCategory} \nElements: ${quantityItem}`);
});
