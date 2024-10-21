import { generatePassword } from './script.js'; // Sorry Bang Kutambahin ini biar work autogradenya

// Dont change anything in this file
document.getElementById('generateBtn').addEventListener('click', () => {
    const length = parseInt(document.getElementById('length').value, 10);
    const options = {
        includeUppercase: document.getElementById('includeUppercase').checked,
        includeLowercase: document.getElementById('includeLowercase').checked,
        includeNumbers: document.getElementById('includeNumbers').checked,
        includeSpecialChars: document.getElementById('includeSpecialChars').checked,
    };
    
    const password = generatePassword(length, options);
    document.getElementById('passwordOutput').textContent = password;

    // Kutambahin ini biar value inputnya juga keupdate bang
    document.getElementById('textareaoutput').value = password;
});

// Copy to Clipboard functionality
document.getElementById('copyBtn').addEventListener('click', () => {
    const passwordOutput = document.getElementById('passwordOutput').textContent;
    if (passwordOutput) {
        navigator.clipboard.writeText(passwordOutput).then(() => {
            alert('Password copied to clipboard!');
        }).catch(err => {
            console.error('Could not copy text: ', err);
        });
    } else {
        alert('No password to copy!');
    }
});
