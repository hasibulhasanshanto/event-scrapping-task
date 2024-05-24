import { useState } from "react";
import Dropdown from "@/Components/Dropdown";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";
import SearchIcon from "@/Components/Icons/Search";
import ThreeDotIcon from "@/Components/Icons/TheeDot";
import DownloadIcon from "@/Components/Icons/Download";
import UploadIcon from "@/Components/Icons/Upload";
import PlusIcon from "@/Components/Icons/Plus";
import Pagination from "@/Components/Common/Pagination";
import ShowingEntries from "@/Components/Common/ShowingEntries";
import CheckIcon from "@/Components/Icons/CheckIcon";
import LoopIcon from "@/Components/Icons/LoopIcon";
import EditIcon from "@/Components/Icons/EditIcon";
import CloseCircleIcon from "@/Components/Icons/CloseCircleIcon";

export default function Event({ auth, events, queryParams = null }) {
    queryParams = queryParams || {};
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [dropId, setDropId] = useState(null);
    const [allEvents, setAllEvents] = useState(events);

    const searchFieldChanged = (search, value) => {
        if (value) {
            queryParams[search] = value;
        } else {
            delete queryParams[search];
        }
        queryParams["page"] = 1;
        router.get(route("events.index"), queryParams);
    };

    const onKeyPress = (search, e) => {
        if (e.key !== "Enter") return;
        searchFieldChanged(search, e.target.value);
    };

    const dropDownHandler = (dropId) => {
        setIsDropdownOpen(!isDropdownOpen);
        setDropId(dropId);
    };

    const deleteEventHandler = (eventId) => {
        if (!window.confirm("Are you sure you want to delete this?")) {
            return;
        }
        router.delete(route("events.destroy", eventId));
    };

    const checkAll = (value) => {
        let checkboxes = document.getElementsByClassName("table-checkbox");
        for (let i = 0, n = checkboxes.length; i < n; i++) {
            checkboxes[i].checked = value;
        }
    };

    const changeIsEnabled = (eventId, e) => {
        e.preventDefault();
        // console.log(e.target.checked);
        router.post(route("events.update-enabled", eventId));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Events Lists
                </h2>
            }
        >
            <Head title="Events" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="flex flex-col p-5">
                            <div className="-m-1.5 overflow-x-auto">
                                <div className="p-1.5 min-w-full inline-block align-middle">
                                    <div className="border rounded-lg divide-y divide-gray-200">
                                        <div className="grid grid-cols-3 gap-4 items-center py-3 px-4">
                                            <div className="col-span-2 relative w-full">
                                                <label className="sr-only">
                                                    Search
                                                </label>
                                                <input
                                                    type="text"
                                                    name="hs-table-with-pagination-search"
                                                    id="hs-table-with-pagination-search"
                                                    defaultValue={
                                                        queryParams.name
                                                    }
                                                    className="py-2.5 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-0 focus:ring-gray-900 disabled:opacity-50 disabled:pointer-events-none"
                                                    placeholder="Search by name..."
                                                    onBlur={(e) =>
                                                        searchFieldChanged(
                                                            "search",
                                                            e.target.value
                                                        )
                                                    }
                                                    onKeyPress={(e) =>
                                                        onKeyPress("search", e)
                                                    }
                                                />
                                                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
                                                    <SearchIcon />
                                                </div>
                                            </div>
                                            <div className="col-span-1">
                                                <div className="grid grid-cols-3 gap-4">
                                                    <div className="col-span-1">
                                                        <button
                                                            type="button"
                                                            className="w-full py-2.5 text-xs font-medium text-gray-400 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-0 rounded-md flex justify-center"
                                                        >
                                                            <DownloadIcon />
                                                        </button>
                                                    </div>
                                                    <div className="col-span-1">
                                                        <button
                                                            type="button"
                                                            className="w-full py-2.5 text-xs font-medium text-gray-400 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-0 rounded-md flex justify-center"
                                                        >
                                                            <UploadIcon />
                                                        </button>
                                                    </div>
                                                    <div className="col-span-1">
                                                        <NavLink
                                                            href={route(
                                                                "events.create"
                                                            )}
                                                            className="w-full !py-2.5 text-xs font-medium text-white hover:!text-white bg-gray-800 hover:bg-gray-900 focus:!outline-none focus:!ring-0 rounded-md flex items-center !px-3"
                                                        >
                                                            <PlusIcon />
                                                            <span>
                                                                Add Source
                                                            </span>
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="my-8">
                                            <div className="">
                                                <table className="min-w-full divide-y divide-gray-200">
                                                    <thead className="bg-gray-50">
                                                        <tr>
                                                            <th
                                                                scope="col"
                                                                className="py-3 px-3 pe-0"
                                                            >
                                                                <div className="flex items-center h-5">
                                                                    <input
                                                                        onClick={(
                                                                            e
                                                                        ) =>
                                                                            checkAll(
                                                                                e.target.checked
                                                                            )
                                                                        }
                                                                        id="checkbox-all"
                                                                        type="checkbox"
                                                                        className="border-gray-200 rounded text-gray-900 focus:ring-gray-900"
                                                                    />
                                                                    <label
                                                                        htmlFor="checkbox-all"
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
                                                        {events.data.map(
                                                            (event) => (
                                                                <tr
                                                                    key={
                                                                        event.id
                                                                    }
                                                                >
                                                                    <td className="py-3 ps-3">
                                                                        <div className="flex items-center h-5">
                                                                            <input
                                                                                id={`table-checkbox-${event.id}`}
                                                                                type="checkbox"
                                                                                className="table-checkbox border-gray-200 rounded text-gray-900 focus:ring-gray-900"
                                                                            />
                                                                            <label
                                                                                htmlFor={`table-checkbox-${event.id}`}
                                                                                className="sr-only"
                                                                            >
                                                                                Checkbox
                                                                            </label>
                                                                        </div>
                                                                    </td>
                                                                    <td className="px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                                                                        {
                                                                            event.name
                                                                        }
                                                                    </td>
                                                                    <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                                        {
                                                                            event.country
                                                                        }
                                                                    </td>
                                                                    <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                                        {
                                                                            event.document
                                                                        }
                                                                    </td>
                                                                    <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                                        {
                                                                            event.updated_at
                                                                        }
                                                                    </td>
                                                                    <td className="px-6 py-3 whitespace-nowrap text-end text-sm font-medium">
                                                                        <input
                                                                            id={`scanning-${event.id}`}
                                                                            checked={
                                                                                event.horizon_scanning
                                                                            }
                                                                            type="checkbox"
                                                                            className="relative w-[35px] h-[18px] bg-gray-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-gray-900 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-gray-900 checked:border-gray-900 focus:checked:border-gray-900 before:inline-block before:size-4 before:bg-white checked:before:bg-gray-400 before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200"
                                                                            onChange={(
                                                                                e
                                                                            ) =>
                                                                                changeIsEnabled(
                                                                                    event.id, e
                                                                                )
                                                                            }
                                                                        />
                                                                    </td>
                                                                    <td className="px-6 py-3 whitespace-nowrap text-end text-sm font-medium">
                                                                        <div className="flex justify-center relative">
                                                                            <a
                                                                                onClick={(
                                                                                    e
                                                                                ) =>
                                                                                    dropDownHandler(
                                                                                        event.id
                                                                                    )
                                                                                }
                                                                                className="flex justify-start"
                                                                                href="#"
                                                                            >
                                                                                <ThreeDotIcon />
                                                                            </a>

                                                                            {isDropdownOpen &&
                                                                                dropId ===
                                                                                    event.id && (
                                                                                    <div className="absolute -right-[-1rem] mt-[15px] flex h-[7rem] overflow-hidden w-[140px] flex-col rounded-sm border border-stroke dark:border-neutral-900 bg-white dark:bg-neutral-600 z-50">
                                                                                        <ul className="flex h-auto flex-col overflow-y-auto py-1">
                                                                                            <li>
                                                                                                <a
                                                                                                    href="#"
                                                                                                    className="flex gap-2 px-3 pb-1 mt-1 items-center hover:text-indigo-600 hover:hover:text-indigo-400"
                                                                                                >
                                                                                                    <CheckIcon />
                                                                                                    <h5 className="text-sm font-normal">
                                                                                                        Check
                                                                                                        Selector
                                                                                                    </h5>
                                                                                                </a>
                                                                                            </li>
                                                                                            <li>
                                                                                                <a
                                                                                                    href="#"
                                                                                                    className="flex gap-2 px-3 pb-1 items-center hover:text-indigo-600 hover:hover:text-indigo-400"
                                                                                                >
                                                                                                    <LoopIcon />
                                                                                                    <h5 className="text-sm font-normal">
                                                                                                        Run
                                                                                                        Crawler
                                                                                                    </h5>
                                                                                                </a>
                                                                                            </li>
                                                                                            <li>
                                                                                                <Link
                                                                                                    href={route(
                                                                                                        "events.edit",
                                                                                                        event.id
                                                                                                    )}
                                                                                                    className="flex gap-2 px-3 pb-1 items-center hover:text-indigo-600 hover:hover:text-indigo-400"
                                                                                                >
                                                                                                    <EditIcon />
                                                                                                    <h5 className="text-sm font-normal">
                                                                                                        Edit
                                                                                                        Source
                                                                                                    </h5>
                                                                                                </Link>
                                                                                            </li>
                                                                                            <li>
                                                                                                <a
                                                                                                    onClick={(
                                                                                                        e
                                                                                                    ) =>
                                                                                                        deleteEventHandler(
                                                                                                            event.id
                                                                                                        )
                                                                                                    }
                                                                                                    href="#"
                                                                                                    className="flex gap-2 px-3 pb-0 items-center hover:text-indigo-600 hover:hover:text-indigo-400"
                                                                                                >
                                                                                                    <CloseCircleIcon />
                                                                                                    <h5 className="text-sm font-normal">
                                                                                                        Remove
                                                                                                        Event
                                                                                                    </h5>
                                                                                                </a>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                )}
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>
                                            <hr />

                                            {/* Table pagination  */}
                                            <div className="flex items-center justify-between py-4 px-4 z-10">
                                                {/* Showing entries component */}
                                                <ShowingEntries
                                                    meta={events.meta}
                                                />

                                                {/* pagination component */}
                                                <Pagination
                                                    links={events.meta.links}
                                                />
                                            </div>
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
