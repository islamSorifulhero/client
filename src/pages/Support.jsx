const Support = () => {
    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
                Help & Support
            </h1>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-green-700 mb-3">
                        Frequently Asked Questions
                    </h2>
                    <ul className="space-y-2 text-gray-700">
                        <li>✔ How to report an issue?</li>
                        <li>✔ How to make a contribution?</li>
                        <li>✔ How to track my reports?</li>
                        <li>✔ How to download contribution report?</li>
                    </ul>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-green-700 mb-3">
                        Contact Support
                    </h2>
                    <p className="text-gray-700 mb-2">
                        📧 Email: support@cleancommunity.com
                    </p>
                    <p className="text-gray-700 mb-2">
                        📞 Phone: +880 1XXX-XXXXXX
                    </p>
                    <p className="text-gray-700">
                        🕘 Support Hours: 9 AM – 6 PM (Sun–Thu)
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Support;
