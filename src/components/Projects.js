import React from 'react';
import {projects} from "../data";
import {CodeIcon} from "@heroicons/react/solid";

export default function Projects() {
	return (
		<section id="projects" className="text-gray-400 bg-gray-900 body-font">
			<div className="container px-5 py-10 mx-auto text-center lg:px-40">
				<div className="flex flex-col w-full mb-20">
					<CodeIcon className="mx-auto inline-block w-10 mb-4" />
					<h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
						Apps I've Built
					</h1>
					<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
						This is a list of apps I've built in the past for practice and works.
					</p>
				</div>
				<div className="flex flex-wrap -m-4">
					{projects.map((project, i) => (
						// <a
						//	href={project.link?project.link:'#'}
						//   _target="_blank"
						//   key={project.image}
						//   className="sm:w-1/2 w-100 p-4">
						<div className="sm:w-1/2 w-100 p-4">
							<div className="flex relative" key={i}>
								<img
									alt="gallery"
									className="absolute inset-0 w-full h-full object-cover object-center"
									src={project.image}
								/>
								<div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-75">
									<h2 className="tracking-widest text-sm title-font font-medium text-blue-400 mb-1">
										{project.subtitle}
									</h2>
									<h1 className="title-font text-lg font-medium text-white mb-3">
										{project.title}
									</h1>
									<p className="leading-relaxed">{project.description}</p>

									<div className="flex justify-center">
										{project.demo && (
										<a
											target="_blank"
											href={project.demo}
											className="inline-flex text-white bg-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
											Live Demo
											
										</a>)
										}
										{project.github && (
											<a
											target="_blank"
											href={project.github}
											className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
											Github
										</a>)
										}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
		);
}
