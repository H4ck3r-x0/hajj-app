import { Link } from "@inertiajs/react";

export default function PaginationMembers({ members }) {
    function getClassName(active) {
        if (active) {
            return "mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-gray-800 focus:border-primary focus:text-primary bg-blue-700 text-white";
        } else {
            return "mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-primary focus:text-primary";
        }
    }

    return (
        members.length > 3 && (
            <div className="mb-4">
                <div className="flex flex-wrap mt-8">
                    {members.map((member, key) => (
                        member.url === null ?
                            (<div
                                key={key}
                                className="mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded"
                            >{member.label}</div>) :
                            (<Link
                                key={key}
                                className={getClassName(member.active)}
                                href={member.url}
                            >{member.label}</Link>)
                    ))}
                </div>
            </div>
        )
    );

}