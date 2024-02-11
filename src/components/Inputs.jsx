export default function Input(props) {
  return (
    <>
      <input type="text"
        className={`
      w-full px-10 py-3 text-gray-700 bg-gray-50 
      focus:bg-white border border-gray-200 focus:border-gray-500 
      rounded-lg focus:outline-none ${props.className}`}
      />
    </>
  );
}