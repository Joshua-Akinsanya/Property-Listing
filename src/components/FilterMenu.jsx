import CheckboxInput from "./CheckboxInput"

export default function FilterMenu() {
  return (
    <div className="relative">
      <search className="bg-darkblue-opf2 border-1 border-gray-op40 rounded-xl p-2 flex justify-between flex-wrap relative">
        <menu className="flex gap-2 flex-wrap">
          <li><CheckboxInput name="All Stays" groupName="locations" /></li>
          <li><CheckboxInput name="Norway" groupName="locations" /></li>
          <li><CheckboxInput name="Finland" groupName="locations" /></li>
          <li><CheckboxInput name="Sweden" groupName="locations" /></li>
          <li><CheckboxInput name="Switzerland" groupName="locations" /></li>
        </menu>
      
        <div className="space-x-2">
          <input type="checkbox" name="" id="superhost" />
          <label htmlFor="superhost">Superhost</label>
          <select name="property" id="">
            <option value="1">1 bedroom</option>
            <option value="2">2 bedroom</option>
          </select>
        </div>
      </search>
    </div>
  )
}