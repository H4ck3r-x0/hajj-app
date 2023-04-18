import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import PaginationMembers from '@/Components/PaginationMembers';
import SVG from 'react-inlinesvg';
import PrimaryButton from '@/Components/PrimaryButton';
import InputError from '@/Components/InputError';

export default function Show({ auth, campaign, members }) {
    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        file: null,
        hideCampDetails: true,
        hideMembers: false,
    });
    const submit = (e) => {
        e.preventDefault();

        post(route('campaign.member.store', campaign.id), data, {
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
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className='flex items-center justify-between py-4'>
                        <h1 className='text-gray-800 text-3xl font-smibold'>معلومات الحملة</h1>
                        <PrimaryButton onClick={e => setData('hideCampDetails', !data.hideCampDetails)}>
                            {data.hideCampDetails ? 'أخفاء معلومات الحملة' : 'إظهار معلومات الحملة'}
                        </PrimaryButton>

                    </div>
                    {data.hideCampDetails === true && <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-right text-gray-500 " dir='rtl'>
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 ">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            اسم الحملة
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            هاتف الحملة الرئيسي
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            هاتف الحملة الطوارئ
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            العنوان
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            البار كود
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={campaign.id}>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {campaign.name}
                                        </th>
                                        <td className="px-6 py-4">
                                            {campaign.main_mobile}
                                        </td>
                                        <td className="px-6 py-4">
                                            {campaign.emergency_mobile}
                                        </td>
                                        <td className="px-6 py-4">
                                            {campaign.location_google_url}
                                        </td>
                                        <td className="px-6 py-4">
                                            <SVG
                                                src={campaign.qr_code}
                                                width={128}
                                                height="auto"
                                                title="React"
                                            />
                                        </td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>}
                </div>


                <div className='max-w-6xl mt-4 mx-auto sm:px-6 lg:px-8 py-2 bg-white rounded-sm shadow-sm'>
                    <form onSubmit={submit} className="mt-6 space-y-6">
                        <div className='flex flex-col mb-2'>
                            <label htmlFor="file">أختر ملف اعضاء الحملة</label>
                            <input type="file" id='file' name='file' onChange={(e) => setData('file', e.target.files[0])} />
                        </div>
                        <PrimaryButton disabled={processing}>رفع</PrimaryButton>
                        <InputError className="mt-2" message={errors.file} />
                    </form>
                </div>


                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 pb-10">
                    <div className='flex items-center justify-between py-4'>
                        <h1 className='text-gray-800 text-3xl font-smibold'>معلومات اعضاء الحملة</h1>
                        <PrimaryButton onClick={e => setData('hideMembers', !data.hideMembers)}>
                            {data.hideMembers ? 'إظهار اعضاء الحملة' : 'اخفاء اعضاء الحملة'}
                        </PrimaryButton>
                    </div>
                    {data.hideMembers === false && <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-right text-gray-500 " dir='rtl'>
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 ">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            #id
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            الاسم الثنائي
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            الجنسية
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            البار كود
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {members.data.map((member, index) => {
                                        return (
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={member.id}>
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {member.id}
                                                </th>
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {member.first_name + ' ' + member.last_name}
                                                </th>
                                                <td className="px-6 py-4">
                                                    {member.nationality}
                                                </td>

                                                <td className="px-6 py-4">
                                                    <SVG
                                                        src={member.qr_code}
                                                        width={128}
                                                        height="auto"
                                                        title="React"
                                                    />
                                                </td>
                                            </tr>)
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>}
                    <PaginationMembers class="mt-6" members={members.links} />
                </div>
            </div>
        </AuthenticatedLayout >
    );
}
