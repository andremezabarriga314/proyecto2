import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";

function GenerosCarreras() {
  const navigate = useNavigate();return (
		<div className="min-h-screen bg-white">
			<Header />

			<main className="container mx-auto px-8 py-10">
				<div className="flex flex-col items-start pb-[1px] mb-6">
					<span className="text-[#B8F7CF] text-base font-bold" >
						{"Call of Duty: Warzone"}
					</span>
				</div>
				<div className="flex items-center mb-6">
					<div className="flex flex-col w-[1008px] gap-1">
						<div className="flex flex-col items-start self-stretch pb-[1px]">
							<span className="text-[#05DF72] text-3xl font-bold" >
								{"🎯 Videojuegos 🎯"}
							</span>
						</div>
						<div className="flex flex-col items-start self-stretch">
							<span className="text-[#B8F7CF] text-base" >
								{"Descubre los últimos lanzamientos y clásicos eternos"}
							</span>
						</div>
					</div>
					<div className="flex flex-col items-start w-[338px]">
						<button className="flex flex-col items-start bg-black text-left py-3 px-[18px] rounded-lg border border-solid border-[#00C85080]" 
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
				<div className="flex flex-col items-start mb-[91px]">
					<div className="flex items-start mb-[59px]">
						<div className="flex flex-col items-start bg-[#000000E3] w-[309px] mr-[27px] rounded-[14px] border border-solid border-[#00C8504D]">
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/45f4e95b-4bd8-4f0b-8b59-f62df7507ea4"} 
								className="w-[261px] h-[391px] mt-[27px] mb-[5px] ml-[17px] rounded-[14px] object-fill"
							/>
							<div className="flex flex-col items-start self-stretch mb-[7px] mx-[17px]">
								<div className="flex items-center mb-[17px] gap-[9px]">
									<div className="flex flex-col items-start bg-[#FFFFFF00] w-[91px] py-0.5 px-2 rounded-lg border border-solid border-[#00C85080]" 
										style={{
											boxShadow: "0px 0px 5px #00FF001A"
										}}>
										<span className="text-[#7AF1A7] text-xs font-bold" >
											{"PlayStation 5"}
										</span>
									</div>
									<div className="flex flex-col items-start w-[117px]">
										<span className="text-[#7AF1A7] text-xs" >
											{"Acción/Supervivencia"}
										</span>
									</div>
								</div>
								<div className="flex flex-col items-start self-stretch mb-2">
									<span className="text-[#B8F7CF] text-base font-bold ml-[65px]" >
										{"Forza Motorsport"}
									</span>
									<div className="flex items-center self-stretch">
										<div className="flex items-center w-[103px] mr-[9px]">
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b21ccb81-6d84-43b9-8676-e875d36fd484"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c8d6a255-84be-477a-a62a-4b84e81b201b"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eb3ee5c8-ba48-4809-8286-9fc14120e3e6"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6685c773-5770-453d-aa25-50d58addf09d"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/699fc0bb-4a47-44a0-a007-59cfe0a952d5"} 
												className="w-3 h-3 mr-[7px] object-fill"
											/>
											<div className="flex flex-col items-start w-[18px]">
												<span className="text-[#05DF72] text-sm font-bold" >
													{"4.8"}
												</span>
											</div>
										</div>
										<span className="text-[#7AF1A7] text-xs w-4 mr-5" >
											{"(1243)"}
										</span>
										<div className="w-[125px] h-11 rounded-lg">
										</div>
									</div>
								</div>
								<div className="flex items-center gap-[7px]">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/08adecae-80e3-44e9-b93d-23eab1c54c77"} 
										className="w-3 h-3 object-fill"
									/>
									<div className="flex flex-col items-start w-[26px]">
										<span className="text-[#7AF1A7] text-xs" >
											{"2024"}
										</span>
									</div>
								</div>
							</div>
							<div className="flex items-start mb-1.5 ml-40">
								<div className="flex flex-col items-start w-14 mr-[49px]">
									<span className="text-[#05DF72] text-lg font-bold" >
										{"s/25.41"}
									</span>
								</div>
							</div>
							<button className="flex items-center self-stretch text-left py-[11px] px-[23px] mt-[21px] mb-[23px] mx-[18px] gap-4 rounded-lg border border-solid border-[#05DF72]" 
								style={{
									background: "linear-gradient(180deg, #00A63D, #7CCE00)"
								}}
								onClick={() => navigate("/producto/1")}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/71083a7d-5681-4f69-b4a7-5774a5d9884a"} 
									className="w-4 h-4 rounded-lg object-fill"
								/>
								<span className="text-black text-sm font-bold" >
									{"🔥 AGREGAR AL CARRITO 🔥"}
								</span>
							</button>
						</div>
						<div className="flex flex-col items-start bg-[#000000E3] w-[309px] py-3.5 mt-2.5 mr-[31px] rounded-[14px] border border-solid border-[#00C8504D]">
							<div className="flex justify-between items-start self-stretch mb-3.5 mx-[9px]">
								<div className="flex flex-col items-start bg-[#FB2C3633] w-[86px] py-0.5 px-3.5 rounded-lg border border-solid border-[#FF6366]" 
									style={{
										boxShadow: "0px 0px 30px #00FF001A"
									}}>
									<span className="text-[#FFA1A2] text-xs font-bold" >
										{"💀 -29% 💀"}
									</span>
								</div>
								<div className="flex flex-col items-start bg-[#00000099] w-11 py-[13px] px-3.5 rounded-[26843500px] border border-solid border-[#00C8504D]">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1ced53d7-0ff2-4f6b-a469-f58c944c60c4"} 
										className="w-4 h-4 rounded-[26843500px] object-fill"
									/>
								</div>
							</div>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d418b4e8-9967-4500-ab37-889b2ab927e4"} 
								className="w-[274px] h-[324px] mb-12 ml-3 object-fill"
							/>
							<div className="flex items-center mb-[17px] ml-[17px] gap-[9px]">
								<div className="flex flex-col items-start bg-[#FFFFFF00] w-8 py-0.5 px-[9px] rounded-lg border border-solid border-[#00C85080]" 
									style={{
										boxShadow: "0px 0px 5px #00FF001A"
									}}>
									<span className="text-[#7AF1A7] text-xs font-bold" >
										{"Ps"}
									</span>
								</div>
								<div className="flex flex-col items-start w-[107px]">
									<span className="text-[#7AF1A7] text-xs" >
										{"/Accion"}
									</span>
								</div>
							</div>
							<span className="text-[#B8F7CF] text-base font-bold mb-3 ml-[91px]" >
								{"Destiny"}
							</span>
							<div className="flex items-center mb-[13px] ml-[17px] gap-[9px]">
								<div className="flex items-center w-[103px]">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/402ea9ee-153e-47ad-b3ce-fa2dcf47ad38"} 
										className="w-3 h-3 mr-1 object-fill"
									/>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/24d09de4-fb0a-4ff8-a3aa-90199686ec03"} 
										className="w-3 h-3 mr-1 object-fill"
									/>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/24f3f4fc-a506-4925-80d1-cd7c432d32e1"} 
										className="w-3 h-3 mr-1 object-fill"
									/>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/18b3b434-02db-4454-b361-0aa2747fa739"} 
										className="w-3 h-3 mr-1 object-fill"
									/>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7e227ea0-05f3-4152-8f8f-6ff3408ad1cb"} 
										className="w-3 h-3 mr-[3px] object-fill"
									/>
									<div className="flex flex-col items-start w-[19px]">
										<span className="text-[#05DF72] text-sm font-bold" >
											{"4.5"}
										</span>
									</div>
								</div>
								<div className="flex flex-col w-[27px]">
									<span className="text-[#7AF1A7] text-xs" >
										{"(892)"}
									</span>
								</div>
							</div>
							<div className="flex items-center mb-11 ml-[17px]">
								<div className="flex items-center w-[46px] mr-[45px] gap-[7px]">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fca263c6-075c-4a85-810d-709b0bdaddb1"} 
										className="w-3 h-3 object-fill"
									/>
									<div className="flex flex-col items-start w-[26px]">
										<span className="text-[#7AF1A7] text-xs" >
											{"2023"}
										</span>
									</div>
								</div>
								<span className="text-[#05DF72] text-lg font-bold mr-[9px]" >
									{"s/49.99"}
								</span>
								<span className="text-[#99A1AE] text-sm w-[23px]" >
									{"$69.99"}
								</span>
							</div>
							<button className="flex items-center self-stretch text-left py-[11px] px-[23px] mx-[21px] gap-4 rounded-lg border border-solid border-[#05DF72]" 
								style={{
									background: "linear-gradient(180deg, #00A63D, #7CCE00)"
								}}
								onClick={() => navigate("/producto/2")}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1c410ff-c1cd-47b7-b20e-ab46116606b1"} 
									className="w-4 h-4 rounded-lg object-fill"
								/>
								<span className="text-black text-sm font-bold" >
									{"🔥 AGREGAR AL CARRITO 🔥"}
								</span>
							</button>
						</div>
						<div className="flex flex-col items-start bg-[#000000E3] w-[325px] mr-[23px] rounded-[14px] border border-solid border-[#00C8504D]">
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1ceae86a-b9b4-462c-89cf-ed555b073df5"} 
								className="w-[279px] h-[361px] mt-[45px] mb-4 mx-[27px] object-fill"
							/>
							<div className="flex flex-col items-start self-stretch mb-[7px] ml-[17px] mr-[34px]">
								<div className="flex items-center mb-[9px] gap-[9px]">
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
											{"Acción/Superhéroes"}
										</span>
									</div>
								</div>
								<div className="flex flex-col items-center self-stretch mb-[9px]">
									<div className="flex flex-col items-start">
										<span className="text-[#B8F7CF] text-base font-bold" >
											{"F25"}
										</span>
									</div>
								</div>
								<div className="flex items-center self-stretch mb-2 gap-[5px]">
									<div className="flex items-center w-36 gap-[9px]">
										<div className="flex items-center w-[103px]">
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7e3d52b3-7476-4150-b54e-309868600ec5"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/78e07437-2fcd-4ee7-b8d6-e1b3a465ea7b"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3270ee13-5334-4cbc-ba17-b64d085f9c4a"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/df1d1a8f-f401-4e3a-97fc-abda77ccde6a"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8ced3d1f-f31c-4048-a735-6f0991178f9f"} 
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
									<div className="w-[125px] h-11 rounded-lg">
									</div>
								</div>
								<div className="flex items-center gap-[7px]">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c5c618a7-5e5b-4ed8-a984-1158dcd39222"} 
										className="w-3 h-3 object-fill"
									/>
									<div className="flex flex-col items-start w-[26px]">
										<span className="text-[#7AF1A7] text-xs" >
											{"2025"}
										</span>
									</div>
								</div>
							</div>
							<div className="flex flex-col items-start mb-[26px] ml-[135px]">
								<span className="text-[#05DF72] text-lg font-bold" >
									{"s/28.78"}
								</span>
							</div>
							<div className="flex items-center self-stretch py-[11px] mb-[26px] mx-[27px] rounded-lg border border-solid border-[#05DF72]" 
								style={{
									background: "linear-gradient(180deg, #00A63D, #7CCE00)"
								}}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/00a5619f-0656-407f-ab9e-eae1dab7dac0"} 
									className="w-4 h-4 ml-[23px] mr-4 rounded-lg object-fill"
								/>
								<span className="text-black text-sm font-bold" >
									{"AGREGAR AL CARRITO"}
								</span>
							</div>
						</div>
						<div className="flex flex-col items-start bg-[#000000E3] w-[348px] mt-[17px] rounded-[14px] border border-solid border-[#00C8504D]">
							<div className="flex items-start mt-2.5 mb-[3px] ml-[9px]">
								<div className="flex flex-col items-start bg-[#00C95033] w-[98px] py-0.5 px-[13px] mr-[148px] rounded-lg border border-solid border-[#05DF72]" 
									style={{
										boxShadow: "0px 0px 30px #00FF001A"
									}}>
									<span className="text-[#BAF351] text-xs font-bold" >
										{"⚡ NUEVO ⚡"}
									</span>
								</div>
								<div className="flex flex-col items-start bg-[#00000099] w-11 py-[13px] px-3.5 rounded-[26843500px] border border-solid border-[#00C8504D]">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/25db36b5-7f29-43d7-9fd2-e7c51245bc0f"} 
										className="w-4 h-4 rounded-[26843500px] object-fill"
									/>
								</div>
							</div>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0a7ac21b-962e-4113-922e-5cb00a0c3a21"} 
								className="w-[262px] h-[327px] mb-[39px] ml-[34px] object-fill"
							/>
							<div className="flex flex-col items-start mb-[21px] ml-[17px]">
								<div className="flex flex-col items-start">
									<div className="flex items-center mb-[9px] mr-[65px] gap-[9px]">
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
												{"Acción/Superhéroes"}
											</span>
										</div>
									</div>
									<div className="flex flex-col items-start mb-2 mr-[159px]">
										<span className="text-[#B8F7CF] text-base font-bold" >
											{"Need for Speed"}
										</span>
									</div>
									<div className="flex items-center mb-2 gap-[5px]">
										<div className="flex items-center w-36 gap-[9px]">
											<div className="flex items-center w-[103px]">
												<img
													src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/02ad42f3-51eb-4da8-8556-52755b3d54d9"} 
													className="w-3 h-3 mr-1 object-fill"
												/>
												<img
													src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/76dfcc81-f122-4d76-b9b1-3b35b9a093ff"} 
													className="w-3 h-3 mr-1 object-fill"
												/>
												<img
													src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1c704073-2428-45fc-b582-1c4e329ae465"} 
													className="w-3 h-3 mr-1 object-fill"
												/>
												<img
													src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/677a99f2-adb5-4e36-9271-cf0cc37a90fe"} 
													className="w-3 h-3 mr-1 object-fill"
												/>
												<img
													src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d85221b5-ca1e-450d-94a1-12bc8eaaa1fb"} 
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
										<div className="w-[125px] h-11 rounded-lg">
										</div>
									</div>
									<div className="flex items-center mr-[228px] gap-[7px]">
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cfb60429-a7a9-4a54-8e61-ddf9f3d8a2a7"} 
											className="w-3 h-3 object-fill"
										/>
										<div className="flex flex-col items-start w-[26px]">
											<span className="text-[#7AF1A7] text-xs" >
												{"2023"}
											</span>
										</div>
									</div>
								</div>
								<div className="flex flex-col items-start ml-[137px]">
									<span className="text-[#05DF72] text-lg font-bold" >
										{"$59.99"}
									</span>
								</div>
							</div>
							<button className="flex items-center text-left py-[11px] px-[23px] mb-[39px] ml-7 mr-[46px] gap-4 rounded-lg border border-solid border-[#05DF72]" 
								style={{
									background: "linear-gradient(180deg, #00A63D, #7CCE00)"
								}}
								onClick={() => navigate("/producto/3")}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ca7f3bf7-1a37-40bd-8bb4-f9d2cfb4071f"} 
									className="w-4 h-4 rounded-lg object-fill"
								/>
								<span className="text-black text-sm font-bold" >
									{"🔥 AGREGAR AL CARRITO 🔥"}
								</span>
							</button>
						</div>
					</div>
					<div className="flex items-start mb-[11px] mr-[39px]">
						<div className="flex flex-col items-start bg-[#000000E3] w-[309px] mr-6 rounded-[14px] border border-solid border-[#00C8504D]">
							<div className="flex justify-between items-start self-stretch mt-[11px] mb-[18px] ml-1.5 mr-[33px]">
								<div className="flex flex-col items-start w-[115px] relative mt-[17px]">
									<div className="self-stretch bg-[#FFFFFF00] h-[21px] rounded-lg border border-solid border-[#FA2B36]" 
										style={{
											boxShadow: "0px 0px 5px #00FF001A"
										}}>
									</div>
									<span className="text-[#FF6366] text-xs font-bold absolute bottom-0 left-1.5" >
										{"💀 AGOTADO 💀"}
									</span>
								</div>
								<div className="flex flex-col items-start bg-[#00000099] w-11 py-[13px] px-3.5 rounded-[26843500px] border border-solid border-[#00C8504D]">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0fce9e60-52ef-4201-91f8-f49a7509d307"} 
										className="w-4 h-4 rounded-[26843500px] object-fill"
									/>
								</div>
							</div>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ad124c96-1cf9-48d9-8486-a7e679774200"} 
								className="w-[266px] h-[333px] mb-[18px] ml-6 rounded-[14px] object-fill"
							/>
							<div className="flex flex-col items-start self-stretch pb-[1px] mx-[17px] gap-2">
								<div className="flex items-center gap-[9px]">
									<div className="flex flex-col items-start bg-[#FFFFFF00] w-8 py-0.5 px-2 rounded-lg border border-solid border-[#00C85080]" 
										style={{
											boxShadow: "0px 0px 5px #00FF001A"
										}}>
										<span className="text-[#7AF1A7] text-xs font-bold" >
											{"PC"}
										</span>
									</div>
									<div className="flex flex-col items-start w-[71px]">
										<span className="text-[#7AF1A7] text-xs" >
											{"RPG/Fantasía"}
										</span>
									</div>
								</div>
								<div className="flex flex-col items-start ml-[73px]">
									<span className="text-[#B8F7CF] text-base font-bold" >
										{"Grid Legends"}
									</span>
								</div>
								<div className="flex items-center self-stretch">
									<div className="flex items-center w-[103px] mr-[9px]">
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eeb672d0-02df-4312-bb65-8acbcbb4ad4c"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f001d8d8-623d-4869-9974-af973740a88e"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2a95e2f2-a910-4a93-9c31-749d11c2d835"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1d508f8f-43c4-485e-bdbb-3f4d0c7399cd"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/908aa977-abdf-46ef-9d54-5ebe50bf52d4"} 
											className="w-3 h-3 mr-[7px] object-fill"
										/>
										<div className="flex flex-col items-start w-[18px]">
											<span className="text-[#05DF72] text-sm font-bold" >
												{"4.9"}
											</span>
										</div>
									</div>
									<span className="text-[#7AF1A7] text-xs w-4 mr-5" >
										{"(3421)"}
									</span>
									<div className="w-[125px] h-11 rounded-lg">
									</div>
								</div>
								<div className="flex items-center gap-[7px]">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5348bb09-b004-4c29-9d46-badc8205ef94"} 
										className="w-3 h-3 object-fill"
									/>
									<div className="flex flex-col items-start w-[26px]">
										<span className="text-[#7AF1A7] text-xs" >
											{"2023"}
										</span>
									</div>
								</div>
							</div>
							<span className="text-[#05DF72] text-lg font-bold mb-[29px] ml-[142px]" >
								{"$54.99"}
							</span>
							<button className="flex items-center self-stretch text-left py-[11px] px-[23px] mb-[27px] mx-4 gap-4 rounded-lg border border-solid border-[#05DF72]" 
								style={{
									background: "linear-gradient(180deg, #00A63D, #7CCE00)"
								}}
								onClick={() => navigate("/producto/4")}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4b2fb7ec-e290-4eba-98d1-9915f92fe218"} 
									className="w-4 h-4 rounded-lg object-fill"
								/>
								<span className="text-black text-sm font-bold" >
									{"🔥 AGREGAR AL CARRITO 🔥"}
								</span>
							</button>
						</div>
						<div className="flex flex-col items-start bg-[#000000E3] w-[309px] mr-6 rounded-[14px] border border-solid border-[#00C8504D]">
							<div className="flex justify-between items-start self-stretch mt-2.5 mb-3.5 mx-[9px]">
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
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/448adb75-f0c8-410d-940e-98bce0f2ba05"} 
										className="w-4 h-4 rounded-[26843500px] object-fill"
									/>
								</div>
							</div>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2e473871-8932-461a-9817-c08a62bb6141"} 
								className="w-[230px] h-[324px] mb-8 ml-[41px] object-fill"
							/>
							<div className="flex items-center mb-3.5 ml-[17px] gap-[9px]">
								<div className="flex flex-col items-start bg-[#FFFFFF00] w-[91px] py-0.5 px-2 rounded-lg border border-solid border-[#00C85080]" 
									style={{
										boxShadow: "0px 0px 5px #00FF001A"
									}}>
									<span className="text-[#7AF1A7] text-xs font-bold" >
										{"PlayStation 5"}
									</span>
								</div>
								<div className="flex flex-col items-start w-20">
									<span className="text-[#7AF1A7] text-xs" >
										{"Souls-like/RPG"}
									</span>
								</div>
							</div>
							<div className="flex flex-col items-start mb-2 ml-[83px]">
								<span className="text-[#B8F7CF] text-base font-bold" >
									{"Rider Republic"}
								</span>
							</div>
							<div className="flex items-center self-stretch mb-2 mx-[17px] gap-[3px]">
								<div className="flex items-center w-[146px] gap-[9px]">
									<div className="flex items-center w-[103px]">
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b8c8a649-5c10-418e-8ee0-a630f3ac6d90"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/40aa7921-362e-45f5-a9c8-467c7d0c0884"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0bbaceb9-843c-46d8-b2af-855357167253"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e7d854d6-ba62-479a-90db-6e36e4d2387b"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/99d2cd86-cb41-4de1-8392-29e464f1cdbb"} 
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
								<div className="w-[125px] h-11 rounded-lg">
								</div>
							</div>
							<div className="flex items-start mb-[34px] ml-[17px]">
								<div className="flex items-center w-[46px] mr-[45px] gap-[7px]">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/16eb768c-7b7b-440f-a5ed-244d1b6a2012"} 
										className="w-3 h-3 object-fill"
									/>
									<div className="flex flex-col items-start w-[26px]">
										<span className="text-[#7AF1A7] text-xs" >
											{"2022"}
										</span>
									</div>
								</div>
								<span className="text-[#05DF72] text-lg font-bold mt-2.5 mr-[11px]" >
									{"$29.99"}
								</span>
								<div className="flex flex-col items-start w-10 mt-3.5 mb-[3px]">
									<span className="text-[#99A1AE] text-sm w-[23px]" >
										{"$59.99"}
									</span>
								</div>
							</div>
							<button className="flex items-center self-stretch text-left py-[11px] px-[23px] mb-[29px] mx-[18px] gap-4 rounded-lg border border-solid border-[#05DF72]" 
								style={{
									background: "linear-gradient(180deg, #00A63D, #7CCE00)"
								}}
								onClick={() => navigate("/producto/5")}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8d6e1a5f-fd79-4bb4-b9e4-579f265d4755"} 
									className="w-4 h-4 rounded-lg object-fill"
								/>
								<span className="text-black text-sm font-bold" >
									{"🔥 AGREGAR AL CARRITO 🔥"}
								</span>
							</button>
						</div>
						<div className="flex flex-col items-center bg-[#000000E3] w-[309px] px-2.5 mr-[49px] rounded-[14px] border border-solid border-[#00C8504D]">
							<div className="flex justify-between items-start self-stretch mt-2.5 mb-[43px]">
								<div className="flex flex-col items-start bg-[#FB2C3633] w-[86px] py-0.5 px-[13px] rounded-lg border border-solid border-[#FF6366]" 
									style={{
										boxShadow: "0px 0px 30px #00FF001A"
									}}>
									<span className="text-[#FFA1A2] text-xs font-bold" >
										{"💀 -29% 💀"}
									</span>
								</div>
								<div className="flex flex-col items-start bg-[#00000099] w-11 py-[13px] px-3.5 rounded-[26843500px] border border-solid border-[#00C8504D]">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/46cccc51-20b0-4a9e-ac2d-c6a7d208e63f"} 
										className="w-4 h-4 rounded-[26843500px] object-fill"
									/>
								</div>
							</div>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/923979ce-b878-4500-a9c0-db4f8c820c04"} 
								className="w-[241px] h-[295px] mb-8 object-fill"
							/>
							<div className="self-stretch mb-8">
								<div className="flex flex-col items-start self-stretch pb-[1px]">
									<div className="flex items-center mb-2 gap-[9px]">
										<div className="flex flex-col items-start bg-[#FFFFFF00] w-[91px] py-0.5 px-2 rounded-lg border border-solid border-[#00C85080]" 
											style={{
												boxShadow: "0px 0px 5px #00FF001A"
											}}>
											<span className="text-[#7AF1A7] text-xs font-bold" >
												{"PlayStation 5"}
											</span>
										</div>
										<div className="flex flex-col items-start w-[89px]">
											<span className="text-[#7AF1A7] text-xs" >
												{"Accion"}
											</span>
										</div>
									</div>
									<div className="flex flex-col items-start mb-5 ml-[61px]">
										<span className="text-[#B8F7CF] text-base font-bold" >
											{"Crash nitro full"}
										</span>
									</div>
									<div className="flex items-center mb-5 gap-[9px]">
										<div className="flex items-center w-[103px]">
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1e40e275-4627-40ae-9dc5-487f7d1af1d3"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/acd65425-2880-41a4-b7e5-567c5c59b285"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6ce44f28-81c6-488f-a545-ff8291fd2fd6"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9409a78e-98b7-48c5-86ca-da68314ff38e"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3878b1b3-a8ce-454a-9f92-c0c31b00b1c6"} 
												className="w-3 h-3 mr-[3px] object-fill"
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
									<div className="flex items-center gap-[7px]">
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/43856d9c-2514-4ace-93ce-7bbb27e1a36e"} 
											className="w-3 h-3 object-fill"
										/>
										<div className="flex flex-col items-start w-[26px]">
											<span className="text-[#7AF1A7] text-xs" >
												{"2024"}
											</span>
										</div>
									</div>
								</div>
								<div className="flex flex-col items-end self-stretch">
									<div className="flex flex-col items-start mr-[98px]">
										<span className="text-[#05DF72] text-lg font-bold" >
											{"$49.99"}
										</span>
									</div>
								</div>
							</div>
							<button className="flex items-center self-stretch text-left py-[11px] px-6 mb-7 gap-4 rounded-lg border border-solid border-[#05DF72]" 
								style={{
									background: "linear-gradient(180deg, #00A63D, #7CCE00)"
								}}
								onClick={() => navigate("/producto/6")}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3e192ee9-a16c-4f39-8548-a47263dd0c37"} 
									className="w-4 h-4 rounded-lg object-fill"
								/>
								<span className="text-black text-sm font-bold" >
									{"🔥 AGREGAR AL CARRITO 🔥"}
								</span>
							</button>
						</div>
						<div className="flex flex-col items-start bg-[#000000E3] w-[309px] rounded-[14px] border border-solid border-[#00C8504D]">
							<div className="flex justify-between items-start self-stretch mt-2.5 mb-5 mx-[9px]">
								<div className="flex flex-col items-start bg-[#FB2C3633] w-[86px] py-0.5 px-3.5 rounded-lg border border-solid border-[#FF6366]" 
									style={{
										boxShadow: "0px 0px 30px #00FF001A"
									}}>
									<span className="text-[#FFA1A2] text-xs font-bold" >
										{"💀 -29% 💀"}
									</span>
								</div>
								<div className="flex flex-col items-start bg-[#00000099] w-11 py-[13px] px-3.5 rounded-[26843500px] border border-solid border-[#00C8504D]">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c94ab327-45cf-47d6-b69f-cb3e92d99979"} 
										className="w-4 h-4 rounded-[26843500px] object-fill"
									/>
								</div>
							</div>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cafdb85a-ddc1-4c50-b651-5113898dfe3b"} 
								className="w-[243px] h-[318px] mb-[31px] ml-[23px] object-fill"
							/>
							<div className="flex items-center mb-3.5 ml-[17px] gap-[9px]">
								<div className="flex flex-col items-start bg-[#FFFFFF00] w-[91px] py-0.5 px-2 rounded-lg border border-solid border-[#00C85080]" 
									style={{
										boxShadow: "0px 0px 5px #00FF001A"
									}}>
									<span className="text-[#7AF1A7] text-xs font-bold" >
										{"PlayStation 5"}
									</span>
								</div>
								<div className="flex flex-col items-start w-[89px]">
									<span className="text-[#7AF1A7] text-xs" >
										{"Accion"}
									</span>
								</div>
							</div>
							<div className="flex flex-col items-start pl-[26px] mb-[21px] ml-[87px]">
								<span className="text-[#B8F7CF] text-base font-bold" >
									{"WRC"}
								</span>
							</div>
							<div className="flex items-center mb-5 ml-[17px] gap-[9px]">
								<div className="flex items-center w-[103px]">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ca35fa4e-a0c0-4462-b44f-d24231ec5e11"} 
										className="w-3 h-3 mr-1 object-fill"
									/>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cb15f575-3978-4d61-b9f2-ded4ebee0ba7"} 
										className="w-3 h-3 mr-1 object-fill"
									/>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5abc8017-abb9-4eda-9724-1266fa73df0c"} 
										className="w-3 h-3 mr-1 object-fill"
									/>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3aefc25b-a07e-4ac9-b763-030c06f196b6"} 
										className="w-3 h-3 mr-1 object-fill"
									/>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/59cf2dda-76fc-4044-a848-9cfb696c5fff"} 
										className="w-3 h-3 mr-[3px] object-fill"
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
							<div className="flex items-start py-0.5 ml-[17px]">
								<div className="flex items-center w-[46px] mr-[67px] gap-[7px]">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/15e62701-a410-4c8a-9aa4-5d39ac25b8a8"} 
										className="w-3 h-3 object-fill"
									/>
									<div className="flex flex-col items-start w-[26px]">
										<span className="text-[#7AF1A7] text-xs" >
											{"2024"}
										</span>
									</div>
								</div>
								<span className="text-[#05DF72] text-lg font-bold" >
									{"s/29.99"}
								</span>
							</div>
							<div className="flex flex-col items-start mb-[9px] ml-[130px]">
								<span className="text-[#9AE600] text-xs font-bold w-[75px]" >
									{"💰 AHORRAS $20.00 💰"}
								</span>
							</div>
							<button className="flex items-center self-stretch text-left py-[11px] px-6 mb-[31px] mx-[17px] gap-4 rounded-lg border border-solid border-[#05DF72]" 
								style={{
									background: "linear-gradient(180deg, #00A63D, #7CCE00)"
								}}
								onClick={() => navigate("/producto/7")}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/02aa6d2f-9ae6-4543-a4e5-d81672e422b6"} 
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

export default GenerosCarreras;
