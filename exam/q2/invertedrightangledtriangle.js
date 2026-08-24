function InvertedTriangle() {
  for (let i = 5; i >= 1; i--) {
    let spaces = " ".repeat(5 - i);
    let stars = "*".repeat(i);

    console.log(spaces + stars);
  }
}
InvertedTriangle();
