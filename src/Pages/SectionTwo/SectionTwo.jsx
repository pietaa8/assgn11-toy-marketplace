

const SectionTwo = () => {
    return (
        <div className="hero min-h-screen mt-5" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1604882846805-a6813013c2b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1137&q=80")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-white">We Sell Best Product In The World</h1>
                    <p className="mb-5 font-bold">Make Play Time A Blast With Our Finest Product</p>
                    <button className="btn btn-active btn-accent">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default SectionTwo;