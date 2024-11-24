import React from 'react'
import { PortfolioProjectsProps } from '@/types/types';
import Modal from 'react-modal';



interface ProjectModalProps {
    project: PortfolioProjectsProps,
    isOpen: boolean,
}
const ProjectModal = ({project, isOpen}: ProjectModalProps) => {
    return (
        <Modal isOpen={isOpen} onRequestClose={() => {}}>
            <div>{project.title}</div>
        </Modal>
    )
}

export default ProjectModal