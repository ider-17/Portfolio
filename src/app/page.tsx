export default function Home() {
  return (
    <div className="bg-black w-full min-h-screen">
      <div className="w-2/3 h-fit py-4 px-8 bg-gray-700 mx-auto mt-10 rounded-lg">
        <div className="flex justify-between">
          <h2 className="font-bold text-base">Portfolio</h2>
          <div className="flex justify-around gap-8 [&>*]:font-bold [&>*]:text-base">
            <p>Home</p>
            <p>Projects</p>
            <p>Resume</p>
          </div>
        </div>
      </div>
    </div>
  );
}
