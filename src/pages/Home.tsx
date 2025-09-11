import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
    <div style={{}}>
      <div ><Header /></div>
      <div ><Main /></div>
      <div style={{height:"100%"}}><Footer /></div>
    </div>
    </>
  );
} 
