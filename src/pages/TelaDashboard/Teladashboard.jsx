import { PDFDownloadLink } from "@react-pdf/renderer";
import BarChartComponent from "../../components/Barcharts";
import BarChartBairro from "../../components/BarChartBairro";
import PieChartCidadeComponent from "../../components/PieChartCidade";
import PieChartGenero from "../../components/PieChartGenero";
import { PDF } from "../../components/Pdf.jsx";

export default function TelaDashboard() {

  return (
    <main className="h-[100vh] flex justify-center items-center bg-[#c8ccdc]">
      <section className="flex gap-y-2 flex-col">
        <div className="flex justify-center">
          <div className="bg-white font-medium">
            <PDFDownloadLink document={<PDF />}>Baixar PDF</PDFDownloadLink>
          </div>
        </div>
        <div className="flex justify-center h-[45vh] gap-4">
          <div className="bg-white max-h-fit">
            <BarChartComponent />
          </div>
          <div className="bg-white max-h-fit">
            <PieChartCidadeComponent />
          </div>
        </div>
        <div className="flex justify-center h-[45vh] gap-4">
          <div className="bg-white max-h-fit">
            <BarChartBairro /> 
          </div>
          <div className="bg-white max-h-fit">
            <PieChartGenero />
          </div>
        </div>
      </section>
    </main>
  )
}