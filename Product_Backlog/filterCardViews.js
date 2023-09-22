document.addEventListener("DOMContentLoaded", function () {
    // Get all tag checkboxes
    const tagCheckboxes = document.querySelectorAll(".tag-container input[type=checkbox]");
  
    // Attach a change event listener to each tag checkbox
    tagCheckboxes.forEach(function (checkbox) {
      checkbox.addEventListener("change", applyFilter);
    });
  });
  
  function applyFilter() {
    const selectedTags = [];
  
    // Get all selected tag checkboxes
    const tagCheckboxes = document.querySelectorAll(".tag-container input[type=checkbox]:checked");
  
    // Extract values of selected tags
    tagCheckboxes.forEach(function (checkbox) {
      selectedTags.push(checkbox.value);
    });
  
    // Get all card views
    const cardViews = document.querySelectorAll(".cardview");
  
    // Iterate through card views and toggle their display based on selected tags
    cardViews.forEach(cardView => {
      const tags = cardView.querySelectorAll(".tags"); // Get all tags within the card view
      let showCard = false;
      let tagContent = []
  
      tags.forEach(function (tag) {
        if (tag) {
            var pseudoElementContent = window.getComputedStyle(tag, '::before').content;
            pseudoElementContent = pseudoElementContent.replace(/['"]+/g, '');
            const tagText = pseudoElementContent.toLowerCase();
            tagContent.push(tagText)
            //for (const selectedTag of selectedTags){
            //    if (selectedTag.toLowerCase() === tagText) {
            //        showCard = true;
            //      }
            //}
          }
      });
      const bool = selectedTags.every(tag => tagContent.includes(tag))
      cardView.style.display = bool ? "none" : "block";
    });
  }