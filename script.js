function copyCommand(id) {
    const command = document.getElementById(id).textContent;
    navigator.clipboard.writeText(command).then(() => {
        alert('Command copied to clipboard!');
    }).catch(err => {
        console.error('Error copying command:', err);
    });
}
