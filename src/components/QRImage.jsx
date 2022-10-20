import React from "react";
import QRCodeImage from "../assets/image-qr-code.png";
export const QRImage = () => {
  return (
    <div className="p-5 ">
      <img
        src={QRCodeImage}
        alt="QR Code Image"
        className="rounded-2xl m-auto"
      />
    </div>
  );
};
