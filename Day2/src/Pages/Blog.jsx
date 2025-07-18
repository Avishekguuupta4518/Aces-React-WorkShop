function Blog() {
  return (
    <div>
      <h1>This is Single Blog Page</h1>

      <div className="max-w-2xl bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden m-4">
        <img
          className="mt-2 p-2 bg-white rounded-md border border-gray-100 shadow-sm object-cover"
          src="https://th.bing.com/th/id/R.edf92bf24caa1e137c7e39cc82f73825?rik=YJvGR6VNyMu7dg&riu=http%3a%2f%2fwww.bandt.com.au%2finformation%2fuploads%2f2015%2f09%2fair-jordans.jpg&ehk=8RaYHimg4vAmBotND0bHt2aCsP8dbdABB7alRa8qIw8%3d&risl=&pid=ImgRaw&r=0"
          alt="Product Image"
        />

        <div className="p-4 bg-white">
          <h2 className="text-lg font-semibold mb-2">Jordon</h2>
          <p className="text-green-600 font-bold text-xl">$100</p>
        </div>
      </div>
    </div>
  );
}

export default Blog;
