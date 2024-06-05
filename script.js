document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');
    let isDarkMode = false;

    toggleButton.addEventListener('click', () => {
        if (isDarkMode) {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
        } else {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
                      
            toggleButton.setAttribute('title', 'cambiar a modo Claro');
            toggleButton.classList.add('button-style');
            toggleButton.style.color = 'white';
        }
        isDarkMode = !isDarkMode;
    });

    // Establecer el modo claro inicialmente
    document.body.classList.add('light-mode');
});
