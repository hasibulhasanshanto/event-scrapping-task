import { Link } from "@inertiajs/react";

export default function Pagination({ links = [] }) {
    return (
        <nav>
            <ul className="inline-flex -space-x-px text-base h-10">
                {links.map((link, index) => (
                    <li key={index}>
                        <Link
                            href={link.url ?? link.url}
                            className={
                                "flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700" +
                                (link.active
                                    ? " !text-gray-50 !bg-gray-900"
                                    : "") +
                                (!link.url ? " cursor-not-allowed" : "")
                            }
                            dangerouslySetInnerHTML={{
                                __html: link.label,
                            }}
                            disabled={!link.url ? "disabled" : ""}
                        ></Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
