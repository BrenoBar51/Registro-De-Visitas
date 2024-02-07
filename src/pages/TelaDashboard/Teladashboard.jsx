 
import BarChartComponent from "../../components/Barcharts";
import SimpleLineChart from "../../components/Linecharts";
import PieChartCidadeComponent from "../../components/PieChartCidade";
import PieChartGenero from "../../components/PieChartGenero";

 export default function TelaDashboard() {
  return(
    <div className="min-h-screen flex flex-col justify-center bg-[#c8ccdc]">
   <div className="flex justify-between"> 
  <div className="bg-white relative bottom-20 left-24 h-[264px]">     <BarChartComponent /> </div>
    <div className="bg-white relative bottom-20 right-[8.7rem] h-[270px]">   <PieChartCidadeComponent /> </div>
   </div>
   <div className="flex">
 <div className="bg-white relative bottom-20 left-24 h-[270px]"> < SimpleLineChart /> </div> 
 <div className="bg-white relative left-[24.1rem] bottom-[4.5rem] h-[270px]">  <PieChartGenero /> </div> 
   </div>
    </div>
  )
}