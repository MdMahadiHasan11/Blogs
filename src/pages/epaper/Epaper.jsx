import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const image_hosting_key = import.meta.env.VITE_IMAGE_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Epaper = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = async (data) => {
        const { bannerHeader, description, image } = data;
        const file = image[0];

        if (file.size > 5 * 1024 * 1024) {
            return setErrorMessage('File size should not exceed 5MB.');
        }
        if (!['image/jpeg', 'image/png'].includes(file.type)) {
            return setErrorMessage('Only JPEG and PNG images are allowed.');
        }

        setIsLoading(true);
        setErrorMessage('');
        const imageFile = new FormData();
        imageFile.append('image', file);

        try {
            const res = await axiosPublic.post(image_hosting_api, imageFile, {
                headers: { 'content-type': 'multipart/form-data' },
            });

            if (res.data.success) {
                const imageUrl = res.data.data.display_url;

                const bannerInfo = {
                    bannerHeader,
                    description,
                    image: imageUrl,
                };

                const bannerRes = await axiosPublic.post('/allBanner', bannerInfo);

                if (bannerRes.data.insertedId) {
                    console.log('success');
                }
            }
        } catch (error) {
            setErrorMessage('Failed to upload banner. Please try again.');
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="rounded-lg flex flex-col items-center mx-4">
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-row justify-center items-center gap-5 w-full p-2 md:px-6 md:pt-6 mx-auto bg-white shadow-2xl"
            >
                <div className="py-5 first-col">
                    <div className="text-center space-y-5 lg:text-left">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Banner Header</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Banner Header"
                                className="input input-bordered"
                                {...register('bannerHeader', { required: true })}
                            />
                            {errors.bannerHeader && <p className="text-red-500">Banner Header is required.</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Banner Short Description</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Short Description"
                                className="input input-bordered"
                                {...register('description', { required: true })}
                            />
                            {errors.description && <p className="text-red-500">Description is required.</p>}
                        </div>

                        <div className="form-control">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Banner Image</span>
                                </div>
                                <input
                                    {...register('image', { required: true })}
                                    type="file"
                                    className="file-input file-input-bordered w-full"
                                />
                                {errors.image && <p className="text-red-500">An image is required.</p>}
                            </label>
                        </div>

                        <div className="form-control">
                            <button className="btn btn-primary" disabled={isLoading}>
                                {isLoading ? 'Submitting...' : 'Add Banner'}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Epaper;
