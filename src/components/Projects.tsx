import { useFetch } from '../fetchProjects';

const Projects = () => {
  const { isLoading, projects } = useFetch();
  console.log(isLoading);

  if (isLoading) return <div className='loading'></div>;
  return (
    <section className='projects'>
      <div className='projects-center'>
        {projects.map((item) => {
          console.log(item);

          return (
            <a href={item.url} key={item.id}>
              <img src={item.img} alt='' />
              <h4>{item.title}</h4>
            </a>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
