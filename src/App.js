import { useEffect, useState } from "react";
import './App.css';

export const App = () => {
  const [datetime, setDatetime] = useState("");
  const [timezone, setTimezone] = useState("Europe/Prague");

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(`https://worldtimeapi.org/api/timezone/${timezone}`);
      const data = await response.json();
      setDatetime(data.datetime);
    };
    loadData();
  }, [timezone]);

  return (
    <div>
      <strong>ČAS & DATUM: </strong> <output>{datetime}</output>
      <br />
      <br />

      <label>
      <strong>Vyberte zónu: </strong> {" "}
        <select onChange={(event) => {setTimezone(event.target.value)}} value={timezone}>
          <option value="America/New_York">New York</option>
          <option value="Europe/London">Londýn</option>
          <option value="Europe/Moscow">Moskva</option>
          <option value="Europe/Prague">Praha</option>
          <option value="Asia/Hong_Kong">Hong Kong</option>
          <option value="Asia/Jerusalem">Jeruzalém</option>
        </select>
      </label>
    </div>
  );
};

export default App;
