import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";

function Accesorios() {
  const navigate = useNavigate();

	return (
		<div className="min-h-screen bg-white">
			<Header />

			<main className="container mx-auto px-8 py-10">
				<div className="flex items-center self-stretch mb-6 gap-[1px]">
					<div className="flex flex-col items-start w-[637px] gap-[5px]">
						<div className="flex flex-col items-start self-stretch">
							<span className="text-[#05DF72] text-3xl font-bold" >
								{"🎯 Accesorios 🎯"}
							</span>
						</div>
						<span className="text-[#B8F7CF] text-base mr-[332px]" >
							{"Controles, auriculares y accesorios gaming"}
						</span>
					</div>
					<div className="flex items-start w-[338px] gap-2">
						<button className="flex flex-col items-center bg-black text-left w-[150px] py-3 px-[18px] rounded-lg border border-solid border-[#00C85080]"
							style={{
								boxShadow: "0px 0px 5px #00FF001A"
							}}
							onClick={() => navigate("/ventana-principal")}>
							<span className="text-[#05DF72] text-sm font-bold" >
								{"💀 VER TODO 💀"}
							</span>
						</button>
						<button className="flex flex-col items-center bg-black text-left w-[179px] py-3 px-[18px] rounded-lg border border-solid border-[#00C85080]"
							style={{
								boxShadow: "0px 0px 5px #00FF001A"
							}}
							onClick={() => navigate("/producto/1")}>
							<span className="text-[#05DF72] text-sm font-bold" >
								{"⚡ VOLVER AL HQ ⚡"}
							</span>
						</button>
					</div>
				</div>
					<div className="flex flex-col self-stretch mb-6 mx-[87px] gap-4">
						<div className="flex items-center self-stretch bg-[#000000CC] px-3 rounded-lg border border-solid border-[#00C8504D]" 
							style={{
								boxShadow: "0px 0px 5px #00FF001A"
							}}>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bc7e7bc6-64af-4001-9d73-557695b84c31"} 
								className="w-4 h-4 mr-3 object-fill"
							/>
							<span className="text-[#05DF72] text-sm" >
								{"🎯 BUSCAR ARSENAL LETAL..."}
							</span>
							<div className="flex-1 self-stretch">
							</div>
							<div className="flex flex-col items-start bg-[#FFFFFF00] w-11 py-[9px] px-3.5 rounded-lg border border-solid border-[#00C8504D]" 
								style={{
									boxShadow: "0px 0px 5px #00FF001A"
								}}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ab5590fe-debd-4603-8a71-584349234cb9"} 
									className="w-4 h-4 rounded-lg object-fill"
								/>
							</div>
						</div>
						<div className="flex justify-between items-center self-stretch">
							<div className="flex flex-col items-start w-60">
								<span className="text-[#7AF1A7] text-sm font-bold w-[222px]" >
									{"🎯 7 OBJETIVOS ENCONTRADOS 🎯"}
								</span>
							</div>
							<div className="flex justify-between items-center bg-[#000000CC] w-48 py-3 px-3.5 rounded-lg border border-solid border-[#00C8504D]" 
								style={{
									boxShadow: "0px 0px 5px #00FF001A"
								}}>
								<div className="flex flex-col items-start w-16">
									<span className="text-[#05DF72] text-sm" >
										{"Relevancia"}
									</span>
								</div>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fea59f6f-28e5-408f-ab48-ce95a2c1ebd2"} 
									className="w-4 h-4 rounded-lg object-fill"
								/>
							</div>
						</div>
					</div>
					<div className="flex items-start mb-[23px]">
						<div className="w-12 h-5 mt-[600px] mr-[39px]">
						</div>
						<div className="flex flex-col w-[309px] relative mr-6">
							<div className="flex flex-col self-stretch bg-[#000000E3] rounded-[14px] border border-solid border-[#00C8504D]">
								<div className="flex justify-between items-start self-stretch mt-[9px] mb-[346px] mx-2.5">
									<div className="flex flex-col items-start bg-[#FB2C3633] w-[86px] py-0.5 px-[13px] rounded-lg border border-solid border-[#FF6366]" 
										style={{
											boxShadow: "0px 0px 30px #00FF001A"
										}}>
										<span className="text-[#FFA1A2] text-xs font-bold" >
											{"💀 -17% 💀"}
										</span>
									</div>
									<div className="flex flex-col items-start bg-[#00000099] w-11 py-[13px] px-3.5 rounded-[26843500px] border border-solid border-[#00C8504D]">
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1b91736c-44bf-4ca0-bf82-c88c406f7d97"} 
											className="w-4 h-4 rounded-[26843500px] object-fill"
										/>
									</div>
								</div>
								<div className="flex flex-col items-start self-stretch pb-[1px] mb-[25px] ml-6 mr-[11px] gap-2">
									<div className="flex items-center gap-2">
										<div className="flex flex-col items-start bg-[#FFFFFF00] w-[110px] py-0.5 px-2.5 rounded-lg border border-solid border-[#00C85080]" 
											style={{
												boxShadow: "0px 0px 5px #00FF001A"
											}}>
											<span className="text-[#7AF1A7] text-xs font-bold" >
												{"Multiplataforma"}
											</span>
										</div>
										<div className="flex flex-col items-start w-[60px]">
											<span className="text-[#7AF1A7] text-xs" >
												{"Auriculares"}
											</span>
										</div>
									</div>
									<div className="flex flex-col items-start">
										<span className="text-[#B8F7CF] text-base font-bold" >
											{"Asus Gamming A15"}
										</span>
									</div>
									<div className="flex items-center self-stretch gap-2.5">
										<div className="flex items-center w-[139px] gap-2">
											<div className="flex items-center w-[103px]">
												<img
													src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cea748c0-7a89-4a40-9371-d3c0d6ca433a"} 
													className="w-3 h-3 mr-1 object-fill"
												/>
												<img
													src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/910eea91-4ef9-4193-aa38-b0af1f789f80"} 
													className="w-3 h-3 mr-1 object-fill"
												/>
												<img
													src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6622ae0c-8bd4-413f-bf04-9d4f459c34ae"} 
													className="w-3 h-3 mr-1 object-fill"
												/>
												<img
													src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f2b720b2-b979-45be-a38e-50a9cb895c9d"} 
													className="w-3 h-3 mr-1 object-fill"
												/>
												<img
													src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ed5ed00a-c8a7-41d1-b2d3-21fe1f7d68e2"} 
													className="w-3 h-3 mr-2 object-fill"
												/>
												<div className="flex flex-col items-start w-[18px]">
													<span className="text-[#05DF72] text-sm font-bold" >
														{"4.5"}
													</span>
												</div>
											</div>
											<div className="flex flex-col w-[27px]">
												<span className="text-[#7AF1A7] text-xs" >
													{"(587)"}
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
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/86a2f48e-ebd6-42c5-a67f-a24f8890405b"} 
											className="w-3 h-3 object-fill"
										/>
										<div className="flex flex-col items-start w-[26px]">
											<span className="text-[#7AF1A7] text-xs" >
												{"2023"}
											</span>
										</div>
									</div>
								</div>
								<div className="flex flex-col items-center self-stretch mb-7">
									<div className="flex flex-col items-start pb-[1px]">
										<span className="text-[#05DF72] text-lg font-bold" >
											{"s/2419.99"}
										</span>
									</div>
								</div>
								<button className="flex items-center self-stretch text-left py-[11px] px-[23px] mb-[30px] mx-5 gap-4 rounded-lg border border-solid border-[#05DF72]" 
									style={{
										background: "linear-gradient(180deg, #00A63D, #7CCE00)"
									}}
									onClick={() => navigate("/producto/2")}>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3ad72389-a054-4c3f-b3a3-0daada989bb0"} 
										className="w-4 h-4 rounded-lg object-fill"
									/>
									<span className="text-black text-sm font-bold" >
										{"🔥 AGREGAR AL CARRITO 🔥"}
									</span>
								</button>
							</div>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d22b026e-fedd-4eb4-a96c-b7fe745f8d18"} 
								className="self-stretch h-[195px] absolute top-[95px] right-0.5 left-0.5 object-fill"
							/>
						</div>
						<div className="flex flex-col w-[309px] relative mr-2.5">
							<div className="flex flex-col items-start self-stretch bg-[#000000E3] rounded-[14px] border border-solid border-[#00C8504D]">
								<div className="flex items-center mt-[393px] mb-[52px] ml-[19px] gap-2">
									<div className="flex flex-col items-start bg-[#FFFFFF00] w-[91px] py-0.5 px-[7px] rounded-lg border border-solid border-[#00C85080]" 
										style={{
											boxShadow: "0px 0px 5px #00FF001A"
										}}>
										<span className="text-[#7AF1A7] text-xs font-bold" >
											{"PlayStation 5"}
										</span>
									</div>
									<div className="flex flex-col items-start w-10">
										<span className="text-[#7AF1A7] text-xs" >
											{"Control"}
										</span>
									</div>
								</div>
								<div className="flex items-center self-stretch mb-5 mx-[19px]">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8a99c6f6-3c94-4ae3-bfbc-d12e899f8d6a"} 
										className="w-3 h-3 mr-1 object-fill"
									/>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/946ab7eb-0e57-4967-bc53-459786c0bae1"} 
										className="w-3 h-3 mr-1 object-fill"
									/>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4efbbc3d-bfc1-44ce-9e6d-c6f1c33c2bcc"} 
										className="w-3 h-3 mr-1 object-fill"
									/>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3087fa4e-3615-4bb0-8930-ae5723314a1a"} 
										className="w-3 h-3 mr-1 object-fill"
									/>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7fc57ff5-055c-4007-818d-bc9937d56d39"} 
										className="w-3 h-3 mr-1 object-fill"
									/>
									<span className="text-[#05DF72] text-sm font-bold mr-[13px]" >
										{"4.7"}
									</span>
									<span className="text-[#7AF1A7] text-xs w-4 mr-[25px]" >
										{"(1234)"}
									</span>
									<span className="text-[#05DF72] text-xs font-bold" >
										{"⚡ VER RESEÑAS ⚡"}
									</span>
								</div>
								<div className="flex items-center mb-[39px] ml-[19px] gap-2">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3aa65138-3bfc-4383-9bab-431cb1e514a7"} 
										className="w-3 h-3 object-fill"
									/>
									<div className="flex flex-col items-start w-[26px]">
										<span className="text-[#7AF1A7] text-xs" >
											{"2024"}
										</span>
									</div>
								</div>
								<div className="flex flex-col items-end self-stretch mb-[21px]">
									<div className="flex items-start mr-[41px] gap-[1px]">
										<div className="flex flex-col items-start w-14 pb-[1px]">
											<span className="text-[#05DF72] text-lg font-bold" >
												{"s/12.99"}
											</span>
										</div>
										<span className="text-[#05DF72] text-lg font-bold" >
											{"58% dscto"}
										</span>
									</div>
								</div>
								<button className="flex items-center text-left py-[11px] px-[23px] mb-[30px] ml-[9px] gap-4 rounded-lg border border-solid border-[#05DF72]" 
									style={{
										background: "linear-gradient(180deg, #00A63D, #7CCE00)"
									}}
									onClick={() => navigate("/producto/3")}>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c05f477c-b047-4c57-8f3f-9341719f3c98"} 
										className="w-4 h-4 rounded-lg object-fill"
									/>
									<span className="text-black text-sm font-bold" >
										{"🔥 AGREGAR AL CARRITO 🔥"}
									</span>
								</button>
							</div>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ac00b3d4-be63-4707-b6ae-5d8c6c04c96f"} 
								className="self-stretch h-[364px] absolute top-[18px] right-[7px] left-[7px] rounded-[14px] object-fill"
							/>
							<span className="text-[#B8F7CF] text-base font-bold absolute bottom-52 right-2 left-2" >
								{"Gamepad Mando Joystick Gatillos L1 R1"}
							</span>
						</div>
						<div className="flex flex-col items-start bg-[#000000E3] w-[309px] mt-[1px] rounded-[14px] border border-solid border-[#00C8504D]">
							<div className="flex justify-between items-start self-stretch bg-[url('https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fc14fd4b-a635-4e9b-80d1-ec236a0fef1c')] bg-cover bg-center pt-[7px] pb-[330px] px-[7px] mt-[1px] mb-10 mx-[1px]">
								<div className="flex flex-col items-start bg-[#00C95033] w-[98px] py-0.5 px-[13px] rounded-lg border border-solid border-[#05DF72]" 
									style={{
										boxShadow: "0px 0px 30px #00FF001A"
									}}>
									<span className="text-[#BAF351] text-xs font-bold" >
										{"⚡ NUEVO ⚡"}
									</span>
								</div>
								<div className="flex flex-col items-start bg-[#00000099] w-11 py-[13px] px-3.5 rounded-[26843500px] border border-solid border-[#00C8504D]">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8ce732a8-b362-41cf-a862-dc0c3adf3c30"} 
										className="w-4 h-4 rounded-[26843500px] object-fill"
									/>
								</div>
							</div>
							<div className="flex items-center mb-2 ml-[17px] gap-2">
								<div className="flex flex-col items-start bg-[#FFFFFF00] w-[106px] py-0.5 px-[7px] rounded-lg border border-solid border-[#00C85080]" 
									style={{
										boxShadow: "0px 0px 5px #00FF001A"
									}}>
									<span className="text-[#7AF1A7] text-xs font-bold" >
										{"Xbox Series X/S"}
									</span>
								</div>
								<div className="flex flex-col items-start w-10">
									<span className="text-[#7AF1A7] text-xs" >
										{"Control"}
									</span>
								</div>
							</div>
							<div className="flex flex-col items-start mb-2 ml-[17px]">
								<span className="text-[#B8F7CF] text-base font-bold" >
									{"Xbox Wireless Controller - Electric Volt"}
								</span>
							</div>
							<div className="flex items-center self-stretch mb-2 mx-[17px] gap-2.5">
								<div className="flex items-center w-[139px] gap-[9px]">
									<div className="flex items-center w-[103px]">
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e8018327-80d1-4f68-aa4e-08f539e201d0"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a6f92fa4-fff1-4061-a777-1788eeac8476"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2ef17542-b01c-40f9-b8dc-709531887c8c"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/95b937cd-be50-4403-825a-44f3cf195c1e"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/da08af1b-ed21-4a68-9797-97da1b03b13b"} 
											className="w-3 h-3 mr-[3px] object-fill"
										/>
										<div className="flex flex-col items-start w-[19px]">
											<span className="text-[#05DF72] text-sm font-bold" >
												{"4.6"}
											</span>
										</div>
									</div>
									<div className="flex flex-col w-[27px]">
										<span className="text-[#7AF1A7] text-xs" >
											{"(987)"}
										</span>
									</div>
								</div>
								<div className="flex flex-col items-start w-[125px] py-[13px] px-1 rounded-lg">
									<span className="text-[#05DF72] text-xs font-bold" >
										{"⚡ VER RESEÑAS ⚡"}
									</span>
								</div>
							</div>
							<div className="flex items-start mb-[33px] ml-[17px] gap-[60px]">
								<div className="flex items-center w-[46px] gap-[7px]">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3e820cf1-1006-4e82-816f-6af43e556aa9"} 
										className="w-3 h-3 object-fill"
									/>
									<div className="flex flex-col items-start w-[26px]">
										<span className="text-[#7AF1A7] text-xs" >
											{"2024"}
										</span>
									</div>
								</div>
								<span className="text-[#05DF72] text-lg font-bold" >
									{"s/69.99"}
								</span>
							</div>
							<div className="flex flex-col items-end self-stretch mb-4 mr-[18px]">
								<button className="flex items-center text-left py-2.5 px-[23px] gap-4 rounded-lg border border-solid border-[#05DF72]" 
									style={{
										background: "linear-gradient(180deg, #00A63D, #7CCE00)"
									}}
									onClick={() => navigate("/producto/4")}>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/90ddadb5-f330-4b7c-b11e-dd47390c2a1f"} 
										className="w-4 h-4 rounded-lg object-fill"
									/>
									<span className="text-black text-sm font-bold" >
										{"🔥 AGREGAR AL CARRITO 🔥"}
									</span>
								</button>
							</div>
						</div>
					</div>
					<div className="flex items-start self-stretch mb-[79px] mr-[88px]">
						<div className="w-[1px] h-[1px] mt-[94px] mr-[86px]">
						</div>
						<div className="flex flex-col items-center bg-[#000000E3] w-[309px] px-0.5 mr-6 rounded-[14px] border border-solid border-[#00C8504D]">
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7584b4b1-eec4-4058-b8a8-6fbc701e2c1b"} 
								className="w-[306px] h-[366px] mt-2.5 mb-[47px] rounded-[14px] object-fill"
							/>
							<div className="flex flex-col items-center self-stretch mb-8">
								<div className="flex flex-col items-start self-stretch">
									<div className="flex items-center mb-[9px] gap-2">
										<div className="flex flex-col items-start bg-[#FFFFFF00] w-[111px] py-0.5 px-2 rounded-lg border border-solid border-[#00C85080]" 
											style={{
												boxShadow: "0px 0px 5px #00FF001A"
											}}>
											<span className="text-[#7AF1A7] text-xs font-bold" >
												{"Nintendo Switch"}
											</span>
										</div>
										<div className="flex flex-col items-start w-10">
											<span className="text-[#7AF1A7] text-xs" >
												{"Control"}
											</span>
										</div>
									</div>
									<div className="flex flex-col items-start mb-2">
										<span className="text-[#B8F7CF] text-base font-bold" >
											{"Nintendo Pro Controller"}
										</span>
									</div>
									<div className="flex items-center self-stretch mb-2 gap-[5px]">
										<div className="flex items-center w-36 gap-[9px]">
											<div className="flex items-center w-[103px]">
												<img
													src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b5ae65e9-5158-4c90-a200-04934a37bf21"} 
													className="w-3 h-3 mr-1 object-fill"
												/>
												<img
													src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1e7e3465-4e6b-4581-95de-81a29df2a922"} 
													className="w-3 h-3 mr-1 object-fill"
												/>
												<img
													src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ed340595-566f-4753-b2da-da225357b268"} 
													className="w-3 h-3 mr-1 object-fill"
												/>
												<img
													src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/36d5a8d7-2f7d-4196-a68c-9b9158018f95"} 
													className="w-3 h-3 mr-1 object-fill"
												/>
												<img
													src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5409f547-5a56-49a2-8f33-1a57b0909268"} 
													className="w-3 h-3 mr-[7px] object-fill"
												/>
												<div className="flex flex-col items-start w-[18px]">
													<span className="text-[#05DF72] text-sm font-bold" >
														{"4.8"}
													</span>
												</div>
											</div>
											<div className="flex flex-col items-start w-8">
												<span className="text-[#7AF1A7] text-xs w-4" >
													{"(1567)"}
												</span>
											</div>
										</div>
										<div className="w-[125px] h-11 rounded-lg">
										</div>
									</div>
									<div className="flex items-center gap-[7px]">
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e3523668-001d-40ac-9074-975e6d598c4b"} 
											className="w-3 h-3 object-fill"
										/>
										<div className="flex flex-col items-start w-[26px]">
											<span className="text-[#7AF1A7] text-xs" >
												{"2023"}
											</span>
										</div>
									</div>
								</div>
								<span className="text-[#05DF72] text-lg font-bold" >
									{"s/69.99"}
								</span>
							</div>
							<button className="flex items-center self-stretch text-left py-2.5 px-[23px] mb-[29px] gap-4 rounded-lg border border-solid border-[#05DF72]" 
								style={{
									background: "linear-gradient(180deg, #00A63D, #7CCE00)"
								}}
								onClick={() => navigate("/producto/5")}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d68fd16b-5520-47a3-be2e-cdc9852e760e"} 
									className="w-4 h-4 rounded-lg object-fill"
								/>
								<span className="text-black text-sm font-bold" >
									{"🔥 AGREGAR AL CARRITO 🔥"}
								</span>
							</button>
						</div>
						<div className="flex flex-col items-center bg-[#000000E3] w-[309px] py-[26px] mr-[25px] rounded-[14px] border border-solid border-[#00C8504D]">
							<div className="flex justify-between items-start self-stretch mb-[7px]">
								<div className="flex flex-col items-start bg-[#FB2C3633] w-[86px] py-0.5 px-[13px] rounded-lg border border-solid border-[#FF6366]" 
									style={{
										boxShadow: "0px 0px 30px #00FF001A"
									}}>
									<span className="text-[#FFA1A2] text-xs font-bold" >
										{"💀 -23% 💀"}
									</span>
								</div>
								<div className="flex flex-col items-start bg-[#00000099] w-11 p-3.5 rounded-[26843500px] border border-solid border-[#00C8504D]">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8e8efd83-86a0-4960-a881-63280b9380e7"} 
										className="w-4 h-4 rounded-[26843500px] object-fill"
									/>
								</div>
							</div>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2ed26e52-085a-498d-894b-9f3580622863"} 
								className="w-[305px] h-[222px] mb-[125px] object-fill"
							/>
							<div className="flex flex-col items-center self-stretch mb-4">
								<div className="flex flex-col items-start self-stretch pr-[26px]">
									<div className="flex items-center mb-[9px] gap-[9px]">
										<div className="flex flex-col items-start bg-[#FFFFFF00] w-[110px] py-0.5 px-2.5 rounded-lg border border-solid border-[#00C85080]" 
											style={{
												boxShadow: "0px 0px 5px #00FF001A"
											}}>
											<span className="text-[#7AF1A7] text-xs font-bold" >
												{"Multiplataforma"}
											</span>
										</div>
										<div className="flex flex-col items-start w-[60px]">
											<span className="text-[#7AF1A7] text-xs" >
												{"Auriculares"}
											</span>
										</div>
									</div>
									<div className="flex flex-col items-center self-stretch mb-5">
										<span className="text-[#B8F7CF] text-base font-bold" >
											{"HyperX Cloud II Gaming Headset"}
										</span>
									</div>
									<div className="flex items-center mb-5 gap-[9px]">
										<div className="flex items-center w-[103px]">
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3dafaa6d-d78f-43c0-905c-322678850fd7"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/743f971c-68a0-4baa-a52a-ae7060c34cd8"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/03e0d654-8f5e-4f80-922d-d4817da76d29"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/011b3c36-b3a9-4e2b-b3ae-363a5448baa9"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6c0eb676-8b67-49ea-a90e-2f5cd1e98d85"} 
												className="w-3 h-3 mr-[3px] object-fill"
											/>
											<div className="flex flex-col items-start w-[19px]">
												<span className="text-[#05DF72] text-sm font-bold" >
													{"4.5"}
												</span>
											</div>
										</div>
										<span className="text-[#7AF1A7] text-xs w-4" >
											{"(2341)"}
										</span>
									</div>
									<div className="flex items-center gap-[7px]">
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6af5e0a9-87e7-4512-aedb-6e82abca0fb8"} 
											className="w-3 h-3 object-fill"
										/>
										<div className="flex flex-col items-start w-[26px]">
											<span className="text-[#7AF1A7] text-xs" >
												{"2023"}
											</span>
										</div>
									</div>
								</div>
								<span className="text-[#05DF72] text-lg font-bold" >
									{"s/99.99"}
								</span>
							</div>
							<div className="flex flex-col items-end self-stretch">
								<button className="flex items-center text-left py-[11px] px-6 mt-[13px] mb-0.5 gap-4 rounded-lg border border-solid border-[#05DF72]" 
									style={{
										background: "linear-gradient(180deg, #00A63D, #7CCE00)"
									}}
									onClick={() => navigate("/producto/6")}>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c8d79c21-3553-459f-a7ba-d24368a307ce"} 
										className="w-4 h-4 rounded-lg object-fill"
									/>
									<span className="text-black text-sm font-bold" >
										{"🔥 AGREGAR AL CARRITO 🔥"}
									</span>
								</button>
							</div>
						</div>
						<div className="flex flex-col items-start bg-[#000000E3] w-[309px] rounded-[14px] border border-solid border-[#00C8504D]">
							<div className="flex justify-between items-start self-stretch mt-2.5 mb-[17px] mx-2.5">
								<div className="flex flex-col items-start bg-[#FB2C3633] w-[86px] py-0.5 px-[13px] rounded-lg border border-solid border-[#FF6366]" 
									style={{
										boxShadow: "0px 0px 30px #00FF001A"
									}}>
									<span className="text-[#FFA1A2] text-xs font-bold" >
										{"💀 -20% 💀"}
									</span>
								</div>
								<div className="flex flex-col items-start bg-[#00000099] w-11 p-3.5 rounded-[26843500px] border border-solid border-[#00C8504D]">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c98fe8f5-e2fb-4466-92db-30c9a571ff6d"} 
										className="w-4 h-4 rounded-[26843500px] object-fill"
									/>
								</div>
							</div>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4b6094f4-81e7-4fb8-874f-4da81b17b81a"} 
								className="w-[297px] h-[261px] mb-[91px] mx-0.5 object-fill"
							/>
							<div className="flex items-center mb-[9px] ml-[17px] mr-[214px] gap-[9px]">
								<div className="flex flex-col items-start bg-[#FFFFFF00] w-8 py-0.5 px-2 rounded-lg border border-solid border-[#00C85080]" 
									style={{
										boxShadow: "0px 0px 5px #00FF001A"
									}}>
									<span className="text-[#7AF1A7] text-xs font-bold" >
										{"PC"}
									</span>
								</div>
								<span className="text-[#7AF1A7] text-xs" >
									{"targeta"}
								</span>
							</div>
							<div className="flex flex-col items-center self-stretch mb-5 ml-[18px] mr-[47px]">
								<span className="text-[#B8F7CF] text-base font-bold" >
									{"TARJETA GRAFICA ASUS DUAL RTX3050 6GB GDDR6 PCIE 4.0."}
								</span>
							</div>
							<div className="flex items-center mb-5 ml-[17px] mr-[153px] gap-[9px]">
								<div className="flex items-center w-[103px]">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/374875f7-3b5a-446f-bae5-2872563c8ddf"} 
										className="w-3 h-3 mr-1 object-fill"
									/>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c5dd71e0-d83d-4d20-b67b-30c0dea047d8"} 
										className="w-3 h-3 mr-1 object-fill"
									/>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cc372f6c-2d86-485e-b93c-bcdfe5f2623a"} 
										className="w-3 h-3 mr-1 object-fill"
									/>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e5c047f8-76db-4455-be3f-e952bbd4cb78"} 
										className="w-3 h-3 mr-1 object-fill"
									/>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1dade7a8-7a7d-4ea4-86bf-7ba99fba81ee"} 
										className="w-3 h-3 mr-[3px] object-fill"
									/>
									<div className="flex flex-col items-start w-[19px]">
										<span className="text-[#05DF72] text-sm font-bold" >
											{"4.3"}
										</span>
									</div>
								</div>
								<div className="flex flex-col w-[27px]">
									<span className="text-[#7AF1A7] text-xs" >
										{"(876)"}
									</span>
								</div>
							</div>
							<div className="flex items-center mb-[47px] ml-[17px] mr-[140px] gap-[38px]">
								<div className="flex items-center w-[46px] gap-[7px]">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/22fa5b60-1e4b-4f9f-b484-430435f83d10"} 
										className="w-3 h-3 object-fill"
									/>
									<div className="flex flex-col items-start w-[26px]">
										<span className="text-[#7AF1A7] text-xs" >
											{"2023"}
										</span>
									</div>
								</div>
								<span className="text-[#05DF72] text-lg font-bold" >
									{"s/100.99"}
								</span>
							</div>
							<div className="flex flex-col items-end self-stretch mb-[23px]">
								<button className="flex items-center text-left py-[11px] px-[23px] mt-[13px] mb-0.5 gap-4 rounded-lg border border-solid border-[#05DF72]" 
									style={{
										background: "linear-gradient(180deg, #00A63D, #7CCE00)"
									}}
									onClick={() => navigate("/producto/7")}>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6a04e069-b0cf-49e3-8e14-f18eaa2b7cc2"} 
										className="w-4 h-4 rounded-lg object-fill"
									/>
									<span className="text-black text-sm font-bold" >
										{"🔥 AGREGAR AL CARRITO 🔥"}
									</span>
								</button>
							</div>
						</div>
					</div>
			</main>
		</div>
	)
}

export default Accesorios;
