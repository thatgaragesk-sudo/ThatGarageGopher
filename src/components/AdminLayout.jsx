import React from "react";
import { Link } from "react-router-dom";


export default function AdminLayout({ children }) {
return (
<div className="flex min-h-screen">
<aside className="w-64 bg-black text-white p-6 space-y-4">
<h2 className="text-2xl font-bold mb-6">TG Admin</h2>
<nav className="space-y-2">
<Link to="/admin" className="block hover:opacity-75">Dashboard</Link>
<Link to="/admin/email" className="block hover:opacity-75">Email Builder</Link>
<Link to="/admin/content" className="block hover:opacity-75">Content Calendar</Link>
<Link to="/admin/campaigns" className="block hover:opacity-75">Campaign Templates</Link>
<Link to="/admin/social" className="block hover:opacity-75">Social Generator</Link>
</nav>
</aside>
<main className="flex-1 p-8 bg-gray-100">{children}</main>
</div>
);
}
