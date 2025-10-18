import { useState, useEffect } from 'react'
import { useFetchData } from '../hooks/useFetchData'
import { DisplayProperties } from "./index"

export default function PropertyMenu() {
	const [propertyList, setPropertyList] = useState([]) // All data
	const [filteredPropertyList, setfilteredPropertyList] = useState([]) // Filterable data to be displayed

	// Filtering States
	const [locationOptions, setLocationOptions] = useState([]) // Options are set dynamically in a UseEffect to avoid hard coding the values
	const [selectedLocations, setSelectedLocations] = useState([])
	const [onlySuperhost, setOnlySuperhost] = useState(false)
	const [bedroomSize, setBedroomSize] = useState(0)
  
	const data = useFetchData()

  useEffect(() => {
		setPropertyList(data)
		setfilteredPropertyList(propertyList)

		// Checkbox Input will use this array for filter options
		// Location Filter Options are set dynamically to avoid hard coding the values
		if(data.length > 0){
			const locationsArray = data.map(property => property.location) // This array may contain duplicates
			setLocationOptions(() => ["All Stays", ...locationsArray])
			setLocationOptions((prev) => new Set(prev))
			setLocationOptions((prev) => [...prev])
		}
  }, [data])

	const handleSelect = (selectedOption) => {
		if( !selectedLocations.includes(selectedOption) ) {
			setSelectedLocations([...selectedLocations, selectedOption])
		}
		else {
			const temp = selectedLocations.filter(location => location !== selectedOption)
			setSelectedLocations(temp)
		}
	}

	// Filtering
	useEffect(() => {
		if(propertyList.length > 0) {
			// Reset
			setfilteredPropertyList(propertyList)

			// Filter by locations
			if( selectedLocations.length > 0 && !selectedLocations.includes('All Stays') ) {
				const tempProperties = propertyList.filter(property => selectedLocations.includes(property.location) )
				setfilteredPropertyList(tempProperties)
			}

			// Filter by Superhost
			if(onlySuperhost) {
				setfilteredPropertyList((prevArray) => prevArray.filter(item => item.superhost === true))
			}

			// Filter by bedroom size
			if(bedroomSize != 0) {
				setfilteredPropertyList((prevArray) => prevArray.filter(item => item.capacity.bedroom == bedroomSize))
			}
		}
	}, [selectedLocations, onlySuperhost, bedroomSize])

	return (
		<>
			{propertyList.length > 0
				?<>
						<div className="mx-[8.33%] mb-10">
							<search className="bg-darkblue-opf2 border-1 border-gray-op40 rounded-xl py-8 px-10 flex justify-between flex-wrap -translate-y-4 lg:-translate-y-1/2">
								<menu className="flex gap-3 flex-wrap">
									{locationOptions.map( option => {
										return (
											<button className={`${selectedLocations.includes(option) && 'bg-darkgray'} cursor-pointer inline-block px-3 py-2 rounded hover:bg-gray-500 transition`}
												key={option}
												onClick={() => handleSelect(option)}
											>
												{option}
											</button>
										)
									} )}
								</menu>

								<div className="space-x-5">
									<div className="inline-flex items-center gap-2">
										<input type="checkbox" name="" id="superhost"
											checked={onlySuperhost}
											onChange={() => setOnlySuperhost(prev => !prev)}
										/>
										<label htmlFor="superhost">Superhost</label>
									</div>
									<select name="property" id=""
										className="border-solid border-1 rounded-lg px-6 py-3"
										value={bedroomSize}
										onChange={(e) => setBedroomSize(Number(e.target.value))}
									>
										<option value="0">All</option>
										<option value="1">1 bedroom</option>
										<option value="2">2 bedroom</option>
									</select>
								</div>
							</search>
						</div>
						<DisplayProperties propertyList={filteredPropertyList} />
					</>
				:
					<span className='block mt-12 mx-auto w-5/6 text-center text-red-500 text-3xl'>An Error occurred !</span>
			}
		</>
	)
}