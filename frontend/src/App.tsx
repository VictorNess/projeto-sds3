import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";


function App() {
  return (
    <>
    <NavBar/>
    <div className = "container"> 
    <h1 className="text-primary">Olá Mundo!!</h1>
    
    <DataTable />
    </div>
    <Footer />
 
    </> //Fragmentação = permite que varios elementos sejam retornados na mesma função
  );
}

export default App;
