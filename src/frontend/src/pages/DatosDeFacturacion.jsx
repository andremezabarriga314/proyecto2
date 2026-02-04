import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";

function DatosDeFacturacion() {
  const navigate = useNavigate();


  return (
		<div className="min-h-screen bg-white">
		<Header />
		<main className="container mx-auto px-8 py-10">
			<div className="flex flex-col items-start w-[1151px]">
				<div className="flex items-center mt-[37px] mb-8 ml-4">
					<div className="flex items-center w-[751px] gap-4">
						<button className="flex items-center bg-[#FFFFFF00] text-left w-[219px] py-1.5 px-3 gap-4 rounded-lg border border-solid border-[#00C8504D]" 
							style={{
								boxShadow: "0px 0px 5px #00FF001A"
							}}
							onClick={()=>alert("Pressed!")}>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7a9d1feb-6281-4611-90d5-eeec8c4d8ef5"} 
								className="w-4 h-4 rounded-lg object-fill"
							/>
							<span className="text-[#05DF72] text-sm" >
								{"💀 ABORTAR MISIÓN 💀"}
							</span>
						</button>
						<div className="w-[516px]">
							<div className="flex flex-col items-center self-stretch pb-[1px]">
								<span className="text-[#05DF72] text-3xl font-bold" >
									{"🎯 PROCESO DE PAGO OVERKILL 🎯"}
								</span>
							</div>
							<div className="flex flex-col items-start self-stretch pb-[1px]">
								<span className="text-[#B8F7CF] text-base" >
									{"SISTEMA DE PAGO BLINDADO • ENCRIPTACIÓN MILITAR"}
								</span>
							</div>
						</div>
					</div>
					<div className="flex flex-col items-start bg-[#00C95033] w-[110px] py-0.5 px-[13px] rounded-lg border border-solid border-[#05DF72]" 
						style={{
							boxShadow: "0px 0px 5px #00FF001A"
						}}>
						<span className="text-[#BAF351] text-xs font-bold" >
							{"⚡ PASO 1/4 ⚡"}
						</span>
					</div>
				</div>
				<div className="flex justify-between items-start self-stretch mb-[30px] ml-4 mr-8">
					<div className="flex flex-col items-start w-[861px] gap-2">
						<div className="flex items-start self-stretch relative">
							<div className="flex flex-col items-start bg-[#00C850] w-10 p-2.5 ml-[42px] rounded-[26843500px] border border-solid border-[#05DF72]" 
								style={{
									boxShadow: "0px 0px 30px #00FF001A"
								}}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ee3767e5-6ced-438c-b111-e0dbac699bb9"} 
									className="w-5 h-5 rounded-[26843500px] object-fill"
								/>
							</div>
							<div className="flex-1 self-stretch">
							</div>
							<div className="flex flex-col items-start bg-black w-10 p-2.5 mr-[271px] rounded-[26843500px] border border-solid border-[#495565]">
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/900e98b8-110e-40f1-b5d0-d502504f513c"} 
									className="w-5 h-5 rounded-[26843500px] object-fill"
								/>
							</div>
							<div className="flex flex-col items-start bg-black w-10 p-2.5 mr-[115px] rounded-[26843500px] border border-solid border-[#495565]">
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/90756e9a-21f3-4a3e-a76a-501434de3ca5"} 
									className="w-5 h-5 rounded-[26843500px] object-fill"
								/>
							</div>
							<div className="flex-1 items-start bg-[#1E2939] absolute bottom-[18px] right-0 left-0">
								<div className="w-[1px] h-0.5" 
									style={{
										background: "linear-gradient(180deg, #00A63D, #7CCE00)"
									}}>
								</div>
							</div>
						</div>
						<div className="flex items-start mr-[119px]">
							<div className="flex flex-col items-start w-[124px] pb-[1px] mr-[264px]">
								<span className="text-[#05DF72] text-xs font-bold" >
									{"DATOS FACTURACIÓN"}
								</span>
							</div>
							<div className="flex flex-col items-start w-[54px] pb-[1px] mr-[268px]">
								<span className="text-[#697282] text-xs font-bold" >
									{"ENTREGA"}
								</span>
							</div>
							<div className="flex flex-col items-start w-8 pb-[1px]">
								<span className="text-[#697282] text-xs font-bold" >
									{"PAGO"}
								</span>
							</div>
						</div>
					</div>
					<div className="flex flex-col items-center w-[92px] gap-2">
						<button className="flex flex-col items-center self-stretch bg-black text-left py-2.5 rounded-[26843500px] border border-solid border-[#495565]"
							onClick={()=>alert("Pressed!")}>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8940d7a0-eaed-4ab0-acd4-bd77820b90b2"} 
								className="w-5 h-5 rounded-[26843500px] object-fill"
							/>
						</button>
						<span className="text-[#697282] text-xs font-bold" >
							{"CONFIRMACIÓN"}
						</span>
					</div>
				</div>
				<div className="flex flex-col items-center self-stretch mb-[81px]">
					<div className="flex flex-col items-start bg-[#000000CC] p-[25px] rounded-[14px] border border-solid border-[#00C8504D]" 
						style={{
							boxShadow: "0px 0px 30px #00FF001A"
						}}>
						<div className="flex items-center mb-[25px] gap-[11px]">
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/866e1461-3018-45d0-b82e-ab789c287ed4"} 
								className="w-6 h-6 object-fill"
							/>
							<div className="flex flex-col items-start w-[366px]">
								<span className="text-[#05DF72] text-2xl font-bold" >
									{"💀 DATOS DE FACTURACIÓN 💀"}
								</span>
							</div>
						</div>
						<div className="flex items-start mb-6 gap-4">
							<div className="w-[329px]">
								<div className="flex flex-col items-start self-stretch">
									<span className="text-[#7AF1A7] text-sm font-bold" >
										{"⚡ NOMBRE ⚡"}
									</span>
								</div>
								<div className="flex flex-col items-start self-stretch bg-[#00000099] py-[9px] pl-3 rounded-lg border border-solid border-[#00C8504D]" 
									style={{
										boxShadow: "0px 0px 5px #00FF001A"
									}}>
									<span className="text-[#66FF66] text-sm" >
										{"Tu nombre"}
									</span>
								</div>
							</div>
							<div className="flex flex-col items-start w-[329px]">
								<span className="text-[#7AF1A7] text-sm font-bold mr-[213px]" >
									{"⚡ APELLIDOS ⚡"}
								</span>
								<div className="flex flex-col items-start self-stretch bg-[#00000099] py-[9px] pl-3 rounded-lg border border-solid border-[#00C8504D]" 
									style={{
										boxShadow: "0px 0px 5px #00FF001A"
									}}>
									<span className="text-[#66FF66] text-sm" >
										{"Tus apellidos"}
									</span>
								</div>
							</div>
						</div>
						<div className="flex items-start mb-6 gap-4">
							<div className="flex flex-col items-start w-[329px]">
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e1d2676e-90d5-4c8f-aee7-dc25eb2c57db"} 
									className="w-4 h-4 object-fill"
								/>
								<span className="text-[#7AF1A7] text-sm font-bold mb-[1px] ml-6" >
									{"🔥 EMAIL LETAL 🔥"}
								</span>
								<div className="flex flex-col items-start self-stretch bg-[#00000099] py-[9px] pl-3 rounded-lg border border-solid border-[#00C8504D]" 
									style={{
										boxShadow: "0px 0px 5px #00FF001A"
									}}>
									<span className="text-[#66FF66] text-sm" >
										{"andremezabarriga314@gmail.com"}
									</span>
								</div>
							</div>
							<div className="flex flex-col items-start w-[329px]">
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/200db39c-bd3e-4d23-94c8-3416db0fb1bc"} 
									className="w-4 h-4 object-fill"
								/>
								<span className="text-[#7AF1A7] text-sm font-bold mb-[1px] ml-6" >
									{"📱 TELÉFONO 📱"}
								</span>
								<div className="flex flex-col items-start self-stretch bg-[#00000099] py-[9px] pl-3 rounded-lg border border-solid border-[#00C8504D]" 
									style={{
										boxShadow: "0px 0px 5px #00FF001A"
									}}>
									<span className="text-[#66FF66] text-sm" >
										{"+34 600 000 000"}
									</span>
								</div>
							</div>
						</div>
						<div className="flex flex-col items-start mb-6">
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/88450505-94f4-4833-9d14-6edb03416823"} 
								className="w-4 h-4 object-fill"
							/>
							<span className="text-[#7AF1A7] text-sm font-bold mb-[1px] ml-6" >
								{"🏠 DIRECCIÓN COMPLETA 🏠"}
							</span>
							<div className="flex flex-col items-start bg-[#00000099] py-[9px] pl-3 rounded-lg border border-solid border-[#00C8504D]" 
								style={{
									boxShadow: "0px 0px 5px #00FF001A"
								}}>
								<span className="text-[#66FF66] text-sm" >
									{"Calle, número, piso, puerta..."}
								</span>
							</div>
						</div>
						<div className="flex items-start">
							<div className="flex flex-col items-start w-[214px] mr-[62px]">
								<span className="text-[#7AF1A7] text-sm font-bold" >
									{"🏙️ CIUDAD 🏙️"}
								</span>
							</div>
							<div className="flex flex-col items-start w-[113px] mr-[71px]">
								<span className="text-[#7AF1A7] text-sm font-bold" >
									{"🗺️ PROVINCIA 🗺️"}
								</span>
							</div>
							<span className="text-[#7AF1A7] text-sm font-bold" >
								{"📮 CÓDIGO POSTAL 📮"}
							</span>
						</div>
						<div className="flex items-center mb-[25px]">
							<div className="bg-[#00000099] w-[214px] h-9 mr-[19px] rounded-lg border border-solid border-[#00C8504D]" 
								style={{
									boxShadow: "0px 0px 5px #00FF001A"
								}}>
							</div>
							<div className="bg-[#00000099] w-[214px] h-9 mr-[13px] rounded-lg border border-solid border-[#00C8504D]" 
								style={{
									boxShadow: "0px 0px 5px #00FF001A"
								}}>
							</div>
							<div className="bg-[#00000099] w-[214px] h-9 rounded-lg border border-solid border-[#00C8504D]" 
								style={{
									boxShadow: "0px 0px 5px #00FF001A"
								}}>
							</div>
						</div>
						<div className="flex items-start">
							<button className="flex items-center bg-black text-left w-[175px] py-1.5 px-3.5 mr-[322px] gap-4 rounded-lg border border-solid border-[#00C85080]" 
								style={{
									boxShadow: "0px 0px 5px #00FF001A"
								}}
								onClick={()=>alert("Pressed!")}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/96704289-f61e-4c30-8cfa-7df81bcca6fa"} 
									className="w-4 h-4 rounded-lg object-fill"
								/>
								<span className="text-[#05DF72] text-sm font-bold" >
									{"💀 ANTERIOR 💀"}
								</span>
							</button>
							<button className="flex items-center text-left w-[177px] py-[7px] px-3.5 gap-[22px] rounded-lg border border-solid border-[#05DF72]" 
								style={{
									background: "linear-gradient(180deg, #00A63D, #7CCE00)"
								}}
								onClick={()=>alert("Pressed!")}>
								<span className="text-black text-sm font-bold" >
									{"⚡ SIGUIENTE ⚡"}
								</span>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/42f87b8c-fa1c-4859-904b-c2dd71277c62"} 
									className="w-4 h-4 rounded-lg object-fill"
								/>
							</button>
						</div>
					</div>
				</div>
			</div>
		</main>
		</div>
	)
}

export default DatosDeFacturacion;
