import { filterContact } from "../../redux/filterSlice";
import { useDispatch } from "react-redux";

export const Filter = () => {
  const dispatch = useDispatch();

  const handleInputChange = (event) =>
    dispatch(filterContact(event.target.value));

  return (
    <>
      <h3>Search contacts by name</h3>
      <input onChange={handleInputChange} />
    </>
  );
};
