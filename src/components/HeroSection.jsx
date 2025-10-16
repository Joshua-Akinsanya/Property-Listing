export default function HeroSection({background}) {
  return (
    <section
      className={`bg-amber-300 text-black bg-cover bg-bottom min-h-80 flex flex-col justify-center`}
      style={{background: `url('${background}')`}}
    >
      <h1
        className="text-[64px] font-semibold"
      >Peace, nature, dream</h1>
      <p className="text-2xl">Find and book a great experience</p>
    </section>
  )
}