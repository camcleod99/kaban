import Column from './components/Column';

export default function Home() {

  const tasks = Array.from({ length: 5 }, (_, i) => ({
    name: `Task ${i}`,
    description: `This is task ${i}`,
    columnID: i,
  }));

  return (
    <div id="container"
      className="p-8">
      <h1
        className="p-4 flex text-5xl">
        My App
      </h1>
      <main
        className="flex flex-1">
        <Column key={1} columnID={1} columnName={"poke"} columnDescription={"peek"} columnColor={"red"}
                columnPosition={1} tasks={tasks}/>
        <Column key={2} columnID={2} columnName={"toke"} columnDescription={"teek"} columnColor={"red"}
                columnPosition={1} tasks={tasks}/>
        <Column key={2} columnID={2} columnName={"soke"} columnDescription={"seek"} columnColor={"red"}
                columnPosition={1} tasks={tasks}/>
      </main>
    </div>
  );
}
