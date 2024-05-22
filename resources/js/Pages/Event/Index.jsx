import { useState } from "react";
import Dropdown from "@/Components/Dropdown";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import SearchIcon from "@/Components/Icons/Search";
import ThreeDotIcon from "@/Components/Icons/TheeDot";

export default function Event({ auth, events }) {
    console.log(events);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Events
                </h2>
            }
        >
            <Head title="Events" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Events List</div>

                        <div className="flex flex-col p-5">
                            <div className="-m-1.5 overflow-x-auto">
                                <div className="p-1.5 min-w-full inline-block align-middle">
                                    <div className="border rounded-lg divide-y divide-gray-200">
                                        <div className="py-3 px-4">
                                            <div className="relative max-w-xs">
                                                <label className="sr-only">
                                                    Search
                                                </label>
                                                <input
                                                    type="text"
                                                    name="hs-table-with-pagination-search"
                                                    id="hs-table-with-pagination-search"
                                                    className="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                                    placeholder="Search"
                                                />
                                                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
                                                    <SearchIcon/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="overflow-hidden">
                                            <table className="min-w-full divide-y divide-gray-200">
                                                <thead className="bg-gray-50">
                                                    <tr>
                                                        <th
                                                            scope="col"
                                                            className="py-3 px-4 pe-0"
                                                        >
                                                            <div className="flex items-center h-5">
                                                                <input
                                                                    id="hs-table-pagination-checkbox-all"
                                                                    type="checkbox"
                                                                    className="border-gray-200 rounded text-blue-600 focus:ring-blue-500"
                                                                />
                                                                <label
                                                                    htmlFor="hs-table-pagination-checkbox-all"
                                                                    className="sr-only"
                                                                >
                                                                    Checkbox
                                                                </label>
                                                            </div>
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-start text-xs font-medium text-gray-500"
                                                        >
                                                            Name
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-start text-xs font-medium text-gray-500"
                                                        >
                                                            Country
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-start text-xs font-medium text-gray-500"
                                                        >
                                                            Document
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-start text-xs font-medium text-gray-500"
                                                        >
                                                            Last Updated
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-end text-xs font-medium text-gray-500"
                                                        >
                                                            Enabled
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-center text-xs font-medium text-gray-500"
                                                        >
                                                            Action
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                                    {events.data.map((event) => (
                                                        <tr key={event.id}>
                                                            <td className="py-3 ps-4">
                                                                <div className="flex items-center h-5">
                                                                    <input
                                                                        id="hs-table-pagination-checkbox-1"
                                                                        type="checkbox"
                                                                        className="border-gray-200 rounded text-blue-600 focus:ring-blue-500"
                                                                    />
                                                                    <label
                                                                        htmlFor="hs-table-pagination-checkbox-1"
                                                                        className="sr-only"
                                                                    >
                                                                        Checkbox
                                                                    </label>
                                                                </div>
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                                                                John Brown
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                                Australia
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                                Media Release
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                                10:09 AM, 2 Jan 2024
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                                <input
                                                                    type="checkbox"
                                                                    id="hs-xs-switch"
                                                                    className="relative w-[35px] h-[21px] bg-gray-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-blue-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-blue-600 checked:border-blue-600 focus:checked:border-blue-600 before:inline-block before:size-4 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200"
                                                                />
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                                <div className="flex justify-center">
                                                                    <div className="ms-3 relative">
                                                                        <Dropdown>
                                                                            <Dropdown.Trigger>
                                                                                <span className="inline-flex rounded-md">
                                                                                    <button
                                                                                        type="button"
                                                                                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                                                                        >
                                                                                        <ThreeDotIcon/>
                                                                                    </button>
                                                                                </span>
                                                                            </Dropdown.Trigger>

                                                                            <Dropdown.Content>
                                                                                <Dropdown.Link
                                                                                    href={route(
                                                                                        "profile.edit"
                                                                                    )}
                                                                                >
                                                                                    Profile
                                                                                </Dropdown.Link>
                                                                                <Dropdown.Link
                                                                                    href={route(
                                                                                        "logout"
                                                                                    )}
                                                                                    method="post"
                                                                                    as="button"
                                                                                >
                                                                                    Log
                                                                                    Out
                                                                                </Dropdown.Link>
                                                                            </Dropdown.Content>
                                                                        </Dropdown>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}

                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="flex items-center justify-between py-1 px-4">
                                            <div>
                                                <p className="text-sm">
                                                    Showing {events.meta.from} to {events.meta.to} of {events.meta.total} entries
                                                </p>
                                            </div>
                                            <nav className="flex items-center space-x-1">
                                                <button
                                                    type="button"
                                                    className="p-2.5 min-w-[40px] inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                                                >
                                                    <span aria-hidden="true">
                                                        «
                                                    </span>
                                                    <span className="sr-only">
                                                        Previous
                                                    </span>
                                                </button>
                                                <button
                                                    type="button"
                                                    className="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none"
                                                    aria-current="page"
                                                >
                                                    1
                                                </button>
                                                <button
                                                    type="button"
                                                    className="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none"
                                                >
                                                    2
                                                </button>
                                                <button
                                                    type="button"
                                                    className="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none"
                                                >
                                                    3
                                                </button>
                                                <button
                                                    type="button"
                                                    className="p-2.5 min-w-[40px] inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                                                >
                                                    <span className="sr-only">
                                                        Next
                                                    </span>
                                                    <span aria-hidden="true">
                                                        »
                                                    </span>
                                                </button>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
