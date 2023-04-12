import { Link } from "@inertiajs/react";

export default function Pagination({ campaigns }) {
    function getClassName(active) {
        if (active) {
            return "mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-gray-800 focus:border-primary focus:text-primary bg-blue-700 text-white";
        } else {
            return "mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-primary focus:text-primary";
        }
    }

    return (
        campaigns.length > 3 && (
            <div className="mb-4">
                <div className="flex flex-wrap mt-8">
                    {campaigns.map((campaign, key) => (
                        campaign.url === null ?
                            (<div
                                key={key}
                                className="mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded"
                            >{campaign.label}</div>) :
                            (<Link
                                key={key}
                                className={getClassName(campaign.active)}
                                href={campaign.url}
                            >{campaign.label}</Link>)
                    ))}
                </div>
            </div>
        )
    );

}