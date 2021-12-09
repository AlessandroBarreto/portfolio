import "../../styles/particles.scss";

export default function Particle() {
  return (
    <div id="particle-container">
      {Array(30)
        .fill("")
        .map((_, i: number) => (
          <div key={i} className="particle"></div>
        ))}
    </div>
  );
}
