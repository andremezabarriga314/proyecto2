import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";

function EspecificacionProducto() {
  const navigate = useNavigate();


  return (
		<div className="min-h-screen bg-white">
		<Header />
		<main className="container mx-auto px-8 py-10">
			<div className="w-[1151px] pb-[1px]">
				<div className="self-stretch bg-black">
					<div className="flex items-center self-stretch py-3 px-[79px] mb-8 border-b-[1.600000023841858px] border-solid border-b-[#00C8504D]" 
						style={{
							background: "linear-gradient(180deg, #000000, #101727, #000000)"
						}}>
						<div className="flex flex-col items-start w-[41px] py-2 px-[9px] mr-[13px] rounded-[10px] border border-solid border-[#05DF72]" 
							style={{
								background: "linear-gradient(180deg, #00A63D, #7CCE00)"
							}}>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/407c3972-7205-4759-a0dd-d22a1fd15b78"} 
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
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/65eafa81-6bb0-41a2-8f58-545989758600"} 
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
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9c800550-9494-4eee-a66a-861bc2f15e6e"} 
									className="w-4 h-4 rounded-lg object-fill"
								/>
							</div>
						</div>
						<div className="flex flex-col items-start bg-[#FFFFFF00] w-11 p-3.5 mr-2 rounded-lg border border-solid border-[#00C8504D]" 
							style={{
								boxShadow: "0px 0px 5px #00FF001A"
							}}>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ea29ed29-7399-41bf-afeb-fdc07173b02e"} 
								className="w-4 h-4 rounded-lg object-fill"
							/>
						</div>
						<img
							src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/278b1f4d-d7ad-4084-bd22-b34830f73c80"} 
							className="w-11 h-11 mr-[7px] object-fill"
						/>
						<div className="flex flex-col items-start bg-[#FFFFFF00] w-11 p-3.5 mr-2 rounded-lg border border-solid border-[#00C8504D]" 
							style={{
								boxShadow: "0px 0px 5px #00FF001A"
							}}>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8f52a309-c616-4bd7-af53-8e9fa34feef0"} 
								className="w-4 h-4 rounded-lg object-fill"
							/>
						</div>
						<div className="flex flex-col items-start bg-[#FFFFFF00] w-11 p-3.5 mr-2 rounded-lg border border-solid border-[#00C8504D]" 
							style={{
								boxShadow: "0px 0px 5px #00FF001A"
							}}>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/60ff8881-d6d4-4763-bfba-f83a6385e45a"} 
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
					<div className="flex flex-col items-start self-stretch mb-8 mx-[87px]">
						<button className="flex items-center bg-black text-left py-[11px] px-[13px] mb-6 gap-4 rounded-lg border border-solid border-[#AC46FF4D]"
							onClick={()=>alert("Pressed!")}>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/92cb19b6-a0c0-41d9-b6fd-704d8bcf2d1d"} 
								className="w-4 h-4 rounded-lg object-fill"
							/>
							<span className="text-[#D9B1FF] text-sm" >
								{"Volver"}
							</span>
						</button>
						<div className="flex items-start self-stretch mb-[25px] gap-8">
							<div className="flex flex-col w-[472px] relative">
								<div className="self-stretch bg-[#1D293D80] h-[409px] mb-32 rounded-[14px] border border-solid border-[#AC46FF33]">
								</div>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f9390dd9-a16d-4b43-8540-f651b8bcad12"} 
									className="self-stretch h-[408px] absolute top-[1px] right-[1px] left-[1px] rounded-[14px] object-fill"
								/>
							</div>
							<div className="w-[472px]">
								<div className="flex flex-col items-start self-stretch mb-6">
									<div className="flex items-start mb-[9px] gap-2">
										<div className="flex flex-col items-start bg-[#9810FA33] w-8 py-0.5 px-2 rounded-lg border border-solid border-[#AC46FF4D]">
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
										<span className="text-white text-3xl font-bold" >
											{"Xbox Wireles Controller"}
										</span>
									</div>
									<div className="flex items-center mb-4 gap-4">
										<div className="flex items-center w-[193px]">
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/200b425a-3b2e-449d-a841-1ec0f354d316"} 
												className="w-20 h-4 mr-[7px] object-fill"
											/>
											<div className="flex flex-col items-start w-[21px] mr-[9px]">
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
										<div className="flex items-center w-[110px] p-2.5 gap-2.5 rounded-lg">
											<img
												src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d5aa36ae-bfff-4da8-9bcc-b50a536efeea"} 
												className="w-4 h-4 rounded-lg object-fill"
											/>
											<span className="text-[#C17AFF] text-sm" >
												{"Compartir"}
											</span>
										</div>
									</div>
									<div className="flex flex-col items-start mb-6 ml-[1px]">
										<span className="text-white text-3xl font-bold" >
											{"s/69.99"}
										</span>
									</div>
									<div className="w-[61px] h-6 mb-6">
									</div>
									<div className="flex flex-col items-start self-stretch gap-4">
										<div className="flex items-center gap-[9px]">
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
													src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6404dc68-e2cb-4408-a209-cb64fec4c216"} 
													className="w-4 h-4 rounded-lg object-fill"
												/>
												<span className="text-black text-sm" >
													{"Agregar al Carrito"}
												</span>
											</button>
											<div className="flex flex-col items-start bg-black w-11 py-[13px] px-3.5 rounded-lg border border-solid border-[#AC46FF4D]">
												<img
													src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/471e77ff-ec6c-4c99-92d9-96e1a993af2f"} 
													className="w-4 h-4 rounded-lg object-fill"
												/>
											</div>
										</div>
									</div>
								</div>
								<div className="flex items-start self-stretch mb-[42px]">
									<div className="flex flex-col items-center bg-[#1D293D80] w-[146px] pt-[21px] pb-5 px-[1px] mr-[17px] rounded-[14px] border border-solid border-[#AC46FF33]">
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e9f65590-46c3-4928-a179-f325312cf19a"} 
											className="w-8 h-8 mb-[7px] object-fill"
										/>
										<div className="flex flex-col items-center self-stretch mb-1 mx-7">
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
									<div className="flex flex-col items-center bg-[#1D293D80] w-[146px] pt-[21px] pb-5 px-[1px] mr-4 rounded-[14px] border border-solid border-[#AC46FF33]">
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6444a219-6ebe-4211-b22b-fd3bdcdb7f37"} 
											className="w-8 h-8 mb-[7px] object-fill"
										/>
										<div className="flex flex-col items-center self-stretch mb-1 mx-[41px]">
											<span className="text-white text-base" >
												{"Garantía"}
											</span>
										</div>
										<div className="flex flex-col items-center self-stretch mx-[42px]">
											<span className="text-[#D9B1FF] text-sm" >
												{"12 meses"}
											</span>
										</div>
									</div>
									<div className="flex flex-col items-center bg-[#1D293D80] w-[146px] pt-[21px] pb-5 px-[1px] rounded-[14px] border border-solid border-[#AC46FF33]">
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cf0c8370-b3a7-4d0a-b942-3e5682eb1525"} 
											className="w-8 h-8 mb-[7px] object-fill"
										/>
										<div className="flex flex-col items-center self-stretch mb-1 mx-[33px]">
											<span className="text-white text-base" >
												{"Devolución"}
											</span>
										</div>
										<div className="flex flex-col items-center self-stretch mx-[31px]">
											<span className="text-[#D9B1FF] text-sm" >
												{"30 días gratis"}
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="flex flex-col items-start self-stretch gap-8">
							<div className="flex items-center bg-[#1D293D80] px-1 gap-[1px] rounded-[14px] border border-solid border-[#AC46FF33]">
								<div className="flex flex-col items-start w-[322px] py-2 px-[124px] rounded-[14px] border border-solid border-[#00000000]">
									<span className="text-[#00FF00] text-sm" >
										{"Descripción"}
									</span>
								</div>
								<div className="flex flex-col items-start bg-[#9810FA] w-[323px] py-[3px] px-[109px] rounded-[14px] border border-solid border-[#00000000]">
									<span className="text-[#00FF00] text-sm" >
										{"Especificaciones"}
									</span>
								</div>
							</div>
							<div className="self-stretch bg-[#1D293D80] px-[25px] rounded-[14px] border border-solid border-[#AC46FF33]">
								<div className="flex flex-col items-start self-stretch pb-[1px] mt-[25px] mb-[30px]">
									<span className="text-white text-base" >
										{"Especificaciones Técnicas"}
									</span>
								</div>
								<div className="flex flex-col items-start self-stretch pb-[1px] mb-[157px]">
									<span className="text-white text-base w-[689px]" >
										{"Nuevo: Un artículo nuevo, sin usar, sin abrir y sin daños en su empaque original al por menor.\nMarca: XBOX\nModelo: Mando inalámbrico – Verde Electric Volt\nFuente de alimentación:\nUSB; – Pilas AA x 2;\nBatería recargable\nTipo: Mando inalámbrico Xbox\nPlataformas compatibles:\nXbox Series X – S; – Xbox One; – PC; – Android\nColor: Verde Electric"}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
		</div>
	)
}

export default EspecificacionProducto;
