import { useState, useEffect } from 'react'
import { useFetchData } from '../hooks/useFetchData'
import { DisplayProperties } from "./index"
import CheckboxInput from './CheckboxInput'

export default function PropertyMenu() {
	const [propertyList, setPropertyList] = useState([]) // All data
	const [filteredList, setFilteredList] = useState([]) // Filterable data to be displayed
	const [availableLocations, setAvailableLocations] = useState([])
	// Filtering States
	const [onlySuperhost, setOnlySuperhost] = useState(false)
	const [bedroomSize, setBedroomSize] = useState(0)
  const data = useFetchData()

  useEffect(() => {
    
		setPropertyList(data)
		setFilteredList(propertyList)

		// Checkbox Input will use this array for filter options
		if(data.length > 0){
			const locationsArray = data.map(property => property.location) // This array may contain duplicates
			const uniqueLocations = new Set(locationsArray)
			setAvailableLocations([...uniqueLocations])
		}
  }, [data])

	// Filtering
	useEffect(() => {
		if(propertyList.length > 0) {
			// Reset
			setFilteredList(propertyList)
			if(onlySuperhost) {
				setFilteredList((prevArray) => prevArray.filter(item => item.superhost === true))
			}
			if(bedroomSize != 0) {
				setFilteredList((prevArray) => prevArray.filter(item => item.capacity.bedroom == bedroomSize))
			}
		}
	}, [onlySuperhost, bedroomSize])

	return (
		<>
			{propertyList.length > 0 
				?<>
						<div className="mx-[8.33%] mb-10">
							<search className="bg-darkblue-opf2 border-1 border-gray-op40 rounded-xl py-8 px-10 flex justify-between flex-wrap -translate-y-4 lg:-translate-y-1/2">
								<menu className="flex gap-3 flex-wrap">
									<li><CheckboxInput name="All Stays" groupName="locations" /></li>
									{
										availableLocations.map(location => (
											<li key={location}>
												<CheckboxInput key={location} name={location} groupName="locations" />
											</li>
										))
									}
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
										defaultValue={bedroomSize}
										onChange={(e) => setBedroomSize(Number(e.target.value))}
									>
										<option value="0">All</option>
										<option value="1">1 bedroom</option>
										<option value="2">2 bedroom</option>
									</select>
								</div>
							</search>
						</div>
						<DisplayProperties propertyList={filteredList} />
					</>
				:
					<span className='block mt-12 mx-auto w-5/6 text-center text-red-500 text-3xl'>An Error occurred !</span>
			}
		</>
	)
}