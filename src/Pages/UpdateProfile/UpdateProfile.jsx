import { useForm } from "react-hook-form";
import Navbar from "../../Components/Navbar/Navbar";
import UseAuth from "../../Hooks/UseAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import CommonButton from "../../Components/Shared/CommonButton";

const UpdateProfile = () => {

      const { user, userUpdate, setLoading } = UseAuth();

      const { register, handleSubmit, formState: { errors } } = useForm();

      const onSubmit = (data) => {
            const { name, url } = data;

            // update profile
            userUpdate(name, url)
                  .then(() => {
                        toast.success('User Updated successfully!!');
                        setLoading(false)
                  })
                  .catch(error => {
                        toast.error(error.message)
                  })

      }

      return (
            <div className="bg-[#f3f4f9]">
                  <Navbar />
                  <div>
                        <section className="text-gray-900 max-w-5xl mx-auto py-10">
                              <form onSubmit={handleSubmit(onSubmit)} noValidate="" >

                                    <fieldset className="p-6 flex flex-col lg:flex-row gap-6 lg:gap-0  dark:bg-gray-50">
                                          <div className="space-y-2 lg:w-[30%] items-center lg:items-start flex flex-col">
                                                <p className="font-medium text-3xl">Update Profile</p>
                                                {
                                                      <img className="w-48 h-48 rounded-full object-cover" src={user?.photoURL} alt="" />
                                                }
                                          </div>
                                          <div className="lg:w-[70%] space-y-5">

                                                <div className="space-y-2">
                                                      <input defaultValue={user?.displayName} type="text" name="name" id="name" placeholder="Your name" className="w-full px-3 py-4 border-b border-[#C5C5C5] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 placeholder:text-[#000000] placeholder:text-base placeholder:font-medium outline-none"
                                                            {...register("name", { required: true })}
                                                      />
                                                      {errors.name && <span className="text-red-600">This field is required</span>}
                                                </div>


                                                <div className="space-y-2">

                                                      <input defaultValue={user?.email} type="email" name="email" id="email" placeholder="Your Email" className="w-full px-3 py-4 border-b border-[#C5C5C5] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 placeholder:text-[#000000] placeholder:text-base placeholder:font-medium outline-none"
                                                            {...register("email", { require: true })}
                                                      />

                                                </div>

                                                <div className="space-y-2">
                                                      <input defaultValue={user?.photoURL} type="url" name="photoUrl" id="photoUrl" placeholder="Photo Url" className="w-full px-3 py-4 border-b border-[#C5C5C5] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 placeholder:text-[#000000] placeholder:text-base placeholder:font-medium outline-none"
                                                            {...register("url", { required: true })}
                                                      />
                                                      {errors.url && <span className="text-red-600">This field is required</span>}
                                                </div>

                                                <CommonButton text='Update' width="100%" height="50px" />
                                          </div>
                                    </fieldset>
                              </form>
                        </section>
                  </div>
            </div>
      );
};

export default UpdateProfile;