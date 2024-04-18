import Column from './components/Items/Content/Column';
import Sidebar from '@/app/Layouts/Sidebar';
import Content from "@/app/Layouts/Content";
import Header from "@/app/Layouts/Header";
export default function Home() {



  return (
    <div id="container" className="flex flex-row">
      <Sidebar/>
      <Header/>
      <Content/>
    </div>
  );
}
