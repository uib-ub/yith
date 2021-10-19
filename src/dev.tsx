import React, { FC } from "react";
import ReactDOM from "react-dom";
import Yith from "./index";

const Dev: FC = () => {
  return (
    <>
      <h1>Yith</h1>
      <h2>Projection</h2>
      <p>Multiple Manifest</p>
      <Yith type="projection">
        <Yith.Content manifestId="https://api.artic.edu/api/v1/artworks/76395/manifest.json" />
        <Yith.Content manifestId="https://api.artic.edu/api/v1/artworks/90291/manifest.json" />
        <Yith.Content manifestId="https://api.artic.edu/api/v1/artworks/79355/manifest.json" />
        <Yith.Content manifestId="https://api.artic.edu/api/v1/artworks/90295/manifest.json" />
        <Yith.Content manifestId="https://api.artic.edu/api/v1/artworks/110982/manifest.json" />
      </Yith>

      <h2>Presentation</h2>
      <p>Single Manifest</p>
      <Yith type="presentation">
        <Yith.Content manifestId="https://api.artic.edu/api/v1/artworks/76395/manifest.json" />
      </Yith>

      <p>Multiple Manifest</p>
      <Yith type="presentation">
        <Yith.Content manifestId="https://api.artic.edu/api/v1/artworks/90291/manifest.json" />
        <Yith.Content manifestId="https://api.artic.edu/api/v1/artworks/79355/manifest.json" />
        <Yith.Content manifestId="https://api.artic.edu/api/v1/artworks/90295/manifest.json" />
        <Yith.Content manifestId="https://api.artic.edu/api/v1/artworks/110982/manifest.json" />
      </Yith>
    </>
  );
};

ReactDOM.render(<Dev />, document.getElementById("root"));

{
  /* 

// default to Canvas items[0]
<Yith type="presentation">
  <Yith.Manifest id={} />
</Yith>

// default to Canvas id
<Yith type="presentation">
  <Yith.Figure manifest={} canvas={} />
</Yith>

// projection sequence
<Yith type="projection">
  <Yith.Manifest manifest={}  canvas={} />
  <Yith.Figure manifest={} />
    <Yith.Caption annotation={} />
    <Yith.Caption annotation={} />
  <Yith.Figure manifest={} />
</Yith>

// progression sequence
<Yith type="progression">
  <Yith.Figure manifest={} canvas={} />
  <Yith.Figure manifest={} />
  <Yith.Figure manifest={} />
</Yith>

*/
}
