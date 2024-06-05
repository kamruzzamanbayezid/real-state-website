import PropTypes from 'prop-types';

const Agents = ({ agent }) => {

      const { author } = agent;
      console.log(author);

      return (
            <div>
                  <div className="flex flex-col max-w-md p-4 lg:p-0 dark:bg-gray-50 dark:text-gray-800 shadow-lg">
                        <img src={author?.author_image} alt="" className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 dark:bg-gray-500 aspect-square" />
                        <div className='text-center py-4'>
                              <h2 className="text-xl font-semibold">{author?.name}</h2>
                              <span className="block pb-2 text-sm dark:text-gray-600">{author?.position}</span>
                              <p>{author?.description}</p>
                        </div>
                  </div>
            </div>
      );
};

Agents.propTypes = {
      agent: PropTypes.object,
};

export default Agents;