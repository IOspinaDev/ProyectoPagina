export default function Map() {
  return (
    <section className="p-10">
      <iframe
        src="https://www.google.com/maps?q=mosquera+nariño&output=embed"
        width="100%"
        height="400"
        style={{ border: 0, borderRadius: "10px" }}
        loading="lazy"
      ></iframe>
    </section>
  );
}