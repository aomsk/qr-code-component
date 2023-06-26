import "./App.css";

function App() {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-lightgray">
      <div className="w-[300px] h-[470px] rounded-[20px] text-center bg-white drop-shadow-xl p-4">
        <div>
          <img src="../src/assets/images/image-qr-code.png" alt="qr-code" className="rounded-lg" />
        </div>
        <div className="mt-5">
          <h1 className="text-darkblue font-bold text-[19px] pl-2 pr-2">Improve your front-end skills by building projects</h1>
          <p className="text-grayishblue text-[15px] font-normal mt-1 pl-3 pr-3 p-2">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </div>
    </div>
  );
}

export default App;
