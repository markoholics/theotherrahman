export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
        <h1>The Other Rahman</h1>
        <a
          href="mailto:contact@markoholics.com"
          style={{
            padding: "0.6rem 1.2rem",
            borderRadius: "6px",
            background: "#111",
            color: "#fff",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Email me
        </a>
      </div>
    </main>
  );
}
