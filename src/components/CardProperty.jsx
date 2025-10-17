import homeIcon from '../assets/home_duotone.svg'
import userIcon from '../assets/user_alt_duotone.svg'
import star from '../assets/starfill.svg'

export default function CardProperty({property}) {
  return (
    <div className="relative border-solid border-1 border-gray-op40 rounded-2xl overflow-hidden">
      <img src={property.image} alt="" loading="lazy"
        width="358" height="200"
        className='w-full'
      />
      {
        property.superhost && (<p className='absolute top-2 left-2 bg-darkblue-opf2 px-3 py-1 rounded-full text-xs font-medium'>Superhost</p>)
      }
      <div className="px-5">
        <div className="border-b-solid border-b-1 border-b-gray-op40">
          <h3 className="font-semibold mt-5">{property.title}</h3>
          <p className="text-sm text-gray">{property.description}</p>
          <div className='text-xs flex flex-wrap gap-4 my-4'>
            <div className="flex items-center gap-1">
              <img src={homeIcon} alt="" />
              <p>{property.capacity.bedroom} bedroom</p>
            </div>
            <div className="flex items-center gap-1">
              <img src={userIcon} alt="" />
              <p>{property.capacity.people} guests</p>
            </div>
          </div>
        </div>
        <div className='my-5 flex justify-between text-sm'>
          <div>
            <span className="text-xl font-bold">${property.price}/</span>night
          </div>
          <div className='flex items-center'>
            <img src={star} alt="" />
            <span className="inline-block">{property.rating}</span>
          </div>
        </div>
      </div>
    </div>
  )
}