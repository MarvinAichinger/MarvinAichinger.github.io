let writeButton = document.querySelector("#write");

writeButton.addEventListener("click", async () => {
  document.write("User clicked write button");
  try {
    const ndef = new NDEFReader();
    await ndef.write("Hello world!");
    document.write("> Message written");
  } catch (error) {
    document.write("Argh! " + error);
  }
});