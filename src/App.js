/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import NavbarComponent from './components/NavbarComponent'
import HeaderComponent from './components/HeaderComponent'
import ContactComponent from "./components/ContactComponent";
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <HeaderComponent/>
      <section className="section">
	<div className="container">
    <div className="columns">
	<div className="column center sm">
    <h1 className="title">
        About Me
    </h1>
	</div>
    <div className="column">
        <div className="about_content">
        <p>
        I'm Full-Stack Software Developer currently working at Andela holding
        a bachelor's degree in the information system. I have built various
        projects and systems that have allowed me to master my craft that is
        e-commerce systems in PHP and, E-SACCO systems in Django
        (Django rest framework), author's haven which is a blogging site in (React).
        </p>
        </div>
        <div className="field is-grouped">
  <p className="control">
    <button className="button is-medium is-link has-text-white">
      View works
    </button>
  </p>
  <p className="control">
    <button className="button is-medium is-warning is-outlined">
      Download CV
    </button>
  </p>
</div>
	</div>
</div>
	</div>
</section>
    <ContactComponent/>
    </div>
  );
}

export default App;
