import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./Routes/AppRoutes";

function App() {
  return (
    <div className="min-h-screen">

      <div className="px-5 sm:px-8 md:px-10 lg:px-44 xl:px-52">

        <Navbar />

        <main>
          <AppRoutes />
        </main>

        <Footer />

      </div>

    </div>
  );
}

export default App;