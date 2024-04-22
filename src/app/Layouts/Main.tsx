import Sidebar  from "@/app/components/Sections/Sidebar";
import Header   from "@/app/components/Sections/Header";
import Content  from "@/app/components/Sections/Content";

const main = () => {
  return (
    <div id="container" className="flex flex-row">
      <Header />
      <Content />
      <Sidebar />
    </div>
  );
};

export default main;
