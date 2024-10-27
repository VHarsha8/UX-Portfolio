// ButtonComponent.jsx
const ButtonComponent = ({ text, link }) => {
    return (
      <div className="z-50 flex gap-1">
        <a href={link} target="_blank" rel="noopener noreferrer" className="gap-1 p-3 text-center border rounded-full">
          <span className="text-lg text-white">&#8594; </span> 
          <span className="text-white font-space-mono" >{text}</span>
        </a>
      </div>
    );
  };
  
  export default ButtonComponent;
  