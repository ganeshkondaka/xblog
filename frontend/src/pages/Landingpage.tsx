export const Landingpage = () => {
    return (
        <div>
            <main className="min-h-screen bg-white">
                <div className="max-w-6xl mx-auto px-4 py-16">
                    <div className="text-center space-y-8">
                        {/* Hero Section */}
                        <div className="space-y-4">
                            <h1 className="text-6xl font-bold text-gray-800">
                                Welcome to{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
                                    XBlog
                                </span>
                            </h1>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Your space to create, read, and update blogs. Share your stories with the world in a beautiful and engaging way.
                            </p>
                            <div className="flex justify-center gap-4 pt-6">
                                <a
                                    href="/postblog"
                                    className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300"
                                >
                                    Start Writing
                                    👉
                                </a>
                                <a
                                    href="/blogs"
                                    className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-6 py-3 rounded-lg font-medium hover:bg-green-100 transition-all duration-300"
                                >
                                    Browse Blogs
                                </a>
                            </div>
                        </div>

                        {/* Feature Section */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
                            {[
                                {
                                 
                                    title: 'Create',
                                    description: 'Write and publish your stories with our intuitive editor',
                                    color: 'text-blue-500',
                                    bgColor: 'bg-blue-50'
                                },
                                {
                                
                                    title: 'Read',
                                    description: 'Discover amazing content from writers around the world',
                                    color: 'text-green-500',
                                    bgColor: 'bg-green-50'
                                },
                                {
                                   
                                    title: 'Update',
                                    description: 'Keep your content fresh with easy updates and revisions',
                                    color: 'text-gray-500',
                                    bgColor: 'bg-gray-50'
                                }
                            ].map((feature, index) => (
                                <div
                                    key={index}
                                    className="p-6 rounded-xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg bg-white"
                                >
                                    <div className={`${feature.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                                      
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Preview Section */}
                        <div className="mt-20">
                            <div className="relative rounded-xl overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent"></div>
                                <img
                                    src="../blogman.jpeg"
                                    alt="Blog Platform Preview"
                                    className="w-full h-[500px] object-cover"
                                />
                            </div>
                        </div>

                        {/* Stats Section */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
                            {[
                                { number: '10K+', label: 'Active Writers (in dreams)' },
                                { number: '50K+', label: 'Published Blogs (in dreams)' },
                                { number: '100K+', label: 'Monthly Readers (in dreams)  ' }
                            ].map((stat, index) => (
                                <div key={index} className="p-6 bg-gray-50 rounded-lg">
                                    <div className="text-3xl font-bold text-gray-800 mb-1">{stat.number}</div>
                                    <div className="text-gray-600">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Section */}
                        <div className="mt-20 bg-gradient-to-r from-blue-50 to-green-50 p-12 rounded-2xl">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">
                                Ready to share your story?
                            </h2>
                            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                                Join our community of writers and readers. Start creating your blog today.
                            </p>
                            <a
                                href="/signup"
                                className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                            >
                                Get Started
                                👉
                            </a>
                        </div>
                    </div>
                </div>
            </main>


        </div>
    )
}
