let writeButton = document.querySelector("#write");

writeButton.addEventListener("click", async () => {
  console.log("User clicked write button");

  try {
    const ndef = new NDEFReader();
    await ndef.write("Hello world!");
    alert("> Message written");
  } catch (error) {
    alert("Argh! " + error);
  }
});