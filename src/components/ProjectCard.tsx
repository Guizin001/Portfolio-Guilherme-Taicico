import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg group">
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            <ExternalLink className="w-5 h-5 text-gray-900" />
          </a>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h4 className="text-xl font-bold dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
            {project.title}
          </h4>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span 
              key={tag}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium dark:text-white transform transition-transform duration-300 hover:scale-105"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;