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

        <div className="flex mt-10">
          <div className="w-[60%]">
            <div className="flex gap-2 font-bold">
              <h2>Hello,</h2>
              <h2 className="text-green-500">I'm</h2>
            </div>
            <h2 className="text-green-500 font-bold text-3xl">IDER ARIUNAA</h2>
            <h3>FULLSTACK Developer</h3>
            <p>
              Full-stack Engineer passionate about building modern, user-focused
              web applications with clean design and powerful functionality.
            </p>
          </div>
          <div className="w-[40%]">{/* <img src="" /> */}</div>
        </div>
      </div>
    </div>
  );
}
