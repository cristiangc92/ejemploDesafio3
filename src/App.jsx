import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Alert from "./components/Alert";
import Buscador from "./components/Buscador";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import { BaseColaboradores } from "./database/BaseColaboradores";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [alert, setAlert] = useState({ msg: "", color: "" });
  const [search, setSearch] = useState("");

  const handleSubmit = (nuevoColaborador) => {
    const colaboradorConId = {
      ...nuevoColaborador,
      id: colaboradores.length + 1,
    };
    setColaboradores([...colaboradores, colaboradorConId]);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredColaboradores = colaboradores.filter((c) => {
    if (
      c.nombre.toLowerCase().includes(search.toLowerCase()) ||
      c.correo.toLowerCase().includes(search.toLowerCase()) ||
      c.edad.toLowerCase().includes(search.toLowerCase()) ||
      c.cargo.toLowerCase().includes(search.toLowerCase()) ||
      c.telefono.toLowerCase().includes(search.toLowerCase())
    ) {
      return true;
    }
    return false;
  });

  return (
    <>
      <div className="mx-4">
        <h1 className="mb-0 mt-2">Lista de colaboradores</h1>
        <Row>
          <Col sm={12} md={6}>
            <Buscador onChange={handleChange} search={search} />
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={9}>
            <Listado colaboradores={filteredColaboradores} />
          </Col>
          <Col md={3}>
            <h2>Agregar colaborador</h2>
            <Formulario onSubmit={handleSubmit} setAlert={setAlert} />
            {alert.msg && <Alert msg={alert.msg} color={alert.color} />}
          </Col>
        </Row>
      </div>
    </>
  );
}

export default App;
