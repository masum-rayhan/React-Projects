import { getRandomUser } from "../../Util/api";

const GetRandomContact = async (props) => {
  const responseFromApi = await getRandomUser();
  console.log(responseFromApi);

  return props.handleAddRandomContact({
    name:
      responseFromApi.data.first_name + " " + responseFromApi.data.last_name,
    email: responseFromApi.data.email,
    phone: responseFromApi.data.phone_number,
  });
};

const AddRandomContact = (props) => {
  return (
    <div>
      <button
        className="btn btn-success form-control"
        onClick={() => GetRandomContact(props)}
      >
        Add Random Contact
      </button>
    </div>
  );
};
export default AddRandomContact;
