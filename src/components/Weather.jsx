import React, { useState } from "react";

const Weather = ({ weather }) => {
  const [goster, setGoster] = useState(false);
  const calistir = () => {
    setGoster(!goster);
  };
  if (!weather) {
    return <div></div>;
  }

  return (
    <div className="container">
      <button onClick={calistir} className="w-100 btn btn-outline-info">
        Bulunduğunuz Konumunuzun Anlık Hava Durumunu Öğrenmek İçin Tıklayınız
      </button>

      {goster === true && (
        <React.StrictMode>
          <div className="text-center display-4 mt-3 p-3 ">
            {" "}
            Konum :{weather.name.toUpperCase()}
          </div>
          <hr />
          <div className="text-center display-4 p-3">
            {" "}
            Sıcaklık :{weather.main.temp} DERECE
          </div>
          <hr />
          <div className="text-center display-4 p-3">
            {" "}
            Durum :
            {weather.weather.map((data) => data.description.toUpperCase())}
          </div>
          <hr />
        </React.StrictMode>
      )}
    </div>
  );
};

export default Weather;
