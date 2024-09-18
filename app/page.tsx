import Link from "next/link";

export default function page() {
    return (
        <>
            <Link href="/dashboard">
                <h1 className="m-20 p-3 border-2 rounded ">Login</h1>
            </Link>
        </>
    );
}
