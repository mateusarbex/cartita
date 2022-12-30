import { useEffect } from "react";
import text from "./text";

export const Content = () => {
  useEffect(() => {
    setTimeout(
      () => document.querySelector(".image").classList.add("show"),
      2000
    );
  }, []);
  return (
    <div style={{ position: "relative" }}>
      <div className="image">
        <img className="images" src="img/5.jpg"></img>
        <img className="images" src="img/4.jpg"></img>
        <img className="images" src="img/3.jpg"></img>
        <img className="images" src="img/2.jpg"></img>
        <img className="images" src="img/1.jpg"></img>
      </div>
      <div className="content">
        <div style={{ textAlign: "left", padding: "20px", fontSize: "20px" }}>
          <div style={{ fontWeight: "bold" }}>Dear Maria</div>
          <div style={{ marginTop: "10px" }}>{text}</div>
          <div
            style={{
              textAlign: "right",
              padding: "20px",
              fontWeight: "bold",
              marginTop: "100px",
            }}
          >
            xoxo, Mateus
          </div>
        </div>
      </div>
    </div>
  );
};
