import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";

function Deporte() {
  const navigate = useNavigate();return (
		<div className="min-h-screen bg-white">
			<Header />

			<main className="container mx-auto px-8 py-10">
				<div className="flex flex-col items-start pb-[1px] mb-6">
					<span className="text-[#B8F7CF] text-base font-bold" >
						{"Call of Duty: Warzone"}
					</span>
				</div>
				<div className="flex items-center self-stretch mb-6">
					<div className="flex flex-col w-[1073px] gap-1">
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
					<div className="flex flex-col items-start w-[338px]">
						<div className="flex flex-col items-start bg-black pt-3 pb-[13px] px-[18px] rounded-lg border border-solid border-[#00C85080]" 
							style={{
								boxShadow: "0px 0px 5px #00FF001A"
							}}>
							<span className="text-[#05DF72] text-sm font-bold" >
								{"⚡ VOLVER AL HQ ⚡"}
							</span>
						</div>
					</div>
				</div>
				<div className="self-stretch mb-[143px]">
					<div className="flex items-start self-stretch mb-[59px] mr-10 gap-[27px]">
						<div className="flex flex-col items-start w-[309px] relative">
							<div className="flex flex-col items-start self-stretch bg-[#000000E3] py-1.5 rounded-[14px] border border-solid border-[#00C8504D]">
								<button className="flex flex-col items-start bg-[#FB2C3633] text-left py-0.5 px-[13px] mb-10 ml-[26px] rounded-lg border border-solid border-[#FF6366]" 
									style={{
										boxShadow: "0px 0px 30px #00FF001A"
									}}
									onClick={() => navigate("/ventana-principal")}>
									<span className="text-[#FFA1A2] text-xs font-bold" >
										{"💀 -33% 💀"}
									</span>
								</button>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5d7976e3-b2a1-4b8b-8fec-b2179348221b"} 
									className="w-[258px] h-[321px] mb-8 ml-[18px] object-fill"
								/>
								<div className="flex flex-col items-start self-stretch pb-[1px] mb-[7px] mx-[17px]">
									<div className="flex items-center mb-[15px] gap-[9px]">
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
									<div className="flex flex-col items-start pb-[1px] mb-5 ml-[89px]">
										<span className="text-[#B8F7CF] text-base font-bold" >
											{"2k25"}
										</span>
									</div>
									<div className="flex items-center mb-5 gap-[9px]">
										<div className="flex items-center w-[103px]">
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/70d30259-3084-4fdc-a959-e070c78fb6d1"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2d62848b-af09-439a-9087-1fb94bc6445c"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/653f67c6-985c-49ee-9f57-7236c5f187e1"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/378d7dc9-58eb-413a-8731-a86ceed4e869"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d3ca9f0a-6ef6-4762-bfdc-0948560fb0a3"} 
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
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3e4677d8-afab-4811-8423-c064bbccbd58"} 
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
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8ba5fcac-fe4e-49d1-b162-0609aa79cd1c"} 
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
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5d645e54-bc6a-45ac-ac7d-73542d627e86"} 
									className="w-4 h-4 rounded-[26843500px] object-fill"
								/>
							</button>
						</div>
						<div className="flex flex-col items-start bg-[#000000E3] w-[309px] mt-2.5 rounded-[14px] border border-solid border-[#00C8504D]">
							<div className="flex justify-between items-start self-stretch mt-[9px] mb-[11px] mx-[9px]">
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
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a8f2b274-e9d9-4ef3-bc13-9649a6645e64"} 
										className="w-4 h-4 rounded-[26843500px] object-fill"
									/>
								</div>
							</div>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5dc663f9-cd4d-4b27-bc68-7809fdacd5d3"} 
								className="w-64 h-80 mb-[17px] ml-[27px] object-fill"
							/>
							<div className="flex flex-col items-start self-stretch pb-[1px] mb-[18px] mx-[18px]">
								<div className="flex items-center mb-[17px] gap-2">
									<div className="flex flex-col items-start bg-[#FFFFFF00] w-8 py-0.5 px-2 rounded-lg border border-solid border-[#00C85080]" 
										style={{
											boxShadow: "0px 0px 5px #00FF001A"
										}}>
										<span className="text-[#7AF1A7] text-xs font-bold" >
											{"Ps"}
										</span>
									</div>
									<div className="flex flex-col items-start w-[107px]">
										<span className="text-[#7AF1A7] text-xs" >
											{"/Deporte"}
										</span>
									</div>
								</div>
								<span className="text-[#B8F7CF] text-base font-bold mb-3 ml-[91px]" >
									{"Destiny"}
								</span>
								<div className="flex items-center mb-5 gap-2">
									<div className="flex items-center w-[103px] gap-1">
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/79c03213-6bf3-4916-a1da-33bac9ff49be"} 
											className="w-3 h-3 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ff76f3b0-28ed-4937-add0-ab3dd7b49bcc"} 
											className="w-3 h-3 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3a564f7a-0cbf-4e87-a9c5-05d0d3223aa5"} 
											className="w-3 h-3 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e8414363-9c0d-423d-9d1d-461fd1f3764d"} 
											className="w-3 h-3 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/238c221b-9e2a-492c-af3d-464b5a974112"} 
											className="w-3 h-3 object-fill"
										/>
										<div className="flex flex-col items-start w-[19px]">
											<span className="text-[#05DF72] text-sm font-bold" >
												{"4.5"}
											</span>
										</div>
									</div>
									<div className="flex flex-col w-7">
										<span className="text-[#7AF1A7] text-xs" >
											{"(892)"}
										</span>
									</div>
								</div>
								<div className="flex items-center gap-2">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/41675cee-b0d0-44ef-bcb4-5cc07067e3f4"} 
										className="w-3 h-3 object-fill"
									/>
									<div className="flex flex-col items-start w-[26px]">
										<span className="text-[#7AF1A7] text-xs" >
											{"2023"}
										</span>
									</div>
								</div>
							</div>
							<div className="flex items-center mb-[43px] ml-[108px] gap-[9px]">
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
							<button className="flex items-center self-stretch text-left py-[11px] px-[23px] mb-5 mx-[21px] gap-4 rounded-lg border border-solid border-[#05DF72]" 
								style={{
									background: "linear-gradient(180deg, #00A63D, #7CCE00)"
								}}
								onClick={() => navigate("/producto/3")}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b34b38ed-6aad-4ee8-a2bb-82d210b59f02"} 
									className="w-4 h-4 rounded-lg object-fill"
								/>
								<span className="text-black text-sm font-bold" >
									{"🔥 AGREGAR AL CARRITO 🔥"}
								</span>
							</button>
						</div>
						<div className="flex flex-col items-start bg-[#000000E3] w-[325px] py-[17px] mt-2 rounded-[14px] border border-solid border-[#00C8504D]">
							<button className="flex flex-col items-start bg-[#00000099] text-left p-3.5 ml-[258px] mr-[23px] rounded-[26843500px] border border-solid border-[#00C8504D]"
								onClick={() => navigate("/producto/4")}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4faab3fb-1a39-4f83-8983-58c710d82445"} 
									className="w-4 h-4 rounded-[26843500px] object-fill"
								/>
							</button>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c0f27bde-a145-46c0-b19d-a208cdde8e29"} 
								className="w-[236px] h-[354px] mb-2 ml-[30px] rounded-[14px] object-fill"
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
										{"Descenders"}
									</span>
								</div>
								<div className="flex items-center mb-5 gap-[9px]">
									<div className="flex items-center w-[103px]">
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dcfde572-eefd-4cec-9dd4-9f50151a59b5"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/58440e36-f942-49a8-b8e2-131bfe4e6c8d"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/befb5350-ef4e-4bf3-ab25-9c34e8c5cd98"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bd3b0a15-ac81-4138-9621-3f63264f46ce"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6cd8c0b8-89fb-405e-9bc8-a17d672860db"} 
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
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/19408a1e-80c2-4746-a9b8-270852e0354e"} 
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
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c434a9aa-a250-4453-8135-e3dcd4062d83"} 
									className="w-4 h-4 ml-[23px] mr-4 rounded-lg object-fill"
								/>
								<span className="text-black text-sm font-bold" >
									{"AGREGAR AL CARRITO"}
								</span>
							</div>
						</div>
						<div className="flex flex-col items-start bg-[#000000E3] w-[348px] mt-[17px] rounded-[14px] border border-solid border-[#00C8504D]">
							<div className="flex flex-col items-start self-stretch mt-2 mb-[42px] ml-[17px] mr-[41px] gap-1.5">
								<div className="flex justify-between items-start self-stretch py-0.5">
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
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7982fb34-95b9-4556-8f35-d8f474fd5856"} 
											className="w-4 h-4 rounded-[26843500px] object-fill"
										/>
									</div>
								</div>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d2b55c45-7141-4837-907f-d50ad58ccca8"} 
									className="w-[242px] h-[322px] ml-1 object-fill"
								/>
							</div>
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
									<span className="text-[#B8F7CF] text-base font-bold mb-3 ml-[77px]" >
										{"Rocket league"}
									</span>
									<div className="flex items-center mb-5 gap-[9px]">
										<div className="flex items-center w-[103px]">
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/92a23c10-0fd9-4b2a-8e1c-65d47522a07a"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/14cf759b-e8e2-4722-aba7-9d8fc128cd2e"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fb195d19-50dc-4dcd-bfa5-3c58f543444c"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/435d1e6b-2cb9-4937-ac4b-3fb17a776ad9"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/77d8fc6a-c881-471c-b231-6670fc056aec"} 
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
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0cef742e-ca0b-4e81-9149-bc9dc15bbcb3"} 
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
										{"s/29.99"}
									</span>
								</div>
							</div>
							<button className="flex items-center text-left py-2.5 px-[23px] mb-[39px] ml-7 gap-4 rounded-lg border border-solid border-[#05DF72]" 
								style={{
									background: "linear-gradient(180deg, #00A63D, #7CCE00)"
								}}
								onClick={() => navigate("/producto/5")}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9aad6092-3c4b-418e-a1ad-91cfc8c67d22"} 
									className="w-4 h-4 rounded-lg object-fill"
								/>
								<span className="text-black text-sm font-bold" >
									{"🔥 AGREGAR AL CARRITO 🔥"}
								</span>
							</button>
						</div>
					</div>
					<div className="flex items-start self-stretch mb-[11px] mr-[79px]">
						<div className="flex flex-col items-start bg-[#000000E3] w-[309px] mr-6 rounded-[14px] border border-solid border-[#00C8504D]">
							<div className="flex justify-between items-start self-stretch mt-[11px] mb-[35px] ml-1.5 mr-[33px]">
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
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/41c4ac41-5f82-4e56-b3c7-7847330d319c"} 
										className="w-4 h-4 rounded-[26843500px] object-fill"
									/>
								</div>
							</div>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ff3ccb30-14b0-4bd7-8d89-c4f5b278942c"} 
								className="w-[238px] h-[297px] mb-[37px] ml-[30px] rounded-[14px] object-fill"
							/>
							<div className="flex flex-col items-start self-stretch mb-[1px] mx-[17px]">
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
										{"Fc 25"}
									</span>
								</div>
								<div className="flex items-center mb-5 gap-[9px]">
									<div className="flex items-center w-[103px]">
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/68bade79-c3ae-4a7d-a8e0-b714d31c7075"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aa1f079c-76ae-4a26-aeca-3cb1e2f79120"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/00fe1dfc-7eaf-4702-a8be-b01f7233550f"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/751e6e37-22fb-4fe1-8138-33f91b397c36"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cb7cc6e0-165d-4f4b-af0c-7a3db9828b7f"} 
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
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b15140d3-ee47-4ff0-8d8d-a4f50c2e1c90"} 
										className="w-3 h-3 object-fill"
									/>
									<div className="flex flex-col items-start w-[26px]">
										<span className="text-[#7AF1A7] text-xs" >
											{"2023"}
										</span>
									</div>
								</div>
							</div>
							<span className="text-[#05DF72] text-lg font-bold mb-3.5 ml-[118px]" >
								{"s/34.99"}
							</span>
							<button className="flex items-center self-stretch text-left py-[11px] px-[23px] mt-[15px] mb-7 mx-4 gap-4 rounded-lg border border-solid border-[#05DF72]" 
								style={{
									background: "linear-gradient(180deg, #00A63D, #7CCE00)"
								}}
								onClick={() => navigate("/producto/6")}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8b898c21-3c9f-496f-b47c-5c2a950ad442"} 
									className="w-4 h-4 rounded-lg object-fill"
								/>
								<span className="text-black text-sm font-bold" >
									{"🔥 AGREGAR AL CARRITO 🔥"}
								</span>
							</button>
						</div>
						<div className="flex flex-col items-start bg-[#000000E3] w-[309px] mr-6 rounded-[14px] border border-solid border-[#00C8504D]">
							<div className="flex justify-between items-start self-stretch mt-2.5 mx-[9px]">
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
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d5ad0c24-5ef8-480d-98b4-066f11768d2a"} 
										className="w-4 h-4 rounded-[26843500px] object-fill"
									/>
								</div>
							</div>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c8d82f3a-78f7-4b9b-840b-f1fc02499772"} 
								className="w-[228px] h-[338px] mb-8 ml-[42px] object-fill"
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
									{"NBA 2k25"}
								</span>
							</div>
							<div className="flex items-center mb-5 ml-[17px] gap-[9px]">
								<div className="flex items-center w-[103px]">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8fa4c01d-b560-4f78-9246-dfb3a969e373"} 
										className="w-3 h-3 mr-1 object-fill"
									/>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f6360cf8-3bc5-42e4-83f0-1c7c9a046cc6"} 
										className="w-3 h-3 mr-1 object-fill"
									/>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7097d0aa-c8da-4439-a671-25dc29f6b3a0"} 
										className="w-3 h-3 mr-1 object-fill"
									/>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6139de11-c2e5-4e59-9b72-2becd7ac083c"} 
										className="w-3 h-3 mr-1 object-fill"
									/>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f72b9ca9-042a-4180-91d8-74f00cdd7362"} 
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
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8f72d3ab-e3b2-4699-b5d2-b1f1b20f07ba"} 
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
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9b2e0ead-a34a-4938-826a-189b5fe41b52"} 
									className="w-4 h-4 rounded-lg object-fill"
								/>
								<span className="text-black text-sm font-bold" >
									{"🔥 AGREGAR AL CARRITO 🔥"}
								</span>
							</button>
						</div>
						<div className="flex flex-col items-start bg-[#000000E3] w-[309px] mr-[49px] rounded-[14px] border border-solid border-[#00C8504D]">
							<div className="flex flex-col items-center self-stretch mt-2.5 mb-8 mx-2.5">
								<div className="flex justify-between items-start self-stretch">
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
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/df4d8b4e-d9a9-47ef-b001-e199692fbc29"} 
											className="w-4 h-4 rounded-[26843500px] object-fill"
										/>
									</div>
								</div>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a5cf1deb-29f2-4742-bb1a-29c3693a0214"} 
									className="w-[270px] h-[338px] object-fill"
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
										{"Madden 25"}
									</span>
								</div>
								<div className="flex items-center mb-5 gap-[9px]">
									<div className="flex items-center w-[103px]">
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/56aef2d4-805d-4e4d-8107-006f26e90a4c"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7bc1a366-e3a2-4f10-9a41-11735eedd0bf"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/68cf38e5-0ba8-45a0-b62a-a2f06b8bee28"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/95796cff-8325-4e59-bcf1-d2c0bf3f76e9"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b527c3c6-d7bf-4ad2-9785-d65d3960bf1e"} 
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
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/341c6020-7ace-4464-9044-ff06aee4c646"} 
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
								onClick={() => navigate("/producto/8")}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4910eb3c-5067-4efa-83ef-42bbdb6f5a6f"} 
									className="w-4 h-4 rounded-lg object-fill"
								/>
								<span className="text-black text-sm font-bold" >
									{"🔥 AGREGAR AL CARRITO 🔥"}
								</span>
							</button>
						</div>
						<div className="flex flex-col items-start bg-[#000000E3] w-[309px] rounded-[14px] border border-solid border-[#00C8504D]">
							<div className="flex justify-between items-start self-stretch mt-[9px] mb-[21px] mx-[9px]">
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
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5b6c8288-0d3f-404c-95c9-fd13d957e507"} 
										className="w-4 h-4 rounded-[26843500px] object-fill"
									/>
								</div>
							</div>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/67c3a1ef-4d32-406a-ba6d-45df6f05048f"} 
								className="w-[258px] h-[318px] mb-8 ml-[13px] object-fill"
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
									{"The Show 22"}
								</span>
							</div>
							<div className="flex items-center mb-5 ml-[17px] gap-[9px]">
								<div className="flex items-center w-[103px]">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e7c3848b-0388-48f4-a887-9eda1852c5fc"} 
										className="w-3 h-3 mr-1 object-fill"
									/>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7877623e-8af7-4726-84a9-d37723f29ef3"} 
										className="w-3 h-3 mr-1 object-fill"
									/>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bc712d94-ce50-4f53-99a0-b64ffcb2dc77"} 
										className="w-3 h-3 mr-1 object-fill"
									/>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/702fcb20-8a62-4818-a6b0-7cf7ee6c8de8"} 
										className="w-3 h-3 mr-1 object-fill"
									/>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/233ae724-c3c2-4601-a3d9-b0b9dab3222b"} 
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
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/60e91e23-c2bc-4a77-876c-cce18f4c69f3"} 
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
								onClick={() => navigate("/producto/9")}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2070f9af-18a9-4218-b82d-dded5fa50d3d"} 
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

export default Deporte;
