export default function ShowingEntries({ meta = {} }) {
    return (
        <>
            <p className="text-sm">
                Showing {meta.from} to {meta.to} of {meta.total} entries
            </p>
        </>
    );
}
