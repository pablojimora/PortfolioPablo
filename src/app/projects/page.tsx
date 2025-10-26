'use client'
import React from 'react'
import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import { projects } from '../../helpers/projects';






const Projects = () => {

    return (
        <div>
            <div className="flex justify-center mt-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                    {projects.map((project) => (
                        <Card
                            key={project.id}
                            className="py-4 w-72 h-auto max-w-sm flex flex-col justify-between transition-all duration-300 ease-in-out  hover:scale-95 hover:shadow-[0_4px_20px_rgba(59,130,246,0.5)] cursor-pointer"
                        >
                            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                <p className="text-tiny uppercase font-bold">{project.name}</p>
                                <small className="text-default-500">{`Proyecto #${project.id}`}</small>
                                <h4 className="font-bold text-large line-clamp-3 wrap-break-word leading-tight">
                                    Aca voy a poner una descrpition apra ver como se ve y si sigo escribiendo se abvadvavadsgd
                                </h4>
                            </CardHeader>

                            <CardBody className="overflow-visible py-2 ml-2 ">
                                <Image
                                    alt={project.name}
                                    className="object-cover rounded-xl"
                                    src="https://heroui.com/images/hero-card-complete.jpeg"
                                    width={270}
                                />
                            </CardBody>
                        </Card>

                    ))}
                </div>
            </div>

        </div>
    )
}

export default Projects
