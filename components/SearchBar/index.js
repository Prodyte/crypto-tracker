function SearchBar({ ...rest }) {
  return (
    <div className="flex items-center w-96 mb-16">
      <input
        type="text"
        className="bg-black border-none placeholder-white p-4 outline-none h-full w-full rounded-full"
        {...rest}
      />
    </div>
  );
}

export default SearchBar;
