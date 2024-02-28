import { Document, Page, View, StyleSheet } from "@react-pdf/renderer";
import { useEffect, useState } from "react";
import { Html } from "react-pdf-html";

export const PDF = () => {
  const [visitanteData, setVisitanteData] = useState([]);
  const [generoData, setGeneroData] = useState([]);
  const [bairroData, setBairroData] = useState([]);
  function listarVisitantes() {
    fetch("http://localhost:8000/visitante")
      .then((res) => res.json())
      .then((visitantes) => {
        setVisitanteData(visitantes);
      });
  }
  function listarPorBairro() {
    fetch("http://localhost:8000/visitante/contar-bairro")
      .then((res) => res.json())
      .then((visitantes) => {
        setBairroData(visitantes);
      });
  }

  function listarPorGenero() {
    fetch("http://localhost:8000/visitante/contar-generos")
      .then((res) => res.json())
      .then((visitantes) => {
        setGeneroData(visitantes);
      });
  }

  useEffect(() => {
    listarPorBairro();
    listarPorGenero();
    listarVisitantes();
  }, []);
  const html = `
        <table>
            <tr>
                <td>Total de visitantes: </td>
                <td>${visitanteData.length}</td>
            </tr>
            ${generoData.map(
              (b, index) =>
                `<tr key=${index}>
                  <td>${b.name}: </td>
                  <td>${b.value}</td>
                </tr>`
            )}
            ${bairroData.map(
              (b, index) =>
                `<tr key=${index}>
                <td>${b.NAME}: </td>
                <td>${b.VALUE}</td>
              </tr>`
            )}
        </table
    `;
  const css = StyleSheet.create({
    page: {
      padding: 60,
    },
    title: {
      color: "red",
    },
  });
  return (
    <Document>
      <Page size="A4" style={css.page}>
        <View>
          <Html>{html}</Html>
        </View>
      </Page>
    </Document>
  );
};
