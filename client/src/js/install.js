const butInstall = document.getElementById('buttonInstall');

let deferredPrompt;

// Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = event;
  // Show the install button
  butInstall.style.display = 'block';
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  if (deferredPrompt) {
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    // Reset the deferredPrompt variable
    deferredPrompt = null;
    // Hide the install button
    butInstall.style.display = 'none';
  }
});

// Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('Jate PWA was installed.', event);
});
