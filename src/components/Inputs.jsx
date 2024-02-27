// eslint-disable-next-line react/prop-types
export default function Input({className, onChange, type}) {
  return (
    <>
      <input type={`${type}`}
        className={`
      w-full px-10 py-3 text-gray-700 bg-gray-50 
      focus:bg-white border border-gray-200 focus:border-gray-500 
      rounded-lg focus:outline-none ${className}`}
      onChange={onChange}
      />
    </>
  );
}