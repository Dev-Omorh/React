import React from "react";

function Card(props) {
  return (
    <div className="card  m-2 border-none rounded-md w-100 align-middle">
      <div className="top flex justify-between bg-blue-700">
        <h2 className="name text-black font-bold p-10 text-2xl">{props.name}</h2>
        <img
          src={props.img}
          alt="profile"
          className="m-4 rounded-full w-30 h-40 object-cover float-right"
        />
      </div>

      <div
        className="bottom bg-blue-600
       p-6 text-black font-bold"
      >
        <p className="info">{props.tel}</p>
        <p className="info">{props.email}</p>
      </div>
    </div>
  );
}

export default Card;
