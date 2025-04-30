import Link from 'next/link';

const Sidebar = () => {
    return (
        <div className="w-full h-10 bg-black sticky top-0">
            <div className="container mx-auto px-4 h-full">
                <div className="flex justify-between items-center h-full">
                    <ul className="hidden md:flex gap-x-6 text-white">
                        <li>
                            <Link href="/admin/login">
                                <p>Login</p>
                            </Link>
                            <Link href="/admin/registration">
                                <p>Registration</p>
                            </Link>
                            <Link href="/admin/edit">
                                <p>Control Panel</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;