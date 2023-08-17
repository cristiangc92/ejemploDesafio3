const Buscador = ({ onChange, search }) => {
    return (
      <form className="d-flex" role="search">
        <input
          className="form-control my-3"
          type="search"
          placeholder="Busca un colaborador"
          aria-label="Search"
          value={search}
          onChange={onChange}
        />
      </form>
    );
  };
  
  export default Buscador;
