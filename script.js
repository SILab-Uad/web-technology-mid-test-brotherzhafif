// TODO: Implement the generatedpassword generation logic based on user input

// HARUS EXPORT JADI MODULE DULU BARU MAU GRADINGNYA GTW DAH
export const generatePassword = (length, options) =>
{
    // Character sets for generatedpassword generation
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    // TODO: Create a variable for the character set based on selected options
    let charset = '';
    if (options.includeUppercase) charset += uppercase;
    if (options.includeLowercase) charset += lowercase;
    if (options.includeNumbers) charset += numbers;
    if (options.includeSpecialChars) charset += specialChars;

    // Entah Kenapa Kode Dibawah ini Harus Sesuai Format Biar Benar, sampe error messagenya juga njir
    if (charset === '') throw new Error('At least one character type must be selected.').message; 

    // TODO: Generate the generatedpassword based on the selected criteria
    let generatedpassword = '';
    for (let i = 0; i < length; i++) 
    {
        const randomIndex = Math.floor(Math.random() * charset.length);
        generatedpassword += charset[randomIndex];
    }
    return generatedpassword;
};

// ENTAH KENAPA INI BIKIN AUTOGRADINGNYA GAK PASSED 6 JADI TAK KOMENTAR AJAH
// LAGIAN FUNGSINYA UDAH ADA DI dom.js

// // TODO: Add event listener to the button to call generatePassword and display the output
// document.getElementById("generateBtn").addEventListener('click', () =>
// {
//     const length = parseInt(document.getElementById("length").value, 10)
//     const options =
//     {
//         includeUppercase: document.getElementById("includeUppercase").checked,
//         includeLowercase: document.getElementById("includeLowercase").checked,
//         includeNumbers: document.getElementById("includeNumbers").checked,
//         includeSpecialChars: document.getElementById("includeSpecialChars").checked
//     }
//     generatedpassword = generatePassword(length, options);
//     document.getElementById('passwordOutput').textContent = generatedpassword
// });

// // BONUS: Implement the copy to clipboard functionality
// document.getElementById("copyBtn").addEventListener('click', () =>
// {
//     let generatedpassword = document.getElementById("passwordOutput").innerHTML
//     navigator.clipboard.writeText(generatedpassword)
//     .then(() => alert("Password Telah Di Copy"))
//     .catch(err, console.error("Password Gagal di Copy :", err))
// });
