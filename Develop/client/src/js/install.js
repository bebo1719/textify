const butInstall = document.getElementById('buttonInstall');

let deferredPrompt;

// Save the event for later use and show the install button
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
  butInstall.style.display = 'block'; // Show the install button
  console.log('beforeinstallprompt event was fired');
});

// Show the install prompt when the button is clicked
butInstall.addEventListener('click', async () => {
  if (!deferredPrompt) return;

  // Show the install prompt
  deferredPrompt.prompt();

  // Wait for the user’s response
  const choiceResult = await deferredPrompt.userChoice;
  if (choiceResult.outcome === 'accepted') {
    console.log('User accepted the install prompt');
  } else {
    console.log('User dismissed the install prompt');
  }

  // Clear the deferred prompt variable as it can only be used once
  deferredPrompt = null;
  butInstall.style.display = 'none'; // Hide the install button after prompt
});

// Log that the app has been installed
window.addEventListener('appinstalled', (event) => {
  console.log('PWA was installed', event);
});
