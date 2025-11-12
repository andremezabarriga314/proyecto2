import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";

function Ofertas() {
  const navigate = useNavigate();

	return (
		<div className="min-h-screen bg-white">
			<Header />

			<main className="container mx-auto px-8 py-10">
				<div className="flex flex-col items-start mb-[11px] gap-4">
					<div className="flex items-center bg-[#000000CC] px-3 rounded-lg border border-solid border-[#00C8504D]"
						style={{
							boxShadow: "0px 0px 5px #00FF001A"
						}}>
						<img
							src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/79e0f138-728e-44e2-b0c7-a144fe035e53"}
							className="w-4 h-4 mr-3 object-fill"
						/>
						<span className="text-[#05DF72] text-sm mr-[684px]" >
							{"🎯 BUSCAR ARSENAL LETAL..."}
						</span>
						<div className="flex flex-col items-start bg-[#FFFFFF00] w-11 py-[9px] px-3.5 rounded-lg border border-solid border-[#00C8504D]"
							style={{
								boxShadow: "0px 0px 5px #00FF001A"
							}}>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8ccf1b9c-7531-472d-85fc-b36e5c25eee0"}
								className="w-4 h-4 rounded-lg object-fill"
							/>
						</div>
					</div>
					<div className="flex items-center">
						<div className="flex flex-col items-start w-60 mr-[556px]">
							<span className="text-[#7AF1A7] text-sm font-bold w-[222px]" >
								{"🎯 9 OBJETIVOS ENCONTRADOS 🎯"}
							</span>
						</div>
						<button className="flex flex-col items-center bg-black text-left w-[179px] py-3 px-[17px] rounded-lg border border-solid border-[#00C85080]"
							style={{
								boxShadow: "0px 0px 5px #00FF001A"
							}}
							onClick={() => navigate("/ventana-principal")}>
							<span className="text-[#05DF72] text-sm font-bold" >
								{"⚡ VOLVER AL HQ ⚡"}
							</span>
						</button>
					</div>
				</div>
					<div className="flex items-center mb-[30px] ml-[79px]">
						<div className="flex flex-col items-start bg-[#000000E3] w-[309px] mr-2.5 rounded-[14px] border border-solid border-[#00C8504D]">
							<div className="flex flex-col items-start self-stretch pb-0.5 mt-[9px] mb-[25px] mx-2.5">
								<div className="flex justify-between items-start self-stretch mb-[41px]">
									<div className="flex flex-col items-start bg-[#FB2C3633] w-[86px] py-0.5 px-[13px] rounded-lg border border-solid border-[#FF6366]" 
										style={{
											boxShadow: "0px 0px 30px #00FF001A"
										}}>
										<span className="text-[#FFA1A2] text-xs font-bold" >
											{"💀 -33% 💀"}
										</span>
									</div>
									<div className="flex flex-col items-start bg-[#00000099] w-11 py-[13px] px-3.5 rounded-[26843500px] border border-solid border-[#00C8504D]">
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/98c615fe-2da1-4320-9a6e-a68ff84e4c83"} 
											className="w-4 h-4 rounded-[26843500px] object-fill"
										/>
									</div>
								</div>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/63911c91-9554-4370-853d-11c129094fb6"} 
									className="w-[278px] h-[216px] mb-[42px] ml-1 rounded-[14px] object-fill"
								/>
								<div className="flex items-center ml-4 gap-2">
									<div className="flex flex-col items-start bg-[#FFFFFF00] w-[91px] py-0.5 px-[7px] rounded-lg border border-solid border-[#00C85080]" 
										style={{
											boxShadow: "0px 0px 5px #00FF001A"
										}}>
										<span className="text-[#7AF1A7] text-xs font-bold" >
											{"PlayStation 5"}
										</span>
									</div>
									<div className="flex flex-col items-start w-[117px]">
										<span className="text-[#7AF1A7] text-xs" >
											{"Consola"}
										</span>
									</div>
								</div>
							</div>
							<div className="flex flex-col items-start self-stretch mb-[15px] mx-[18px] gap-2">
								<span className="text-[#B8F7CF] text-base font-bold" >
									{"CONSOLA PLAYSTATION 5 SLIM STANDARD + 2 JUEGOS BUNDLE"}
								</span>
								<div className="flex items-center self-stretch gap-[5px]">
									<div className="flex items-center w-36 gap-2">
										<div className="flex items-center w-[103px]">
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6a2f3654-1f79-4f8d-847b-8fe70ea0011c"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/de94caf8-07e1-495e-8661-680833183329"} 
												className="w-3 h-3 mr-[3px] object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/20decf44-1663-46a0-bb58-1c2c927b327f"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/34bcd19b-c63a-408a-b977-7343bce0f0dc"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f1f74499-95b4-4926-9d8c-ebba48990878"} 
												className="w-3 h-3 mr-[7px] object-fill"
											/>
											<div className="flex flex-col items-start w-[18px]">
												<span className="text-[#05DF72] text-sm font-bold" >
													{"4.8"}
												</span>
											</div>
										</div>
										<div className="flex flex-col items-start w-[33px]">
											<span className="text-[#7AF1A7] text-xs w-4" >
												{"(1243)"}
											</span>
										</div>
									</div>
									<div className="flex flex-col items-start w-[125px] py-[13px] px-1 rounded-lg">
										<span className="text-[#05DF72] text-xs font-bold" >
											{"⚡ VER RESEÑAS ⚡"}
										</span>
									</div>
								</div>
								<div className="flex items-center gap-2">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/407e023b-1f63-41ba-8b25-47c26a17306b"} 
										className="w-3 h-3 object-fill"
									/>
									<div className="flex flex-col items-start w-[26px]">
										<span className="text-[#7AF1A7] text-xs" >
											{"2024"}
										</span>
									</div>
								</div>
							</div>
							<div className="flex items-center mb-[63px] ml-[18px] gap-[25px]">
								<div className="flex flex-col w-[75px] pb-[1px]">
									<span className="text-[#9AE600] text-xs font-bold" >
										{"💰 AHORRAS $20.00 💰"}
									</span>
								</div>
								<div className="flex items-start w-[105px]">
									<div className="flex flex-col items-start w-14 pb-[1px]">
										<span className="text-[#05DF72] text-lg font-bold" >
											{"$39.99"}
										</span>
									</div>
								</div>
							</div>
							<button className="flex items-center text-left py-[11px] px-[22px] mb-[30px] ml-[25px] gap-4 rounded-lg border border-solid border-[#05DF72]" 
								style={{
									background: "linear-gradient(180deg, #00A63D, #7CCE00)"
								}}
								onClick={() => navigate("/producto/1")}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8f80f667-8544-4c9d-b412-786c7e0bffb5"} 
									className="w-4 h-4 rounded-lg object-fill"
								/>
								<span className="text-black text-sm font-bold" >
									{"🔥 AGREGAR AL CARRITO 🔥"}
								</span>
							</button>
						</div>
						<div className="flex flex-col items-start bg-[#000000E3] w-[309px] mr-[22px] rounded-[14px] border border-solid border-[#00C8504D]">
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e6677fa7-ad6a-45c8-9b7e-7b76039dadfc"} 
								className="w-[265px] h-[197px] mt-[103px] mb-[51px] ml-3 object-fill"
							/>
							<div className="flex items-center mb-[23px] ml-8 gap-2">
								<div className="flex flex-col items-start bg-[#FFFFFF00] w-[91px] py-0.5 px-[17px] rounded-lg border border-solid border-[#00C85080]" 
									style={{
										boxShadow: "0px 0px 5px #00FF001A"
									}}>
									<span className="text-[#7AF1A7] text-xs font-bold" >
										{"Nintendo"}
									</span>
								</div>
								<div className="flex flex-col items-start w-[117px]">
									<span className="text-[#7AF1A7] text-xs" >
										{"Consola"}
									</span>
								</div>
							</div>
							<div className="flex flex-col items-start self-stretch pt-[7px] mb-[27px] ml-[26px] mr-[9px]">
								<span className="text-[#B8F7CF] text-base font-bold mb-[5px] ml-1.5" >
									{"CONSOLA DE VIDEO JUEGO NINTENDO SWITCH"}
								</span>
								<div className="flex items-center self-stretch mb-4 gap-[9px]">
									<div className="flex items-center w-36 gap-2">
										<div className="flex items-center w-[103px]">
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5c9c2b38-adf6-4e9a-8525-f1284213df18"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0d2cd391-4161-4b4e-b3fc-c7188fbce9af"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b8d8f68d-e1b1-4acf-b8dc-b29f41848301"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8ec60014-b861-4337-9a93-093fdc9c4f3b"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6b96c623-d025-4963-92f0-bf9ad4198cbf"} 
												className="w-3 h-3 mr-2 object-fill"
											/>
											<div className="flex flex-col items-start w-[18px] pb-[1px]">
												<span className="text-[#05DF72] text-sm font-bold" >
													{"4.8"}
												</span>
											</div>
										</div>
										<div className="flex flex-col items-start w-[33px]">
											<span className="text-[#7AF1A7] text-xs w-4" >
												{"(1243)"}
											</span>
										</div>
									</div>
									<span className="text-[#05DF72] text-xs font-bold" >
										{"⚡ VER RESEÑAS ⚡"}
									</span>
								</div>
								<div className="flex items-center gap-2">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d46e6799-07b4-40c6-9520-76c228eb6b3e"} 
										className="w-3 h-3 object-fill"
									/>
									<div className="flex flex-col items-start w-[26px]">
										<span className="text-[#7AF1A7] text-xs" >
											{"2024"}
										</span>
									</div>
								</div>
							</div>
							<div className="flex justify-between items-start self-stretch mb-[29px] ml-[21px] mr-[46px]">
								<span className="text-[#9AE600] text-xs font-bold w-[75px]" >
									{"💰 AHORRAS $20.00 💰"}
								</span>
								<div className="flex items-center w-[105px] pb-[31px] gap-2">
									<div className="flex flex-col items-start w-14 pb-[1px]">
										<span className="text-[#05DF72] text-lg font-bold" >
											{"$49.99"}
										</span>
									</div>
									<div className="flex flex-col items-start w-10 pb-[1px]">
										<span className="text-[#99A1AE] text-sm w-[23px]" >
											{"$69.99"}
										</span>
									</div>
								</div>
							</div>
							<button className="flex items-center text-left py-[11px] px-[23px] mb-[30px] ml-[26px] gap-4 rounded-lg border border-solid border-[#05DF72]" 
								style={{
									background: "linear-gradient(180deg, #00A63D, #7CCE00)"
								}}
								onClick={() => navigate("/producto/2")}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0d976850-05e2-4831-ab94-05b5480938bf"} 
									className="w-4 h-4 rounded-lg object-fill"
								/>
								<span className="text-black text-sm font-bold" >
									{"🔥 AGREGAR AL CARRITO 🔥"}
								</span>
							</button>
						</div>
						<div className="flex flex-col items-start bg-[#000000E3] w-[309px] rounded-[14px] border border-solid border-[#00C8504D]">
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6b692255-2f69-4d75-9b97-0daa72b38265"} 
								className="w-[250px] h-[190px] mt-[100px] mb-[55px] ml-[25px] rounded-[14px] object-fill"
							/>
							<div className="flex items-center mb-[9px] ml-3 gap-[9px]">
								<div className="flex flex-col items-start bg-[#FFFFFF00] w-[91px] py-0.5 px-2 rounded-lg border border-solid border-[#00C85080]" 
									style={{
										boxShadow: "0px 0px 5px #00FF001A"
									}}>
									<span className="text-[#7AF1A7] text-xs font-bold" >
										{"PlayStation 5"}
									</span>
								</div>
								<div className="flex flex-col items-start w-[109px]">
									<span className="text-[#7AF1A7] text-xs" >
										{"Consola"}
									</span>
								</div>
							</div>
							<span className="text-[#B8F7CF] text-base font-bold w-[262px] mb-3 ml-[17px]" >
								{"CONSOLA SONY PS5 PLAYSTATION 5 PORTAL REMOTE PLAYER"}
							</span>
							<div className="flex items-center self-stretch mb-2 mx-[17px] gap-[5px]">
								<div className="flex items-center w-36 gap-[9px]">
									<div className="flex items-center w-[103px]">
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6c1e71db-e430-4f2f-9dd8-715e4928132b"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6e56b3e8-45ff-467e-9960-836410774681"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7d5f5fe4-9a1b-4c84-99de-b7349a1dc17d"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/18528134-bf51-4c3b-8dc0-14583ffccba6"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0eb400a7-e296-48d2-a505-362c4d5a7eff"} 
											className="w-3 h-3 mr-[3px] object-fill"
										/>
										<div className="flex flex-col items-start w-[19px]">
											<span className="text-[#05DF72] text-sm font-bold" >
												{"4.9"}
											</span>
										</div>
									</div>
									<div className="flex flex-col items-start w-8">
										<span className="text-[#7AF1A7] text-xs w-4" >
											{"(2156)"}
										</span>
									</div>
								</div>
								<div className="flex flex-col items-start w-[125px] py-[13px] px-1 rounded-lg">
									<span className="text-[#05DF72] text-xs font-bold" >
										{"⚡ VER RESEÑAS ⚡"}
									</span>
								</div>
							</div>
							<div className="flex items-center mb-[7px] ml-[17px] gap-[7px]">
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6d0239c3-e4c8-4723-bc0b-89cb0171a734"} 
									className="w-3 h-3 object-fill"
								/>
								<div className="flex flex-col items-start w-[26px]">
									<span className="text-[#7AF1A7] text-xs" >
										{"2023"}
									</span>
								</div>
							</div>
							<span className="text-[#05DF72] text-lg font-bold mb-[21px] ml-[146px]" >
								{"$59.99"}
							</span>
							<div className="flex flex-col items-end self-stretch mb-[30px] mr-[23px]">
								<button className="flex items-center text-left py-[11px] px-[23px] gap-4 rounded-lg border border-solid border-[#05DF72]" 
									style={{
										background: "linear-gradient(180deg, #00A63D, #7CCE00)"
									}}
									onClick={() => navigate("/producto/3")}>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8e3f984a-274c-4861-8124-e9b44c5876d7"} 
										className="w-4 h-4 rounded-lg object-fill"
									/>
									<span className="text-black text-sm font-bold" >
										{"🔥 AGREGAR AL CARRITO 🔥"}
									</span>
								</button>
							</div>
						</div>
					</div>
					<div className="flex items-start mb-[68px] ml-[88px] gap-6">
						<div className="flex flex-col items-start w-[309px] relative">
							<div className="flex flex-col items-start self-stretch bg-[#000000E3] rounded-[14px] border border-solid border-[#00C8504D]">
								<span className="text-[#B8F7CF] text-base font-bold mt-[321px] mb-[26px] ml-10" >
									{"CONSOLA ASUS ROG ALLY 512GB BLANCO"}
								</span>
								<div className="flex flex-col items-start self-stretch mb-[63px] mx-[18px]">
									<div className="flex flex-col items-start self-stretch pb-[1px]">
										<div className="flex items-center mb-10 gap-2">
											<div className="flex flex-col items-start bg-[#FFFFFF00] w-8 py-0.5 px-[7px] rounded-lg border border-solid border-[#00C85080]" 
												style={{
													boxShadow: "0px 0px 5px #00FF001A"
												}}>
												<span className="text-[#7AF1A7] text-xs font-bold" >
													{"PC"}
												</span>
											</div>
											<span className="text-[#7AF1A7] text-xs" >
												{"RPG/Fantasía"}
											</span>
										</div>
										<div className="flex items-center self-stretch mb-2 gap-[5px]">
											<div className="flex items-center w-36 gap-2">
												<div className="flex items-center w-[103px]">
													<img
														src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a89d57b3-0ef2-4cbd-aa68-4fd17199d997"} 
														className="w-3 h-3 mr-1 object-fill"
													/>
													<img
														src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9dbca39a-dc92-4efd-a9a6-62b2cd6dba49"} 
														className="w-3 h-3 mr-[3px] object-fill"
													/>
													<img
														src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fab4b60b-143c-40be-8e26-47351e53fe86"} 
														className="w-3 h-3 mr-1 object-fill"
													/>
													<img
														src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/db412cb9-182e-4ad2-80cc-cb46ae614741"} 
														className="w-3 h-3 mr-1 object-fill"
													/>
													<img
														src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ecf87066-fb9f-477e-8d70-0b0767217f14"} 
														className="w-3 h-3 mr-[7px] object-fill"
													/>
													<div className="flex flex-col items-start w-[18px]">
														<span className="text-[#05DF72] text-sm font-bold" >
															{"4.9"}
														</span>
													</div>
												</div>
												<div className="flex flex-col items-start w-[33px]">
													<span className="text-[#7AF1A7] text-xs w-4" >
														{"(3421)"}
													</span>
												</div>
											</div>
											<div className="flex flex-col items-start w-[125px] py-[13px] px-1 rounded-lg">
												<span className="text-[#05DF72] text-xs font-bold" >
													{"⚡ VER RESEÑAS ⚡"}
												</span>
											</div>
										</div>
										<div className="flex items-center gap-2">
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7ef12615-ddf5-453a-9c75-ccd14af70f7d"} 
												className="w-3 h-3 object-fill"
											/>
											<div className="flex flex-col items-start w-[26px]">
												<span className="text-[#7AF1A7] text-xs" >
													{"2023"}
												</span>
											</div>
										</div>
									</div>
									<div className="flex flex-col items-start pb-[1px] ml-[92px]">
										<span className="text-[#05DF72] text-lg font-bold" >
											{"$84.00"}
										</span>
									</div>
								</div>
								<button className="flex justify-center items-center self-stretch bg-[#1E2939] text-left py-2.5 mb-[37px] mx-[17px] gap-4 rounded-lg border border-solid border-[#495565]"
									onClick={() => navigate("/producto/4")}>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f00a5583-71cc-432a-808e-299144198a06"} 
										className="w-4 h-4 rounded-lg object-fill"
									/>
									<span className="text-[#99A1AE] text-sm font-bold" >
										{"💀 AGOTADO 💀"}
									</span>
								</button>
							</div>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eba77e1f-2078-4cd5-a1e5-a7329b812026"} 
								className="w-[300px] h-[143px] absolute top-[93px] right-[-3px] object-fill"
							/>
						</div>
						<div className="flex flex-col items-start bg-[#000000E3] w-[309px] rounded-[14px] border border-solid border-[#00C8504D]">
							<div className="flex justify-between items-start self-stretch mt-[9px] mb-[1px] mx-[9px]">
								<div className="flex flex-col items-start bg-[#FB2C3633] w-[86px] py-0.5 px-3.5 rounded-lg border border-solid border-[#FF6366]" 
									style={{
										boxShadow: "0px 0px 30px #00FF001A"
									}}>
									<span className="text-[#FFA1A2] text-xs font-bold" >
										{"💀 -33% 💀"}
									</span>
								</div>
								<div className="flex flex-col items-start bg-[#00000099] w-11 py-[13px] px-3.5 rounded-[26843500px] border border-solid border-[#00C8504D]">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/40daa663-1656-468b-abde-ccae0a8957c9"} 
										className="w-4 h-4 rounded-[26843500px] object-fill"
									/>
								</div>
							</div>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/efda6bd4-f57b-4e01-a0a2-58328330edd1"} 
								className="w-[230px] h-[215px] mb-[51px] ml-[26px] rounded-[14px] object-fill"
							/>
							<span className="text-[#B8F7CF] text-base font-bold w-[246px] mb-11 ml-[43px]" >
								{"CONSOLA NINTENDO SWITCH 2 + MARIO KART WORLD | BUNDLE"}
							</span>
							<div className="flex flex-col items-start self-stretch pb-[1px] mb-[7px] mx-[17px]">
								<div className="flex items-center mb-10 gap-[9px]">
									<div className="flex flex-col items-start bg-[#FFFFFF00] w-[91px] py-0.5 px-5 rounded-lg border border-solid border-[#00C85080]" 
										style={{
											boxShadow: "0px 0px 5px #00FF001A"
										}}>
										<span className="text-[#7AF1A7] text-xs font-bold" >
											{"Nintendo"}
										</span>
									</div>
									<div className="w-20 h-[15px]">
									</div>
								</div>
								<div className="flex items-center self-stretch mb-2 gap-[3px]">
									<div className="flex items-center w-[146px] gap-[9px]">
										<div className="flex items-center w-[103px]">
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2f4c35bc-8339-4a06-acb5-ea8aa3fafd04"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7ad3b92b-fd13-44e8-b60b-bff55a41dc35"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ec62acd0-67f8-46f1-a03b-d8310e62901a"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/25d0ba33-f073-4eb3-9bc2-ef0711a85ede"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eed2797e-e137-4dde-95d4-0bff6ecb21fa"} 
												className="w-3 h-3 mr-[3px] object-fill"
											/>
											<div className="flex flex-col items-start w-[19px]">
												<span className="text-[#05DF72] text-sm font-bold" >
													{"4.8"}
												</span>
											</div>
										</div>
										<div className="flex flex-col items-start w-[34px]">
											<span className="text-[#7AF1A7] text-xs" >
												{"(3847)"}
											</span>
										</div>
									</div>
									<div className="flex flex-col items-start w-[125px] py-[13px] px-[5px] rounded-lg">
										<span className="text-[#05DF72] text-xs font-bold" >
											{"⚡ VER RESEÑAS ⚡"}
										</span>
									</div>
								</div>
								<div className="flex items-center gap-[7px]">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5648b395-95c2-456f-915a-259d1696608e"} 
										className="w-3 h-3 object-fill"
									/>
									<div className="flex flex-col items-start w-[26px]">
										<span className="text-[#7AF1A7] text-xs" >
											{"2022"}
										</span>
									</div>
								</div>
							</div>
							<span className="text-[#05DF72] text-lg font-bold mb-5 ml-[126px]" >
								{"$89.97"}
							</span>
							<button className="flex items-center text-left py-[11px] px-[23px] mb-[31px] ml-6 gap-4 rounded-lg border border-solid border-[#05DF72]" 
								style={{
									background: "linear-gradient(180deg, #00A63D, #7CCE00)"
								}}
								onClick={() => navigate("/producto/5")}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b3791da0-f012-4685-8daa-a8e2cb091f7f"} 
									className="w-4 h-4 rounded-lg object-fill"
								/>
								<span className="text-black text-sm font-bold" >
									{"🔥 AGREGAR AL CARRITO 🔥"}
								</span>
							</button>
						</div>
						<div className="flex flex-col items-start bg-[#000000E3] w-[309px] rounded-[14px] border border-solid border-[#00C8504D]">
							<div className="flex justify-between items-start self-stretch mt-2 mb-[35px] mr-[41px]">
								<div className="flex flex-col items-start bg-[#FB2C3633] w-[86px] py-0.5 rounded-lg border border-solid border-[#FF6366]" 
									style={{
										boxShadow: "0px 0px 30px #00FF001A"
									}}>
									<span className="text-[#FFA1A2] text-xs font-bold" >
										{"💀 -29% 💀"}
									</span>
								</div>
								<div className="flex flex-col items-start bg-[#00000099] w-11 p-3.5 rounded-[26843500px] border border-solid border-[#00C8504D]">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7503d778-d416-4e59-823c-7dffc27f67c5"} 
										className="w-4 h-4 rounded-[26843500px] object-fill"
									/>
								</div>
							</div>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/639a8d12-5cf0-4499-903c-05b4a819de1b"} 
								className="w-[250px] h-[190px] mb-[26px] ml-[29px] rounded-[14px] object-fill"
							/>
							<span className="text-[#B8F7CF] text-base font-bold mb-[65px] ml-1.5" >
								{"SOPORTE GLOBAL SHOPEX PS4 ORIGINA"}
							</span>
							<div className="flex flex-col items-start self-stretch pb-[1px] mb-[21px] ml-[31px] mr-1">
								<button className="flex flex-col items-start bg-[#FFFFFF00] text-left py-0.5 px-[21px] mb-10 rounded-lg border border-solid border-[#00C85080]" 
									style={{
										boxShadow: "0px 0px 5px #00FF001A"
									}}
									onClick={() => navigate("/producto/6")}>
									<span className="text-[#7AF1A7] text-xs font-bold" >
										{"Consola"}
									</span>
								</button>
								<div className="flex items-center self-stretch mb-2 gap-[5px]">
									<div className="flex items-center w-36 gap-2">
										<div className="flex items-center w-[103px] gap-1">
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7e815de0-7d33-4387-8f38-61f131d0192d"} 
												className="w-3 h-3 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f5432b4d-3178-47ec-9a0e-f0f438b2f74c"} 
												className="w-3 h-3 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c89166ab-053a-4b44-ac87-8852819141cd"} 
												className="w-3 h-3 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9545f042-1356-4fc9-9361-6fbf496bbd66"} 
												className="w-3 h-3 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/99f7a170-3c64-40c9-994d-d8fa763ebb75"} 
												className="w-3 h-3 object-fill"
											/>
											<div className="flex flex-col items-start w-[19px]">
												<span className="text-[#05DF72] text-sm font-bold" >
													{"4.2"}
												</span>
											</div>
										</div>
										<div className="flex flex-col items-start w-8">
											<span className="text-[#7AF1A7] text-xs w-4" >
												{"(2156)"}
											</span>
										</div>
									</div>
									<div className="flex flex-col items-start w-[125px] py-[13px] px-1 rounded-lg">
										<span className="text-[#05DF72] text-xs font-bold" >
											{"⚡ VER RESEÑAS ⚡"}
										</span>
									</div>
								</div>
								<div className="flex items-center gap-2">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fc99ef90-c214-4889-bf0b-797be3295739"} 
										className="w-3 h-3 object-fill"
									/>
									<div className="flex flex-col items-start w-[26px]">
										<span className="text-[#7AF1A7] text-xs" >
											{"2024"}
										</span>
									</div>
								</div>
							</div>
							<span className="text-[#05DF72] text-lg font-bold mb-[26px] ml-[138px]" >
								{"$149.99"}
							</span>
							<button className="flex items-center self-stretch text-left py-[11px] px-[23px] mb-[31px] mx-3.5 gap-4 rounded-lg border border-solid border-[#05DF72]" 
								style={{
									background: "linear-gradient(180deg, #00A63D, #7CCE00)"
								}}
								onClick={() => navigate("/producto/7")}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4d02aa5d-0675-4e38-8431-a197dc1d45ff"} 
									className="w-4 h-4 rounded-lg object-fill"
								/>
								<span className="text-black text-sm font-bold" >
									{"🔥 AGREGAR AL CARRITO 🔥"}
								</span>
							</button>
						</div>
					</div>
			</main>
		</div>
	)
}

export default Ofertas;
