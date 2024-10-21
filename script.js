
// TODO: Implement the password generation logic based on user input
const generatePassword = (length, options) =>
{
    // Character sets for password generation
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    // TODO: Create a variable for the character set based on selected options
    var selectedchar = ""
    if (options.includeUppercase) selectedchar += uppercase;
    if (options.includeLowercase) selectedchar += lowercase;
    if (options.includeNumbers) selectedchar += numbers;
    if (options.includeSpecialChars) selectedchar += specialChars;

    if (selectedchar === "")
    {
        alert("Kosong Kocak")
        return null
    }
    
    // TODO: Generate the password based on the selected criteria
    var password = ""
    for (let i = 0; i < length; i++) 
    {
        var indexchar = Math.floor(Math.random() * selectedchar.length);
        password += selectedchar[indexchar];
    }

    return password;
};

// TODO: Add event listener to the button to call generatePassword and display the output
document.getElementById("generateBtn").addEventListener('click', () =>
{
    const length = parseInt(document.getElementById("length").value, 10)
    const options =
    {
        includeUppercase: document.getElementById("includeUppercase").checked,
        includeLowercase: document.getElementById("includeLowercase").checked,
        includeNumbers: document.getElementById("includeNumbers").checked,
        includeSpecialChars: document.getElementById("includeSpecialChars").checked
    }
    password = generatePassword(length, options);
    document.getElementById('passwordOutput').textContent = password
});

// BONUS: Implement the copy to clipboard functionality
document.getElementById("copyBtn").addEventListener('click', () =>
{
    let password = document.getElementById("passwordOutput").innerHTML
    navigator.clipboard.writeText(password)
    .then(() => alert("Password Telah Di Copy"))
    .catch(err, console.error("Password Gagal di Copy :", err))
});
