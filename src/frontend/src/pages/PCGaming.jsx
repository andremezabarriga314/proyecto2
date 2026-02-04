import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";

function PCGaming() {
  const navigate = useNavigate();

	return (
		<div className="min-h-screen bg-white">
			<Header />

			<main className="container mx-auto px-8 py-10">
				<div className="flex items-center self-stretch mb-6 gap-[1px]">
					<div className="flex flex-col items-start w-[637px] gap-[5px]">
						<div className="flex flex-col items-start self-stretch">
							<span className="text-[#05DF72] text-3xl font-bold" >
								{"🎯 PC Gaming 🎯"}
							</span>
						</div>
						<span className="text-[#B8F7CF] text-base mr-96" >
							{"Componentes y periféricos para PC"}
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
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/49aee438-4165-474b-a7ea-75e7016463e9"} 
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
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0b7135e5-616d-4b5e-8c77-4cc177a69ee5"} 
									className="w-4 h-4 rounded-lg object-fill"
								/>
							</div>
						</div>
						<div className="flex justify-between items-center self-stretch">
							<div className="flex flex-col items-start w-60">
								<span className="text-[#7AF1A7] text-sm font-bold w-[222px]" >
									{"🎯 5 OBJETIVOS ENCONTRADOS 🎯"}
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
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/03f2b0a7-c269-495a-a283-62c5877a7acb"} 
									className="w-4 h-4 rounded-lg object-fill"
								/>
							</div>
						</div>
					</div>
					<div className="flex items-start self-stretch mb-2.5 mx-[87px]">
						<div className="flex flex-col items-start bg-[#000000E3] w-[309px] py-3 mr-6 rounded-[14px] border border-solid border-[#00C8504D]">
							<div className="flex justify-between items-start self-stretch mb-[11px] mx-2.5">
								<div className="flex flex-col items-start bg-[#00C95033] w-[98px] py-0.5 px-3 rounded-lg border border-solid border-[#05DF72]" 
									style={{
										boxShadow: "0px 0px 30px #00FF001A"
									}}>
									<span className="text-[#BAF351] text-xs font-bold" >
										{"⚡ NUEVO ⚡"}
									</span>
								</div>
								<div className="flex flex-col items-start bg-[#00000099] w-11 py-[13px] px-3.5 rounded-[26843500px] border border-solid border-[#00C8504D]">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/49adb312-307f-429b-9443-7618469d0629"} 
										className="w-4 h-4 rounded-[26843500px] object-fill"
									/>
								</div>
							</div>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1793f3dc-800c-4f1d-9734-04f60b1ad26f"} 
								className="w-[298px] h-[298px] mb-[61px] mx-1.5 object-fill"
							/>
							<div className="flex items-center mb-2 ml-[18px] gap-2">
								<div className="flex flex-col items-start bg-[#FFFFFF00] w-8 py-0.5 px-[7px] rounded-lg border border-solid border-[#00C85080]" 
									style={{
										boxShadow: "0px 0px 5px #00FF001A"
									}}>
									<span className="text-[#7AF1A7] text-xs font-bold" >
										{"PC"}
									</span>
								</div>
								<div className="flex flex-col items-start w-[82px]">
									<span className="text-[#7AF1A7] text-xs" >
										{"Mouse Gaming"}
									</span>
								</div>
							</div>
							<div className="flex flex-col items-start mb-2 ml-[18px]">
								<span className="text-[#B8F7CF] text-base font-bold" >
									{"Razer DeathAdder V3 Pro"}
								</span>
							</div>
							<div className="flex items-center self-stretch mb-2 mx-[18px] gap-[9px]">
								<div className="flex items-center w-[140px] gap-[9px]">
									<div className="flex items-center w-[103px]">
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1e9c105b-c712-493a-90a7-c66a2c816e59"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/56d3e244-2129-42c5-ab9d-b009d2b3fe1a"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/171a5384-d405-432e-a795-0b52f03c6b92"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/35cbbe37-3c90-4a62-bf31-f9edbb7ce1f8"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7b0fcdfa-6d0b-4f2d-9560-18eb8bea2e78"} 
											className="w-3 h-3 mr-[7px] object-fill"
										/>
										<div className="flex flex-col items-start w-[18px]">
											<span className="text-[#05DF72] text-sm font-bold" >
												{"4.7"}
											</span>
										</div>
									</div>
									<div className="flex flex-col items-start w-7">
										<span className="text-[#7AF1A7] text-xs" >
											{"(432)"}
										</span>
									</div>
								</div>
								<div className="flex flex-col items-start w-[125px] py-[13px] px-1 rounded-lg">
									<span className="text-[#05DF72] text-xs font-bold" >
										{"⚡ VER RESEÑAS ⚡"}
									</span>
								</div>
							</div>
							<div className="flex items-start py-1.5 mb-[53px] ml-[18px]">
								<div className="flex items-center w-[46px] mr-[91px] gap-[7px]">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/42f7acde-bbe2-4ca4-b89a-9191758f240b"} 
										className="w-3 h-3 object-fill"
									/>
									<div className="flex flex-col items-start w-[26px]">
										<span className="text-[#7AF1A7] text-xs" >
											{"2024"}
										</span>
									</div>
								</div>
								<span className="text-[#05DF72] text-lg font-bold" >
									{"$129.99"}
								</span>
							</div>
							<button className="flex items-center text-left py-2.5 px-[23px] ml-[23px] gap-4 rounded-lg border border-solid border-[#05DF72]" 
								style={{
									background: "linear-gradient(180deg, #00A63D, #7CCE00)"
								}}
								onClick={() => navigate("/producto/2")}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/20835b3f-dda8-40b2-b4f5-2bacb79c4465"} 
									className="w-4 h-4 rounded-lg object-fill"
								/>
								<span className="text-black text-sm font-bold" >
									{"🔥 AGREGAR AL CARRITO 🔥"}
								</span>
							</button>
						</div>
						<div className="flex flex-col items-start bg-[#000000E3] w-[309px] mr-[25px] rounded-[14px] border border-solid border-[#00C8504D]">
							<div className="flex justify-between items-start self-stretch mt-[9px] mb-[73px] mx-2.5">
								<div className="flex flex-col items-start bg-[#FB2C3633] w-[86px] py-0.5 px-3.5 rounded-lg border border-solid border-[#FF6366]" 
									style={{
										boxShadow: "0px 0px 30px #00FF001A"
									}}>
									<span className="text-[#FFA1A2] text-xs font-bold" >
										{"💀 -20% 💀"}
									</span>
								</div>
								<div className="flex flex-col items-start bg-[#00000099] w-11 py-[13px] px-3.5 rounded-[26843500px] border border-solid border-[#00C8504D]">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2e12e388-2b5d-480b-a4f3-9e162bd93096"} 
										className="w-4 h-4 rounded-[26843500px] object-fill"
									/>
								</div>
							</div>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3a2adf44-f47b-401a-8061-79ecd6a5f116"} 
								className="w-[306px] h-[190px] mb-[107px] mx-0.5 object-fill"
							/>
							<div className="flex flex-col items-start self-stretch pb-[1px] mb-[7px] mx-[18px] gap-2">
								<div className="flex items-center gap-2">
									<div className="flex flex-col items-start bg-[#FFFFFF00] w-8 py-0.5 px-2 rounded-lg border border-solid border-[#00C85080]" 
										style={{
											boxShadow: "0px 0px 5px #00FF001A"
										}}>
										<span className="text-[#7AF1A7] text-xs font-bold" >
											{"PC"}
										</span>
									</div>
									<div className="flex flex-col items-start w-24">
										<span className="text-[#7AF1A7] text-xs" >
											{"Teclado Mecánico"}
										</span>
									</div>
								</div>
								<div className="flex flex-col items-start">
									<span className="text-[#B8F7CF] text-base font-bold" >
										{"Corsair K95 RGB Platinum XT"}
									</span>
								</div>
								<div className="flex items-center self-stretch">
									<div className="flex items-center w-[103px] mr-[9px]">
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dd697f25-3e4c-488d-a1ba-bf79685919a8"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c622a0f0-2490-4ae9-8511-0bca692b1a35"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a9bf8fb6-9266-4794-9677-1c0c07f8c3c5"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a0116530-a3fb-43c7-9912-53376b5be39d"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/648a977f-07af-4118-b40e-95d21d565ca8"} 
											className="w-3 h-3 mr-[3px] object-fill"
										/>
										<div className="flex flex-col items-start w-[19px]">
											<span className="text-[#05DF72] text-sm font-bold" >
												{"4.6"}
											</span>
										</div>
									</div>
									<span className="text-[#7AF1A7] text-xs w-[22px] mr-3.5" >
										{"(298)"}
									</span>
									<div className="flex flex-col items-start w-[125px] py-[13px] px-1 rounded-lg">
										<span className="text-[#05DF72] text-xs font-bold" >
											{"⚡ VER RESEÑAS ⚡"}
										</span>
									</div>
								</div>
								<div className="flex items-center gap-[7px]">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9b444212-80a7-4daa-b2a8-86622849e9a1"} 
										className="w-3 h-3 object-fill"
									/>
									<div className="flex flex-col items-start w-[26px]">
										<span className="text-[#7AF1A7] text-xs" >
											{"2023"}
										</span>
									</div>
								</div>
							</div>
							<div className="flex flex-col items-start mb-[5px] ml-[152px]">
								<span className="text-[#05DF72] text-lg font-bold" >
									{"s/199.99"}
								</span>
							</div>
							<div className="w-[123px] h-7 ml-[18px]">
							</div>
							<div className="flex flex-col items-start relative mb-5 ml-[18px]">
								<div className="flex flex-col items-start py-3 pl-[23px] rounded-lg border border-solid border-[#05DF72]" 
									style={{
										background: "linear-gradient(180deg, #00A63D, #7CCE00)"
									}}>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/df66eb23-d6f9-4a03-8ae3-9578823fc6fd"} 
										className="w-4 h-4 rounded-lg object-fill"
									/>
								</div>
								<span className="text-black text-sm font-bold absolute bottom-2.5 left-[55px]" >
									{"🔥 AGREGAR AL CARRITO 🔥"}
								</span>
							</div>
						</div>
						<div className="flex flex-col items-start bg-[#000000E3] w-[309px] rounded-[14px] border border-solid border-[#00C8504D]">
							<div className="flex justify-between items-start self-stretch mt-[9px] mb-[27px]">
								<div className="flex flex-col items-start bg-[#FB2C3633] w-[86px] py-0.5 px-3.5 rounded-lg border border-solid border-[#FF6366]" 
									style={{
										boxShadow: "0px 0px 30px #00FF001A"
									}}>
									<span className="text-[#FFA1A2] text-xs font-bold" >
										{"💀 -38% 💀"}
									</span>
								</div>
								<div className="flex flex-col items-start bg-[#00000099] w-11 py-[13px] px-3.5 rounded-[26843500px] border border-solid border-[#00C8504D]">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f77cfccc-42bf-4fb8-8451-06d142774901"} 
										className="w-4 h-4 rounded-[26843500px] object-fill"
									/>
								</div>
							</div>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b63b69a8-0fe7-4572-8542-3c34dc841170"} 
								className="w-[295px] h-[266px] mb-[77px] object-fill"
							/>
							<div className="self-stretch mb-3">
								<div className="flex flex-col items-start self-stretch pb-[1px] gap-2">
									<div className="flex items-center gap-[9px]">
										<div className="flex flex-col items-start bg-[#FFFFFF00] w-8 py-0.5 px-2 rounded-lg border border-solid border-[#00C85080]" 
											style={{
												boxShadow: "0px 0px 5px #00FF001A"
											}}>
											<span className="text-[#7AF1A7] text-xs font-bold" >
												{"PC"}
											</span>
										</div>
										<div className="flex flex-col items-start w-[82px]">
											<span className="text-[#7AF1A7] text-xs" >
												{"Mouse Gaming"}
											</span>
										</div>
									</div>
									<div className="flex flex-col items-center self-stretch">
										<span className="text-[#B8F7CF] text-base font-bold" >
											{"Logitech G502 HERO Gaming Mouse"}
										</span>
									</div>
									<div className="flex items-center self-stretch">
										<div className="flex items-center w-[103px] mr-[9px]">
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7ac56521-be91-4d3a-a258-0869309f6195"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/49904137-d6d8-42eb-ac06-26b70f071992"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d6aee44a-f45f-46e7-90f7-72e27ce11760"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c3266bd3-9002-4c7c-a53a-8c493dc6355a"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7ce3d718-9636-4645-a9e9-a95774ee332c"} 
												className="w-3 h-3 mr-[3px] object-fill"
											/>
											<div className="flex flex-col items-start w-[19px]">
												<span className="text-[#05DF72] text-sm font-bold" >
													{"4.8"}
												</span>
											</div>
										</div>
										<span className="text-[#7AF1A7] text-xs w-4 mr-5" >
											{"(3421)"}
										</span>
										<div className="flex flex-col items-start w-[125px] py-[13px] px-1 rounded-lg">
											<span className="text-[#05DF72] text-xs font-bold" >
												{"⚡ VER RESEÑAS ⚡"}
											</span>
										</div>
									</div>
									<div className="flex items-center gap-[7px]">
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9ce683c9-8f83-42c9-91ad-e7b6a1d3b86f"} 
											className="w-3 h-3 object-fill"
										/>
										<div className="flex flex-col items-start w-[26px]">
											<span className="text-[#7AF1A7] text-xs" >
												{"2023"}
											</span>
										</div>
									</div>
								</div>
								<div className="flex flex-col items-end self-stretch">
									<div className="flex flex-col items-start mr-[101px]">
										<span className="text-[#05DF72] text-lg font-bold" >
											{"s/29.99"}
										</span>
									</div>
								</div>
							</div>
							<div className="flex flex-col items-end self-stretch mb-8">
								<button className="flex items-center text-left py-[11px] px-[23px] mt-[13px] mb-0.5 gap-4 rounded-lg border border-solid border-[#05DF72]" 
									style={{
										background: "linear-gradient(180deg, #00A63D, #7CCE00)"
									}}
									onClick={() => navigate("/producto/3")}>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4ceb6c8c-8b18-49b5-9189-dfefb297b21c"} 
										className="w-4 h-4 rounded-lg object-fill"
									/>
									<span className="text-black text-sm font-bold" >
										{"🔥 AGREGAR AL CARRITO 🔥"}
									</span>
								</button>
							</div>
						</div>
					</div>
					<div className="w-[1px] h-[1px] mb-[13px]">
					</div>
					<div className="flex items-center self-stretch mb-[27px] ml-[87px] mr-10">
						<div className="flex flex-col items-start w-[309px] relative mr-6">
							<div className="flex flex-col self-stretch bg-[#000000E3] rounded-[14px] border border-solid border-[#00C8504D]">
								<div className="flex justify-between items-start self-stretch mt-2.5 mb-[367px] mx-2.5">
									<div className="flex flex-col items-start w-[98px] pb-[1px] gap-1">
										<button className="flex flex-col items-center self-stretch bg-[#00C95033] text-left py-0.5 rounded-lg border border-solid border-[#05DF72]" 
											style={{
												boxShadow: "0px 0px 30px #00FF001A"
											}}
											onClick={() => navigate("/producto/4")}>
											<span className="text-[#BAF351] text-xs font-bold" >
												{"⚡ NUEVO ⚡"}
											</span>
										</button>
										<button className="flex flex-col items-start bg-[#FB2C3633] text-left py-0.5 px-[13px] mr-3 rounded-lg border border-solid border-[#FF6366]" 
											style={{
												boxShadow: "0px 0px 30px #00FF001A"
											}}
											onClick={() => navigate("/producto/5")}>
											<span className="text-[#FFA1A2] text-xs font-bold" >
												{"💀 -14% 💀"}
											</span>
										</button>
									</div>
									<div className="flex flex-col items-start bg-[#00000099] w-11 py-[13px] px-3.5 rounded-[26843500px] border border-solid border-[#00C8504D]">
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/414ed8b5-03db-4650-ac1c-c43a021f30c0"} 
											className="w-4 h-4 rounded-[26843500px] object-fill"
										/>
									</div>
								</div>
								<div className="flex flex-col items-start self-stretch mb-[13px] mx-[18px]">
									<div className="flex items-center mb-[15px] gap-2">
										<div className="flex flex-col items-start bg-[#FFFFFF00] w-8 py-0.5 px-[7px] rounded-lg border border-solid border-[#00C85080]" 
											style={{
												boxShadow: "0px 0px 5px #00FF001A"
											}}>
											<span className="text-[#7AF1A7] text-xs font-bold" >
												{"PC"}
											</span>
										</div>
										<div className="flex flex-col items-start w-24">
											<span className="text-[#7AF1A7] text-xs" >
												{"PC Gammer"}
											</span>
										</div>
									</div>
									<div className="flex flex-col items-start mb-2 ml-[61px]">
										<span className="text-[#B8F7CF] text-base font-bold" >
											{"PC Gmmer ryu"}
										</span>
									</div>
									<div className="flex items-center self-stretch mb-2 gap-[5px]">
										<div className="flex items-center w-36 gap-[9px]">
											<div className="flex items-center w-[103px]">
												<img
													src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/90c03758-e1ce-4162-84c1-99279561f674"} 
													className="w-3 h-3 mr-1 object-fill"
												/>
												<img
													src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4bdaa615-a072-405f-b6c1-e4673c5c75b8"} 
													className="w-3 h-3 mr-1 object-fill"
												/>
												<img
													src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fca46656-c3b5-41e6-88ef-7ab1f4ae6dca"} 
													className="w-3 h-3 mr-1 object-fill"
												/>
												<img
													src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e8a2af0d-a310-4ad8-8a50-002ed324b9d6"} 
													className="w-3 h-3 mr-1 object-fill"
												/>
												<img
													src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8458aa3d-c9c3-4c31-a89a-f2443d2c372c"} 
													className="w-3 h-3 mr-[7px] object-fill"
												/>
												<div className="flex flex-col items-start w-[18px]">
													<span className="text-[#05DF72] text-sm font-bold" >
														{"4.7"}
													</span>
												</div>
											</div>
											<div className="flex flex-col items-start w-8">
												<span className="text-[#7AF1A7] text-xs w-4" >
													{"(1876)"}
												</span>
											</div>
										</div>
										<div className="flex flex-col items-start w-[125px] py-[13px] px-1 rounded-lg">
											<span className="text-[#05DF72] text-xs font-bold" >
												{"⚡ VER RESEÑAS ⚡"}
											</span>
										</div>
									</div>
									<div className="flex items-center gap-[7px]">
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e009d7e0-1026-4924-8605-27897068f8f6"} 
											className="w-3 h-3 object-fill"
										/>
										<div className="flex flex-col items-start w-[26px]">
											<span className="text-[#7AF1A7] text-xs" >
												{"2024"}
											</span>
										</div>
									</div>
								</div>
								<div className="flex flex-col items-end self-stretch mb-4">
									<div className="flex flex-col items-start mr-[110px]">
										<span className="text-[#05DF72] text-lg font-bold" >
											{"s/2189.99"}
										</span>
									</div>
								</div>
								<button className="flex items-center self-stretch text-left py-2.5 px-[23px] mb-[29px] mx-[18px] gap-4 rounded-lg border border-solid border-[#05DF72]" 
									style={{
										background: "linear-gradient(180deg, #00A63D, #7CCE00)"
									}}
									onClick={() => navigate("/producto/6")}>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1b9f3632-18b6-47e2-98a1-877d6acf633f"} 
										className="w-4 h-4 rounded-lg object-fill"
									/>
									<span className="text-black text-sm font-bold" >
										{"🔥 AGREGAR AL CARRITO 🔥"}
									</span>
								</button>
							</div>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e302e14a-45fb-4d84-a3eb-4f14dacf7808"} 
								className="w-[314px] h-[314px] absolute top-[71px] left-1.5 object-fill"
							/>
						</div>
						<div className="flex flex-col items-start bg-[#000000E3] w-[309px] mr-[73px] rounded-[14px] border border-solid border-[#00C8504D]">
							<div className="flex justify-between items-start self-stretch mt-2.5 mb-[25px] mx-2.5">
								<div className="flex flex-col items-start bg-[#00C95033] w-[98px] py-0.5 px-3 rounded-lg border border-solid border-[#05DF72]" 
									style={{
										boxShadow: "0px 0px 30px #00FF001A"
									}}>
									<span className="text-[#BAF351] text-xs font-bold" >
										{"⚡ NUEVO ⚡"}
									</span>
								</div>
								<div className="flex flex-col items-start bg-[#00000099] w-11 py-[13px] px-3.5 rounded-[26843500px] border border-solid border-[#00C8504D]">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3db2edc4-c485-4d1b-ab6d-78cad334f0e0"} 
										className="w-4 h-4 rounded-[26843500px] object-fill"
									/>
								</div>
							</div>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/030fca27-69fc-42e6-b7a8-72fc09244e97"} 
								className="w-[306px] h-[243px] mb-[102px] mx-0.5 object-fill"
							/>
							<div className="flex flex-col items-start self-stretch mb-[1px] mx-[18px]">
								<div className="flex items-center mb-[9px] gap-2">
									<div className="flex flex-col items-start bg-[#FFFFFF00] w-8 py-0.5 px-2 rounded-lg border border-solid border-[#00C85080]" 
										style={{
											boxShadow: "0px 0px 5px #00FF001A"
										}}>
										<span className="text-[#7AF1A7] text-xs font-bold" >
											{"PC"}
										</span>
									</div>
									<div className="flex flex-col items-start w-[106px]">
										<span className="text-[#7AF1A7] text-xs" >
											{"Auriculares Gaming"}
										</span>
									</div>
								</div>
								<div className="flex flex-col items-center self-stretch mb-2">
									<span className="text-[#B8F7CF] text-base font-bold" >
										{"Corsair HS80 RGB Wireless Headset"}
									</span>
								</div>
								<div className="flex items-center self-stretch mb-2">
									<div className="flex items-center w-[103px] mr-[9px]">
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c44341c1-76d8-497d-91df-eb4351e30529"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a5b92339-fc97-4ff3-a481-14f16649518e"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/44a535de-2e8e-4eb9-ae58-60fc8b85258c"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fbaed709-0817-4af3-8777-2da426c97e6d"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/47078271-1db8-434e-95d1-e5d9e4b3d376"} 
											className="w-3 h-3 mr-[3px] object-fill"
										/>
										<div className="flex flex-col items-start w-[19px]">
											<span className="text-[#05DF72] text-sm font-bold" >
												{"4.6"}
											</span>
										</div>
									</div>
									<span className="text-[#7AF1A7] text-xs w-[22px] mr-3.5" >
										{"(892)"}
									</span>
									<div className="flex flex-col items-start w-[125px] py-[13px] px-1 rounded-lg">
										<span className="text-[#05DF72] text-xs font-bold" >
											{"⚡ VER RESEÑAS ⚡"}
										</span>
									</div>
								</div>
								<div className="flex items-center gap-[7px]">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1ae18302-d297-4e68-af70-51be48402b35"} 
										className="w-3 h-3 object-fill"
									/>
									<div className="flex flex-col items-start w-[26px]">
										<span className="text-[#7AF1A7] text-xs" >
											{"2024"}
										</span>
									</div>
								</div>
							</div>
							<div className="flex flex-col items-start mb-5 ml-[130px]">
								<span className="text-[#05DF72] text-lg font-bold" >
									{"s/149.99"}
								</span>
							</div>
							<button className="flex items-center self-stretch text-left py-2.5 px-[23px] mb-[37px] mx-[19px] gap-4 rounded-lg border border-solid border-[#05DF72]" 
								style={{
									background: "linear-gradient(180deg, #00A63D, #7CCE00)"
								}}
								onClick={() => navigate("/producto/7")}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a7a6b214-f349-43c6-9979-7702ff2567f0"} 
									className="w-4 h-4 rounded-lg object-fill"
								/>
								<span className="text-black text-sm font-bold" >
									{"🔥 AGREGAR AL CARRITO 🔥"}
								</span>
							</button>
						</div>
						<div className="flex flex-col items-start bg-[#000000E3] w-[309px] rounded-[14px] border border-solid border-[#00C8504D]">
							<div className="flex justify-between items-start self-stretch mt-[9px] mb-4 mx-[9px]">
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
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2c058179-e01f-49f9-acc6-10b7bfd04d30"} 
										className="w-4 h-4 rounded-[26843500px] object-fill"
									/>
								</div>
							</div>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/10d95c39-c853-45bc-9f60-1521077a1dfa"} 
								className="w-[306px] h-[307px] mb-[17px] mx-[1px] object-fill"
							/>
							<div className="flex items-center mb-[17px] ml-[19px] gap-2">
								<div className="flex flex-col items-start bg-[#FFFFFF00] w-8 py-0.5 px-[7px] rounded-lg border border-solid border-[#00C85080]" 
									style={{
										boxShadow: "0px 0px 5px #00FF001A"
									}}>
									<span className="text-[#7AF1A7] text-xs font-bold" >
										{"PC"}
									</span>
								</div>
								<div className="flex flex-col items-center w-[106px]">
									<span className="text-[#7AF1A7] text-xs" >
										{"PC gamming"}
									</span>
								</div>
							</div>
							<span className="text-[#B8F7CF] text-base font-bold w-[275px] mb-[3px] ml-[11px]" >
								{"Xtreme PC Gaming AMD Radeon RX 7600 Ryzen 7 5700 32GB SSD 1TB Sistema Liquido WIFI Venom"}
							</span>
							<div className="flex items-center self-stretch mb-5 mx-[17px]">
								<div className="flex items-center w-[103px] mr-[9px]">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/55cb207d-a7c2-4ec6-9d48-b94fa306c106"} 
										className="w-3 h-3 mr-1 object-fill"
									/>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/36b047f8-22ad-4f55-b809-c925b679d32b"} 
										className="w-3 h-3 mr-1 object-fill"
									/>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c1c1f497-0930-4108-98a2-e33a94da6130"} 
										className="w-3 h-3 mr-1 object-fill"
									/>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7b4c8fbc-60bb-452b-895f-59570406a7b9"} 
										className="w-3 h-3 mr-1 object-fill"
									/>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/23686d67-24d7-46bb-8e68-a1077f9d6b02"} 
										className="w-3 h-3 mr-[3px] object-fill"
									/>
									<div className="flex flex-col items-start w-[19px]">
										<span className="text-[#05DF72] text-sm font-bold" >
											{"4.6"}
										</span>
									</div>
								</div>
								<span className="text-[#7AF1A7] text-xs w-[22px] mr-[19px]" >
									{"(892)"}
								</span>
								<span className="text-[#05DF72] text-xs font-bold" >
									{"⚡ VER RESEÑAS ⚡"}
								</span>
							</div>
							<div className="flex items-center mb-[1px] ml-[17px] gap-[7px]">
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/57d421f7-f74b-4785-973f-639328b7b326"} 
									className="w-3 h-3 object-fill"
								/>
								<div className="flex flex-col items-start w-[26px]">
									<span className="text-[#7AF1A7] text-xs" >
										{"2024"}
									</span>
								</div>
							</div>
							<div className="flex flex-col items-start mb-5 ml-[129px]">
								<span className="text-[#05DF72] text-lg font-bold" >
									{"s/2189.99"}
								</span>
							</div>
							<button className="flex items-center self-stretch text-left py-[11px] px-[23px] mb-[38px] mx-[18px] gap-4 rounded-lg border border-solid border-[#05DF72]" 
								style={{
									background: "linear-gradient(180deg, #00A63D, #7CCE00)"
								}}
								onClick={() => navigate("/producto/8")}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d4cd10f3-90f3-4950-8ee5-7a03fb6cd1e4"} 
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

export default PCGaming;
