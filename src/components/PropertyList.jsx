import CardProperty from './CardProperty'

export default function PropertyList({properties}) {
  return (
    <div className='mx-auto w-5/6 max-w-284'>
      <h2 className="text-2xl font-medium mb-8"
      >Over 200 stays</h2>
      <div className='grid gap-x-8 gap-y-18 sm:grid-cols-2 lg:grid-cols-3'>
        {properties.map(property => {
          return (
            <CardProperty key={property.id} property={property} />
          )
        })}
      </div>
    </div>
  )
}