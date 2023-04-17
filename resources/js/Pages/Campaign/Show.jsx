import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import Pagination from '@/Components/Pagination';
import SVG from 'react-inlinesvg';
import PrimaryButton from '@/Components/PrimaryButton';
import InputError from '@/Components/InputError';

export default function Show({ auth, campaign }) {
    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        file: null
    });
    console.log(campaign);

    const submit = (e) => {
        e.preventDefault();

        post(route('compaigns.store'), data, {
            forceFormData: true,
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">الحملة {campaign.name}</h2>}
        >
            <Head title={`الحملة ${campaign.name}`} />

            <div className="py-6">
                <div className='max-w-6xl mb-4 mx-auto sm:px-6 lg:px-8 py-2 bg-white rounded-sm shadow-sm'>
                    <form onSubmit={submit} className="mt-6 space-y-6">
                        <div className='flex flex-col mb-2'>
                            <label htmlFor="file">أختر ملف اعضاء الحملة</label>
                            <input type="file" id='file' name='file' onChange={(e) => setData('file', e.target.files[0])} />
                        </div>
                        <PrimaryButton disabled={processing}>رفع</PrimaryButton>
                        <InputError className="mt-2" message={errors.file} />
                    </form>

                </div>

                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        hell
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
