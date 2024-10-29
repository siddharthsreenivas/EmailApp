import EmailList from "./components/EmailList";
import FilterSection from "./components/FilterSection";


function App() {

  return (
    <div className="lg:p-14 p-6 bg-theme-bgColor min-h-screen space-y-9">
      <FilterSection />
      <EmailList />
    </div>
  );
}

export default App;
