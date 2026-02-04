import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";

function ProcesoDePago() {
  const navigate = useNavigate();

  const [input1, onChangeInput1] = useState('');
  const [input2, onChangeInput2] = useState('');
  const [input3, onChangeInput3] = useState('');
  const [input4, onChangeInput4] = useState('');
  return (
		<div className="min-h-screen bg-white">
		<Header />
		<main className="container mx-auto px-8 py-10">
			<div className="bg-white w-[1012px] pb-[1px]">
				<div className="flex flex-col items-start self-stretch bg-black py-8">
					<div className="flex items-center mb-2 ml-8 gap-3">
						<div className="bg-[#00FF41] w-3 h-3 rounded-[26843500px]">
						</div>
						<div className="flex flex-col items-start w-[436px] pb-[1px]">
							<span className="text-[#00FF41] text-2xl" >
								{"🎯 PROCESO DE PAGO OVERKILL 🎯"}
							</span>
						</div>
					</div>
					<span className="text-[#00FF41] text-sm mb-[33px] ml-8" >
						{"SISTEMA DE PAGO BLINDADO • ENCRIPTACIÓN MILITAR"}
					</span>
					<div className="flex flex-col items-start mb-[49px] ml-8 gap-2">
						<div className="flex items-start relative">
							<div className="flex flex-col items-start bg-[#00FF41] w-12 p-3 ml-[39px] mr-[472px] rounded-[26843500px] border border-solid border-[#00FF41]" 
								style={{
									boxShadow: "0px 0px 10px #00FF41"
								}}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1bf0d71d-a2c0-44fd-85d6-14bf05b77320"} 
									className="w-6 h-6 rounded-[26843500px] object-fill"
								/>
							</div>
							<div className="flex flex-col items-start bg-[#00FF41] w-12 p-3 mr-[155px] rounded-[26843500px] border border-solid border-[#00FF41]" 
								style={{
									boxShadow: "0px 0px 10px #00FF41"
								}}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b331e53a-1315-477b-9dcb-737c486c96f0"} 
									className="w-6 h-6 rounded-[26843500px] object-fill"
								/>
							</div>
							<div className="flex-1 bg-[#00FF41] h-0.5 absolute bottom-[22px] right-0 left-0" 
								style={{
									boxShadow: "0px 0px 10px #00FF41"
								}}>
							</div>
						</div>
						<div className="flex items-start mr-[152px]">
							<div className="flex flex-col items-start w-[127px] pb-[1px] mr-[429px]">
								<span className="text-[#00FF41] text-xs" >
									{"DATOS FACTURACIÓN"}
								</span>
							</div>
							<div className="flex flex-col items-start w-[54px] pb-[1px]">
								<span className="text-[#00FF41] text-xs" >
									{"ENTREGA"}
								</span>
							</div>
						</div>
					</div>
					<div className="flex flex-col items-end self-stretch mb-8">
						<div className="flex flex-col items-start bg-black py-[33px] px-[25px] mr-[67px] rounded-[10px] border border-solid border-[#00FF41]" 
							style={{
								boxShadow: "0px 0px 30px #00FF4133"
							}}>
							<div className="flex items-start mb-8 gap-[11px]">
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f117ec28-4165-4332-99bd-8afa45bd6565"} 
									className="w-6 h-6 object-fill"
								/>
								<div className="flex flex-col items-start w-[201px]">
									<span className="text-[#00FF41] text-base" >
										{"💳 MÉTODO DE PAGO 💳"}
									</span>
								</div>
							</div>
							<div className="flex items-center mb-[7px] gap-2">
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a96483f5-32d4-4cb6-b18d-ccc545847d2e"} 
									className="w-4 h-4 object-fill"
								/>
								<span className="text-[#00FF41] text-sm" >
									{"NÚMERO DE TARJETA"}
								</span>
							</div>
							<input
								placeholder={"1234 5678 9012 3456"}
								value={input1}
								onChange={(event)=>onChangeInput1(event.target.value)}
								className="text-[#FFFEFE] bg-black text-base p-4 mb-6 rounded-[10px] border border-solid border-[#354152]"
							/>
							<div className="flex items-center mb-[7px] gap-2">
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a55c5a28-744a-4814-9d0f-107f76eebbf8"} 
									className="w-4 h-4 object-fill"
								/>
								<span className="text-[#00FF41] text-sm" >
									{"NOMBRE EN LA TARJETA"}
								</span>
							</div>
							<input
								placeholder={"NOMBRE APELLIDO"}
								value={input2}
								onChange={(event)=>onChangeInput2(event.target.value)}
								className="text-[#FFFEFE] bg-black text-base p-4 mb-6 rounded-[10px] border border-solid border-[#354152]"
							/>
							<div className="flex items-start mb-[41px] gap-[17px]">
								<div className="flex flex-col items-start w-[324px] gap-[7px]">
									<div className="flex items-center mr-[196px] gap-2">
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1481e6f6-161d-4e01-b3aa-12c14197447e"} 
											className="w-4 h-4 object-fill"
										/>
										<span className="text-[#00FF41] text-sm" >
											{"VENCIMIENTO"}
										</span>
									</div>
									<input
										placeholder={"MM/AA"}
										value={input3}
										onChange={(event)=>onChangeInput3(event.target.value)}
										className="self-stretch text-[#FFFEFE] bg-black text-base p-4 rounded-[10px] border border-solid border-[#354152]"
									/>
								</div>
								<div className="flex flex-col items-start w-[324px] gap-[7px]">
									<div className="flex items-center mr-[270px] gap-2">
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c8b75953-0629-46aa-9db0-3a0726780436"} 
											className="w-4 h-4 object-fill"
										/>
										<span className="text-[#00FF41] text-sm" >
											{"CVV"}
										</span>
									</div>
									<input
										placeholder={"123"}
										value={input4}
										onChange={(event)=>onChangeInput4(event.target.value)}
										className="self-stretch text-[#FFFEFE] bg-black text-base p-4 rounded-[10px] border border-solid border-[#354152]"
									/>
								</div>
							</div>
							<span className="text-[#00FF41] text-sm mb-[13px]" >
								{"MÉTODOS DE PAGO ACEPTADOS"}
							</span>
							<div className="flex items-start mb-6">
								<div className="flex flex-col items-start bg-black w-[52px] py-2 px-[13px] mr-[13px] rounded border border-solid border-[#354152]">
									<span className="text-[#99A1AE] text-xs" >
										{"VISA"}
									</span>
								</div>
								<div className="flex flex-col items-start bg-black w-[106px] py-2 px-[13px] mr-3 rounded border border-solid border-[#354152]">
									<span className="text-[#99A1AE] text-xs" >
										{"MASTERCARD"}
									</span>
								</div>
								<div className="flex flex-col items-start bg-black w-[59px] py-2 px-[13px] mr-[13px] rounded border border-solid border-[#354152]">
									<span className="text-[#99A1AE] text-xs" >
										{"AMEX"}
									</span>
								</div>
								<div className="flex flex-col items-start bg-black w-[67px] py-2 px-[13px] rounded border border-solid border-[#354152]">
									<span className="text-[#99A1AE] text-xs" >
										{"PAYPAL"}
									</span>
								</div>
							</div>
							<div className="flex flex-col items-start bg-[#00FF410D] py-[17px] mb-[49px] gap-0.5 rounded-[10px] border border-solid border-[#00FE404D]">
								<div className="flex items-center ml-[17px] gap-3">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ac60f442-d86b-440d-834b-2d3dbebbf2e6"} 
										className="w-5 h-5 rounded-[10px] object-fill"
									/>
									<span className="text-[#00FF41] text-sm" >
										{"🔒 PAGO SEGURO 🔒"}
									</span>
								</div>
								<span className="text-[#99A1AE] text-xs w-[526px] ml-[49px] mr-[89px]" >
									{"Tu información está protegida con encriptación militar de nivel SSL 256-bit. Nunca almacenamos tu información de tarjeta de crédito."}
								</span>
							</div>
							<div className="flex items-start">
								<button className="flex items-center bg-black text-left w-[211px] py-3 px-[26px] mr-[181px] gap-2 rounded-[10px] border border-solid border-[#00FF41]"
									onClick={()=>alert("Pressed!")}>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7eec3682-cce4-4eac-9920-a0196eb9b623"} 
										className="w-4 h-4 rounded-[10px] object-fill"
									/>
									<span className="text-[#00FF41] text-base" >
										{"⬅️ ANTERIOR ⬅️"}
									</span>
								</button>
								<button className="flex items-center bg-[#00FF41] text-left w-[273px] py-3 px-6 gap-[9px] rounded-[10px] border-0" 
									style={{
										boxShadow: "0px 0px 20px #00FF4180"
									}}
									onClick={()=>alert("Pressed!")}>
									<span className="text-black text-base" >
										{"✅ CONFIRMAR PAGO ✅"}
									</span>
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cc12d716-cbba-4064-85f9-826da8873de0"} 
										className="w-4 h-4 rounded-[10px] object-fill"
									/>
								</button>
							</div>
						</div>
					</div>
					<div className="flex flex-col items-end self-stretch">
						<div className="flex flex-col items-start mr-[298px]">
							<span className="text-[#00FE40] text-xs" >
								{"🔒 MISMA DIRECCIÓN QUE FACTURACIÓN 🔒"}
							</span>
						</div>
					</div>
				</div>
			</div>
		</main>
		</div>
	)
}

export default ProcesoDePago;
