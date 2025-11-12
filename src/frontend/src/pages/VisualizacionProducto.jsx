import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";

function VisualizacionProducto() {
  const navigate = useNavigate();


  return (
		<div className="min-h-screen bg-white">
		<Header />
		<main className="container mx-auto px-8 py-10">
			<div className="w-[1151px]">
				<div className="self-stretch bg-black">
					<div className="flex items-center self-stretch py-3 px-[79px] mb-[27px] border-b-[1.600000023841858px] border-solid border-b-[#00C8504D]" 
						style={{
							background: "linear-gradient(180deg, #000000, #101727, #000000)"
						}}>
						<div className="flex flex-col items-start w-[41px] py-2 px-[9px] mr-[13px] rounded-[10px] border border-solid border-[#05DF72]" 
							style={{
								background: "linear-gradient(180deg, #00A63D, #7CCE00)"
							}}>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/553df609-9551-4195-b579-ed836733b546"} 
								className="w-6 h-6 rounded-[10px] object-fill"
							/>
						</div>
						<div className="flex flex-col items-start w-[227px] mr-[3px] gap-[1px]">
							<span className="text-[#05DF72] text-xl font-bold" >
								{"💀 OVERKILL ARENA 💀"}
							</span>
							<span className="text-[#B8F7CF] text-xs mr-[85px]" >
								{"⚡ GAMING EXTREMO ⚡"}
							</span>
						</div>
						<div className="flex items-start w-[239px]">
							<div className="flex flex-col items-start w-[155px] relative mr-2">
								<div className="flex flex-col items-start self-stretch bg-[#000000CC] py-2.5 pl-3 rounded-lg border border-solid border-[#00C8504D]" 
									style={{
										boxShadow: "0px 0px 5px #00FF001A"
									}}>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/11c0c428-84a9-4fc3-a8fe-d1639c616a5f"} 
										className="w-4 h-4 object-fill"
									/>
								</div>
								<span className="text-[#05DF72] text-sm absolute top-2.5 right-0" >
									{"🎯 BUSCAR ARSENAL LETAL..."}
								</span>
							</div>
							<div className="flex flex-col items-start w-11 p-3.5 mr-8 rounded-lg border border-solid border-[#05DF72]" 
								style={{
									background: "linear-gradient(180deg, #00A63D, #7CCE00)"
								}}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a1b171e1-b457-44ea-8df0-b572917229f1"} 
									className="w-4 h-4 rounded-lg object-fill"
								/>
							</div>
						</div>
						<div className="flex flex-col items-start bg-[#FFFFFF00] w-11 p-3.5 mr-2 rounded-lg border border-solid border-[#00C8504D]" 
							style={{
								boxShadow: "0px 0px 5px #00FF001A"
							}}>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c1c5328d-706d-4788-8ead-1735b1cc0581"} 
								className="w-4 h-4 rounded-lg object-fill"
							/>
						</div>
						<div className="flex flex-col items-start bg-[#FFFFFF00] w-11 p-3.5 mr-2 rounded-lg border border-solid border-[#00C8504D]" 
							style={{
								boxShadow: "0px 0px 5px #00FF001A"
							}}>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/143a16b3-7b44-40e3-8c85-410bb288ab74"} 
								className="w-4 h-4 rounded-lg object-fill"
							/>
						</div>
						<div className="flex flex-col items-start bg-[#FFFFFF00] w-11 p-3.5 mr-2 rounded-lg border border-solid border-[#00C8504D]" 
							style={{
								boxShadow: "0px 0px 5px #00FF001A"
							}}>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5e7bb90d-9c41-4b9c-9b94-42f2aaa07966"} 
								className="w-4 h-4 rounded-lg object-fill"
							/>
						</div>
						<div className="flex flex-col items-start bg-[#FFFFFF00] w-11 p-3.5 mr-2 rounded-lg border border-solid border-[#00C8504D]" 
							style={{
								boxShadow: "0px 0px 5px #00FF001A"
							}}>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0ab80682-8b0e-459a-bb74-48fdb1eda545"} 
								className="w-4 h-4 rounded-lg object-fill"
							/>
						</div>
						<div className="flex flex-col items-start bg-black w-[116px] py-3 px-[18px] mr-[9px] rounded-lg border border-solid border-[#00C85080]" 
							style={{
								boxShadow: "0px 0px 5px #00FF001A"
							}}>
							<span className="text-[#05DF72] text-sm font-bold" >
								{"⚡ LOGIN ⚡"}
							</span>
						</div>
						<div className="flex flex-col items-start w-[135px] py-3 px-[13px] rounded-lg border border-solid border-[#05DF72]" 
							style={{
								background: "linear-gradient(180deg, #00A63D, #7CCE00)"
							}}>
							<span className="text-black text-sm font-bold" >
								{"💀 REGISTER 💀"}
							</span>
						</div>
					</div>
					<div className="flex flex-col items-start self-stretch mb-[9px] mx-[84px] gap-6">
						<button className="flex items-center bg-black text-left py-2.5 px-3 gap-4 rounded-lg border border-solid border-[#AC46FF4D]"
							onClick={()=>alert("Pressed!")}>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/670f198e-66f2-460a-89c0-54fd456eff02"} 
								className="w-4 h-4 rounded-lg object-fill"
							/>
							<span className="text-[#D9B1FF] text-sm" >
								{"Volver"}
							</span>
						</button>
						<div className="flex items-start self-stretch gap-8">
							<div className="w-[472px]">
								<div className="flex flex-col items-center self-stretch bg-[#1D293D80] mb-32 rounded-[14px] border border-solid border-[#AC46FF33]">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a41a4ba5-d1ae-4bdb-9909-be4324c47469"} 
										className="w-[470px] h-[408px] rounded-[14px] object-fill"
									/>
								</div>
							</div>
							<div className="w-[472px]">
								<div className="flex flex-col items-start self-stretch mb-6">
									<div className="flex items-start mb-[26px] gap-2">
										<div className="flex flex-col items-start bg-[#9810FA33] w-8 py-0.5 px-[7px] rounded-lg border border-solid border-[#AC46FF4D]">
											<span className="text-[#D9B1FF] text-xs" >
												{"PC"}
											</span>
										</div>
										<div className="flex flex-col items-start w-[89px] py-0.5 px-1.5 rounded-lg border border-solid border-[#AC46FF4D]">
											<span className="text-[#D9B1FF] text-xs" >
												{"RPG/Fantasía"}
											</span>
										</div>
									</div>
									<div className="flex flex-col items-start mb-4">
										<div className="flex flex-col items-start">
											<span className="text-white text-3xl font-bold" >
												{"Xbox wireles controller"}
											</span>
										</div>
										<div className="flex items-center mr-[11px] gap-4">
											<div className="flex items-center w-[193px] gap-2">
												<img
													src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7dbed8de-40b9-43fa-ac57-13bc8dc0605b"} 
													className="w-20 h-4 object-fill"
												/>
												<div className="flex flex-col items-start w-[21px]">
													<span className="text-white text-base" >
														{"0.0"}
													</span>
												</div>
												<div className="flex flex-col items-start w-[75px]">
													<span className="text-[#D9B1FF] text-base w-[60px]" >
														{"(0 reseñas)"}
													</span>
												</div>
											</div>
											<div className="flex items-center w-[110px] py-[11px] px-2.5 gap-2.5 rounded-lg">
												<img
													src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6a0c5032-bfb0-4e84-b698-28316dd464c3"} 
													className="w-4 h-4 rounded-lg object-fill"
												/>
												<span className="text-[#C17AFF] text-sm" >
													{"Compartir"}
												</span>
											</div>
										</div>
									</div>
									<div className="flex flex-col items-start mb-6">
										<span className="text-white text-3xl font-bold" >
											{"s/69.99"}
										</span>
									</div>
									<div className="flex items-center mb-6 gap-2">
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a5663871-5e0f-4de1-a7a8-157b07c6b973"} 
											className="w-4 h-4 object-fill"
										/>
										<div className="flex flex-col items-start w-[61px]">
											<span className="text-[#FF6366] text-base" >
												{"Agotado"}
											</span>
										</div>
									</div>
									<div className="flex items-center mb-[17px] gap-2">
										<div className="flex flex-col items-start w-[66px]">
											<span className="text-[#D9B1FF] text-base" >
												{"Cantidad:"}
											</span>
										</div>
										<div className="bg-[#1D293D] w-[45px] h-8 rounded-lg border border-solid border-[#AC46FF4D]">
										</div>
									</div>
									<div className="flex items-start self-stretch gap-3">
										<button className="flex justify-center items-center bg-[#9810FA] text-left w-[416px] py-[11px] gap-4 rounded-lg border-0"
											onClick={()=>alert("Pressed!")}>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e6983a4e-e38c-40bc-9c8e-18087a13eba4"} 
												className="w-4 h-4 rounded-lg object-fill"
											/>
											<span className="text-black text-sm" >
												{"Agregar al Carrito"}
											</span>
										</button>
										<div className="flex flex-col items-start bg-black w-11 py-[13px] px-3.5 rounded-lg border border-solid border-[#AC46FF4D]">
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/13af8d5e-0b38-4655-ac1a-739613a8b603"} 
												className="w-4 h-4 rounded-lg object-fill"
											/>
										</div>
									</div>
								</div>
								<div className="flex items-start self-stretch mb-[42px]">
									<div className="flex flex-col items-center bg-[#1D293D80] w-[146px] pt-[21px] pb-5 mr-4 rounded-[14px] border border-solid border-[#AC46FF33]">
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e5903935-0608-4762-8ef2-a34ac5b261d0"} 
											className="w-8 h-8 mb-[7px] object-fill"
										/>
										<div className="flex flex-col items-center self-stretch mb-1 mx-[29px]">
											<span className="text-white text-base" >
												{"Envío Gratis"}
											</span>
										</div>
										<div className="flex flex-col items-center self-stretch mx-[18px]">
											<span className="text-[#D9B1FF] text-sm" >
												{"En compras +$50"}
											</span>
										</div>
									</div>
									<div className="flex flex-col items-center bg-[#1D293D80] w-[146px] pt-[21px] pb-5 px-[1px] mr-[17px] rounded-[14px] border border-solid border-[#AC46FF33]">
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/37cfa617-2a2b-43cf-87e3-311fca91ba00"} 
											className="w-8 h-8 mb-[7px] object-fill"
										/>
										<div className="flex flex-col items-center self-stretch mb-1 mx-[42px]">
											<span className="text-white text-base" >
												{"Garantía"}
											</span>
										</div>
										<div className="flex flex-col items-center self-stretch mx-[43px]">
											<span className="text-[#D9B1FF] text-sm" >
												{"12 meses"}
											</span>
										</div>
									</div>
									<div className="flex flex-col items-center bg-[#1D293D80] w-[146px] pt-[21px] pb-5 px-[1px] rounded-[14px] border border-solid border-[#AC46FF33]">
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ebf88fef-dbe1-4d48-ba04-11daa522b541"} 
											className="w-8 h-8 mb-[7px] object-fill"
										/>
										<div className="flex flex-col items-center self-stretch mb-1 mx-8">
											<span className="text-white text-base" >
												{"Devolución"}
											</span>
										</div>
										<div className="flex flex-col items-center self-stretch mx-[30px]">
											<span className="text-[#D9B1FF] text-sm" >
												{"30 días gratis"}
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col items-start self-stretch mb-[88px] mx-[88px] gap-8">
						<div className="flex items-center bg-[#1D293D80] py-[1px] rounded-[14px] border border-solid border-[#AC46FF33]">
							<div className="flex flex-col items-start bg-[#9810FA] w-[323px] py-1.5 px-[124px] mr-[91px] rounded-[14px] border border-solid border-[#00000000]">
								<span className="text-[#00FF00] text-sm" >
									{"Descripción"}
								</span>
							</div>
							<span className="text-[#00FF00] text-sm mr-[79px]" >
								{"Especificaciones"}
							</span>
						</div>
						<div className="flex flex-col items-start self-stretch bg-[#1D293D80] py-[27px] rounded-[14px] border border-solid border-[#AC46FF33]">
							<div className="flex flex-col items-start mb-[30px] ml-6">
								<span className="text-white text-base" >
									{"Descripción del Producto"}
								</span>
							</div>
							<div className="flex flex-col items-start self-stretch mb-4 mx-6">
								<span className="text-[#E9D4FF] text-base w-[563px]" >
									{"Disfruta del diseño modernizado del Control inalámbrico Xbox, con superficies esculpidas y una geometría refinada para una mayor comodidad durante el juego. Mantén el objetivo con el agarre texturizado y pad direccional híbrido. Captura y comparte contenido sin problemas con un botón Compartir dedicado. Empareja rápidamente, juega y cambia entre dispositivos como Xbox Series X|S, Xbox One, PC Windows, Android e iOS.*"}
								</span>
							</div>
							<div className="self-stretch bg-[#AD46FF33] h-[1px] mb-[51px] mx-6">
							</div>
							<div className="flex items-center mb-2 ml-2.5">
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8241212c-6e3f-453e-93e9-eaab24af7d3b"} 
									className="w-4 h-4 mr-2 object-fill"
								/>
								<span className="text-white text-base mr-[266px]" >
									{"Características Principales"}
								</span>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6330b441-1d84-499b-b1e7-a823a3d236e9"} 
									className="w-4 h-4 mr-2 object-fill"
								/>
								<span className="text-white text-base" >
									{"Información Adicional"}
								</span>
							</div>
							<div className="flex items-center mb-[5px] ml-2.5">
								<span className="text-[#E9D4FF] text-base mr-[258px]" >
									{"• Gráficos de última generación"}
								</span>
								<span className="text-[#E9D4FF] text-base" >
									{"• Idiomas: Español, Inglés"}
								</span>
							</div>
							<div className="flex items-center mb-[5px] ml-2.5">
								<span className="text-[#E9D4FF] text-base mr-[234px]" >
									{"• Historia inmersiva y emocionante"}
								</span>
								<span className="text-[#E9D4FF] text-base" >
									{"• Clasificación: ESRB M (Mature)"}
								</span>
							</div>
							<div className="flex items-center mb-[5px] ml-2.5">
								<span className="text-[#E9D4FF] text-base mr-[236px]" >
									{"• Mecánicas de juego innovadoras"}
								</span>
								<span className="text-[#E9D4FF] text-base" >
									{"• Modalidad: Un jugador"}
								</span>
							</div>
							<div className="flex items-center mb-[5px] ml-2.5">
								<span className="text-[#E9D4FF] text-base mr-[289px]" >
									{"• Mundo abierto explorable"}
								</span>
								<span className="text-[#E9D4FF] text-base" >
									{"• Desarrollador: Naughty Dog"}
								</span>
							</div>
							<div className="flex items-center ml-2.5">
								<span className="text-[#E9D4FF] text-base mr-[326px]" >
									{"• Optimizado para PC"}
								</span>
								<span className="text-[#E9D4FF] text-base" >
									{"• Editor: Sony Interactive"}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
		</div>
	)
}

export default VisualizacionProducto;
