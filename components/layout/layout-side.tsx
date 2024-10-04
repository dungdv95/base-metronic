import Footer from "./Footer";
// import GlobalInit from "./GlobalInit";
import Header from "./Header";
import SearchModal from "./SearchModal";
import Sidebar from "./Sidebar";
import dynamic from "next/dynamic";

interface LayoutProps {
  children: React.ReactNode;
}
const GlobalInit = dynamic(() => import("../layout/GlobalInit"), {
  ssr: false,
});

export default function LayoutSide({ children }: LayoutProps) {
  return (
    <>
      <div className="flex grow">
        <Sidebar />
        <div className="wrapper flex grow flex-col">
          <Header />
          <main className="grow content pt-5" id="content" role="content">
            <div className="container-fixed" id="content_container"></div>
            <div className="container-fixed">{children}</div>
          </main>
          <Footer />
        </div>
      </div>
      <SearchModal />
      <GlobalInit />
    </>
  );
}
