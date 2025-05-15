import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="px-10">
      {/* Header */}
      <Header></Header>
      {/* main Content */}
      <main className="p-4">
        <Outlet /> {/* This renders the nested route's content */}
      </main>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
