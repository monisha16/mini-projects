import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { useNavigate } from 'react-router-dom';
import menuIcon from 'assets/icons/menu_white.svg';
import developerIcon from 'assets/icons/developer.svg';
import githubLogo from 'assets/icons/github.svg';
import linkedinLogo from 'assets/icons/linkedin.svg';
import { listOfProjects } from 'src/constants/miniProjects';

const SideNavigation = () => {
  const navigate = useNavigate();
  const [openNav, setOpenNav] = useState(false);
  const [selectedProject, setSelectedProject] = useState('');

  const openProject = (event, navToPath, key) => {
    event.stopPropagation();
    navigate(navToPath);
    setSelectedProject(key);
  };

  return (
    <div
      className={twMerge(
        'flex flex-col justify-between p-3 bg-blue w-[60px] text-white duration-500',
        openNav && 'w-[320px]'
      )}
      onClick={() => {
        setOpenNav(!openNav);
      }}
    >
      <div className='flex justify-between items-center duration-500 cursor-pointer'>
        <img src={menuIcon} alt='menu' width='30px' />
        {openNav && (
          <span className='flex-1 pl-2 flex text-lg font-bold duration-500 truncate'>
            Mini Projects
          </span>
        )}
      </div>

      <div className='py-6 flex-1 duration-500'>
        {listOfProjects.map((project) => (
          <div
            key={project.key}
            className={twMerge(
              'flex items-center px-1 py-2 cursor-pointer hover:bg-blue-dark hover:rounded'
            )}
            onClick={(e) => openProject(e, project.navTo, project.key)}
          >
            <img
              src={project.icon}
              alt='menu'
              width='25px'
              title='Folder Creation'
              className='pl-1'
            />
            <span
              className={twMerge(
                'pl-2.5 hidden text-sm text-gray-light',
                openNav && 'flex truncate',
                project.key === selectedProject && 'text-white'
              )}
            >
              {project.name}
            </span>
          </div>
        ))}
      </div>

      <div className='flex pt-4 border-t justify-between border-t-gray-dark truncate duration-500'>
        <div className='flex items-center '>
          <img src={developerIcon} width='30px' />
          <div className='flex flex-col pl-2'>
            <span className='text-sm'>Monisha Tarkar</span>
            <span className='text-xs text-gray-light'>frontend developer</span>
          </div>
        </div>
        <div className='flex'>
          <a
            id='linkedin-link'
            href='https://www.linkedin.com/in/monisha-tarkar/'
            target='_blank'
            rel='noreferrer'
          >
            <img src={linkedinLogo} alt='LinkedIn' />
          </a>
          <a
            id='github-link'
            href='https://github.com/monisha16'
            target='_blank'
            rel='noreferrer'
            className='pl-2'
          >
            <img src={githubLogo} alt='Github' />
          </a>
        </div>
      </div>
    </div>
  );
};

SideNavigation.propTypes = {};

export default SideNavigation;
