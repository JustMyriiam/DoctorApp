import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";
import "./App.css";
import Acceuil from "./pages/Acceuil";
import Agenda from "./pages/Agenda";
import Patients from "./pages/Patients";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AjouterPatient from "./pages/AjouterPatient";
import AjouterRendezVous from "./pages/AjouterRendezVous";

function App() {
  return (
    <Router>
      <Container fluid className="p-0">
        <Row className="m-0">
          <Col sm={2} className="p-0">
            <Sidebar />
          </Col>
          <Col sm={{ span: 10, offset: 0 }} className="p-0">
            <Header />
            <Row className="m-0">
              <Col>
                <Routes>
                  <Route path="/acceuil" element={<Acceuil />} />
                  <Route path="/agenda" element={<Agenda />} />
                  <Route path="/patients" element={<Patients />}>
                    <Route path="ajouterpatient" element={<AjouterPatient />} />
                    <Route
                      path="ajouterrendezvous"
                      element={<AjouterRendezVous />}
                    />
                  </Route>
                  {/* <Route path="/Paramètres du compte" element={<Paramtres />} /> */}
                </Routes>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="m-0">
          <Col className="p-0">
            <Footer />
          </Col>
        </Row>
      </Container>
      {/* <ImageDownloader /> */}
    </Router>
  );
}

export default App;
