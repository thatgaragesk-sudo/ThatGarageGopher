import React, { useState } from "react";


export default function AdminAuthGate({ children }) {
const [pass, setPass] = useState("");
const [ok, setOk] = useState(false);


const check = () => {
if (pass === import.meta.env.VITE_ADMIN_KEY) setOk(true);
};


if (ok) return children;


return (
<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
<div className="bg-white shadow p-6 rounded-xl w-full max-w-sm">
<h2 className="text-xl font-semibold mb-4">Admin Access</h2>
<input
type="password"
value={pass}
onChange={(e) => setPass(e.target.value)}
className="border rounded w-full p-2 mb-4"
placeholder="Enter admin key"
/>
<button onClick={check} className="bg-black text-white w-full p-2 rounded-md">
Enter
</button>
</div>
</div>
);
}
