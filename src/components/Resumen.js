import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { primerMayuscula } from "../helpers";

const ContenedorResumen = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: rgb(216, 226, 242);
  color: rgba(0, 131, 143, 1);
  margin-top: 1rem;
  text-transform: capitalize;
  font-size: 1.3rem;
  border: 2px solid rgba(0, 131, 143, 1);
`;

const Resumen = ({ datos }) => {
  // Extraer de datos

  const { marca, year, plan } = datos;
  if (marca === "" || year === "" || plan === "") {
    return null;
  }

  return (
    <ContenedorResumen>
      <h2>Resumen de Cotización</h2>
      <ul className="ul-bg">
        <li>Marca: {primerMayuscula(marca)}</li>
        <li>Plan: {primerMayuscula(plan)}</li>
        <li>Año del Auto: {year}</li>
      </ul>
    </ContenedorResumen>
  );
};

Resumen.propTypes = {
  datos: PropTypes.object.isRequired
}

export default Resumen;
