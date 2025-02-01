// Hover Button Effect
const hoverButton = document.getElementById('hoverButton');
hoverButton.addEventListener('mouseenter', () => {
  hoverButton.style.backgroundColor = '#28a745';
});
hoverButton.addEventListener('mouseleave', () => {
  hoverButton.style.backgroundColor = '#007BFF';
});

// Trigger Animation Button
const animateButton = document.getElementById('animateButton');
const banner = document.getElementById('banner');
animateButton.addEventListener('click', () => {
  banner.style.animation = 'none'; // Reset animation
  setTimeout(() => {
    banner.style.animation = 'slideIn 2s ease-out';
  }, 10);
});

// Calculate Vacation Cost
const calculateButton = document.getElementById('calculateButton');
calculateButton.addEventListener('click', () => {
  const costPerDay = 100; // Example cost
  const days = prompt('How many days is your vacation?');
  if (days && !isNaN(days)) {
    const totalCost = calculateTotalCost(costPerDay, days);
    alert(`Total vacation cost: $${totalCost}`);
  } else {
    alert('Please enter a valid number of days.');
  }
});

function calculateTotalCost(costPerDay, days) {
  return costPerDay * days;
}

// Modal Interaction
const modal = document.getElementById('modal');
const openModalButton = document.getElementById('animateButton'); // Reusing the animate button
const closeModal = document.getElementsByClassName('close')[0];

openModalButton.addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
