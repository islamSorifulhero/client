const Blog = () => {
    const blogs = [
        {
            title: "Why Community Cleanliness Matters",
            date: "Jan 10, 2026",
            desc: "Clean communities lead to healthier lives, safer environments, and stronger social bonds.",
        },
        {
            title: "How You Can Report Local Issues",
            date: "Jan 12, 2026",
            desc: "Learn how to report garbage, road damage, and public issues using our platform.",
        },
        {
            title: "Transparency Through Public Contributions",
            date: "Jan 15, 2026",
            desc: "See how community donations help solve real problems transparently.",
        },
    ];

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
                Community Blog
            </h1>

            <div className="grid md:grid-cols-3 gap-6">
                {blogs.map((blog, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition"
                    >
                        <h2 className="text-xl font-semibold text-green-700 mb-2">
                            {blog.title}
                        </h2>
                        <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
                        <p className="text-gray-700">{blog.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
