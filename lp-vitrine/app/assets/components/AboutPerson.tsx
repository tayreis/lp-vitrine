"use client";

import React, { useState } from "react";
import Image from "next/image";
import classNames from "classnames";

export default function AboutPerson() {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleContent = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<section id="aboutPerson" className="bg-white py-20 px-6">
			<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
				{/* Texto à esquerda */}
				<div className="md:w-1/2 text-[#0a1f3c] w-full relative">
					<h2 className="text-3xl font-bold mb-4">Sobre a Dra. Dayane Cunha</h2>

					<div
						className={classNames(
							"relative transition-all duration-500",
							"overflow-hidden",
							"md:overflow-visible",
							{
								"h-[260px] md:h-auto": !isExpanded,
							}
						)}
					>
						<p className="text-gray-700 leading-relaxed mb-4">
							Advogada inscrita na OAB/MG 227.691 e fundadora da Dayane Cunha Sociedade Individual de Advocacia (CNPJ nº 53.538.305/0001-18 | OAB/MG nº 15.980), escritório com atuação especializada nas áreas de Direito Imobiliário e Sucessório.
						</p>
						<p className="text-gray-700 leading-relaxed mb-4">
							Desde o início da trajetória acadêmica, teve a oportunidade de atuar em escritórios com forte presença nos ramos imobiliário, condominial e sucessório. A vivência prática revelou como muitas pessoas enfrentam obstáculos jurídicos em temas como regularização de imóveis, contratos de compra, venda e locação, incorporações, vícios construtivos, convenções condominiais, testamentos e inventários.
						</p>
						<p className="text-gray-700 leading-relaxed mb-4">
							Comprometida em prestar um atendimento técnico e acessível, a Dra. Dayane se dedica ao constante aperfeiçoamento nas áreas em que atua, buscando oferecer clareza, segurança e transparência tanto em demandas consultivas quanto contenciosas.
						</p>
						<p className="text-gray-700 leading-relaxed mb-4">
							Também é apaixonada pela prática processual civil, área em que busca constante atualização e aperfeiçoamento técnico, tendo realizado formações específicas na área.
						</p>

						{/* Filtro embaçado na parte inferior */}
						{!isExpanded && (
							<div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white/70 to-transparent backdrop-blur-[1px] md:hidden" />
						)}
					</div>

					{/* Botão "Ver mais" visível somente em telas pequenas */}
					{!isExpanded && (
						<div className="flex justify-center mt-6 md:hidden">
							<button
								onClick={toggleContent}
								className="bg-[#fbe9e3] text-[#012b1d] border border-[#fbe9e3] hover:bg-[#d4af37] hover:text-white hover:border-[#d4af37] font-semibold py-2 px-6 rounded-xl shadow-md transition-all duration-200"
							>
								Ver mais
							</button>
						</div>
					)}

				</div>

				<div className="md:w-1/2 flex justify-center relative min-h-[460px]">
					{/* Retângulo rosa atrás */}
					<div className="absolute top-6 right-6 w-64 h-96 md:w-[300px] md:h-[440px] bg-[#fbe9e3] rounded-xl z-0 shadow-lg" />

					{/* Retângulo menor dourado com borda */}
					<div className="absolute -top-4 -right-4 w-56 h-80 md:w-[260px] md:h-[400px] rounded-xl border-2 z-10"
						style={{
							borderImage: "linear-gradient(135deg, #d4af37, #fbe9e3) 1",
							borderStyle: "solid",
						}}
					/>

					{/* Foto principal com fundo verde escuro */}
					<div className="relative z-20 w-64 h-96 md:w-[300px] md:h-[440px] rounded-xl overflow-hidden shadow-xl border border-white">
						<Image
							src="/foto-branca.jpg"
							alt="Dra. Dayane Cunha"
							width={400}
							height={600}
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
