import { useState } from "react";
import "./App.css";
import { Description } from "./components/Description";
import { Footer } from "./components/Footer";
import { QRImage } from "./components/QRImage";
import { CardLayout } from "./Layouts/CardLayout";
import { Card } from "./ui/Card";

function App() {
  return (
    <>
      <Card>
        <CardLayout>
          <QRImage />
        </CardLayout>
        <CardLayout>
          <Description />
        </CardLayout>
      </Card>
      <Footer />
    </>
  );
}

export default App;
