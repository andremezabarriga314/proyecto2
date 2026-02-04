import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";

function ListaDeseos() {
  const navigate = useNavigate();


  return (
		<div className="min-h-screen bg-white">
		<Header />
		<main className="container mx-auto px-8 py-10">
			<div className="w-[1151px]">
				<div className="self-stretch bg-black">
					<div className="flex items-center self-stretch py-[13px] px-[79px] mb-8 border-b-[1.600000023841858px] border-solid border-b-[#00C8504D]" 
						style={{
							background: "linear-gradient(180deg, #000000, #101727, #000000)"
						}}>
						<div className="flex flex-col items-start w-[41px] py-2 px-[9px] mr-[13px] rounded-[10px] border border-solid border-[#05DF72]" 
							style={{
								background: "linear-gradient(180deg, #00A63D, #7CCE00)"
							}}>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/86fbdd02-ae4b-436c-8a6a-007e88b5305f"} 
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
						<div className="flex items-start w-[265px]">
							<div className="flex flex-col items-start w-[183px] relative mr-2">
								<div className="flex flex-col items-start self-stretch bg-[#000000CC] py-[9px] pl-3 rounded-lg border border-solid border-[#00C8504D]" 
									style={{
										boxShadow: "0px 0px 5px #00FF001A"
									}}>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e9f7386e-f298-4049-8c3b-00ca0723f84b"} 
										className="w-4 h-4 object-fill"
									/>
								</div>
								<span className="text-[#05DF72] text-sm absolute bottom-[9px] right-0" >
									{"🎯 BUSCAR ARSENAL LETAL..."}
								</span>
							</div>
							<div className="flex flex-col items-start w-[41px] py-[9px] px-[13px] mr-[33px] rounded-lg border border-solid border-[#05DF72]" 
								style={{
									background: "linear-gradient(180deg, #00A63D, #7CCE00)"
								}}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fbc66aeb-d6d4-4f99-819e-769da3171d4a"} 
									className="w-4 h-4 rounded-lg object-fill"
								/>
							</div>
						</div>
						<div className="flex flex-col items-start bg-[#FFFFFF00] w-[37px] py-[7px] px-[11px] mr-[9px] rounded-lg border border-solid border-[#00C8504D]" 
							style={{
								boxShadow: "0px 0px 5px #00FF001A"
							}}>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b211218b-d4bf-4f7e-be48-d981a488b2f8"} 
								className="w-4 h-4 rounded-lg object-fill"
							/>
						</div>
						<img
							src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0ae11f51-dfe8-4909-9a36-1b33aec64265"} 
							className="w-[37px] h-8 mr-2 object-fill"
						/>
						<img
							src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/76d26083-d24f-4172-9f38-8836634f8ad7"} 
							className="w-[37px] h-8 mr-2 object-fill"
						/>
						<div className="flex flex-col items-start bg-[#FFFFFF00] w-[37px] py-[7px] px-[11px] mr-2 rounded-lg border border-solid border-[#00C8504D]" 
							style={{
								boxShadow: "0px 0px 5px #00FF001A"
							}}>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/92ed5e42-5a83-4628-8079-fe52750072e2"} 
								className="w-4 h-4 rounded-lg object-fill"
							/>
						</div>
						<div className="flex flex-col items-start bg-black w-[116px] py-[5px] px-[18px] mr-[9px] rounded-lg border border-solid border-[#00C85080]" 
							style={{
								boxShadow: "0px 0px 5px #00FF001A"
							}}>
							<span className="text-[#05DF72] text-sm font-bold" >
								{"⚡ LOGIN ⚡"}
							</span>
						</div>
						<div className="flex flex-col items-start w-[135px] py-[5px] px-[13px] rounded-lg border border-solid border-[#05DF72]" 
							style={{
								background: "linear-gradient(180deg, #00A63D, #7CCE00)"
							}}>
							<span className="text-black text-sm font-bold" >
								{"💀 REGISTER 💀"}
							</span>
						</div>
					</div>
					<div className="flex justify-between items-start self-stretch mb-3 mx-[79px]">
						<div className="flex flex-col items-start w-[434px]">
							<span className="text-[#05DF72] text-3xl font-bold" >
								{"💚 LISTA LETAL DE DESEOS 💚"}
							</span>
						</div>
						<div className="flex flex-col items-start bg-black w-[179px] py-[7px] px-5 rounded-lg border border-solid border-[#00C85080]" 
							style={{
								boxShadow: "0px 0px 5px #00FF001A"
							}}>
							<span className="text-[#05DF72] text-sm font-bold" >
								{"⚡ VOLVER AL HQ ⚡"}
							</span>
						</div>
					</div>
					<div className="flex items-start self-stretch mb-[15px] ml-14 mr-[41px]">
						<div className="flex flex-col items-start bg-[#000000E3] w-[348px] mt-[17px] mr-[17px] rounded-[14px] border border-solid border-[#00C8504D]">
							<div className="flex items-start bg-[url('https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/395b176f-0bcf-4e44-bf38-6574ca1fa57b')] bg-cover bg-center pt-[7px] pb-[330px] px-[7px] mt-[1px] mb-10 ml-[1px] mr-10">
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
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/63519581-5331-4c56-ac01-55666d55567a"} 
										className="w-4 h-4 rounded-[26843500px] object-fill"
									/>
								</div>
							</div>
							<div className="flex items-center mb-2 ml-[17px] gap-[9px]">
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
							<span className="text-[#B8F7CF] text-base font-bold mb-2 ml-[17px]" >
								{"Marvel's Spider-Man 2"}
							</span>
							<div className="flex items-center mb-2 ml-[17px]">
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/828b0d65-35ab-4ae1-a37c-12b97fe25991"} 
									className="w-3 h-3 mr-1 object-fill"
								/>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9119af19-1916-4c00-8658-095f8a067000"} 
									className="w-3 h-3 mr-1 object-fill"
								/>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f8fba476-eea0-411c-bc50-6cb1791219eb"} 
									className="w-3 h-3 mr-1 object-fill"
								/>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e853a725-857e-4390-85bb-18953ee5a1c5"} 
									className="w-3 h-3 mr-1 object-fill"
								/>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cf3dd37d-49fd-4063-944c-09aa650b9b66"} 
									className="w-3 h-3 mr-[3px] object-fill"
								/>
								<div className="flex flex-col items-start w-[19px] mr-[13px]">
									<span className="text-[#05DF72] text-sm font-bold" >
										{"4.9"}
									</span>
								</div>
								<div className="flex flex-col items-start w-8 mr-[5px]">
									<span className="text-[#7AF1A7] text-xs w-4" >
										{"(2156)"}
									</span>
								</div>
								<div className="flex flex-col items-start w-[125px] py-[13px] px-1 rounded-lg">
									<span className="text-[#05DF72] text-xs font-bold" >
										{"⚡ VER RESEÑAS ⚡"}
									</span>
								</div>
							</div>
							<div className="flex items-start mb-[21px] ml-[17px]">
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0785d57a-347f-4882-89c7-96de57151169"} 
									className="w-3 h-3 mt-0.5 mr-[7px] object-fill"
								/>
								<div className="flex flex-col items-start w-[26px] mr-[91px]">
									<span className="text-[#7AF1A7] text-xs" >
										{"2023"}
									</span>
								</div>
								<div className="flex flex-col items-start w-[53px] pb-[1px] mt-3.5">
									<span className="text-[#05DF72] text-lg font-bold" >
										{"$59.99"}
									</span>
								</div>
							</div>
							<button className="flex items-center text-left py-2.5 px-[23px] mb-[39px] ml-7 gap-4 rounded-lg border border-solid border-[#05DF72]" 
								style={{
									background: "linear-gradient(180deg, #00A63D, #7CCE00)"
								}}
								onClick={()=>alert("Pressed!")}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6d16b378-3fc0-4d34-b5b5-041ceb100a55"} 
									className="w-4 h-4 rounded-lg object-fill"
								/>
								<span className="text-black text-sm font-bold" >
									{"🔥 AGREGAR AL CARRITO 🔥"}
								</span>
							</button>
						</div>
						<div className="flex flex-col items-start w-[309px] relative mt-[7px] mr-[55px]">
							<div className="flex flex-col items-start self-stretch bg-[#000000E3] rounded-[14px] border border-solid border-[#00C8504D]">
								<button className="flex flex-col items-start bg-[#FB2C3633] text-left py-0.5 px-[13px] mt-2.5 mb-[27px] ml-[26px] rounded-lg border border-solid border-[#FF6366]" 
									style={{
										boxShadow: "0px 0px 30px #00FF001A"
									}}
									onClick={()=>alert("Pressed!")}>
									<span className="text-[#FFA1A2] text-xs font-bold" >
										{"💀 -33% 💀"}
									</span>
								</button>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/76c7a19e-7765-4524-9607-c0e94c1f0d24"} 
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
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b014286b-8598-4c95-aa6c-07d92b848081"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/865663c6-2a47-4187-8838-03fbe03fc905"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b69699c8-c3bd-4f1b-950a-726a94753353"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/406bddae-d265-407f-b349-12edabcc043c"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/75fce866-af95-4e52-b100-ab18c81d1f52"} 
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
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/99353dc0-569d-41d5-b233-550748e85370"} 
											className="w-3 h-3 object-fill"
										/>
										<div className="flex flex-col items-start w-[26px]">
											<span className="text-[#7AF1A7] text-xs" >
												{"2024"}
											</span>
										</div>
									</div>
								</div>
								<div className="flex flex-col items-end self-stretch mb-7">
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
								<button className="flex items-center self-stretch text-left py-2.5 px-[23px] mb-[23px] mx-[18px] gap-4 rounded-lg border border-solid border-[#05DF72]" 
									style={{
										background: "linear-gradient(180deg, #00A63D, #7CCE00)"
									}}
									onClick={()=>alert("Pressed!")}>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/950bea47-92e2-4930-82d9-4bd1ebf739ea"} 
										className="w-4 h-4 rounded-lg object-fill"
									/>
									<span className="text-black text-sm font-bold" >
										{"🔥 AGREGAR AL CARRITO 🔥"}
									</span>
								</button>
							</div>
							<button className="flex flex-col items-start bg-[#00000099] text-left absolute top-2.5 right-[-7px] p-3.5 rounded-[26843500px] border border-solid border-[#00C8504D]"
								onClick={()=>alert("Pressed!")}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2bd4082c-0356-4d43-888e-8900faa23e0c"} 
									className="w-4 h-4 rounded-[26843500px] object-fill"
								/>
							</button>
						</div>
						<div className="flex flex-col items-start bg-[#000000E3] w-[325px] py-5 rounded-[14px] border border-solid border-[#00C8504D]">
							<button className="flex flex-col items-start bg-[#00000099] text-left p-3.5 ml-[248px] rounded-[26843500px] border border-solid border-[#00C8504D]"
								onClick={()=>alert("Pressed!")}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/39231b67-3a14-40d5-b7e5-7bc3309fc80c"} 
									className="w-4 h-4 rounded-[26843500px] object-fill"
								/>
							</button>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/85a75c7b-dfbc-4447-9a62-c9a5255c116c"} 
								className="w-[230px] h-[328px] mb-7 ml-10 rounded-[14px] object-fill"
							/>
							<div className="flex items-center mb-2 ml-[17px] gap-[9px]">
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
							<div className="flex flex-col items-start mb-5 ml-[17px]">
								<span className="text-[#B8F7CF] text-base font-bold" >
									{"Marvel's Spider-Man 2"}
								</span>
							</div>
							<div className="flex items-center self-stretch mb-5 ml-[17px] mr-[38px] gap-[9px]">
								<div className="flex items-center w-36 gap-[9px]">
									<div className="flex items-center w-[103px]">
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/00279cc4-f3fb-49b4-b594-45a8c5faf36d"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/451e2174-a077-4ef1-be86-d03e1cc70ab1"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0b256cef-6cc2-489d-95dc-183708e1d6a2"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f10f7c8e-3886-4491-a8a2-80cf176c9b0c"} 
											className="w-3 h-3 mr-1 object-fill"
										/>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e366d960-3a8b-4369-a841-eb3e7fc95ac0"} 
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
								<span className="text-[#05DF72] text-xs font-bold" >
									{"⚡ VER RESEÑAS ⚡"}
								</span>
							</div>
							<div className="flex items-center mb-2 ml-[17px] gap-[7px]">
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6042b8b0-5c95-41b9-a532-64a1fa23c4ba"} 
									className="w-3 h-3 object-fill"
								/>
								<div className="flex flex-col items-start w-[26px]">
									<span className="text-[#7AF1A7] text-xs" >
										{"2023"}
									</span>
								</div>
							</div>
							<div className="flex flex-col items-start pb-[1px] mb-[35px] ml-[135px]">
								<span className="text-[#05DF72] text-lg font-bold" >
									{"59.99"}
								</span>
							</div>
							<div className="flex items-center self-stretch py-2.5 mx-[27px] rounded-lg border border-solid border-[#05DF72]" 
								style={{
									background: "linear-gradient(180deg, #00A63D, #7CCE00)"
								}}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f4a0ffc4-2a33-4b31-b754-06ea804ddb63"} 
									className="w-4 h-4 ml-[23px] mr-4 rounded-lg object-fill"
								/>
								<span className="text-black text-sm font-bold" >
									{"AGREGAR AL CARRITO"}
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

export default ListaDeseos;
