 
import BarChartComponent from "../../components/Barcharts";
import SimpleLineChart from "../../components/Linecharts";
import PieChartCidadeComponent from "../../components/PieChartCidade";
import PieChartGenero from "../../components/PieChartGenero";

 export default function TelaDashboard() {
  return(
    <div className="min-h-screen flex flex-col justify-center bg-[#c8ccdc]">
   <div className="flex justify-between"> 
  <div className="bg-white relative bottom-[65px] left-[100px] h-[220px]">     <BarChartComponent /> </div>
    <div className="bg-white relative bottom-[65px] right-[70px] h-[250px]">   <PieChartCidadeComponent /> </div>
   </div>
   <div className="flex">
 <div className="bg-white relative bottom-[27px] left-[100px] h-[220px]"> < SimpleLineChart /> </div> 
 <div className="bg-white relative bottom-[37px] left-[460px] h-[250px]">  <PieChartGenero /> </div> 
   </div>
    </div>
  )
}