// # Generare il numero da concatenare nella password

// - Chiedi all’utente il suo nome
//     - dichiarare una variabile
let userName
//     - assegnare alla variabile il valore restituito dal promp
userName = prompt('Ciao, come ti chiami?')
console.log(userName)
// - Chiedi il suo cognome
//     - dichiarare una variabile
let lastName
//     - assegnare alla variabile il valore restituito dal promp
lastName = prompt('Qual è il tuo cognome?')
console.log(lastName)
// - Chiedi il suo colore preferito
//     - dichiarare una variabile
let favoriteColor
//     - assegnare alla variabile il valore restituito dal promp
favoriteColor = prompt('Qual è il tuo colore preferito?')
console.log(favoriteColor)
// - Crea il numero da concatenare
//     - dichiarare una variabile
const numberPass = Math.floor(Math.random() * 1000)
// - Concatenare i dati ricevuti dall'utente con il messaggio della password
let partOfMessagePassword = 'Questa è la tua password:'
//     - dichiarare una variabile password-utente dove concatenare le stringhe
let passwordUtente = partOfMessagePassword + ' ' + userName + lastName + favoriteColor + numberPass
// - Scrivere sulla pagina il risultato della concatenazione: nomecognomecolorepreferitonumero
//     - inserire nell'html un tag h1 con id="passwordUtente"
//     - recuperare con js l'elemento del dom con id ="passworUtente"
const passworUtenteDomElement = document.getElementById('passworUtente')
//     - modificare l'innerHTML del h1 con il valore
passworUtenteDomElement.innerHTML = passwordUtente
