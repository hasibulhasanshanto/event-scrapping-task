import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router} from "@inertiajs/react";
import SearchIcon from "@/Components/Icons/Search";
import Pagination from "@/Components/Common/Pagination";
import ShowingEntries from "@/Components/Common/ShowingEntries";

export default function user({ auth, users, queryParams = null }) {
    queryParams = queryParams || {};

    const searchFieldChanged = (search, value) => {
        if (value) {
            queryParams[search] = value;
        } else {
            delete queryParams[search];
        }
        queryParams["page"] = 1;
        router.get(route('users.index'), queryParams);
    };

    const onKeyPress = (search, e) => {
        if (e.key !== "Enter") return;
        searchFieldChanged(search, e.target.value);
    };

    const checkAll = (value) => {
        let checkboxes = document.getElementsByClassName("table-checkbox");
        for (let i = 0, n = checkboxes.length; i < n; i++) {
            checkboxes[i].checked = value;
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Users Lists
                </h2>
            }
        >
            <Head title="Users" />

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
                                                    className="py-2.5 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-0 focus:ring-gray-900 disabled:opacity-50 disabled:pointer-users-none"
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
                                                <div className="absolute inset-y-0 start-0 flex items-center pointer-users-none ps-3">
                                                    <SearchIcon />
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
                                                                Email
                                                            </th>
                                                            <th
                                                                scope="col"
                                                                className="px-6 py-3 text-start text-xs font-medium text-gray-500"
                                                            >
                                                                Role
                                                            </th>
                                                            <th
                                                                scope="col"
                                                                className="px-6 py-3 text-start text-xs font-medium text-gray-500"
                                                            >
                                                                Status
                                                            </th>
                                                            <th
                                                                scope="col"
                                                                className="px-6 py-3 text-start text-xs font-medium text-gray-500"
                                                            >
                                                                Last Login
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                                        {users.data.map(
                                                            (user) => (
                                                                <tr
                                                                    key={
                                                                        user.id
                                                                    }
                                                                >
                                                                    <td className="py-3 ps-3">
                                                                        <div className="flex items-center h-5">
                                                                            <input
                                                                                id={`table-checkbox-${user.id}`}
                                                                                type="checkbox"
                                                                                className="table-checkbox border-gray-200 rounded text-gray-900 focus:ring-gray-900"
                                                                            />
                                                                            <label
                                                                                htmlFor={`table-checkbox-${user.id}`}
                                                                                className="sr-only"
                                                                            >
                                                                                Checkbox
                                                                            </label>
                                                                        </div>
                                                                    </td>
                                                                    <td className="px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                                                                        {
                                                                            user.name
                                                                        }
                                                                    </td>
                                                                    <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">

                                                                        {
                                                                            user.email
                                                                        }
                                                                    </td>
                                                                    <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                                        <span class={"text-xs font-medium me-2 px-2.5 py-0.5 rounded " + (user.role === 'author' ? 'bg-green-100 text-green-800':'bg-yellow-100 text-yellow-800')}>
                                                                            {user.role}
                                                                        </span>
                                                                    </td>
                                                                    <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                                    <span class={"text-xs font-medium me-2 px-2.5 py-0.5 rounded " + (user.status === 1 ? 'bg-green-100 text-green-800':'bg-red-100 text-red-800')}>
                                                                            {user.status ? 'Active' : 'Disabled'}
                                                                        </span>
                                                                    </td>
                                                                    <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                                        {
                                                                            user.last_login_at
                                                                        }
                                                                    </td>
                                                                </tr>
                                                            )
                                                        )}
                                                        {users.data.length === 0 && <tr className="w-full">
                                                            <td className="flex justify-center px-3 py-3 text-sm font-medium text-gray-800">No data found!</td>
                                                        </tr>}
                                                    </tbody>
                                                </table>
                                            </div>
                                            <hr />

                                            {/* Table pagination  */}
                                            <div className="flex items-center justify-between py-4 px-4 z-10">
                                                {/* Showing entries component */}
                                                <ShowingEntries
                                                    meta={users.meta}
                                                />

                                                {/* pagination component */}
                                                <Pagination
                                                    links={users.meta.links}
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
