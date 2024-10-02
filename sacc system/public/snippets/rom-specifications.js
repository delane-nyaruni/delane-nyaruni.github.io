function displayROMSpecs() {
  if (navigator.storage && navigator.storage.estimate) {
    navigator.storage.estimate().then(estimate => {
      const rom = estimate.quota || 'N/A';
      console.log('ROM:', rom, 'bytes');
    });
  } else {
    console.log('ROM: N/A');
  }
}

// Display ROM specs immediately
displayROMSpecs();

// Display ROM specs every 2 hours
setInterval(displayROMSpecs, 2 * 60 * 60 * 1000);
