export const Letter = ({ setShowLetter }) => {
  const handleChangeToLetter = () => {
    document.querySelector(".letter-space").classList.add("fade");
    setTimeout(() => setShowLetter(true), 750);
  };
  return (
    <div className="letter-space">
      <svg className="letter-inside-container" width="500" height="500">
        <path
          onClick={() => handleChangeToLetter()}
          className="letter-inside"
          stroke="black"
          fill="  #f8f6d3"
          strokeWidth={0.25}
          d="M20 165 L250 300 L480 165 Z"
        ></path>
      </svg>

      <div className="letter-body" style={{ position: "relative" }}>
        <img
          style={{
            position: "absolute",
            width: 50,
            height: 50,
            zIndex: 9999999999,
            left: 20,
            marginTop: 80,
          }}
          src="img/animal-crossing.png"
        ></img>
        <svg
          onClick={(event) => {
            document.querySelector(".letter-svg").classList.add("activated");
            document
              .querySelector(".letter-inside-container")
              .classList.add("visible");
          }}
          className="letter-svg"
          width="500"
          height="200"
        >
          <polygon
            points="0,0 250,150 500,0"
            style={{
              fill: "#ffeecc",
              stroke: "grey",
              strokeWidth: 0.5,
              zIndex: 2,
            }}
          ></polygon>
        </svg>
      </div>
    </div>
  );
};
