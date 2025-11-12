import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";

function GeneroShooter() {
  const navigate = useNavigate();return (
		<div className="min-h-screen bg-white">
			<Header />

			<main className="container mx-auto px-8 py-10">
				<div className="flex flex-col items-start bg-black pt-3 pb-[13px] px-[17px] mb-6 rounded-lg border border-solid border-[#00C85080]" 
					style={{
						boxShadow: "0px 0px 5px #00FF001A"
					}}>
					<span className="text-[#05DF72] text-sm font-bold" >
						{"⚡ VOLVER AL HQ ⚡"}
					</span>
				</div>
				<div className="flex flex-col items-start self-stretch pr-[72px] mb-6 mr-[38px]">
					<div className="flex items-start self-stretch mb-[59px]">
						<div className="flex flex-col items-start w-[309px] relative mr-[27px]">
							<div className="flex flex-col items-start self-stretch bg-[#000000E3] py-1.5 rounded-[14px] border border-solid border-[#00C8504D]">
								<button className="flex flex-col items-start bg-[#FB2C3633] text-left py-0.5 px-[13px] mb-[27px] ml-[26px] rounded-lg border border-solid border-[#FF6366]" 
									style={{
										boxShadow: "0px 0px 30px #00FF001A"
									}}
									onClick={() => navigate("/ventana-principal")}>
									<span className="text-[#FFA1A2] text-xs font-bold" >
										{"💀 -33% 💀"}
									</span>
								</button>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bba5bcba-2207-4ae9-8030-4bb3f0e19e9a"} 
									className="w-[260px] h-[326px] mb-10 ml-[18px] object-fill"
								/>
								<div className="flex flex-col items-start self-stretch pb-[1px] mb-[7px] mx-[17px]">
									<div className="flex items-center mb-2 gap-[9px]">
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
									<div className="flex flex-col items-start mb-5">
										<span className="text-[#B8F7CF] text-base font-bold" >
											{"Call of Duty: Warzone"}
										</span>
									</div>
									<div className="flex items-center mb-5 gap-[9px]">
										<div className="flex items-center w-[103px]">
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/41f56502-a252-4603-ae98-cd83506e3fa2"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cdced0a8-598d-4025-bfb8-ea149de3b150"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2865ee79-a6fa-4559-afff-71ac1eecfbd9"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a98fc12d-0dd8-45c3-b4c5-c0e227b442a0"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8d4fd878-de32-4cc6-b816-b6d31bc6e46c"} 
												className="w-3 h-3 mr-[7px] object-fill"
											/>
											<div className="flex flex-col items-start w-[18px]">
												<span className="text-[#05DF72] text-sm font-bold" >
													{"4.8"}
												</span>
											</div>
										</div>
										<span className="text-[#7AF1A7] text-xs w-4" >
											{"(1243)"}
										</span>
									</div>
									<div className="flex items-center gap-[7px]">
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/17d40bfb-3f4e-46a9-89fc-a64bbdf2ded9"} 
											className="w-3 h-3 object-fill"
										/>
										<div className="flex flex-col items-start w-[26px]">
											<span className="text-[#7AF1A7] text-xs" >
												{"2024"}
											</span>
										</div>
									</div>
								</div>
								<div className="flex flex-col items-end self-stretch mb-[5px]">
									<div className="flex items-center mr-11 gap-2">
										<div className="flex flex-col items-start w-14 pb-[1px]">
											<span className="text-[#05DF72] text-lg font-bold" >
												{"s/39.99"}
											</span>
										</div>
										<div className="flex flex-col items-start w-10 pb-[1px]">
											<span className="text-[#99A1AE] text-sm w-[23px]" >
												{"$59.99"}
											</span>
										</div>
									</div>
								</div>
								<button className="flex items-center self-stretch text-left py-2.5 px-[23px] mt-[27px] mb-4 mx-[18px] gap-4 rounded-lg border border-solid border-[#05DF72]" 
									style={{
										background: "linear-gradient(180deg, #00A63D, #7CCE00)"
									}}
									onClick={() => navigate("/producto/1")}>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1fa42408-3607-4d4d-990e-4e825d8cae9e"} 
										className="w-4 h-4 rounded-lg object-fill"
									/>
									<span className="text-black text-sm font-bold" >
										{"🔥 AGREGAR AL CARRITO 🔥"}
									</span>
								</button>
							</div>
							<button className="flex flex-col items-start bg-[#00000099] text-left absolute top-2.5 right-[-7px] p-3.5 rounded-[26843500px] border border-solid border-[#00C8504D]"
								onClick={() => navigate("/producto/2")}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b76fa1a9-4b69-4daf-a808-46e853449cc5"} 
									className="w-4 h-4 rounded-[26843500px] object-fill"
								/>
							</button>
						</div>
						<div className="flex flex-col items-start bg-[#000000E3] w-[309px] mt-2.5 mr-[31px] rounded-[14px] border border-solid border-[#00C8504D]">
							<div className="flex justify-between items-start self-stretch mt-[9px] mb-[13px] mx-[9px]">
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
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0c679e81-3a11-4c21-9837-f41ee6b8af0a"} 
										className="w-4 h-4 rounded-[26843500px] object-fill"
									/>
								</div>
							</div>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/29404803-ca9b-4376-8eb1-e801cdc12f96"} 
								className="w-[232px] h-[310px] mb-[65px] ml-[29px] object-fill"
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
							<span className="text-[#B8F7CF] text-base font-bold mb-3 ml-[108px]" >
								{"Destiny"}
							</span>
							<div className="flex items-center mb-3.5 ml-[17px] gap-[9px]">
								<div className="flex items-center w-[103px]">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1a0cd62b-7c57-4a45-83c1-e6cf2dda4050"} 
										className="w-3 h-3 mr-1 object-fill"
									/>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e47937fe-ab10-46ae-b1ba-b21fd65e4196"} 
										className="w-3 h-3 mr-1 object-fill"
									/>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c5b3c8f5-6f04-47e7-83ab-009df1626c92"} 
										className="w-3 h-3 mr-1 object-fill"
									/>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/65f87645-7a65-4d51-a3e2-de0561208270"} 
										className="w-3 h-3 mr-1 object-fill"
									/>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/790714f8-7155-4d0f-aa5b-741f3a7ca73d"} 
										className="w-3 h-3 mr-[3px] object-fill"
									/>
									<div className="flex flex-col items-start w-[19px]">
										<span className="text-[#05DF72] text-sm font-bold" >
											{"4.5"}
										</span>
									</div>
								</div>
								<span className="text-[#7AF1A7] text-xs w-[22px]" >
									{"(892)"}
								</span>
							</div>
							<div className="flex items-center mb-11 ml-[17px]">
								<div className="flex items-center w-[46px] mr-[45px] gap-[7px]">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d2b22f54-8c7e-4052-a143-71cb7cbc9dbf"} 
										className="w-3 h-3 object-fill"
									/>
									<div className="flex flex-col items-start w-[26px]">
										<span className="text-[#7AF1A7] text-xs" >
											{"2023"}
										</span>
									</div>
								</div>
								<span className="text-[#05DF72] text-lg font-bold mr-[11px]" >
									{"$49.99"}
								</span>
								<span className="text-[#99A1AE] text-sm w-[23px]" >
									{"$69.99"}
								</span>
							</div>
							<button className="flex items-center self-stretch text-left py-[11px] px-[23px] mb-5 mx-[21px] gap-4 rounded-lg border border-solid border-[#05DF72]" 
								style={{
									background: "linear-gradient(180deg, #00A63D, #7CCE00)"
								}}
								onClick={() => navigate("/producto/3")}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/34456c47-d653-4655-8c7e-d02669de5f4a"} 
									className="w-4 h-4 rounded-lg object-fill"
								/>
								<span className="text-black text-sm font-bold" >
									{"🔥 AGREGAR AL CARRITO 🔥"}
								</span>
							</button>
						</div>
						<div className="flex flex-col items-start bg-[#000000E3] w-[325px] py-[17px] mr-[23px] rounded-[14px] border border-solid border-[#00C8504D]">
							<button className="flex flex-col items-start bg-[#00000099] text-left p-3.5 mb-3.5 ml-[258px] mr-[23px] rounded-[26843500px] border border-solid border-[#00C8504D]"
								onClick={() => navigate("/producto/4")}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1d6a0090-a9f3-4990-9734-76bfd3451d68"} 
									className="w-4 h-4 rounded-[26843500px] object-fill"
								/>
							</button>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d47d211d-6491-4e87-945b-9ecf3c8f362e"} 
								className="w-[228px] h-[305px] mb-[43px] ml-[46px] rounded-[14px] object-fill"
							/>
							<div className="flex flex-col items-start self-stretch pb-[1px] mb-[7px] ml-[17px] mr-[34px]">
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
								<div className="flex flex-col items-start pb-[1px] mb-5 ml-[75px]">
									<span className="text-[#B8F7CF] text-base font-bold" >
										{"Ghostrecon"}
									</span>
								</div>
								<div className="flex items-center mb-5 gap-[9px]">
									<div className="flex items-center w-[103px]">
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/792d9cbd-011d-4ae2-9861-119387af932b"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e570fc90-0396-4a8a-9476-fcaeca97c320"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7d20a941-308e-4ac6-a640-ead47a9a77c1"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/46274cc7-dc38-4b83-91de-b828fac48d41"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1b52a3b2-1fcb-4d5b-ac77-a2b748060051"} 
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
								<div className="flex items-center gap-[7px]">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5bfadc64-3e52-479e-a9f4-cbacd0445ed1"} 
										className="w-3 h-3 object-fill"
									/>
									<div className="flex flex-col items-start w-[26px]">
										<span className="text-[#7AF1A7] text-xs" >
											{"2023"}
										</span>
									</div>
								</div>
							</div>
							<div className="flex flex-col items-start pb-[1px] mb-[35px] ml-[135px]">
								<span className="text-[#05DF72] text-lg font-bold" >
									{"s/88.78"}
								</span>
							</div>
							<div className="flex items-center self-stretch py-2.5 mx-[27px] rounded-lg border border-solid border-[#05DF72]" 
								style={{
									background: "linear-gradient(180deg, #00A63D, #7CCE00)"
								}}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e8979337-c2d4-4ce7-8c17-4442af68a880"} 
									className="w-4 h-4 ml-[23px] mr-4 rounded-lg object-fill"
								/>
								<span className="text-black text-sm font-bold" >
									{"AGREGAR AL CARRITO"}
								</span>
							</div>
						</div>
						<div className="flex flex-col items-start bg-[#000000E3] w-[348px] mt-[17px] rounded-[14px] border border-solid border-[#00C8504D]">
							<div className="flex justify-between items-start self-stretch py-[3px] mt-[9px] mb-3 ml-[9px] mr-12">
								<div className="flex flex-col items-start bg-[#00C95033] w-[98px] py-0.5 px-[13px] rounded-lg border border-solid border-[#05DF72]" 
									style={{
										boxShadow: "0px 0px 30px #00FF001A"
									}}>
									<span className="text-[#BAF351] text-xs font-bold" >
										{"⚡ NUEVO ⚡"}
									</span>
								</div>
								<div className="flex flex-col items-start bg-[#00000099] w-11 p-3.5 rounded-[26843500px] border border-solid border-[#00C8504D]">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e94cf73f-cfd5-4e71-8a44-e90b2b9bceb2"} 
										className="w-4 h-4 rounded-[26843500px] object-fill"
									/>
								</div>
							</div>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e86a717a-703a-4614-85a4-a66eaeff265c"} 
								className="w-[250px] h-[324px] mb-8 ml-[34px] object-fill"
							/>
							<div className="flex flex-col items-start mb-[21px] ml-[17px]">
								<div className="flex flex-col items-start pb-[1px]">
									<div className="flex items-center mb-[17px] mr-[65px] gap-[9px]">
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
									<span className="text-[#B8F7CF] text-base font-bold mb-3 ml-[104px]" >
										{"Back Blood"}
									</span>
									<div className="flex items-center mb-5 gap-[9px]">
										<div className="flex items-center w-[103px]">
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/03270ca1-5fa0-4429-bce2-486bc7d3939d"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/799a0bc0-c631-4cad-8778-8ab25645b5f1"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3eed3de8-0d08-46c2-b15d-13a66b2a4e35"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c5714780-df2a-4b48-a1aa-c46e828d9933"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7970be30-28f7-416e-8cf5-744a3171dd78"} 
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
									<div className="flex items-center gap-[7px]">
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dc852935-13f2-4c65-8ab8-109eb42014c9"} 
											className="w-3 h-3 object-fill"
										/>
										<div className="flex flex-col items-start w-[26px]">
											<span className="text-[#7AF1A7] text-xs" >
												{"2023"}
											</span>
										</div>
									</div>
								</div>
								<div className="flex flex-col items-start pb-[1px] ml-[137px]">
									<span className="text-[#05DF72] text-lg font-bold" >
										{"$59.99"}
									</span>
								</div>
							</div>
							<button className="flex items-center text-left py-2.5 px-[23px] mb-[39px] ml-7 mr-[46px] gap-4 rounded-lg border border-solid border-[#05DF72]" 
								style={{
									background: "linear-gradient(180deg, #00A63D, #7CCE00)"
								}}
								onClick={() => navigate("/producto/5")}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/53a7d481-0f51-402b-a956-cc54334fd0de"} 
									className="w-4 h-4 rounded-lg object-fill"
								/>
								<span className="text-black text-sm font-bold" >
									{"🔥 AGREGAR AL CARRITO 🔥"}
								</span>
							</button>
						</div>
					</div>
					<div className="flex items-start mb-[11px]">
						<div className="flex flex-col items-start bg-[#000000E3] w-[309px] mr-6 rounded-[14px] border border-solid border-[#00C8504D]">
							<div className="flex justify-between items-start self-stretch mt-[11px] mb-[7px] ml-1.5 mr-[33px]">
								<div className="flex flex-col items-start bg-[#FFFFFF00] w-[115px] pt-[5px] pl-1.5 mt-[17px] rounded-lg border border-solid border-[#FA2B36]" 
									style={{
										boxShadow: "0px 0px 5px #00FF001A"
									}}>
									<span className="text-[#FF6366] text-xs font-bold" >
										{"💀 AGOTADO 💀"}
									</span>
								</div>
								<div className="flex flex-col items-start bg-[#00000099] w-11 p-3.5 rounded-[26843500px] border border-solid border-[#00C8504D]">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/82ff0160-5391-4f42-a894-36f0b4c1801d"} 
										className="w-4 h-4 rounded-[26843500px] object-fill"
									/>
								</div>
							</div>
							<div className="flex flex-col items-center self-stretch mb-[1px] mx-[17px]">
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/38d5f9f9-0f6d-46b1-a6d6-e83855d5d62d"} 
									className="w-[242px] h-[363px] rounded-[14px] object-fill"
								/>
								<div className="flex flex-col items-start self-stretch">
									<div className="flex items-center mb-[9px] gap-[9px]">
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
									<div className="flex flex-col items-start mb-5 ml-[84px]">
										<span className="text-[#B8F7CF] text-base font-bold" >
											{"The Beast"}
										</span>
									</div>
									<div className="flex items-center mb-5 gap-[9px]">
										<div className="flex items-center w-[103px]">
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/deccf1ec-a08a-43aa-807d-c8e099934b60"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c83238e9-1012-49c4-97af-e0ad3a8a16b9"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/81e6fa7e-4181-4a40-a317-07b7bed1d9ba"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e95fef0d-4f9e-4c32-8c9e-2cf29cf4aaa9"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0bb0790c-5acf-4f4d-ad4a-87fa1e12b83d"} 
												className="w-3 h-3 mr-[7px] object-fill"
											/>
											<div className="flex flex-col items-start w-[18px]">
												<span className="text-[#05DF72] text-sm font-bold" >
													{"4.9"}
												</span>
											</div>
										</div>
										<span className="text-[#7AF1A7] text-xs w-4" >
											{"(3421)"}
										</span>
									</div>
									<div className="flex items-center gap-[7px]">
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f7afc598-a12b-4f7b-9035-b0e072c2b576"} 
											className="w-3 h-3 object-fill"
										/>
										<div className="flex flex-col items-start w-[26px]">
											<span className="text-[#7AF1A7] text-xs" >
												{"2023"}
											</span>
										</div>
									</div>
								</div>
							</div>
							<span className="text-[#05DF72] text-lg font-bold mb-3.5 ml-[118px]" >
								{"s/54.99"}
							</span>
							<button className="flex items-center self-stretch text-left py-[11px] px-[23px] mt-[15px] mb-7 mx-4 gap-4 rounded-lg border border-solid border-[#05DF72]" 
								style={{
									background: "linear-gradient(180deg, #00A63D, #7CCE00)"
								}}
								onClick={() => navigate("/producto/6")}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9a7481c4-1d0f-4f05-aa07-eed18441d3d4"} 
									className="w-4 h-4 rounded-lg object-fill"
								/>
								<span className="text-black text-sm font-bold" >
									{"🔥 AGREGAR AL CARRITO 🔥"}
								</span>
							</button>
						</div>
						<div className="flex flex-col items-start bg-[#000000E3] w-[309px] mr-6 rounded-[14px] border border-solid border-[#00C8504D]">
							<div className="flex justify-between items-start self-stretch mt-2.5 mb-[22px] mx-[9px]">
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
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9dfcb28b-eea1-4310-91f8-c7367068c3ae"} 
										className="w-4 h-4 rounded-[26843500px] object-fill"
									/>
								</div>
							</div>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9f48c06b-1c81-4ef6-a596-8833f87586c1"} 
								className="w-[245px] h-[308px] mb-10 ml-6 object-fill"
							/>
							<div className="flex items-center mb-[9px] ml-[17px] gap-[9px]">
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
							<div className="flex flex-col items-start mb-5 ml-[84px]">
								<span className="text-[#B8F7CF] text-base font-bold" >
									{"Ready or not"}
								</span>
							</div>
							<div className="flex items-center mb-5 ml-[17px] gap-[9px]">
								<div className="flex items-center w-[103px]">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4c0c913b-20d5-4cf4-9a33-34e3174875d0"} 
										className="w-3 h-3 mr-1 object-fill"
									/>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fbf12265-7544-4680-8f5d-f9a4e100f6e8"} 
										className="w-3 h-3 mr-1 object-fill"
									/>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/437588d8-ecd6-47dd-97d6-a0cc3115162e"} 
										className="w-3 h-3 mr-1 object-fill"
									/>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/857230cc-1298-4cbd-a538-db8900804181"} 
										className="w-3 h-3 mr-1 object-fill"
									/>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0d355579-650f-4d12-9804-5a7532c83bdf"} 
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
							<div className="flex items-start py-2.5 mb-[35px] ml-[17px] gap-[45px]">
								<div className="flex items-center w-[46px] gap-[7px]">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9530125e-b01b-4bff-9bb6-f3550f20f275"} 
										className="w-3 h-3 object-fill"
									/>
									<div className="flex flex-col items-start w-[26px]">
										<span className="text-[#7AF1A7] text-xs" >
											{"2025"}
										</span>
									</div>
								</div>
								<span className="text-[#05DF72] text-lg font-bold" >
									{"s/39.99"}
								</span>
							</div>
							<button className="flex items-center self-stretch text-left py-2.5 px-[23px] mb-[29px] mx-[18px] gap-4 rounded-lg border border-solid border-[#05DF72]" 
								style={{
									background: "linear-gradient(180deg, #00A63D, #7CCE00)"
								}}
								onClick={() => navigate("/producto/7")}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/746be8d1-5ebe-4d5a-b688-7b1b70b688e9"} 
									className="w-4 h-4 rounded-lg object-fill"
								/>
								<span className="text-black text-sm font-bold" >
									{"🔥 AGREGAR AL CARRITO 🔥"}
								</span>
							</button>
						</div>
						<div className="flex flex-col items-start bg-[#000000E3] w-[309px] mr-[49px] rounded-[14px] border border-solid border-[#00C8504D]">
							<div className="flex flex-col items-start self-stretch mt-2.5 mb-8 mx-2.5">
								<button className="flex flex-col items-start bg-[#FB2C3633] text-left py-0.5 px-[13px] rounded-lg border border-solid border-[#FF6366]" 
									style={{
										boxShadow: "0px 0px 30px #00FF001A"
									}}
									onClick={() => navigate("/producto/8")}>
									<span className="text-[#FFA1A2] text-xs font-bold" >
										{"💀 -29% 💀"}
									</span>
								</button>
								<div className="flex flex-col items-end self-stretch">
									<button className="flex flex-col items-start bg-[#00000099] text-left py-[13px] px-3.5 rounded-[26843500px] border border-solid border-[#00C8504D]"
										onClick={() => navigate("/producto/9")}>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8c2472bd-c5df-463c-8e8f-57547b699f76"} 
											className="w-4 h-4 rounded-[26843500px] object-fill"
										/>
									</button>
								</div>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/655096f1-bca8-4589-aa34-38f59321dc09"} 
									className="w-[246px] h-[346px] ml-3.5 object-fill"
								/>
							</div>
							<div className="flex flex-col items-start self-stretch mb-[1px] mx-[18px]">
								<div className="flex items-center mb-[15px] gap-[9px]">
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
								<div className="flex flex-col items-start pb-[1px] mb-5 ml-[87px]">
									<span className="text-[#B8F7CF] text-base font-bold" >
										{"Xdefiant"}
									</span>
								</div>
								<div className="flex items-center mb-5 gap-[9px]">
									<div className="flex items-center w-[103px]">
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/83674325-4c4f-4bab-a8d3-e945b580247d"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ba5a5c85-3611-4c55-9ee7-c403fe05c053"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/969a7faf-5a8d-42bc-bb75-347b902f1e8f"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c05d3c2c-32fb-4820-8246-885d9fe9f917"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/30048c8d-1b11-45ff-8d67-d56a0594690c"} 
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
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6e228813-fa20-442b-bfed-a986bcd478b8"} 
										className="w-3 h-3 object-fill"
									/>
									<div className="flex flex-col items-start w-[26px]">
										<span className="text-[#7AF1A7] text-xs" >
											{"2024"}
										</span>
									</div>
								</div>
							</div>
							<span className="text-[#05DF72] text-lg font-bold mb-[29px] ml-[101px]" >
								{"s/49.99"}
							</span>
							<button className="flex items-center self-stretch text-left py-2.5 px-[23px] mb-7 mx-[18px] gap-4 rounded-lg border border-solid border-[#05DF72]" 
								style={{
									background: "linear-gradient(180deg, #00A63D, #7CCE00)"
								}}
								onClick={() => navigate("/producto/10")}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9bf2e4e8-1886-447b-a346-c1dc8a8cb8f0"} 
									className="w-4 h-4 rounded-lg object-fill"
								/>
								<span className="text-black text-sm font-bold" >
									{"🔥 AGREGAR AL CARRITO 🔥"}
								</span>
							</button>
						</div>
						<div className="flex flex-col items-start bg-[#000000E3] w-[309px] rounded-[14px] border border-solid border-[#00C8504D]">
							<div className="flex justify-between items-start self-stretch mt-[9px] mb-6 mx-[9px]">
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
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f70a51c2-debc-4daf-b956-98f1b60e7c8b"} 
										className="w-4 h-4 rounded-[26843500px] object-fill"
									/>
								</div>
							</div>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b364818a-f352-415c-8203-4e2cbd348146"} 
								className="w-[217px] h-[315px] mb-8 ml-[39px] object-fill"
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
							<div className="flex flex-col items-start pb-[1px] mb-5 ml-[88px]">
								<span className="text-[#B8F7CF] text-base font-bold" >
									{"Call of duty"}
								</span>
							</div>
							<div className="flex items-center mb-5 ml-[17px] gap-[9px]">
								<div className="flex items-center w-[103px]">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/29cfe39a-b8e7-495b-9b6a-2845fdb2e8f4"} 
										className="w-3 h-3 mr-1 object-fill"
									/>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a37bdb9e-15c3-4957-b141-449fb674beff"} 
										className="w-3 h-3 mr-1 object-fill"
									/>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/15916939-197e-480c-8eae-89ef9232e531"} 
										className="w-3 h-3 mr-1 object-fill"
									/>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6ea194c6-35ec-4167-8c3f-89890972d0fc"} 
										className="w-3 h-3 mr-1 object-fill"
									/>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d070eee3-bafb-45c9-8b41-0abcabd2a17d"} 
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
							<div className="flex items-start py-[3px] mb-[1px] ml-[17px]">
								<div className="flex items-center w-[46px] mr-[67px] gap-[7px]">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e88da38f-9b11-40d2-80fb-17099e20b3b6"} 
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
							<div className="flex flex-col items-start pb-[1px] mb-[9px] ml-[130px]">
								<span className="text-[#9AE600] text-xs font-bold w-[75px]" >
									{"💰 AHORRAS $20.00 💰"}
								</span>
							</div>
							<button className="flex items-center self-stretch text-left py-2.5 px-[23px] mb-[31px] mx-[18px] gap-4 rounded-lg border border-solid border-[#05DF72]" 
								style={{
									background: "linear-gradient(180deg, #00A63D, #7CCE00)"
								}}
								onClick={() => navigate("/producto/11")}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e87c821c-214d-4f72-8632-9e7b40433158"} 
									className="w-4 h-4 rounded-lg object-fill"
								/>
								<span className="text-black text-sm font-bold" >
									{"🔥 AGREGAR AL CARRITO 🔥"}
								</span>
							</button>
						</div>
					</div>
				</div>
				<div className="flex flex-col self-stretch pb-[1px] mb-[70px] mr-[70px] gap-1">
					<div className="flex flex-col items-start self-stretch">
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
				</main>
		</div>
	)
}

export default GeneroShooter;
