export default function CheckboxInput({name, groupName}) {
  return (
    <>
      <input type="checkbox"
        name={groupName}
        id={name}
        className="peer hidden"
      />
      <label htmlFor={name}
        className="cursor-pointer inline-block px-4 py-2 rounded peer-checked:bg-gray-op40 transition"
      >{name}</label>
    </>
  )
}