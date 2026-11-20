// Η σύνδεση με το κουμπί είναι έτοιμη.
// ΜΗΝ υλοποιήσεις τη συνάρτηση στο branch main.
// Η αλλαγή αυτή ανήκει στην άσκηση του branch experimental.

const revealButton = document.querySelector("#reveal-button");
const result = document.querySelector("#result");

revealButton.addEventListener("click", showPersonalMessage);

function showPersonalMessage() {
  const result = document.getElementById("result");
  result.textContent = "WELCOME TO MADNESS";
}
