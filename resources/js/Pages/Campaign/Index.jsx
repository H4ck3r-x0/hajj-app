import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import Pagination from '@/Components/Pagination';
import SVG from 'react-inlinesvg';
import PrimaryButton from '@/Components/PrimaryButton';
import InputError from '@/Components/InputError';

export default function Index({ auth, campaigns }) {
    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        file: null
    });
    const submit = (e) => {
        e.preventDefault();

        post(route('compaigns.store'), data, {
            forceFormData: true,
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">الحملات</h2>}
        >
            <Head title="الحملات" />

            <div className="py-6">
                <div className='max-w-6xl mb-4 mx-auto sm:px-6 lg:px-8 py-2 bg-white rounded-sm shadow-sm'>
                    <form onSubmit={submit} className="mt-6 space-y-6">
                        <div className='flex flex-col mb-2'>
                            <label htmlFor="file">أختر ملف الحملة</label>
                            <input type="file" id='file' name='file' onChange={(e) => setData('file', e.target.files[0])} />
                        </div>
                        <PrimaryButton disabled={processing}>رفع</PrimaryButton>
                        <InputError className="mt-2" message={errors.file} />
                    </form>

                </div>

                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-right text-gray-500 " dir='rtl'>
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 ">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            #id
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            اسم الحملة
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            رقم الحملة
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
                                        <th scope="col" className="px-6 py-3">
                                            الخيارات
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {campaigns.data.map((campaign, index) => {
                                        return (
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={campaign.id}>
                                                <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap ">
                                                    {campaign.id}
                                                </th>
                                                <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap ">
                                                    {campaign.name}
                                                </th>
                                                <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap ">
                                                    {campaign.campaign_number}
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
                                                <td className="px-6 py-4">
                                                    <Link href={route('campaign.show', campaign.id)}>
                                                        استعراض الحملة
                                                    </Link>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <Pagination class="mt-6" campaigns={campaigns.links} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
