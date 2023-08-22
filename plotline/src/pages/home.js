import React, {useState}   from 'react';
import toolkit from "../assets/Frame 7 (1).png";

const Login = () => {

  const [selectedButton, setSelectedButton] = useState('Button 1');
  const [buttonsVisible, setButtonsVisible] = useState(false);
  const [toolTipText, setToolTipText] = useState('');
  const [textSize, setSelectedFontSize] = useState('16px');
  const [textColour,setTextColour]= useState('white');
  const [paddingSize,setPaddingSize]= useState('10px');
  const [BackgroundColour,setBackgroundColour]= useState('black');
  const [cornerRadius,setCornerRadius]= useState('10px');
  const [toolTipWidth,setToolTipWidth]= useState('auto');
  const [arrowWidth,setArrowWidth]= useState('23px');
  const [arrowHeight,setArrowHeight]= useState('30px');

  

  const handleButtonClick = (buttonText) => {
    setSelectedButton(buttonText);
    setButtonsVisible(false); 
    setToolTipText(''); 
  };

  const toggleButtons = () => {
    setButtonsVisible(!buttonsVisible);
  };

  const handleToolTipChange = (event) => {
    setToolTipText(event.target.value);
  };

  const handleTextSizeChange = (event) => {
    setSelectedFontSize(event.target.value);
  };

  const handleTextColour = (event) => {
    setTextColour(event.target.value);
  };

  const handlePadding = (event) => {
    setPaddingSize(event.target.value);
  };

  const handleBackgroundColour = (event) => {
    setBackgroundColour(event.target.value);
  };

  const handleCornerRadius = (event) => {
    setCornerRadius(event.target.value);
  };

  const handleToolTipWidth = (event) => {
    setToolTipWidth(event.target.value);
  };

  const handleArrowWidth = (event) => {
    setArrowWidth(event.target.value);
  };

  const handleArrowHeight = (event) => {
    setArrowHeight(event.target.value);
  };





  return (
    <div className=" w-full h-screen flex flex-row">
     <div className="w-[70%] px-10 py-10 rounded-lg flex items-center justify-center  ">
      <div className="w-[70%] rounded-2xl bg-[#F5F5F5]  px-10 py-10 text-black font-Gilroy text-1.5xl">
        {/* Dropdown Menu */}

          <div className="relative my-2">
           <div className="my-2">
            <h4>Target Element</h4>
           </div>

              <button className={`bg-white border border-gray-400 px-4 py-2 rounded-md w-full flex justify-between items-center 
              ${buttonsVisible ? 'active' : ''}`}
              onClick={() => toggleButtons()}
              >
              {selectedButton}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-6 h-6 transition-transform duration-300 transform ${
                  buttonsVisible ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ marginLeft: 'auto' }}
              >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
              </button>


              {buttonsVisible && (
              <ul className="absolute left-0 w-full mt-2 bg-white shadow-lg rounded-md">
               <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleButtonClick('Button 1')}
                >
                Button 1
                </li>
                 <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleButtonClick('Button 2')}
                 >
                 Button 2
                </li>
                 <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleButtonClick('Button 3')}
                 >
                 Button 3
                </li>
                 <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleButtonClick('Button 4')}
                 >
                 Button 4
                </li>
                 <li
                   className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                   onClick={() => handleButtonClick('Button 5')}
                 >
                 Button 5
                 </li>
                </ul>
                )}
          </div>


        {/* input box*/}
        <div ><h4>Tool Tip Text</h4></div>
        <div className="my-2">
          <input
            type="text"
            className="border border-gray-400 rounded-md  px-3 py-2 w-full"
            placeholder="Input"
            value={toolTipText}
            onChange={handleToolTipChange}
          />
        </div>



        {/* two row input box*/}
        <div className="flex flex-row">
            <div className="w-[50%] ">
                {/* First Input Box */}
                <div className="my-2"><h4>Text Size</h4></div>
                <div className="my-2 pr-10">
                <input
                type="text"
                className="border border-gray-400 rounded-md px-3 py-2 w-full "
                placeholder="0"
                value={textSize}
                onChange={handleTextSizeChange}
                />
            </div>
          </div>
          <div className="w-[50%] ">
                {/* Second Input Box */}
                <div className="my-2 pl-10">
                <div className="my-2"><h4>Padding</h4></div>
                <input
                type="text"
                className="border border-gray-400 rounded-md px-3 py-2 w-full "
                placeholder="0"
                value={paddingSize}
                onChange={handlePadding}
                />
              </div>
            </div>
          </div>

          {/* input box*/}
          <div><h4>Text colour</h4></div>
           <div className="my-2">
            <input
            type="text"
            className="border border-gray-400 rounded-md px-3 py-2 w-full"
            placeholder="Input"
            value={textColour}
            onChange={handleTextColour}
            />
          </div>

          {/* input box*/}
          <div><h4>Background colour</h4></div>
           <div className="my-2">
            <input
            type="text"
            className="border border-gray-400 rounded-md px-3 py-2 w-full"
            placeholder="Input"
            value={BackgroundColour}
            onChange={handleBackgroundColour}
            />
          </div>



        {/* two row input box*/}

        <div className="flex flex-row">
          <div className="w-[50%] ">
            {/* First Input Box */}
            <div className="my-2 pr-10">
              <div className="my-2"><h4>Corner radius</h4></div>
                <input
                type="text"
                className="border border-gray-400 rounded-md px-3 py-2 w-full "
                placeholder="0"
                value={cornerRadius}
                onChange={handleCornerRadius}
                />
              </div>
            </div>

          <div className="w-[50%] ">
            {/* Second Input Box */}
            <div className="my-2 pl-10">
              <div className="my-2"><h4>Tooltip width</h4></div>
                <input
                type="text"
                className="border border-gray-400 rounded-md px-3 py-2 w-full "
                placeholder="0"
                value={toolTipWidth}
                onChange={handleToolTipWidth}

                />
            </div>
          </div>
        </div>
      

        {/* two row input box*/}
        <div className="flex flex-row">
          <div className="w-[50%] ">
            {/* First Input Box */}
            <div className="my-2 pr-10">  
            <div className="my-2"><h4>Arrow width</h4></div>
            <input
            type="text"
            className="border border-gray-400 rounded-md px-3 py-2 w-full "
            placeholder="0"
            value={arrowWidth}
            onChange={handleArrowWidth}
            />
                </div>
            </div>
            <div className="w-[50%] ">
                {/* Second Input Box */}
               
                <div className="my-2 pl-10">
                <div className="my-2"><h4>Arrow height</h4></div>
                <input
                type="text"
                className="border border-gray-400 rounded-md px-3 py-2 w-full "
                placeholder="0"
                value={arrowHeight}
                onChange={handleArrowHeight}
                />
            </div>
            </div>
        </div>

      </div>
    </div>

      
      
  <div className="w-[30%]  flex flex-col justify-center items-center px-8 py-8">
  {/* Phone Interface */}

  <div className="w-[100%] justify-center items-center">
   <div className="bg-black rounded-2xl relative border border-black p-5 ">
    <div className="bg-[#b8b8b8] rounded-2xl h-[600px] mt-2 p-5">


      {/* Five Buttons */}

      <div className="absolute top-10 left-10">
       <button className="bg-white text-black px-4 py-2 rounded-md mt-2 ml-2" onClick={() => setSelectedButton('Button 1')}>Button 1</button>
        <div className="flex flex-col justify-center items-center">
         {/* Display toolkit image and tooltip text for Button 1 */}
          {selectedButton === 'Button 1' && toolTipText && (
           <div className="absolute top-[100%] flex flex-col justify-center items-center">
            <img src={toolkit} style={{ width: arrowWidth, height: arrowHeight, marginBottom: '0' }} />
             <div style={{ fontSize: textSize, color: textColour, padding: paddingSize, backgroundColor: BackgroundColour, borderRadius: cornerRadius, width: toolTipWidth }}>
             {toolTipText}
           </div>
          </div>
          )}
        </div>
      </div>



      <div className="absolute top-10 right-10">
       <div className="flex flex-col justify-center items-center"> 
        <button className="bg-white text-black px-4 py-2 rounded-md mt-2 mr-2" onClick={() => setSelectedButton('Button 2')}>Button 2</button>
         {selectedButton === 'Button 2' && toolTipText && (
          <div className="absolute top-[100%] flex flex-col justify-center items-center">
           <div className=" tooltip-container">
            <img src={toolkit} style={{ width: arrowWidth, height: arrowHeight, marginBottom: '0' }} />
           </div>
           <div style={{ fontSize: textSize, color: textColour, padding: paddingSize, backgroundColor: BackgroundColour, borderRadius: cornerRadius, width: toolTipWidth }}>
           {toolTipText}
          </div>
         </div>
         )}
        </div>
      </div>


      <div className="absolute top-[44%] left-[36%] transform translate(-50%, -50%)">
       <button className="bg-white text-black px-4 py-2 rounded-md mt-2 ml-2" onClick={() => setSelectedButton('Button 3')}>Button 3</button>
        <div className="flex flex-col justify-center items-center">
         {selectedButton === 'Button 3' && toolTipText && (
          <div className=" absolute top-[100%] flex flex-col justify-center items-center">
           <img src={toolkit} style={{ width: arrowWidth, height: arrowHeight }} />
            <div style={{ fontSize: textSize, color: textColour, padding: paddingSize, backgroundColor: BackgroundColour, borderRadius: cornerRadius, width: toolTipWidth }}>
            {toolTipText}
           </div>
          </div>
         )}
        </div>
      </div>


      <div className="absolute bottom-10 left-10">
       <button className="bg-white text-black px-4 py-2 rounded-md mb-2 ml-2" onClick={() => setSelectedButton('Button 4')}>Button 4</button>
        <div className="flex flex-col justify-center items-center">
         {selectedButton === 'Button 4' && toolTipText && (
          <div className="absolute top-[100%] flex flex-col justify-center items-center">
           <img src={toolkit} style={{ width: arrowWidth, height: arrowHeight }} />
            <div style={{ fontSize: textSize, color: textColour, padding: paddingSize, backgroundColor: BackgroundColour, borderRadius: cornerRadius, width: toolTipWidth }}>
            {toolTipText}
           </div>
          </div>
         )}
       </div>
      </div>


      <div className="absolute bottom-10 right-10">
       <button className="bg-white text-black px-4 py-2 rounded-md mb-2 mr-2" onClick={() => setSelectedButton('Button 5')}>Button 5</button>
        <div className="flex flex-col justify-center items-center">
         {selectedButton === 'Button 5' && toolTipText && (
          <div className=" absolute top-[100%] flex flex-col justify-center items-center">
           <img src={toolkit} style={{ width: arrowWidth, height: arrowHeight, marginBottom: '0' }} />
            <div style={{ fontSize: textSize, color: textColour, padding: paddingSize, backgroundColor: BackgroundColour, borderRadius: cornerRadius, width: toolTipWidth }}>
            {toolTipText}
            </div>
          </div>
         )}
        </div>
      </div>


    </div>
   </div>
  </div>

  </div>

</div>
  
 );
};

export default Login;