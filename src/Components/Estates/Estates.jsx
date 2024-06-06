import './Estates.css';
import { useEffect, useState } from 'react';
import Estate from './Estate';


const Estates = () => {

      const [estates, setStates] = useState([]);

      useEffect(() => {
            const stateData = async () => {
                  try {
                        const res = await fetch('/estates.json');
                        const data = await res.json();
                        setStates(data)
                  } catch (error) {
                        console.log('Error in Estates data:', error);
                  }
            }
            stateData();
      }, []);

      return (
            <div className="my-10 lg:my-20 py-10 lg:py-20 bg-[#f3f4f9]">
                  <div className="max-w-[1170px] mx-auto p-4 lg:p-0">

                        <h2 className="text-[#0D1128] font-sans font-medium border-l-8 border-[#BC986B] pl-3 border-b-2 w-fit pb-1 rounded text-4xl md:text-5xl mb-20">Featured Properties!</h2>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                              {
                                    estates?.map(estate => <Estate key={estate?.id} estate={estate}></Estate>)
                              }
                        </div>
                  </div>

            </div>
      );
};

export default Estates;