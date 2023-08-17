import Table from "react-bootstrap/Table";

const Listado = ({ colaboradores }) => {
  return (
    <Table responsive bordered hover>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Telefono</th>
        </tr>
      </thead>
      <tbody>
        {colaboradores.map((c) => (
          <tr key={c.id}>
            <td>{c.nombre}</td>
            <td>{c.correo}</td>
            <td>{c.edad}</td>
            <td>{c.cargo}</td>
            <td>{c.telefono}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Listado;
