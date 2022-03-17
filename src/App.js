import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  const [data, setData] = useState(null);
  const fetchData = () => {
    fetch("https://dev.dashmed.in/sample-data")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data.data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  const clicked = () => {
    toast.success("List item clicked");
  };

  return (
    <>
      <h2
        style={{ textAlign: "center", marginBottom: "60px", marginTop: "60px" }}
      >
        <u>MEDICINES</u>
      </h2>
      <div className="test">
        {data ? (
          data.length > 0 && (
            <ul>
              {data.map((d, ind) => (
                <li
                  class="list-group-item list-group-item-action"
                  key={ind}
                  onClick={clicked}
                >
                  <div>
                    <b>
                      <u>{d.medName}</u>
                    </b>
                  </div>
                  <ul type="square">
                    {d.saltName.split("+").map((slt, i) => (
                      <li key={i}>{slt}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )
        ) : (
          <div>Loading...</div>
        )}
        <ToastContainer pauseOnFocusLoss={false} />
      </div>
    </>
  );
};

export default App;
