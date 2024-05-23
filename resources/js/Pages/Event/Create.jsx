import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import SelectOption from "@/Components/SelectOption";
import Checkbox from "@/Components/Checkbox";
import PrimaryButton from "@/Components/PrimaryButton";
import NavLink from "@/Components/NavLink";

export default function EventCreate({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        url: "",
        country: "",
        document: "",
        source_type: "",
        reference_selector: "",
        horizon_scanning: true,
        source_container: "",
        source_link: "",
        source_title: "",
        source_description: "",
        source_date: "",
        source_remove_text_from_date: "",
        source_date_format: "",
        document_title: "",
        document_description: "",
        document_date: "",
        document_remove_text_from_date: "",
        document_date_format: "",
    });

    const eventCreateHandler = (e) => {
        e.preventDefault();
        console.log("Event Created");

        post(route('events.store'));
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Event Create
                </h2>
            }
        >
            <Head title="Event Create" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <form onSubmit={eventCreateHandler}>
                            <div className="border border-gray-300 rounded-md p-6 m-5">
                                <div>
                                    <h3 className="text-md font-medium text-gray-700 pb-5">
                                        Add Source
                                    </h3>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="col-span-1">
                                            <InputLabel
                                                htmlFor="name"
                                                value="Name"
                                            />

                                            <TextInput
                                                id="name"
                                                type="text"
                                                name="name"
                                                value={data.name}
                                                className="mt-1 block w-full"
                                                autoComplete="name"
                                                placeholder="Enter name"
                                                isFocused={true}
                                                onChange={(e) =>
                                                    setData(
                                                        "name",
                                                        e.target.value
                                                    )
                                                }
                                            />

                                            <InputError
                                                message={errors.name}
                                                className="mt-2"
                                            />
                                        </div>
                                        <div className="col-span-1">
                                            <InputLabel
                                                htmlFor="url"
                                                value="URL"
                                            />

                                            <TextInput
                                                id="url"
                                                type="text"
                                                name="url"
                                                value={data.url}
                                                className="mt-1 block w-full"
                                                autoComplete="url"
                                                placeholder="Enter URL"
                                                isFocused={true}
                                                onChange={(e) =>
                                                    setData(
                                                        "url",
                                                        e.target.value
                                                    )
                                                }
                                            />

                                            <InputError
                                                message={errors.url}
                                                className="mt-2"
                                            />
                                        </div>
                                        <div className="col-span-1">
                                            <InputLabel
                                                htmlFor="country"
                                                value="Country"
                                            />
                                            <SelectOption
                                                options={[
                                                    "Bangladesh",
                                                    "Albania",
                                                    "Canada",
                                                    "United States",
                                                    "United Kingdom",
                                                ]}
                                                selectLabel={"Select Country"}
                                                id="country"
                                                value={data.country}
                                                className="mt-1 block w-full"
                                                onChange={(e) =>
                                                    setData(
                                                        "country",
                                                        e.target.value
                                                    )
                                                }
                                            />

                                            <InputError
                                                message={errors.country}
                                                className="mt-2"
                                            />
                                        </div>
                                        <div className="col-span-1">
                                            <InputLabel
                                                htmlFor="document"
                                                value="Document"
                                            />

                                            <SelectOption
                                                options={[
                                                    "Consultation",
                                                    "Speech",
                                                    "Media Release",
                                                    "Unknown",
                                                ]}
                                                selectLabel={"Select Document"}
                                                id="document"
                                                value={data.document}
                                                className="mt-1 block w-full"
                                                onChange={(e) =>
                                                    setData(
                                                        "document",
                                                        e.target.value
                                                    )
                                                }
                                            />

                                            <InputError
                                                message={errors.document}
                                                className="mt-2"
                                            />
                                        </div>
                                        <div className="col-span-1">
                                            <InputLabel
                                                htmlFor="source_type"
                                                value="Source Type"
                                            />

                                            <SelectOption
                                                options={[
                                                    "Web Scraping",
                                                    "Query",
                                                    "Unknown",
                                                ]}
                                                selectLabel={
                                                    "Select Source Type"
                                                }
                                                id="source_type"
                                                value={data.source_type}
                                                className="mt-1 block w-full"
                                                onChange={(e) =>
                                                    setData(
                                                        "source_type",
                                                        e.target.value
                                                    )
                                                }
                                            />

                                            <InputError
                                                message={errors.source_type}
                                                className="mt-2"
                                            />
                                        </div>
                                        <div className="col-span-1">
                                            <InputLabel
                                                htmlFor="reference_selector"
                                                value="Reference Selector"
                                            />

                                            <TextInput
                                                id="reference_selector"
                                                type="text"
                                                name="reference_selector"
                                                value={data.reference_selector}
                                                className="mt-1 block w-full"
                                                autoComplete="reference_selector"
                                                placeholder="Enter reference selector"
                                                isFocused={true}
                                                onChange={(e) =>
                                                    setData(
                                                        "reference_selector",
                                                        e.target.value
                                                    )
                                                }
                                            />

                                            <InputError
                                                message={
                                                    errors.reference_selector
                                                }
                                                className="mt-2"
                                            />
                                        </div>

                                        <div className="col-span-1">
                                            <InputLabel
                                                htmlFor="horizon_scanning"
                                                value="Horizon Scanning"
                                            />
                                            <Checkbox
                                                name="horizon_scanning"
                                                id={`horizon_scanning`}
                                                checked={data.horizon_scanning}
                                                className="relative w-[35px] h-[18px] bg-gray-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-gray-900 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-gray-900 checked:border-gray-900 focus:checked:border-gray-900 before:inline-block before:size-4 before:bg-white checked:before:bg-gray-400 before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 mx-1 mt-2"
                                                onChange={(e) =>
                                                    setData(
                                                        "horizon_scanning",
                                                        e.target.checked
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="border border-gray-300 bg-gray-50 rounded-md p-6 mt-5">
                                    <div>
                                        <h3 className="text-md font-medium text-gray-700 pb-5">
                                            Source Selectors
                                        </h3>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="col-span-1">
                                                <InputLabel
                                                    htmlFor="source_container"
                                                    value="Source Container"
                                                />

                                                <TextInput
                                                    id="source_container"
                                                    type="text"
                                                    name="source_container"
                                                    value={
                                                        data.source_container
                                                    }
                                                    className="mt-1 block w-full"
                                                    autoComplete="source_container"
                                                    placeholder="Enter source container"
                                                    isFocused={true}
                                                    onChange={(e) =>
                                                        setData(
                                                            "source_container",
                                                            e.target.value
                                                        )
                                                    }
                                                />

                                                <InputError
                                                    message={
                                                        errors.source_container
                                                    }
                                                    className="mt-2"
                                                />
                                            </div>
                                            <div className="col-span-1">
                                                <InputLabel
                                                    htmlFor="source_link"
                                                    value="Link"
                                                />

                                                <TextInput
                                                    id="source_link"
                                                    type="text"
                                                    name="source_link"
                                                    value={data.source_link}
                                                    className="mt-1 block w-full"
                                                    autoComplete="source_link"
                                                    placeholder="Enter link"
                                                    isFocused={true}
                                                    onChange={(e) =>
                                                        setData(
                                                            "source_link",
                                                            e.target.value
                                                        )
                                                    }
                                                />

                                                <InputError
                                                    message={errors.source_link}
                                                    className="mt-2"
                                                />
                                            </div>
                                            <div className="col-span-1">
                                                <InputLabel
                                                    htmlFor="source_title"
                                                    value="Title"
                                                />

                                                <TextInput
                                                    id="source_title"
                                                    type="text"
                                                    name="source_title"
                                                    value={data.source_title}
                                                    className="mt-1 block w-full"
                                                    autoComplete="source_title"
                                                    placeholder="Enter source title"
                                                    isFocused={true}
                                                    onChange={(e) =>
                                                        setData(
                                                            "source_title",
                                                            e.target.value
                                                        )
                                                    }
                                                />

                                                <InputError
                                                    message={
                                                        errors.source_title
                                                    }
                                                    className="mt-2"
                                                />
                                            </div>
                                            <div className="col-span-1">
                                                <InputLabel
                                                    htmlFor="source_description"
                                                    value="Description"
                                                />

                                                <TextInput
                                                    id="source_description"
                                                    type="text"
                                                    name="source_description"
                                                    value={
                                                        data.source_description
                                                    }
                                                    className="mt-1 block w-full"
                                                    autoComplete="source_description"
                                                    placeholder="Enter source description"
                                                    isFocused={true}
                                                    onChange={(e) =>
                                                        setData(
                                                            "source_description",
                                                            e.target.value
                                                        )
                                                    }
                                                />

                                                <InputError
                                                    message={
                                                        errors.source_description
                                                    }
                                                    className="mt-2"
                                                />
                                            </div>
                                            <div className="col-span-1">
                                                <InputLabel
                                                    htmlFor="source_date"
                                                    value="Date"
                                                />

                                                <TextInput
                                                    id="source_date"
                                                    type="text"
                                                    name="source_date"
                                                    value={data.source_date}
                                                    className="mt-1 block w-full"
                                                    autoComplete="source_date"
                                                    placeholder="Enter source date"
                                                    isFocused={true}
                                                    onChange={(e) =>
                                                        setData(
                                                            "source_date",
                                                            e.target.value
                                                        )
                                                    }
                                                />

                                                <InputError
                                                    message={errors.source_date}
                                                    className="mt-2"
                                                />
                                            </div>
                                            <div className="col-span-1">
                                                <InputLabel
                                                    htmlFor="source_remove_text_from_date"
                                                    value="Remove Text From Date"
                                                />

                                                <TextInput
                                                    id="source_remove_text_from_date"
                                                    type="text"
                                                    name="source_remove_text_from_date"
                                                    value={
                                                        data.source_remove_text_from_date
                                                    }
                                                    className="mt-1 block w-full"
                                                    autoComplete="source_remove_text_from_date"
                                                    placeholder="Enter remove text from date"
                                                    isFocused={true}
                                                    onChange={(e) =>
                                                        setData(
                                                            "source_remove_text_from_date",
                                                            e.target.value
                                                        )
                                                    }
                                                />

                                                <InputError
                                                    message={
                                                        errors.source_remove_text_from_date
                                                    }
                                                    className="mt-2"
                                                />
                                            </div>
                                            <div className="col-span-1">
                                                <InputLabel
                                                    htmlFor="source_date_format"
                                                    value="Date Format"
                                                />

                                                <TextInput
                                                    id="source_date_format"
                                                    type="text"
                                                    name="source_date_format"
                                                    value={
                                                        data.source_date_format
                                                    }
                                                    className="mt-1 block w-full"
                                                    autoComplete="source_date_format"
                                                    placeholder="Enter source date format"
                                                    isFocused={true}
                                                    onChange={(e) =>
                                                        setData(
                                                            "source_date_format",
                                                            e.target.value
                                                        )
                                                    }
                                                />

                                                <InputError
                                                    message={
                                                        errors.source_date_format
                                                    }
                                                    className="mt-2"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="border border-gray-300 bg-gray-50 rounded-md p-6 mt-5">
                                    <div>
                                        <h3 className="text-md font-medium text-gray-700 pb-5">
                                            Document Selectors
                                        </h3>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="col-span-1">
                                                <InputLabel
                                                    htmlFor="document_title"
                                                    value="Title"
                                                />

                                                <TextInput
                                                    id="document_title"
                                                    type="text"
                                                    name="document_title"
                                                    value={data.document_title}
                                                    className="mt-1 block w-full"
                                                    autoComplete="document_title"
                                                    placeholder="Enter document title"
                                                    isFocused={true}
                                                    onChange={(e) =>
                                                        setData(
                                                            "document_title",
                                                            e.target.value
                                                        )
                                                    }
                                                />

                                                <InputError
                                                    message={
                                                        errors.document_title
                                                    }
                                                    className="mt-2"
                                                />
                                            </div>
                                            <div className="col-span-1">
                                                <InputLabel
                                                    htmlFor="document_description"
                                                    value="Description"
                                                />

                                                <TextInput
                                                    id="document_description"
                                                    type="text"
                                                    name="document_description"
                                                    value={
                                                        data.document_description
                                                    }
                                                    className="mt-1 block w-full"
                                                    autoComplete="document_description"
                                                    placeholder="Enter document description"
                                                    isFocused={true}
                                                    onChange={(e) =>
                                                        setData(
                                                            "document_description",
                                                            e.target.value
                                                        )
                                                    }
                                                />

                                                <InputError
                                                    message={
                                                        errors.document_description
                                                    }
                                                    className="mt-2"
                                                />
                                            </div>
                                            <div className="col-span-1">
                                                <InputLabel
                                                    htmlFor="document_date"
                                                    value="Date"
                                                />

                                                <TextInput
                                                    id="document_date"
                                                    type="text"
                                                    name="document_date"
                                                    value={data.document_date}
                                                    className="mt-1 block w-full"
                                                    autoComplete="document_date"
                                                    placeholder="Enter document date"
                                                    isFocused={true}
                                                    onChange={(e) =>
                                                        setData(
                                                            "document_date",
                                                            e.target.value
                                                        )
                                                    }
                                                />

                                                <InputError
                                                    message={
                                                        errors.document_date
                                                    }
                                                    className="mt-2"
                                                />
                                            </div>
                                            <div className="col-span-1">
                                                <InputLabel
                                                    htmlFor="document_remove_text_from_date"
                                                    value="Document Remove Text From Date"
                                                />

                                                <TextInput
                                                    id="document_remove_text_from_date"
                                                    type="text"
                                                    name="document_remove_text_from_date"
                                                    value={
                                                        data.document_remove_text_from_date
                                                    }
                                                    className="mt-1 block w-full"
                                                    autoComplete="document_remove_text_from_date"
                                                    placeholder="Enter remove text from date"
                                                    isFocused={true}
                                                    onChange={(e) =>
                                                        setData(
                                                            "document_remove_text_from_date",
                                                            e.target.value
                                                        )
                                                    }
                                                />

                                                <InputError
                                                    message={
                                                        errors.document_remove_text_from_date
                                                    }
                                                    className="mt-2"
                                                />
                                            </div>
                                            <div className="col-span-1">
                                                <InputLabel
                                                    htmlFor="document_date_format"
                                                    value="Date Format"
                                                />

                                                <TextInput
                                                    id="document_date_format"
                                                    type="text"
                                                    name="document_date_format"
                                                    value={
                                                        data.document_date_format
                                                    }
                                                    className="mt-1 block w-full"
                                                    autoComplete="document_date_format"
                                                    placeholder="Enter date format"
                                                    isFocused={true}
                                                    onChange={(e) =>
                                                        setData(
                                                            "document_date_format",
                                                            e.target.value
                                                        )
                                                    }
                                                />

                                                <InputError
                                                    message={
                                                        errors.document_date_format
                                                    }
                                                    className="mt-2"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr />
                            <div className="flex bg-gray-50 items-center justify-between p-4">
                                <NavLink
                                    href={route("events.index")}
                                    className="px-4 !py-2 text-sm font-medium text-gray-900 bg-gray-200 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-0 rounded-md"
                                >
                                    Cancel
                                </NavLink>

                                <PrimaryButton
                                    className="ms-4"
                                    disabled={processing}
                                >
                                    Save
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
