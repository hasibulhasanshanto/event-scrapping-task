import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth, data }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            {auth.user.role === 'client' && <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in as client!</div>
                    </div>
                </div>
            </div>}

            {auth.user.role === 'author' && <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-10">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-8 text-gray-900">
                            <div className="grid grid-cols-4 gap-5">
                                <div className="border border-green-300 text-green-600 bg-green-100 p-6 rounded-md shadow-md">
                                    <h3 className='text-2xl font-bold'>Users</h3>
                                    <p className='text-lg font-medium'>Total: {data.total_user}</p>
                                </div>

                                <div className="border border-red-300 text-red-600 bg-red-100 p-6 rounded-md shadow-md">
                                    <h3 className='text-2xl font-bold'>Events</h3>
                                    <p className='text-lg font-medium'>Total: {data.total_events}</p>
                                </div>

                                <div className="border border-purple-300 text-purple-600 bg-purple-100 p-6 rounded-md shadow-md">
                                    <h3 className='text-2xl font-bold'>Event Reports</h3>
                                    <p className='text-lg font-medium'>Total: {data.total_event_report}</p>
                                </div>

                                <div className="border border-yellow-300 text-yellow-600 bg-yellow-100 p-6 rounded-md shadow-md">
                                    <h3 className='text-2xl font-bold'>Client Events</h3>
                                    <p className='text-lg font-medium'>Total: {data.total_event_client}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </AuthenticatedLayout>
    );
}
