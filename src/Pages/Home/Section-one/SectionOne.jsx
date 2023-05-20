import img from '../../../assets/image/photo-1659652756270-b9f0c1cc0095.jpeg'

const SectionOne = () => {
  return (
    <div className='mb-5'>
      <h1 className='text-center text-2xl font-serif font-extrabold mt-5'>You Will Love This.</h1>
      <p className='text-center text-base font-medium'>Our Motto Is To Provide Good Toys</p>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img className='card-image' src={img} alt="Album" /></figure>
        <div className="card-body">
          <h2 className="card-title text-5xl font-extrabold text-teal-200">Available Right Now!</h2>
          <p className='text-lg font-bold'>Click here to see the latest status.</p>
          <div className="indicator w-20">
            <span className="indicator-item badge badge-secondary">99+</span>
            <button className="btn">inbox</button>
          </div>
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