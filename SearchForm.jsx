import { useGlobalContext } from "./src/context";


const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchTerm(searchValue)
    console.log(searchValue);
  };
  return (
    <section className="container">
      <h1 className="title">unsplash images</h1>
      <form
        className="search-form"
        onSubmit={handleSubmit}
        action=""
      >
        <input
          className="form-input search-input"
          type="text"
          name="search"
          placeholder="cat"
        />
        <button className="btn" type="submit">
          Search
        </button>
      </form>
    </section>
  );
};
export default SearchForm;
