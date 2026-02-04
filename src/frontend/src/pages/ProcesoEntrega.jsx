import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";

function ProcesoEntrega() {
  const navigate = useNavigate();


  return (
		<div className="min-h-screen bg-white">
		<Header />
		<main className="container mx-auto px-8 py-10">
			<div className="flex flex-col items-start w-[1151px] py-6">
				<div className="flex items-center mb-14 ml-[17px]">
					<button className="flex items-center bg-[#FFFFFF00] text-left w-[219px] py-1.5 px-3 mr-4 gap-4 rounded-lg border border-solid border-[#00C8504D]" 
						style={{
							boxShadow: "0px 0px 5px #00FF001A"
						}}
						onClick={()=>alert("Pressed!")}>
						<img
							src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2f1e79f7-ec0c-4383-9c53-0ec68ead714a"} 
							className="w-4 h-4 rounded-lg object-fill"
						/>
						<span className="text-[#05DF72] text-sm" >
							{"💀 ABORTAR MISIÓN 💀"}
						</span>
					</button>
					<div className="w-[516px] mr-[35px]">
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
					<div className="flex flex-col items-start bg-[#00C95033] w-[110px] py-0.5 px-[13px] rounded-lg border border-solid border-[#05DF72]" 
						style={{
							boxShadow: "0px 0px 5px #00FF001A"
						}}>
						<span className="text-[#BAF351] text-xs font-bold" >
							{"⚡ PASO 2/4 ⚡"}
						</span>
					</div>
				</div>
				<div className="flex items-start relative mb-2 ml-[17px]">
					<div className="flex flex-col items-start bg-[#00C850] w-10 p-2.5 ml-[42px] mr-[313px] rounded-[26843500px] border border-solid border-[#05DF72]" 
						style={{
							boxShadow: "0px 0px 30px #00FF001A"
						}}>
						<img
							src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ce2141cb-e8ec-41a7-938e-cf5f5884c791"} 
							className="w-5 h-5 rounded-[26843500px] object-fill"
						/>
					</div>
					<div className="flex flex-col items-start bg-[#00C850] w-10 p-2.5 mr-[271px] rounded-[26843500px] border border-solid border-[#05DF72]" 
						style={{
							boxShadow: "0px 0px 30px #00FF001A"
						}}>
						<img
							src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5ce45c37-d552-4785-a8ee-6530d1239c5b"} 
							className="w-5 h-5 rounded-[26843500px] object-fill"
						/>
					</div>
					<div className="flex flex-col items-start bg-black w-10 p-2.5 mr-[151px] rounded-[26843500px] border border-solid border-[#495565]">
						<img
							src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/23714bee-3873-4ebc-94f2-3e86d5aaf894"} 
							className="w-5 h-5 rounded-[26843500px] object-fill"
						/>
					</div>
					<div className="flex-1 items-start bg-[#1E2939] absolute bottom-[18px] right-0 left-0">
						<div className="w-[368px] h-0.5" 
							style={{
								background: "linear-gradient(180deg, #00A63D, #7CCE00)"
							}}>
						</div>
					</div>
				</div>
				<div className="flex items-start mb-[41px] ml-[17px]">
					<span className="text-[#05DF72] text-xs font-bold mr-[265px]" >
						{"DATOS FACTURACIÓN"}
					</span>
					<div className="flex flex-col items-start w-[54px] pb-[1px] mr-[268px]">
						<span className="text-[#05DF72] text-xs font-bold" >
							{"ENTREGA"}
						</span>
					</div>
					<div className="flex flex-col items-start w-8 pb-[1px]">
						<span className="text-[#697282] text-xs font-bold" >
							{"PAGO"}
						</span>
					</div>
				</div>
				<div className="flex flex-col items-start bg-[#000000CC] p-[25px] ml-[107px] gap-4 rounded-[14px] border border-solid border-[#00C8504D]" 
					style={{
						boxShadow: "0px 0px 30px #00FF001A"
					}}>
					<div className="flex flex-col items-start gap-[25px]">
						<div className="flex items-center">
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3abebe8a-4d05-4793-9541-8496e58940d5"} 
								className="w-6 h-6 mr-[11px] object-fill"
							/>
							<div className="flex flex-col items-start w-[304px] mr-[334px]">
								<span className="text-[#05DF72] text-2xl font-bold" >
									{"🚚 ENTREGA OVERKILL 🚚"}
								</span>
							</div>
						</div>
						<div className="flex flex-col items-start gap-4">
							<div className="flex items-center bg-[#00A63E1A] p-[18px] rounded-[14px] border border-solid border-[#05DF72]" 
								style={{
									boxShadow: "0px 0px 30px #00FF001A"
								}}>
								<div className="flex items-center w-[217px] mr-[315px] gap-[11px]">
									<div className="flex flex-col items-center w-5">
										<div className="self-stretch bg-[#FFFFFF00] h-5" 
											style={{
												boxShadow: "0px 0px 30px #00FF001A"
											}}>
										</div>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e1637bdc-4b10-428d-b494-3ca70fa4c09b"} 
											className="w-5 h-5 object-fill"
										/>
									</div>
									<div className="w-[185px]">
										<div className="flex flex-col items-center self-stretch">
											<span className="text-[#05DF72] text-base font-bold" >
												{"🚚 ENTREGA ESTÁNDAR"}
											</span>
										</div>
										<div className="flex flex-col items-start self-stretch">
											<span className="text-[#B8F7CF] text-sm" >
												{"5-7 días laborales"}
											</span>
										</div>
									</div>
								</div>
								<div className="flex flex-col items-center w-[106px]">
									<span className="text-[#05DF72] text-base font-bold" >
										{"💚 GRATIS 💚"}
									</span>
									<span className="text-[#9AE600] text-xs font-bold" >
										{"🎯 Compra +€50 🎯"}
									</span>
								</div>
							</div>
							<div className="flex items-center bg-[#00000099] py-[21px] px-[18px] rounded-[14px] border border-solid border-[#00D6666E]">
								<div className="flex items-center w-[209px] mr-[388px] gap-[11px]">
									<div className="flex flex-col items-center w-5">
										<div className="self-stretch bg-[#FFFFFF00] h-5" 
											style={{
												boxShadow: "0px 0px 30px #00FF001A"
											}}>
										</div>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/627f99e8-f5e6-47bf-aa5a-9655e1c8951f"} 
											className="w-5 h-5 object-fill"
										/>
									</div>
									<div className="w-[177px]">
										<div className="flex flex-col items-center self-stretch">
											<span className="text-[#05DF72] text-base font-bold" >
												{"⚡ ENTREGA EXTREMA"}
											</span>
										</div>
										<div className="flex flex-col items-start self-stretch">
											<span className="text-[#B8F7CF] text-sm" >
												{"2-3 días laborales"}
											</span>
										</div>
									</div>
								</div>
								<div className="flex flex-col items-start w-[41px]">
									<span className="text-[#05DF72] text-base font-bold" >
										{"s/9.99"}
									</span>
								</div>
							</div>
							<div className="flex items-center bg-[#00000099] py-[21px] px-[18px] rounded-[14px] border border-solid border-[#00C8504D]">
								<div className="flex items-center w-[179px] mr-[409px] gap-[11px]">
									<div className="flex flex-col items-center w-5">
										<div className="self-stretch bg-[#FFFFFF00] h-5" 
											style={{
												boxShadow: "0px 0px 30px #00FF001A"
											}}>
										</div>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e0ef9e6e-57db-463b-8e2c-16122377f8b5"} 
											className="w-5 h-5 object-fill"
										/>
									</div>
									<div className="w-[147px]">
										<div className="flex flex-col items-center self-stretch">
											<span className="text-[#05DF72] text-base font-bold" >
												{"💀 ENTREGA LETAL"}
											</span>
										</div>
										<div className="flex flex-col items-start self-stretch">
											<span className="text-[#B8F7CF] text-sm" >
												{"24 horas"}
											</span>
										</div>
									</div>
								</div>
								<div className="flex flex-col items-start w-[50px]">
									<span className="text-[#05DF72] text-base font-bold" >
										{"s/19.99"}
									</span>
								</div>
							</div>
						</div>
						<div className="flex flex-col items-start pt-[25px] pb-[1px] pl-[21px] border-t-[1.600000023841858px] border-solid border-t-[#00C8504D]">
							<span className="text-[#7AF1A7] text-sm font-bold" >
								{"📦 MISMA DIRECCIÓN QUE FACTURACIÓN 📦"}
							</span>
						</div>
					</div>
					<div className="flex items-start pt-[26px] border-t-[1.600000023841858px] border-solid border-t-[#00C8504D]">
						<button className="flex items-center bg-black text-left w-[175px] py-[7px] px-3.5 mr-[322px] gap-4 rounded-lg border border-solid border-[#00C85080]" 
							style={{
								boxShadow: "0px 0px 5px #00FF001A"
							}}
							onClick={()=>alert("Pressed!")}>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fb11a5c3-af29-4004-b13f-7cff9848d68d"} 
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
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fb1d9681-4eba-47d3-bb73-3f32e2f748ff"} 
								className="w-4 h-4 rounded-lg object-fill"
							/>
						</button>
					</div>
				</div>
			</div>
		</main>
		</div>
	)
}

export default ProcesoEntrega;
