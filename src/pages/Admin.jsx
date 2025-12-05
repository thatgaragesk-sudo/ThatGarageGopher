import React from 'react';


export default function Admin() {
return (
<div className="min-h-screen bg-gray-100 p-8">
<h1 className="text-3xl font-bold mb-6">That Garage Gopher Admin</h1>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="bg-white p-6 rounded-xl shadow">
<h2 className="text-xl font-semibold mb-2">Marketing Automations</h2>
<ul className="list-disc pl-6">
<li>Email sequence generator</li>
<li>Weekly content planner</li>
<li>Social post generator</li>
<li>Landing page copy builder</li>
</ul>
</div>
<div className="bg-white p-6 rounded-xl shadow">
<h2 className="text-xl font-semibold mb-2">Community Ops</h2>
<ul className="list-disc pl-6">
<li>Member onboarding scripts</li>
<li>Trivia leaderboard controls</li>
<li>Announcement templates</li>
</ul>
</div>
</div>
</div>
);
}
