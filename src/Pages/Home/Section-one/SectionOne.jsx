import img from '../../../assets/image/photo-1659652756270-b9f0c1cc0095.jpeg'

const SectionOne = () => {
    return (
        <div>
            <h1 className='text-center text-lg font-serif font-extrabold text-white mt-5'>You Will Love This.</h1>
            <p className='text-center text-base font-medium'>Our Motto Is To Provide Good Toys</p>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='card-image' src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-lg font-extrabold">Available Right Now!</h2>
                    <p className='text-sm font-bold'>Click here to see the latest status.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Toy Me</button>
                    </div>
                </div>
            </div>
            <style>
        {`
          .card {
            width: 80%;
            margin: 0 auto;
          }
          .card-image {
            width: 100%;
            max-width: 400px;
            height: auto;
            display: block;
            margin: 0 auto;
          }
        `}
      </style>

        </div>
    );
};

export default SectionOne;