import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";

function ConfirmacionDeCompra() {
  const navigate = useNavigate();


  return (
		<div className="min-h-screen bg-white">
		<Header />
		<main className="container mx-auto px-8 py-10">
			<div className="w-[1151px] pl-4 pr-[31px]">
				<div className="flex flex-col self-stretch mb-[49px] gap-8">
					<div className="flex justify-between items-center self-stretch">
						<div className="flex items-center w-[751px] gap-4">
							<button className="flex items-center bg-[#FFFFFF00] text-left w-[219px] py-1.5 px-3 gap-4 rounded-lg border border-solid border-[#00C8504D]" 
								style={{
									boxShadow: "0px 0px 5px #00FF001A"
								}}
								onClick={()=>alert("Pressed!")}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3f7f1448-f985-4c5b-a0c1-3e8e23188f8b"} 
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
								{"⚡ PASO 4/4 ⚡"}
							</span>
						</div>
					</div>
					<div className="flex flex-col self-stretch gap-2">
						<div className="flex items-start self-stretch relative">
							<div className="flex flex-col items-start bg-[#00C850] w-10 p-2.5 ml-[42px] rounded-[26843500px] border border-solid border-[#05DF72]" 
								style={{
									boxShadow: "0px 0px 30px #00FF001A"
								}}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5e91b751-5676-4f1e-954e-2e10785c8ca1"} 
									className="w-5 h-5 rounded-[26843500px] object-fill"
								/>
							</div>
							<div className="flex-1 self-stretch">
							</div>
							<div className="flex flex-col items-start bg-[#00C850] w-10 p-2.5 mr-[271px] rounded-[26843500px] border border-solid border-[#05DF72]" 
								style={{
									boxShadow: "0px 0px 30px #00FF001A"
								}}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/528771ae-0729-43d6-9fee-781721968d97"} 
									className="w-5 h-5 rounded-[26843500px] object-fill"
								/>
							</div>
							<div className="flex flex-col items-start bg-[#00C850] w-10 p-2.5 mr-[291px] rounded-[26843500px] border border-solid border-[#05DF72]" 
								style={{
									boxShadow: "0px 0px 30px #00FF001A"
								}}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5ae20ade-9b62-416d-bd9f-090a426afcd8"} 
									className="w-5 h-5 rounded-[26843500px] object-fill"
								/>
							</div>
							<div className="flex flex-col items-start bg-[#00C850] w-10 p-2.5 mr-[27px] rounded-[26843500px] border border-solid border-[#05DF72]" 
								style={{
									boxShadow: "0px 0px 30px #00FF001A"
								}}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c2293a7e-3638-4325-b720-76075c480c8a"} 
									className="w-5 h-5 rounded-[26843500px] object-fill"
								/>
							</div>
							<div className="flex-1 bg-[#1E2939] h-0.5 absolute bottom-[18px] right-0 left-0">
							</div>
							<div className="flex-1 h-0.5 absolute bottom-[18px] right-0 left-0" 
								style={{
									background: "linear-gradient(180deg, #00A63D, #7CCE00)"
								}}>
							</div>
						</div>
						<div className="flex justify-between items-start self-stretch">
							<div className="flex flex-col items-start w-[124px] pb-[1px]">
								<span className="text-[#05DF72] text-xs font-bold" >
									{"DATOS FACTURACIÓN"}
								</span>
							</div>
							<div className="flex flex-col items-start w-[54px] pb-[1px]">
								<span className="text-[#05DF72] text-xs font-bold" >
									{"ENTREGA"}
								</span>
							</div>
							<div className="flex flex-col items-start w-8 pb-[1px]">
								<span className="text-[#05DF72] text-xs font-bold" >
									{"PAGO"}
								</span>
							</div>
							<div className="flex flex-col items-start w-[93px] pb-[1px]">
								<span className="text-[#05DF72] text-xs font-bold" >
									{"CONFIRMACIÓN"}
								</span>
							</div>
						</div>
					</div>
					<div className="flex flex-col items-center self-stretch">
						<div className="flex flex-col items-start pl-[317px] mb-7 rounded-[26843500px] border-4 border-solid border-[#05DF724D]">
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eba840cb-8876-47a2-9dc2-b6825368881c"} 
								className="w-32 h-32 mt-[3px] mb-[25px] rounded-[26843500px] object-fill"
							/>
						</div>
						<div className="flex flex-col items-start bg-[#000000CC] mb-[43px] rounded-[14px] border border-solid border-[#00C8504D]" 
							style={{
								boxShadow: "0px 0px 30px #00FF001A"
							}}>
							<span className="text-[#05DF72] text-4xl font-bold mt-[74px] mb-[15px] ml-[119px]" >
								{"🎯 ¡MISIÓN COMPLETADA! 🎯"}
							</span>
							<button className="flex flex-col items-center text-left py-[17px] px-16 mb-[43px] ml-[60px] gap-2 rounded-[10px] border border-solid border-[#05DF7280]" 
								style={{
									background: "linear-gradient(180deg, #0D532B66, #34530E66)"
								}}
								onClick={()=>alert("Pressed!")}>
								<span className="text-[#B8F7CF] text-xl font-bold" >
									{"⚡ TU PEDIDO HA SIDO PROCESADO CON ÉXITO ⚡"}
								</span>
								<span className="text-[#7AF1A7] text-lg text-center w-[471px]" >
									{"🔥 PAGO CONFIRMADO • PROCESAMIENTO INICIADO • ENVÍO PREPARADO 🔥"}
								</span>
							</button>
							<div className="flex items-start mb-[43px] ml-[57px] gap-4">
								<div className="w-[198px] py-[23px] px-[1px] rounded-[14px] border border-solid border-[#05DF72]" 
									style={{
										background: "linear-gradient(180deg, #00A63D33, #5EA5001A)"
									}}>
									<div className="flex flex-col items-end self-stretch mb-[11px]">
										<div className="flex items-start py-1.5 mr-[18px] gap-[38px]">
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/963b87f9-5df5-459f-90d9-810c31e98552"} 
												className="w-10 h-10 object-fill"
											/>
											<div className="bg-[#9AE600] w-[19px] h-[19px] rounded-[26843500px]">
											</div>
										</div>
									</div>
									<div className="flex flex-col items-center self-stretch">
										<div className="flex flex-col items-start">
											<span className="text-[#05DF72] text-base font-bold text-center w-[70px]" >
												{"📧 EMAIL ENVIADO"}
											</span>
										</div>
									</div>
									<div className="flex flex-col items-center self-stretch mb-2">
										<div className="flex flex-col items-start">
											<span className="text-[#B8F7CF] text-sm text-center w-[79px]" >
												{"Confirmación inmediata"}
											</span>
										</div>
									</div>
									<div className="flex flex-col items-center self-stretch mx-12">
										<span className="text-[#9AE600] text-xs font-bold" >
											{"✅ COMPLETADO"}
										</span>
									</div>
								</div>
								<div className="w-[198px] pt-[25px] pb-[71px] px-[1px] rounded-[14px] border border-solid border-[#05DF72]" 
									style={{
										background: "linear-gradient(180deg, #00A63D33, #5EA5001A)"
									}}>
									<div className="flex flex-col items-end self-stretch mb-[11px]">
										<div className="flex items-start mr-[23px] gap-10">
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/503cd107-f1ee-4361-9a0a-95917fbd2db5"} 
												className="w-10 h-10 object-fill"
											/>
											<div className="bg-[#FF8904] w-3 h-4 rounded-[26843500px]">
											</div>
										</div>
									</div>
									<div className="flex flex-col items-center self-stretch mx-7">
										<span className="text-[#05DF72] text-base font-bold" >
											{"🚚 PREPARACIÓN"}
										</span>
									</div>
									<div className="flex flex-col items-center self-stretch mb-2 mx-[41px]">
										<span className="text-[#B8F7CF] text-sm" >
											{"Procesando envío"}
										</span>
									</div>
									<div className="flex flex-col items-center self-stretch">
										<div className="flex flex-col items-start">
											<span className="text-[#FF8803] text-xs font-bold" >
												{"⚡ EN PROCESO"}
											</span>
										</div>
									</div>
								</div>
								<div className="flex flex-col items-start w-[198px] rounded-[14px] border border-solid border-[#05DF72]" 
									style={{
										background: "linear-gradient(180deg, #00A63D33, #5EA5001A)"
									}}>
									<div className="flex items-start py-2 mt-[17px] mb-3 ml-[79px] mr-[22px] gap-10">
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/15aed282-8c0b-4c61-b4eb-34a4408dacd6"} 
											className="w-10 h-10 object-fill"
										/>
										<div className="bg-[#50A2FF] w-4 h-4 rounded-[26843500px]">
										</div>
									</div>
									<span className="text-[#05DF72] text-base font-bold mb-[1px] ml-8" >
										{"🎯 SEGUIMIENTO"}
									</span>
									<span className="text-[#B8F7CF] text-sm mb-[9px] ml-[43px]" >
										{"Código disponible"}
									</span>
									<span className="text-[#50A2FF] text-xs font-bold mb-[71px] ml-[54px]" >
										{"🔮 DISPONIBLE"}
									</span>
								</div>
							</div>
							<div className="flex flex-col items-center bg-[#00000066] px-[109px] mb-[25px] ml-14 rounded-[10px] border border-solid border-[#05DF72]" 
								style={{
									boxShadow: "0px 0px 30px #00FF001A"
								}}>
								<span className="text-[#05DF72] text-lg font-bold mt-[25px] mb-2" >
									{"📦 DETALLES DEL PEDIDO 📦"}
								</span>
								<span className="text-[#B8F7CF] text-xl font-bold text-center w-[251px] mb-8" >
									{"ID: OVERKILL-1759753502675"}
								</span>
								<span className="text-[#7AF1A7] text-base mb-[1px]" >
									{"Recibirás un email de confirmación con todos los detalles"}
								</span>
							</div>
							<div className="flex flex-col items-center bg-[#00000099] py-4 px-[108px] mb-[17px] ml-[65px] mr-[34px] gap-2 rounded-[10px] border border-solid border-[#00C8504D]">
								<div className="flex items-start">
									<span className="text-[#B8F7CF] text-lg mr-[5px]" >
										{"🎮"}
									</span>
									<div className="flex flex-col items-start w-[361px] mr-1.5">
										<span className="text-[#9AE600] text-lg font-bold" >
											{"Tu pedido ha sido procesado exitosamente"}
										</span>
									</div>
									<span className="text-[#B8F7CF] text-lg" >
										{"🎮"}
									</span>
								</div>
								<span className="text-[#7AF1A7] text-base font-bold" >
									{"¡Prepárate para una experiencia gaming OVERKILL!"}
								</span>
							</div>
							<button className="flex items-center text-left py-0.5 px-[13px] mb-4 ml-[207px] gap-4 rounded-lg border border-solid border-[#05DF72]" 
								style={{
									background: "linear-gradient(180deg, #00A63D, #7CCE00)"
								}}
								onClick={()=>alert("Pressed!")}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4ca6134f-340f-4085-a3a5-0e4b7464c824"} 
									className="w-4 h-4 rounded-lg object-fill"
								/>
								<span className="text-black text-lg font-bold" >
									{"🔥 VOLVER AL HQ PRINCIPAL 🔥"}
								</span>
							</button>
							<span className="text-[#7AF1A7] text-xs mb-[57px] ml-[227px]" >
								{"💡 CONSEJO: Guarda tu ID de pedido para seguimiento"}
							</span>
						</div>
					</div>
				</div>
			</div>
		</main>
		</div>
	)
}

export default ConfirmacionDeCompra;
