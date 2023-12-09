import Header from "./layouts/Header";
import ROUTES from "./routes";

const App = () => {
  return (
    <>
      <Header />
      <main class="text-black dark:text-white bg-primary min-h-screen">
        <ROUTES />
      </main>
    </>
  );
};

export default App;
