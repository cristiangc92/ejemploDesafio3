import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const Formulario = ({ onSubmit, setAlert }) => {
  const [colaborador, setColaborador] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  const handleChange = (e) => {
    setColaborador({
      ...colaborador,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      colaborador.nombre === "" ||
      colaborador.correo === "" ||
      colaborador.edad === "" ||
      colaborador.cargo === "" ||
      colaborador.telefono === ""
    ) {
      setAlert({
        msg: "Completa todos los campos !",
        color: "danger",
      });
      return;
    }

    onSubmit(colaborador);

    setAlert({
      msg: "Colaborador agregado exitosamente !",
      color: "success",
    });

    setColaborador({
      nombre: "",
      correo: "",
      edad: "",
      cargo: "",
      telefono: "",
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Control
          className="my-3"
          type="text"
          placeholder="Nombre del colaborador"
          onChange={handleChange}
          name="nombre"
          value={colaborador.nombre}
        />
        <Form.Control
          className="my-3"
          type="email"
          placeholder="Email del colaborador"
          onChange={handleChange}
          name="correo"
          value={colaborador.correo}
        />
        <Form.Control
          className="my-3"
          type="text"
          placeholder="Edad del colaborador"
          onChange={handleChange}
          name="edad"
          value={colaborador.edad}
        />
        <Form.Control
          className="my-3"
          type="text"
          placeholder="Cargo del colaborador"
          onChange={handleChange}
          name="cargo"
          value={colaborador.cargo}
        />
        <Form.Control
          className="my-3"
          type="text"
          placeholder="Teléfono del colaborador"
          onChange={handleChange}
          name="telefono"
          value={colaborador.telefono}
        />
        <Button className="w-100" variant="primary" type="submit">
          Agregar Colaborador
        </Button>
      </Form.Group>
    </Form>
  );
};

export default Formulario;
