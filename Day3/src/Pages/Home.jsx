import Card from "./components/Card";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function Home() {
  return (
    <div>
     <NavBar />
     <div className='flex gap-5 mt-2 p-2 justify-center'>
      <Card />
     <Card />
     <Card />
     <Card />
     </div>
     <Footer />
      
    </div>
  );
}
export default Home;
