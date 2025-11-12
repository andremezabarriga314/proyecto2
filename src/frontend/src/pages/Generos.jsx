import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";

function Generos() {
  const navigate = useNavigate();

  return (
		<div className="min-h-screen bg-white">
			<Header />

			<main className="container mx-auto px-8 py-10">
				{/* Title Section */}
				<div className="pb-1 mb-7">
					<div className="flex items-center self-stretch">
						<div className="flex flex-col w-[1073px] gap-1">
							<div className="flex flex-col items-start self-stretch pb-[1px]">
								<span className="text-[#05DF72] text-3xl font-bold" >
									{"🎯 Videojuegos 🎯"}
								</span>
							</div>
							<div className="flex flex-col items-start self-stretch">
								<span className="text-[#B8F7CF] text-base" >
									{"Descubre las reseñas y testimonios de nuestros clientes"}
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
					<div className="flex flex-col items-end self-stretch">
						<img
							src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f66e3830-f14b-4307-9638-6c5710e80e8a"} 
							className="w-[46px] h-[46px] mr-[443px] object-fill"
						/>
					</div>
					<div className="flex flex-col items-end self-stretch">
						<div className="flex flex-col items-start pb-[1px] mr-[515px]">
							<span className="text-[#3AE020] text-base" >
								{"Contactos"}
							</span>
						</div>
					</div>
					<div className="flex flex-col items-end self-stretch">
						<span className="text-[#71D063] text-xl mr-[293px]" >
							{"912758340"}
						</span>
					</div>
				</div>
				<span className="text-white text-2xl mb-[7px] ml-[39px]" >
					{"Más jugados"}
				</span>
				<div className="flex items-center mb-1 ml-[66px]">
					<div className="flex flex-col items-center w-[141px] mr-[294px] gap-8">
						<img
							src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/30995295-7d9a-4136-9e31-0428851ba143"} 
							className="w-[136px] h-[200px] object-fill"
						/>
						<img
							src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/32b059f6-e60f-4665-8f77-32eebad4d59e"} 
							className="w-[140px] h-[199px] object-fill"
						/>
					</div>
					<div className="flex flex-col w-[524px] gap-4">
						<div className="flex flex-col items-center self-stretch pb-7">
							<span className="text-white text-xl" >
								{"Explora por Género"}
							</span>
						</div>
						<div className="flex flex-col self-stretch pb-[1px] mr-[42px] gap-[9px]">
							<div className="flex items-center self-stretch mx-[3px] gap-[9px]">
								<div className="flex flex-col items-center bg-[#1D293D4D] w-[235px] pb-0.5 rounded-[14px] border border-solid border-[#AC46FF33]">
									<button className="flex flex-col items-start text-left py-[11px] px-3 mt-3 mb-2 rounded-[26843500px] border-0" 
										style={{
											background: "linear-gradient(180deg, #FA2B36, #FF6800)"
										}}
										onClick={() => navigate("/producto/1")}>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ebcc4a6f-b16d-43d7-9a1d-e26fd3b2e571"} 
											className="w-4 h-4 rounded-[26843500px] object-fill"
										/>
									</button>
									<div className="flex flex-col items-start mb-1">
										<span className="text-white text-base" >
											{"Acción"}
										</span>
									</div>
									<div className="flex flex-col items-start mb-[5px]">
										<span className="text-[#C17AFF] text-xs" >
											{"Aventuras emocionantes"}
										</span>
									</div>
									<div className="flex flex-col items-start mb-6">
										<span className="text-[#D9B1FF] text-xs text-center w-[34px]" >
											{"3 juegos"}
										</span>
									</div>
								</div>
								<div className="flex flex-col items-center bg-[#1D293D4D] w-[235px] pb-0.5 rounded-[14px] border border-solid border-[#AC46FF33]">
									<button className="flex flex-col items-start text-left py-[11px] px-3 mt-3 mb-2 rounded-[26843500px] border-0" 
										style={{
											background: "linear-gradient(180deg, #FF6800, #E7000A)"
										}}
										onClick={() => navigate("/producto/2")}>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c949f3ee-c2f1-408d-9f45-05de91e40b95"} 
											className="w-4 h-4 rounded-[26843500px] object-fill"
										/>
									</button>
									<div className="flex flex-col items-start mb-1">
										<span className="text-white text-base" >
											{"FPS"}
										</span>
									</div>
									<div className="flex flex-col items-center self-stretch mb-[5px] mx-10">
										<span className="text-[#C17AFF] text-xs" >
											{"Shooters en primera persona"}
										</span>
									</div>
									<div className="flex flex-col items-start mb-6">
										<span className="text-[#D9B1FF] text-xs text-center w-[34px]" >
											{"4 juegos"}
										</span>
									</div>
								</div>
							</div>
							<div className="flex items-start self-stretch gap-3">
								<div className="flex flex-col items-center bg-[#1D293D4D] w-[235px] py-[1px] rounded-[14px] border border-solid border-[#AC46FF33]">
									<button className="flex flex-col items-start text-left py-[11px] px-3 mt-3 mb-2 rounded-[26843500px] border-0" 
										style={{
											background: "linear-gradient(180deg, #00C850, #00BC7C)"
										}}
										onClick={() => navigate("/producto/3")}>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/658de80b-968e-4c84-a090-f1134fbb1612"} 
											className="w-4 h-4 rounded-[26843500px] object-fill"
										/>
									</button>
									<div className="flex flex-col items-start mb-1">
										<span className="text-white text-base" >
											{"Deportes"}
										</span>
									</div>
									<div className="flex flex-col items-start mb-[5px]">
										<span className="text-[#C17AFF] text-xs" >
											{"Deportes favoritos"}
										</span>
									</div>
									<div className="flex flex-col items-start mb-6">
										<span className="text-[#D9B1FF] text-xs" >
											{"1 juego"}
										</span>
									</div>
								</div>
								<div className="flex flex-col items-center bg-[#1D293D4D] w-[235px] py-[1px] rounded-[14px] border border-solid border-[#AC46FF33]">
									<button className="flex flex-col items-start text-left py-[11px] px-3 mt-3 mb-2 rounded-[26843500px] border-0" 
										style={{
											background: "linear-gradient(180deg, #2B7FFF, #00B8DA)"
										}}
										onClick={() => navigate("/producto/4")}>
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e0b0f448-5ece-4c9e-b4ba-7017eb44b416"} 
											className="w-4 h-4 rounded-[26843500px] object-fill"
										/>
									</button>
									<div className="flex flex-col items-start mb-1">
										<span className="text-white text-base" >
											{"Carreras"}
										</span>
									</div>
									<div className="flex flex-col items-start mb-[5px]">
										<span className="text-[#C17AFF] text-xs" >
											{"Velocidad y competición"}
										</span>
									</div>
									<div className="flex flex-col items-start mb-6">
										<span className="text-[#D9B1FF] text-xs text-center w-[34px]" >
											{"2 juegos"}
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center self-stretch mb-[5px]">
					<span className="text-white text-base" >
						{"ELIGE TU CONSOLA"}
					</span>
				</div>
				<div className="flex items-center ml-[63px]">
					<img
						src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/26b3c759-4205-4b76-9b5e-163b8de151eb"} 
						className="w-[140px] h-[216px] mr-[129px] object-fill"
					/>
					<div className="flex flex-col items-center w-[245px] mr-[233px] gap-2.5">
						<img
							src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ef1341f0-2c31-41ce-8825-d3cfc722b2f9"} 
							className="w-[245px] h-[175px] object-fill"
						/>
						<button className="flex flex-col items-center self-stretch bg-[#E6F53E] text-left py-[7px] rounded-sm border border-solid border-black"
							onClick={() => navigate("/producto/5")}>
							<span className="text-black text-xl" >
								{"ver mas"}
							</span>
						</button>
					</div>
					<div className="flex flex-col items-start w-[291px] gap-5">
						<img
							src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/20c09f90-5067-4291-a635-b77dc7088d48"} 
							className="w-[291px] h-[155px] object-fill"
						/>
						<button className="flex flex-col items-start bg-[#E6F53E] text-left py-[7px] px-[47px] ml-[17px] rounded-sm border border-solid border-black"
							onClick={() => navigate("/producto/6")}>
							<span className="text-black text-xl" >
								{"ver mas"}
							</span>
						</button>
					</div>
				</div>
			</main>
		</div>
	)
}

export default Generos;
