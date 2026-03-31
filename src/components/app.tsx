export function App() {
    const readDoccs = new Intl.ListFormat("en", {
      style: "long",
      type: "disjunction",
    }).format(["JETFLIX"]);

  return (
    <div>{readDoccs}</div>
  );
}
