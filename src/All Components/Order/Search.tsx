import { Form } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!search) {
      return;
    } else {
      navigate(`order/${search}`);
      setSearch("");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input
        placeholder="Enter your search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="input"
      />
    </Form>
  );
};

export default Search;
