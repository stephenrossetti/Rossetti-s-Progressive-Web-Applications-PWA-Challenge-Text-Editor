// Stores install button from HTML as a variable //
const butInstall = document.getElementById('buttonInstall');

// Event handler to the `beforeinstallprompt` event //
window.addEventListener('beforeinstallprompt', (event) => {
    // Store the triggered events //
    window.deferredPrompt = event;
    // Remove the hidden class from the button. Essentially keeps it visible for someone to click //
    butInstall.classList.toggle('hidden', false);
});

// Click event handler on the `butInstall` element //
butInstall.addEventListener('click', async () => {
    // Retrieves stored prompt event //
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
    // Show prompt //
    promptEvent.prompt();
    // Reset the deferred prompt variable, it can only be used once //
    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
});

// Handler for the `appinstalled` event //
window.addEventListener('appinstalled', (event) => {
    // Clear prompt
    window.deferredPrompt = null;
});