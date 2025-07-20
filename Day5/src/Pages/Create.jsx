import Create from "./components/Create";
import NavBar from "./components/NavBar";

function Edit() {
  return (
    <div>
      <NavBar />
      <div className="justify-center  mt-5 flex flex-wrap ">
        <Create />
      </div>
    </div>
  );
}

export default Edit;
