import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const AddDoctor = () => {
    const navigate = useNavigate()
    const {register, handleSubmit, reset} = useForm();
    const {data:specialty} = useQuery({
        queryKey:['doctorsSpecialty'],
        queryFn:()=>fetch('http://localhost:5000/doctorsSpecialty')
        .then(res=>res.json())
        .then(data=>data)
    })
    const handleAddDoctor = data =>{
        const doctorName = data.name;
        const email = data.email;
        const image = data.image[0];
        const formData = new FormData()
        formData.append('image', image)
        console.log(process.env.REACT_APP_IMAGE_API_KEY)
        const specialty = data.specialty;
        
        fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGE_API_KEY}`,{
            method:"POST",
            body:(formData)
        }    )
        .then(res=>res.json())
        .then(data=>{
            if(data.success){
                const image = data.data.url;
                const doctorDoc = {
                    name:doctorName,
                    image:image,
                    email,
                    specialty
                }

                fetch('http://localhost:5000/admin/adddoctor',{
                    method:"POST",
                    headers:{
                        'content-type':"application/json",
                        authorization:`bearer ${localStorage.getItem('accessToken')}`
                    },
                    body:JSON.stringify(doctorDoc)
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.acknowledged){
                        toast.success('successfully added doctor')
                        navigate('/dashboard/admin/managedoctor')
                        reset()
                    }
                })
                
            }
        })
      
    }

    return (
        <div>
            <h1>Add A New Doctors </h1>
            <div className='flex items-center h-[80vh]'>
                <form className='border px-5 py-10 rounded-2xl bg-gray-300 w-1/2 mx-auto' onSubmit={handleSubmit(handleAddDoctor)}>
                    <div>
                    <label htmlFor="name" className='block mb-1 text-xl'>Name</label>
                    <input className='input input-bordered w-full px-5 font-bold' type="text" placeholder='name' id='name' {...register("name",{require:"name required"})}  />
                    </div>
                    <div className='mt-2'>
                    <label htmlFor="email" className='block mb-1 text-xl'>Email</label>
                    <input className='input input-bordered w-full px-5 font-bold' type="text" placeholder='email' id='email' {...register("email",{require:"email required"})}  />
                    </div>
                    <div className='mt-2'>
                    <label htmlFor="image" className='block mb-1 text-xl'>Image</label>
                    <input className='input input-bordered w-full py-2 px-5 font-bold' type="file" placeholder='image' id='image' {...register("image",{require:"image required"})}  />
                    </div>
                    <div className='mt-2'>
                    <label htmlFor="specialty" className='block mb-1 text-xl'>Specialty</label>
                    <select id='specialty' {...register('specialty',{required:'must be required'})} className='select select-bordered w-full text-center text-2xl'>
                        {
                            specialty?.map(sp =><option key={sp._id}>
                                {sp.name}
                            </option>)
                        }
                        
                    </select>
                    </div>
                  <div>
                    <button className='btn w-full mt-5'>Add A Doctor</button>
                  </div>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;