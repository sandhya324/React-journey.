const SearchInput = ({ setId }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Complaint ID"
        onChange={(e) => setId(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;