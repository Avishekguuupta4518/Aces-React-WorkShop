import NavBar from "./components/NavBar";
import EditForm from "./components/Edit"; // Renamed import

const EditPage = () => {
  return (
    <div>
      <NavBar />
      <div className="justify-center mt-5 flex flex-wrap">
        <EditForm />
      </div>
    </div>
  );
};

export default EditPage;
