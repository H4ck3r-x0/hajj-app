import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Pagination from '@/Components/Pagination';

export default function Index({ auth, campaigns }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">الحملات</h2>}
        >
            <Head title="الحملات" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400" dir='rtl'>
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                                    </tr>
                                </thead>
                                <tbody>
                                    {campaigns.data.map((campaign, index) => {
                                        return (
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
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                            <Pagination class="mt-6" campaigns={campaigns.links} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
