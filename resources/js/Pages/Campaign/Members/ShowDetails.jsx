import MemberLayout from '@/Layouts/MemberLayout';
import { Head, Link } from '@inertiajs/react';
import SVG from 'react-inlinesvg';

export default function ShowDetails({ campaignMemebr }) {
    return (
        <MemberLayout>
            <Head title="الحملات" />
            <div className="px-10 min-w-full mx-auto">
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex items-center justify-center'>
                        <img src="/images/hajjLogo.jpg" className='w-28 h-28' alt="" />
                    </div>

                    <div className='mt-4 flex flex-col items-center justify-center'>
                        <h1 className='text-2xl font-semibold py-3 border-b'>{campaignMemebr.first_name + ' ' + campaignMemebr.last_name}</h1>
                        <p className='text-gray-400'>{campaignMemebr.nationality}</p>
                    </div>

                    <div className='mt-4 flex flex-row  gap-4'>
                        <div className=' w-96 p-3 border rounded-sm bg-white shadow-sm '>
                            <fieldset className='flex flex-col'>
                                <legend>بيانات الحملة</legend>
                                <label htmlFor="">
                                    {campaignMemebr.campaign.name}
                                </label>
                                <label htmlFor="">
                                    {campaignMemebr.campaign.manager_name}

                                </label>
                                <label htmlFor="">
                                    {campaignMemebr.campaign.main_mobile}
                                </label>
                                <label htmlFor="">
                                    {campaignMemebr.campaign.emergency_mobile}
                                </label>
                            </fieldset>

                        </div>

                    </div>

                    <div className='mt-4 flex items-center justify-between gap-3'>
                        <div>
                            <SVG
                                src={campaignMemebr.qr_code}
                                width={128}
                                height="auto"
                                title="React"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </MemberLayout>
    );
}
