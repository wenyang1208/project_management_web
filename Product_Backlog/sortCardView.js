// Function to extract sequence from a sequence element
function extractSequence(sequenceElement) {
    const sequenceText = sequenceElement.textContent;
    // Assuming sequence text is in the format "Task 1"
    return parseInt(sequenceText.split(' ')[1]);
  }


// Function to extract priority from a priority element
function extractPriority(priorityElement) {
    const priorityText = priorityElement.textContent;
    // Assuming priority text is in the format "Priority: [PriorityLevel]"
    return priorityText.split(': ')[1];
  }

// Function to sort cards by sequence from newest to oldest
function sortCardsNewToOld() {
    const cardContainer = document.getElementById('card-views-container');
    const cards = Array.from(cardContainer.querySelectorAll('.cardview'));
  
    cards.sort((a, b) => {
      const sequenceA = extractSequence(a.querySelector('.task-name'));
      const sequenceB = extractSequence(b.querySelector('.task-name'));
  
      return sequenceB - sequenceA; // Sort in descending order
    });
  
    // Clear the container and append sorted cards
    cardContainer.innerHTML = '';
    cards.forEach((card) => cardContainer.appendChild(card));
  }
  
  // Function to sort cards by sequence from oldest to newest
  function sortCardsOldToNew() {
    const cardContainer = document.getElementById('card-views-container');
    const cards = Array.from(cardContainer.querySelectorAll('.cardview'));
  
    cards.sort((a, b) => {
      const sequenceA = extractSequence(a.querySelector('.task-name'));
      const sequenceB = extractSequence(b.querySelector('.task-name'));
  
      return sequenceA - sequenceB; // Sort in ascending order
    });
  
    // Clear the container and append sorted cards
    cardContainer.innerHTML = '';
    cards.forEach((card) => cardContainer.appendChild(card));
  }
  
  // Function to sort cards by priority from low to urgent
  function sortCardsLowToUrgent() {
    const cardContainer = document.getElementById('card-views-container');
    const cards = Array.from(cardContainer.querySelectorAll('.cardview'));
  
    cards.sort((a, b) => {
      const priorityA = extractPriority(a.querySelector('.priority'));
      const priorityB = extractPriority(b.querySelector('.priority'));
  
      // Define the order of priorities from low to urgent
      const priorityOrder = ['Low', 'Medium', 'High', 'Urgent'];
  
      return priorityOrder.indexOf(priorityA) - priorityOrder.indexOf(priorityB);
    });
  
    // Clear the container and append sorted cards
    cardContainer.innerHTML = '';
    cards.forEach((card) => cardContainer.appendChild(card));
  }
  
  // Function to sort cards by priority from urgent to low
  function sortCardsUrgentToLow() {
    const cardContainer = document.getElementById('card-views-container');
    const cards = Array.from(cardContainer.querySelectorAll('.cardview'));
  
    cards.sort((a, b) => {
      const priorityA = extractPriority(a.querySelector('.priority'));
      const priorityB = extractPriority(b.querySelector('.priority'));
  
      // Define the order of priorities from urgent to low
      const priorityOrder = ['Urgent', 'High', 'Medium', 'Low'];
  
      return priorityOrder.indexOf(priorityA) - priorityOrder.indexOf(priorityB);
    });
  
    // Clear the container and append sorted cards
    cardContainer.innerHTML = '';
    cards.forEach((card) => cardContainer.appendChild(card));
  }
  
  // Event listeners for sorting buttons
  const sortNewToOldButton = document.querySelector('.sort1');
  const sortOldToNewButton = document.querySelector('.sort2');
  const sortLowToUrgentButton = document.querySelector('.sort3');
  const sortUrgentToLowButton = document.querySelector('.sort4');

  sortNewToOldButton.addEventListener('click',sortCardsNewToOld)
  sortOldToNewButton.addEventListener('click',sortCardsOldToNew)
  sortLowToUrgentButton.addEventListener('click', sortCardsLowToUrgent);
  sortUrgentToLowButton.addEventListener('click', sortCardsUrgentToLow);