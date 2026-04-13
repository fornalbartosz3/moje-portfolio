const ITEMS = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Vercel",
  "Git & GitHub",
  "Node.js",
  "HTML / CSS",
  "Claude AI",
];

export default function TickerBar() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div
      style={{
        backgroundColor: "#1a1208",
        overflow: "hidden",
        paddingTop: "7px",
        paddingBottom: "7px",
      }}
    >
      <div
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          animation: "ticker 30s linear infinite",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              flexShrink: 0,
              color: "#c8b99a",
              fontSize: "10px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            {item}
            <span style={{ opacity: 0.35, marginLeft: "20px" }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
