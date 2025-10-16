import CheckboxInput from "./CheckboxInput"

export default function FilterMenu() {
  return (
    <div className="mx-[8.33%] mb-10">
      <search className="bg-darkblue-opf2 border-1 border-gray-op40 rounded-xl py-8 px-10 flex justify-between flex-wrap -translate-y-4 lg:-translate-y-1/2">
        <menu className="flex gap-3 flex-wrap">
          <li><CheckboxInput name="All Stays" groupName="locations" /></li>
          <li><CheckboxInput name="Norway" groupName="locations" /></li>
          <li><CheckboxInput name="Finland" groupName="locations" /></li>
          <li><CheckboxInput name="Sweden" groupName="locations" /></li>
          <li><CheckboxInput name="Switzerland" groupName="locations" /></li>
        </menu>
      
        <div className="space-x-5">
          <div className="inline-flex items-center gap-2">
            <input type="checkbox" name="" id="superhost" />
            <label htmlFor="superhost">Superhost</label>
          </div>
          <select name="property" id=""
            className="border-solid border-1 rounded-lg px-6 py-3"
          >
            <option value="1">1 bedroom</option>
            <option value="2">2 bedroom</option>
          </select>
        </div>
      </search>
    </div>
  )
}