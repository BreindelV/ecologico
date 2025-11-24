test("manipula DOM con jsdom", () => {
  document.body.innerHTML = '<div id="app"></div>';
  const el = document.getElementById("app");
  el.textContent = "Hola Ecologico";
  expect(el.textContent).toBe("Hola Ecologico");
});
