function HeroSection({background}) {
  return (
    <section
      className={`bg-white text-black bg-cover bg-bottom min-h-120 lg:min-h-155 flex flex-col justify-center`}
      style={{backgroundImage: `url('${background}')`}}
    >
      <div className="w-4/5 ml-[10%] sm:ml-16 lg:ml-28 xl:ml-35 max-w-100 lg:max-w-120 space-y-2">
        <h1 className="text-5xl/normal lg:text-[64px] font-semibold"
        >Peace, nature, dream</h1>
        <p className="text-2xl font-normal">Find and book a great experience</p>
      </div>
    </section>
  )
}

export default HeroSection